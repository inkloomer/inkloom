import {useEffect, useRef, useState} from 'react';
import type {ComponentType, KeyboardEvent, ReactNode} from 'react';
import {Player, type PlayerRef} from '@remotion/player';
import {ChevronLeft, ChevronRight, Columns2, Gauge, Grid3X3, MonitorPlay, Repeat2} from 'lucide-react';
import {
  DEFAULT_PLAYBACK_PREFERENCES,
  PLAYBACK_PREFERENCE_CHANGE_EVENT,
  PLAYBACK_PREFERENCE_STORAGE_KEY,
  PLAYBACK_SPEEDS,
  configuredPlaybackSpeed,
  inheritedPlaybackSpeed,
  parsePlaybackPreferences,
  playbackScopeKeysFromPathname,
  resolvedPlaybackSpeed,
  type PlaybackPreferences,
  type PlaybackScope,
  type PlaybackSpeed,
  withPlaybackPreference,
} from './playback-preferences';
import {sceneIndexFromSearch, urlWithScene} from './scene-location';
import './RemotionDeck.css';

export interface RemotionScene {
  readonly id?: string;
  readonly number: string;
  readonly title: string;
  readonly start: number;
  readonly duration: number;
  /** Frames omitted from the webpage preview so it freezes before an authored exit. Use 0 when none exists. */
  readonly previewEndTrimFrames: number;
}

type PreviewMode = 'single' | 'row' | 'matrix';

interface Props {
  readonly component: ComponentType<Record<string, never>>;
  readonly scenes: readonly RemotionScene[];
  readonly durationInFrames: number;
  readonly fps: number;
  readonly compositionWidth?: number;
  readonly compositionHeight?: number;
  readonly title?: string;
  readonly sceneQueryParameter?: string;
}

const frameEnd = (scene: RemotionScene) => {
  const finalFrame = scene.start + scene.duration - 1;
  return Math.max(scene.start + 1, finalFrame - scene.previewEndTrimFrames);
};

const interactivePlayerProps = {
  controls: true,
  showVolumeControls: true,
  allowFullscreen: true,
  clickToPlay: true,
  doubleClickToFullscreen: true,
  spaceKeyToPlayOrPause: true,
  moveToBeginningWhenEnded: false,
  initiallyShowControls: true,
  alwaysShowControls: false,
  hideControlsWhenPointerDoesntMove: true,
  acknowledgeRemotionLicense: true,
  className: 'remotion-deck__player',
  style: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 0,
  },
};

