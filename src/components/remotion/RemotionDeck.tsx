import {useEffect, useMemo, useRef, useState} from 'react';
import type {ComponentType, KeyboardEvent, ReactNode} from 'react';
import {Player, type PlayerRef} from '@remotion/player';
import {
  ChevronLeft,
  ChevronRight,
  ClipboardCopy,
  Code2,
  Columns2,
  Copy,
  Gauge,
  Grid3X3,
  Image as ImageIcon,
  MonitorPlay,
  Pause,
  Play,
  Repeat2,
  RotateCcw,
  Video,
} from 'lucide-react';
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
import {withAnimationTypography} from '@/typography/animation-provider';
import type {AnimationTypographyMetadata} from '@/typography/animation-presets';
import {getAnimationTypographyConfiguration} from '@/typography/animation-registry';
import './RemotionDeck.css';

export interface RemotionScene {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly start: number;
  readonly duration: number;
  /** Frames omitted from the webpage preview so it freezes before an authored exit. Use 0 when none exists. */
  readonly previewEndTrimFrames: number;
}

type PreviewMode = 'single' | 'row' | 'matrix';

interface Props {
  readonly animationId: string;
  readonly animatedMediaFps?: number;
  readonly component: ComponentType<Record<string, never>>;
  readonly scenes: readonly RemotionScene[];
  readonly durationInFrames: number;
  readonly fps: number;
  readonly compositionWidth?: number;
  readonly compositionHeight?: number;
  readonly title?: string;
  readonly sceneQueryParameter?: string;
  readonly typography?: AnimationTypographyMetadata;
}

const ANIMATED_MEDIA_FORMATS = {
  avif: {
    directory: 'animation-avif',
    extension: 'avif',
    enabledInPlayer: true,
    label: 'AVIF 动图',
    mimeType: 'image/avif',
    tabLabel: 'AVIF',
  },
  webp: {
    directory: 'animation-webp',
    extension: 'webp',
    enabledInPlayer: false,
    label: 'WebP 1080p · quality42',
    mimeType: 'image/webp',
    tabLabel: 'WebP',
  },
} as const;

type AnimatedMediaFormat = keyof typeof ANIMATED_MEDIA_FORMATS;
type MediaMode = 'video' | AnimatedMediaFormat;

const MEDIA_MODE_STORAGE_KEY = 'inkloom-remotion-media-mode-v1';
const PRODUCTION_ORIGIN = 'https://inkloomer.github.io';
const BASE_URL = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const animatedMediaFormats = (Object.keys(ANIMATED_MEDIA_FORMATS) as AnimatedMediaFormat[])
  .filter((format) => ANIMATED_MEDIA_FORMATS[format].enabledInPlayer);
const isAnimatedMediaFormat = (value: string | null): value is AnimatedMediaFormat =>
  value !== null && animatedMediaFormats.includes(value as AnimatedMediaFormat);
const animatedMediaPath = (format: AnimatedMediaFormat, animationId: string, sceneId: string) => {
  const profile = ANIMATED_MEDIA_FORMATS[format];
  return `${BASE_URL}${profile.directory}/${encodeURIComponent(animationId)}/${encodeURIComponent(sceneId)}.${profile.extension}`;
};

const frameEnd = (scene: RemotionScene) => {
  const finalFrame = scene.start + scene.duration - 1;
  return Math.max(scene.start + 1, finalFrame - scene.previewEndTrimFrames);
};

