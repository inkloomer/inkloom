import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {DeathEventScene, DefinitionScene, DifferencesScene} from './scenes/StatutoryAgentScenes';
import {DURATION_FRAMES, PALETTE, SCENES, toSourceFrame} from './storyboard';
import {CustodyBackdrop} from './visual-system';
import {TimelineSequence} from '../../../../shared/remotion-runtime';

const SceneMotion = ({children, duration}: {readonly children: ReactNode; readonly duration: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const sourceDuration = toSourceFrame(duration);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        translate: `${interpolate(frame, [0, 18, sourceDuration - 14, sourceDuration], [-42, 0, 0, 42], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: [Easing.bezier(0.16, 1, 0.3, 1), Easing.linear, Easing.bezier(0.7, 0, 0.84, 0)],
        })}px 0px`,
      }}
    >
      {children}
    </div>
  );
};

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
  <TimelineSequence start={start} duration={duration} name={name}>
    <SceneMotion duration={duration}>{children}</SceneMotion>
  </TimelineSequence>
);

export const StatutoryAgent = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <CustodyBackdrop frame={toSourceFrame(frame)} />
      <SceneSequence name="01-definition" {...SCENES.definition}>
        <DefinitionScene />
      </SceneSequence>
      <SceneSequence name="02-differences" {...SCENES.differences}>
        <DifferencesScene />
      </SceneSequence>
      <SceneSequence name="03-death-event" {...SCENES.deathEvent}>
        <DeathEventScene />
      </SceneSequence>
      <div style={{position: 'absolute', left: 94, right: 94, bottom: 56, height: 4, borderRadius: 2, backgroundColor: PALETTE.line}}>
        <div style={{width: `${interpolate(frame, [0, DURATION_FRAMES - 1], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, height: '100%', borderRadius: 2, backgroundColor: PALETTE.teal}} />
      </div>
    </AbsoluteFill>
  );
};