const ModeButton = ({
  active,
  label,
  mode,
  onClick,
  icon,
}: {
  readonly active: boolean;
  readonly label: string;
  readonly mode: PreviewMode;
  readonly onClick: (mode: PreviewMode) => void;
  readonly icon: ReactNode;
}) => (
  <button
    type="button"
    className="remotion-deck__mode"
    data-active={active ? 'true' : 'false'}
    aria-pressed={active}
    title={label}
    onClick={() => onClick(mode)}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export const RemotionDeck = ({
  component,
  scenes,
  durationInFrames,
  fps,
  compositionWidth = 1920,
  compositionHeight = 1080,
  title = 'Remotion 动画',
  sceneQueryParameter = 'scene',
}: Props) => {
  const [currentScene, setCurrentScene] = useState(() =>
    typeof window === 'undefined'
      ? 0
      : sceneIndexFromSearch(scenes, window.location.search, sceneQueryParameter),
  );
  const [mode, setMode] = useState<PreviewMode>('single');
  const [autoPage, setAutoPage] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [speedScope, setSpeedScope] = useState<PlaybackScope>('global');
  const [playbackPreferences, setPlaybackPreferences] = useState<PlaybackPreferences>(DEFAULT_PLAYBACK_PREFERENCES);
  const playerRef = useRef<PlayerRef>(null);
  const playbackScopeKeys = typeof window === 'undefined'
    ? {}
    : playbackScopeKeysFromPathname(window.location.pathname);
  const effectivePlaybackSpeed = resolvedPlaybackSpeed(playbackPreferences, playbackScopeKeys);
  const scopedPlaybackSpeed = configuredPlaybackSpeed(playbackPreferences, speedScope, playbackScopeKeys);
  const inheritedSpeed = speedScope === 'global'
    ? undefined
    : inheritedPlaybackSpeed(playbackPreferences, speedScope, playbackScopeKeys);

  const persistPlaybackPreferences = (preferences: PlaybackPreferences) => {
    window.localStorage.setItem(PLAYBACK_PREFERENCE_STORAGE_KEY, JSON.stringify(preferences));
    window.dispatchEvent(new Event(PLAYBACK_PREFERENCE_CHANGE_EVENT));
  };

  const updatePlaybackPreference = (speed: PlaybackSpeed | undefined) => {
    const nextPreferences = withPlaybackPreference(
      playbackPreferences,
      speedScope,
      playbackScopeKeys,
      speed,
    );
    setPlaybackPreferences(nextPreferences);
    persistPlaybackPreferences(nextPreferences);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const syncPlaybackPreferences = () => {
      setPlaybackPreferences(parsePlaybackPreferences(window.localStorage.getItem(PLAYBACK_PREFERENCE_STORAGE_KEY)));
    };
    const syncFromAnotherTab = (event: StorageEvent) => {
      if (event.key === PLAYBACK_PREFERENCE_STORAGE_KEY) syncPlaybackPreferences();
    };

    syncPlaybackPreferences();
    window.addEventListener(PLAYBACK_PREFERENCE_CHANGE_EVENT, syncPlaybackPreferences);
    window.addEventListener('storage', syncFromAnotherTab);
    return () => {
      window.removeEventListener(PLAYBACK_PREFERENCE_CHANGE_EVENT, syncPlaybackPreferences);
      window.removeEventListener('storage', syncFromAnotherTab);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) setAutoPage(false);
  }, [reducedMotion]);

  const selectScene = (index: number, historyMode: 'push' | 'replace' | 'none' = 'push') => {
    if (scenes.length === 0) return;

    const selectedIndex = (index + scenes.length) % scenes.length;
    setCurrentScene(selectedIndex);

    if (historyMode === 'none' || typeof window === 'undefined') return;

    const nextUrl = urlWithScene(
      window.location.href,
      scenes[selectedIndex],
      sceneQueryParameter,
    );
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextUrl === currentUrl) return;

    if (historyMode === 'replace') {
      window.history.replaceState(window.history.state, '', nextUrl);
      return;
    }

    window.history.pushState(window.history.state, '', nextUrl);
  };

  const selectedScene = scenes[currentScene] ?? scenes[0] ?? {
    number: '00',
    title: 'Empty',
    start: 0,
    duration: 1,
    previewEndTrimFrames: 0,
  };
  const selectedEnd = frameEnd(selectedScene);
  const playerFrameStyle = {aspectRatio: `${compositionWidth} / ${compositionHeight}`};

  useEffect(() => {
    const player = playerRef.current;
    if (mode !== 'single' || !autoPage || !player) return;

    const advance = () => selectScene(currentScene + 1, 'replace');
    player.addEventListener('ended', advance);
    return () => player.removeEventListener('ended', advance);
  }, [autoPage, currentScene, mode, sceneQueryParameter, scenes]);

  useEffect(() => {
    const selectSceneFromLocation = () => {
      setCurrentScene(sceneIndexFromSearch(scenes, window.location.search, sceneQueryParameter));
    };

    selectSceneFromLocation();
    window.addEventListener('popstate', selectSceneFromLocation);
    return () => window.removeEventListener('popstate', selectSceneFromLocation);
  }, [sceneQueryParameter, scenes]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectScene(currentScene - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectScene(currentScene + 1);
    }
  };

  if (scenes.length === 0) {
    return <div className="remotion-deck remotion-deck__empty">没有可播放的场景。</div>;
  }

  return (
    <section
      className="remotion-deck"
      aria-label={title}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="remotion-deck__toolbar">
        <div className="remotion-deck__modes" role="group" aria-label="预览布局">
          <ModeButton active={mode === 'single'} label="单页" mode="single" onClick={setMode} icon={<MonitorPlay size={15} />} />
          <ModeButton active={mode === 'row'} label="并排" mode="row" onClick={setMode} icon={<Columns2 size={15} />} />
          <ModeButton active={mode === 'matrix'} label="矩阵" mode="matrix" onClick={setMode} icon={<Grid3X3 size={15} />} />
        </div>
        <label className="remotion-deck__auto">
          <input
            type="checkbox"
            checked={autoPage}
            disabled={reducedMotion || mode !== 'single'}
            onChange={(event) => setAutoPage(event.target.checked)}
          />
          <Repeat2 size={15} aria-hidden="true" />
          自动翻页
        </label>
        <label className="remotion-deck__speed">
          <Gauge size={15} aria-hidden="true" />
          <span>速度</span>
          <select value={speedScope} onChange={(event) => setSpeedScope(event.target.value as PlaybackScope)}>
            <option value="global">全局</option>
            {playbackScopeKeys.topic ? <option value="topic">本专题</option> : null}
            {playbackScopeKeys.page ? <option value="page">本页</option> : null}
          </select>
          <select
            value={scopedPlaybackSpeed === undefined ? 'inherit' : String(scopedPlaybackSpeed)}
            onChange={(event) => updatePlaybackPreference(
              event.target.value === 'inherit' ? undefined : Number(event.target.value) as PlaybackSpeed,
            )}
          >
            {speedScope !== 'global' ? <option value="inherit">继承 {inheritedSpeed}×</option> : null}
            {PLAYBACK_SPEEDS.map((speed) => <option key={speed} value={speed}>{speed}×</option>)}
          </select>
        </label>
        <span className="remotion-deck__status" aria-live="polite">
          {mode === 'single'
            ? autoPage
              ? `播放完进入下一页 · ${effectivePlaybackSpeed}×`
              : `播放结束停在稳定画面 · ${effectivePlaybackSpeed}×`
            : `全部页面播放结束停在稳定画面 · ${effectivePlaybackSpeed}×`}
        </span>
      </div>

      {mode === 'single' ? (
        <div className="remotion-deck__single">
          <header className="remotion-deck__scene-heading">
            <span>{selectedScene.number}</span>
            <strong>{selectedScene.title}</strong>
          </header>
          <div className="remotion-deck__player-frame" style={playerFrameStyle}>
            <Player
              {...interactivePlayerProps}
              key={`${selectedScene.number}-${autoPage ? 'auto' : 'once'}-${reducedMotion ? 'reduced' : 'motion'}`}
              ref={playerRef}
              component={component}
              durationInFrames={durationInFrames}
              fps={fps}
              compositionWidth={compositionWidth}
              compositionHeight={compositionHeight}
              inFrame={selectedScene.start}
              outFrame={selectedEnd}
              initialFrame={reducedMotion ? selectedEnd : selectedScene.start}
              autoPlay={!reducedMotion}
              loop={false}
              playbackRate={effectivePlaybackSpeed}
            />
          </div>
          <div className="remotion-deck__navigation">
            <button type="button" onClick={() => selectScene(currentScene - 1)} title="上一页">
              <ChevronLeft size={17} />
              <span>上一页</span>
            </button>
            <div className="remotion-deck__scene-strip" role="tablist" aria-label="动画页">
              {scenes.map((scene, index) => (
                <button
                  key={scene.number}
                  type="button"
                  role="tab"
                  aria-selected={index === currentScene}
                  data-active={index === currentScene ? 'true' : 'false'}
                  title={scene.title}
                  onClick={() => selectScene(index)}
                >
                  {scene.number}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => selectScene(currentScene + 1)} title="下一页">
              <span>下一页</span>
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      ) : (
        <div className="remotion-deck__multi" data-layout={mode}>
          {scenes.map((scene) => (
            <article className="remotion-deck__card" key={scene.number}>
              <header className="remotion-deck__card-heading">
                <span>{scene.number}</span>
                <strong>{scene.title}</strong>
              </header>
              <div className="remotion-deck__player-frame" style={playerFrameStyle}>
                <Player
                  {...interactivePlayerProps}
                  component={component}
                  durationInFrames={durationInFrames}
                  fps={fps}
                  compositionWidth={compositionWidth}
                  compositionHeight={compositionHeight}
                  inFrame={scene.start}
                  outFrame={frameEnd(scene)}
                  initialFrame={reducedMotion ? frameEnd(scene) : scene.start}
                  autoPlay={!reducedMotion}
                  loop={false}
                  playbackRate={effectivePlaybackSpeed}
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
