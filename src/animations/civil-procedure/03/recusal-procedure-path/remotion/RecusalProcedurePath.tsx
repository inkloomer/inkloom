import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {
  DecisionScene,
  PauseVsContinueScene,
  PendingEffectScene,
  RemedyScene,
  ScopeScene,
  TimingScene,
} from './scenes/RecusalScenes';
import {DURATION_FRAMES, PALETTE, SCENES, toSourceFrame} from './storyboard';
import {ENTER_EASING, EXIT_EASING, FilmRail} from './visual-system';

const SceneMotion = ({children, duration}: {readonly children: ReactNode; readonly duration: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const sourceDuration = toSourceFrame(duration);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        translate: `${interpolate(frame, [0, 18, sourceDuration - 14, sourceDuration], [-86, 0, 0, 86], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: [ENTER_EASING, Easing.linear, EXIT_EASING],
        })}px 0px`,
      }}
    >
      {children}
    </div>
  );
};

const BackgroundStructure = () => (
  <>
    {[320, 640, 960, 1280, 1600].map((left) => (
      <div
        key={left}
        style={{
          position: 'absolute',
          left,
          top: 0,
          width: 1,
          height: 1080,
          backgroundColor: 'rgba(203, 210, 206, 0.26)',
        }}
      />
    ))}
    <div style={{position: 'absolute', left: 0, top: 206, width: 1920, height: 1, backgroundColor: 'rgba(203, 210, 206, 0.55)'}} />
  </>
);

const SceneSequence = ({
  start,
  duration,
  name,
  children,
}: {
  readonly start: number;
  readonly duration: number;
  readonly name: string;
  readonly children: ReactNode;
}) => (
  <Sequence from={start} durationInFrames={duration} name={name} layout="none">
    <SceneMotion duration={duration}>{children}</SceneMotion>
  </Sequence>
);

export const RecusalProcedurePath = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <BackgroundStructure />
      <SceneSequence name="01-scope" {...SCENES.scope}>
        <ScopeScene />
      </SceneSequence>
      <SceneSequence name="02-timing" {...SCENES.timing}>
        <TimingScene />
      </SceneSequence>
      <SceneSequence name="03-pending-effect" {...SCENES.pendingEffect}>
        <PendingEffectScene />
      </SceneSequence>
      <SceneSequence name="04-decision" {...SCENES.decision}>
        <DecisionScene />
      </SceneSequence>
      <SceneSequence name="05-remedy" {...SCENES.remedy}>
        <RemedyScene />
      </SceneSequence>
      <SceneSequence name="06-pause-vs-continue" {...SCENES.pauseVsContinue}>
        <PauseVsContinueScene />
      </SceneSequence>
      <FilmRail frame={frame} totalFrames={DURATION_FRAMES} />
    </AbsoluteFill>
  );
};