const interactivePlayerProps = {
  showVolumeControls: true,
  allowFullscreen: true,
  clickToPlay: true,
  doubleClickToFullscreen: true,
  spaceKeyToPlayOrPause: true,
  moveToBeginningWhenEnded: false,
  initiallyShowControls: false,
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

type PlayerStatus = 'playing' | 'paused' | 'ended';

interface PlayerFrameProps {
  readonly component: ComponentType<Record<string, never>>;
  readonly durationInFrames: number;
  readonly fps: number;
  readonly compositionWidth: number;
  readonly compositionHeight: number;
  readonly inFrame: number;
  readonly outFrame: number;
  readonly initialFrame: number;
  readonly autoPlay: boolean;
  readonly loop: boolean;
  readonly playbackRate: number;
  readonly onEnded?: () => void;
}

const PlayerFrame = ({
  component,
  durationInFrames,
  fps,
  compositionWidth,
  compositionHeight,
  inFrame,
  outFrame,
  initialFrame,
  autoPlay,
  loop,
  playbackRate,
  onEnded,
}: PlayerFrameProps) => {
  const playerRef = useRef<PlayerRef>(null);
  const [status, setStatus] = useState<PlayerStatus>(() =>
    initialFrame >= outFrame ? 'ended' : autoPlay ? 'playing' : 'paused',
  );
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const onPlay = () => setStatus('playing');
    const onPause = () => setStatus('paused');
    const onSeek = ({detail}: {detail: {frame: number}}) => {
      if (detail.frame < outFrame) setStatus('paused');
    };
    const onPlayerEnded = () => {
      setStatus('ended');
      onEnded?.();
    };

    player.addEventListener('play', onPlay);
    player.addEventListener('pause', onPause);
    player.addEventListener('seeked', onSeek);
    player.addEventListener('ended', onPlayerEnded);
    return () => {
      player.removeEventListener('play', onPlay);
      player.removeEventListener('pause', onPause);
      player.removeEventListener('seeked', onSeek);
      player.removeEventListener('ended', onPlayerEnded);
    };
  }, [onEnded, outFrame]);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player) return;

    if (status === 'playing') {
      player.pause();
      return;
    }

    if (status === 'ended') player.seekTo(inFrame);
    player.play();
  };

  const buttonLabel = status === 'playing'
    ? '暂停当前页'
    : status === 'ended'
      ? '重播当前页'
      : '播放当前页';
  const ButtonIcon = status === 'playing' ? Pause : status === 'ended' ? RotateCcw : Play;

  return (
    <div
      className="remotion-deck__player-frame"
      style={{aspectRatio: `${compositionWidth} / ${compositionHeight}`}}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Player
        {...interactivePlayerProps}
        controls={hovered}
        ref={playerRef}
        component={component}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={compositionWidth}
        compositionHeight={compositionHeight}
        inFrame={inFrame}
        outFrame={outFrame}
        initialFrame={initialFrame}
        autoPlay={autoPlay}
        loop={loop}
        playbackRate={playbackRate}
      />
      <button
        type="button"
        className="remotion-deck__center-control"
        data-visible={hovered ? 'true' : 'false'}
        aria-label={buttonLabel}
        title={buttonLabel}
        onClick={(event) => {
          event.stopPropagation();
          togglePlayback();
        }}
      >
        <ButtonIcon size={28} strokeWidth={2.25} aria-hidden="true" />
      </button>
    </div>
  );
};

