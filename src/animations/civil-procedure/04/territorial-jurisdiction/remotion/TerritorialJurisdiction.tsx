import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {AgreementScene, ExclusiveScene, GeneralScene, OrientationScene, RecapScene, SpecialScene} from './scenes/TerritorialScenes';
import {DURATION_FRAMES, PALETTE, SCENES, toSourceFrame} from './storyboard';
import {TimelineRail} from './visual-system';

const SceneMotion = ({children, duration}: {readonly children: ReactNode; readonly duration: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const sourceDuration = toSourceFrame(duration);
  const translateX = interpolate(frame, [0, 18, sourceDuration - 14, sourceDuration], [-72, 0, 0, 72], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.45, 0, 0.2, 1)});
  const opacity = interpolate(frame, [0, 16, sourceDuration - 12, sourceDuration], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <div style={{position: 'absolute', inset: 0, translate: `${translateX}px 0px`, opacity}}>{children}</div>;
};

const BackgroundStructure = () => (
  <>
    {[320, 640, 960, 1280, 1600].map((left) => <div key={left} style={{position: 'absolute', left, top: 0, width: 1, height: 1080, backgroundColor: 'rgba(203, 210, 206, 0.26)'}} />)}
    <div style={{position: 'absolute', left: 0, top: 206, width: 1920, height: 1, backgroundColor: 'rgba(203, 210, 206, 0.55)'}} />
  </>
);

const SceneSequence = ({start, duration, name, children}: {readonly start: number; readonly duration: number; readonly name: string; readonly children: ReactNode}) => (
  <Sequence from={start} durationInFrames={duration} name={name} layout="none">
    <SceneMotion duration={duration}>{children}</SceneMotion>
  </Sequence>
);

export const TerritorialJurisdiction = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <BackgroundStructure />
      <SceneSequence name="01-orientation" {...SCENES.orientation}><OrientationScene /></SceneSequence>
      <SceneSequence name="02-general" {...SCENES.general}><GeneralScene /></SceneSequence>
      <SceneSequence name="03-special" {...SCENES.special}><SpecialScene /></SceneSequence>
      <SceneSequence name="04-exclusive" {...SCENES.exclusive}><ExclusiveScene /></SceneSequence>
      <SceneSequence name="05-agreement" {...SCENES.agreement}><AgreementScene /></SceneSequence>
      <SceneSequence name="06-recap" {...SCENES.recap}><RecapScene /></SceneSequence>
      <TimelineRail frame={frame} totalFrames={DURATION_FRAMES} />
    </AbsoluteFill>
  );
};
