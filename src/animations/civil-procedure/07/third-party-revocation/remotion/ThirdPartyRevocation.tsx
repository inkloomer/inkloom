import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {ClassificationScene, ConceptScene, ConditionsScene, ProcedureScene} from './scenes/RevocationScenes';
import {DURATION_FRAMES, PALETTE, SCENES, toSourceFrame} from './storyboard';
import {PersistentTrack, PrintBackdrop} from './visual-system';

const SceneMotion = ({children, duration}: {readonly children: ReactNode; readonly duration: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const sourceDuration = toSourceFrame(duration);
  return <div style={{position: 'absolute', inset: 0, translate: `${interpolate(frame, [0, 18, sourceDuration - 14, sourceDuration], [44, 0, 0, -44], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: [Easing.bezier(0.16, 1, 0.3, 1), Easing.linear, Easing.bezier(0.7, 0, 0.84, 0)]})}px 0px`}}>{children}</div>;
};

const SceneSequence = ({start, duration, name, children}: {readonly start: number; readonly duration: number; readonly name: string; readonly children: ReactNode}) => <TimelineSequence start={start} duration={duration} name={name}><SceneMotion duration={duration}>{children}</SceneMotion></TimelineSequence>;

export const ThirdPartyRevocation = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
    <PrintBackdrop frame={toSourceFrame(frame)} />
    <SceneSequence name="01-concept" {...SCENES.concept}><ConceptScene /></SceneSequence>
    <SceneSequence name="02-conditions" {...SCENES.conditions}><ConditionsScene /></SceneSequence>
    <SceneSequence name="03-procedure" {...SCENES.procedure}><ProcedureScene /></SceneSequence>
    <SceneSequence name="04-classification" {...SCENES.classification}><ClassificationScene /></SceneSequence>
    <PersistentTrack frame={frame} totalFrames={DURATION_FRAMES} />
  </AbsoluteFill>;
};