const AnimatedImageFrame = ({
  alt,
  compositionHeight,
  compositionWidth,
  src,
}: {
  readonly alt: string;
  readonly compositionHeight: number;
  readonly compositionWidth: number;
  readonly src: string;
}) => {
  const [reloadToken, setReloadToken] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    setReloadToken((token) => token + 1);
  }, [src]);

  return (
    <div
      className="remotion-deck__player-frame remotion-deck__animated-image-frame"
      style={{aspectRatio: `${compositionWidth} / ${compositionHeight}`}}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {failed ? (
        <div className="remotion-deck__animated-image-error" role="status">动图资源尚未发布。</div>
      ) : (
        <img
          key={`${src}-${reloadToken}`}
          src={src}
          alt={alt}
          width={compositionWidth}
          height={compositionHeight}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <button
        type="button"
        className="remotion-deck__center-control"
        data-visible={hovered ? 'true' : 'false'}
        aria-label="重播当前动图"
        title="重播当前动图"
        onClick={(event) => {
          event.stopPropagation();
          setFailed(false);
          setReloadToken((token) => token + 1);
        }}
      >
        <RotateCcw size={28} strokeWidth={2.25} aria-hidden="true" />
      </button>
    </div>
  );
};

export const RemotionDeck = ({
  animationId,
  animatedMediaFps,
  component,
  scenes,
  durationInFrames,
  fps,
  compositionWidth = 1920,
  compositionHeight = 1080,
  title = 'Remotion 动画',
  sceneQueryParameter = 'scene',
  typography,
}: Props) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [mediaMode, setMediaMode] = useState<MediaMode>('avif');
  const [copyFeedback, setCopyFeedback] = useState('');
  const [mode, setMode] = useState<PreviewMode>('single');
  const [autoPage, setAutoPage] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [speedScope, setSpeedScope] = useState<PlaybackScope>('global');
  const [playbackPreferences, setPlaybackPreferences] = useState<PlaybackPreferences>(DEFAULT_PLAYBACK_PREFERENCES);
  const [playbackScopeKeys, setPlaybackScopeKeys] = useState<ReturnType<typeof playbackScopeKeysFromPathname>>({});
  const effectivePlaybackSpeed = resolvedPlaybackSpeed(playbackPreferences, playbackScopeKeys);
  const scopedPlaybackSpeed = configuredPlaybackSpeed(playbackPreferences, speedScope, playbackScopeKeys);
  const inheritedSpeed = speedScope === 'global'
    ? undefined
    : inheritedPlaybackSpeed(playbackPreferences, speedScope, playbackScopeKeys);
  const typographyComponent = useMemo(
    () => {
      const configuration = getAnimationTypographyConfiguration(animationId);
      return withAnimationTypography(
        component,
        typography ? {...configuration, metadata: typography} : configuration,
      );
    },
    [animationId, component, typography],
  );

  const persistMediaMode = (nextMode: MediaMode) => {
    setMediaMode(nextMode);
    window.localStorage.setItem(MEDIA_MODE_STORAGE_KEY, nextMode);
  };

  const flashCopyFeedback = (message: string) => {
    setCopyFeedback(message);
    window.setTimeout(() => setCopyFeedback(''), 1800);
  };

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
    setPlaybackScopeKeys(playbackScopeKeysFromPathname(window.location.pathname));
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
    const syncMediaMode = () => {
      const savedMode = window.localStorage.getItem(MEDIA_MODE_STORAGE_KEY);
      if (savedMode === 'video' || isAnimatedMediaFormat(savedMode)) setMediaMode(savedMode);
    };
    const syncFromAnotherTab = (event: StorageEvent) => {
      if (event.key === MEDIA_MODE_STORAGE_KEY) syncMediaMode();
    };

    syncMediaMode();
    window.addEventListener('storage', syncFromAnotherTab);
    return () => window.removeEventListener('storage', syncFromAnotherTab);
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
    id: 'empty',
    number: '00',
    title: 'Empty',
    start: 0,
    duration: 1,
    previewEndTrimFrames: 0,
  };
  const selectedEnd = frameEnd(selectedScene);
  const selectedImageFormat: AnimatedMediaFormat = mediaMode === 'video' ? 'avif' : mediaMode;
  const selectedImageProfile = ANIMATED_MEDIA_FORMATS[selectedImageFormat];
  const selectedImagePath = animatedMediaPath(selectedImageFormat, animationId, selectedScene.id);
  const selectedImageUrl = new URL(selectedImagePath, PRODUCTION_ORIGIN).href;

  const copySelectedMarkdown = async () => {
    await navigator.clipboard.writeText(`![${selectedScene.title}](${selectedImageUrl})`);
    flashCopyFeedback('Markdown 已复制');
  };

  const copySelectedImage = async () => {
    const response = await fetch(selectedImagePath);
    if (!response.ok) throw new Error(`${selectedImageFormat.toUpperCase()} request failed with ${response.status}.`);
    const imageBlob = await response.blob();
    const supportsImage = typeof ClipboardItem !== 'undefined'
      && typeof ClipboardItem.supports === 'function'
      && ClipboardItem.supports(selectedImageProfile.mimeType);

    if (supportsImage) {
      await navigator.clipboard.write([new ClipboardItem({[selectedImageProfile.mimeType]: imageBlob})]);
      flashCopyFeedback('动图已复制');
      return;
    }

    if (typeof ClipboardItem === 'undefined' || typeof navigator.clipboard.write !== 'function') {
      await navigator.clipboard.writeText(selectedImageUrl);
      flashCopyFeedback('图片链接已复制');
      return;
    }

    const html = `<img src="${selectedImageUrl}" alt="${selectedScene.title.replaceAll('"', '&quot;')}">`;
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([html], {type: 'text/html'}),
        'text/plain': new Blob([selectedImageUrl], {type: 'text/plain'}),
      }),
    ]);
    flashCopyFeedback('图片引用已复制');
  };

  const copySiyuanScript = async () => {
    const response = await fetch(`${BASE_URL}tools/siyuan-animated-image-player.js`);
    if (!response.ok) throw new Error(`SiYuan script request failed with ${response.status}.`);
    await navigator.clipboard.writeText(await response.text());
    flashCopyFeedback('思源脚本已复制');
  };

  const copySiyuanVideoScript = async () => {
    const response = await fetch(`${BASE_URL}tools/siyuan-video-player.js`);
    if (!response.ok) throw new Error(`SiYuan video script request failed with ${response.status}.`);
    await navigator.clipboard.writeText(await response.text());
    flashCopyFeedback('视频脚本已复制');
  };

  const runCopyAction = (action: () => Promise<void>) => {
    void action().catch((error) => {
      console.error(error);
      flashCopyFeedback('复制失败');
    });
  };

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
      {mode === 'single' ? (
        <div className="remotion-deck__single">
          <header className="remotion-deck__scene-heading">
            <div className="remotion-deck__scene-label">
              <span>{selectedScene.number}</span>
              <strong>{selectedScene.title}</strong>
            </div>
            <div className="remotion-deck__media-controls">
              <div className="remotion-deck__media-tabs" role="tablist" aria-label="媒体格式">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mediaMode === 'video'}
                  data-active={mediaMode === 'video' ? 'true' : 'false'}
                  title="视频播放器"
                  onClick={() => persistMediaMode('video')}
                >
                  <Video size={15} aria-hidden="true" />
                  <span>视频</span>
                </button>
                {animatedMediaFormats.map((format) => {
                  const profile = ANIMATED_MEDIA_FORMATS[format];
                  return (
                    <button
                      key={format}
                      type="button"
                      role="tab"
                      aria-selected={mediaMode === format}
                      data-active={mediaMode === format ? 'true' : 'false'}
                      title={`${profile.tabLabel} 动图`}
                      onClick={() => persistMediaMode(format)}
                    >
                      <ImageIcon size={15} aria-hidden="true" />
                      <span>{profile.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
              {mediaMode !== 'video' ? (
                <div className="remotion-deck__copy-actions" role="group" aria-label="动图复制操作">
                  <button type="button" title="复制 Markdown 图片语法" aria-label="复制 Markdown 图片语法" onClick={() => runCopyAction(copySelectedMarkdown)}>
                    <Copy size={15} aria-hidden="true" />
                  </button>
                  <button type="button" title="复制动图" aria-label="复制动图" onClick={() => runCopyAction(copySelectedImage)}>
                    <ClipboardCopy size={15} aria-hidden="true" />
                  </button>
                  <button type="button" title="复制思源动图控制脚本" aria-label="复制思源动图控制脚本" onClick={() => runCopyAction(copySiyuanScript)}>
                    <Code2 size={15} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <div className="remotion-deck__copy-actions" role="group" aria-label="视频复制操作">
                  <button type="button" title="复制思源视频控制脚本" aria-label="复制思源视频控制脚本" onClick={() => runCopyAction(copySiyuanVideoScript)}>
                    <Code2 size={15} aria-hidden="true" />
                  </button>
                </div>
              )}
              <span className="remotion-deck__copy-feedback" aria-live="polite">{copyFeedback}</span>
            </div>
          </header>
          {mediaMode === 'video' ? (
            <PlayerFrame
              key={`${selectedScene.number}-${autoPage ? 'auto' : 'once'}-${reducedMotion ? 'reduced' : 'motion'}`}
              component={typographyComponent}
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
              onEnded={mode === 'single' && autoPage
                ? () => selectScene(currentScene + 1, 'replace')
                : undefined}
            />
          ) : (
            <AnimatedImageFrame
              alt={`${title}：${selectedScene.title}`}
              compositionWidth={compositionWidth}
              compositionHeight={compositionHeight}
              src={selectedImagePath}
            />
          )}
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
              {mediaMode === 'video' ? (
                <PlayerFrame
                component={typographyComponent}
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
              ) : (
                <AnimatedImageFrame
                  alt={`${title}：${scene.title}`}
                  compositionWidth={compositionWidth}
                  compositionHeight={compositionHeight}
                  src={animatedMediaPath(mediaMode, animationId, scene.id)}
                />
              )}
            </article>
          ))}
        </div>
      )}

      <div className="remotion-deck__toolbar">
        <div className="remotion-deck__modes" role="group" aria-label="预览布局">
          <ModeButton active={mode === 'single'} label="单页" mode="single" onClick={setMode} icon={<MonitorPlay size={15} />} />
          <ModeButton active={mode === 'row'} label="并排" mode="row" onClick={setMode} icon={<Columns2 size={15} />} />
          <ModeButton active={mode === 'matrix'} label="矩阵" mode="matrix" onClick={setMode} icon={<Grid3X3 size={15} />} />
        </div>
        {mediaMode === 'video' ? (
          <>
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
          </>
        ) : (
          <span className="remotion-deck__auto" aria-label="动图播放一次">
            <Repeat2 size={15} aria-hidden="true" />
            播放一次
          </span>
        )}
        <span className="remotion-deck__status" aria-live="polite">
          {mediaMode !== 'video'
            ? `${ANIMATED_MEDIA_FORMATS[mediaMode].label}${animatedMediaFps ? ` · ${animatedMediaFps}fps` : ''} · 播放一次`
            : mode === 'single'
              ? autoPage
                ? `播放完进入下一页 · ${effectivePlaybackSpeed}×`
                : `播放结束停在稳定画面 · ${effectivePlaybackSpeed}×`
              : `全部页面播放结束停在稳定画面 · ${effectivePlaybackSpeed}×`}
        </span>
      </div>
    </section>
  );
};
