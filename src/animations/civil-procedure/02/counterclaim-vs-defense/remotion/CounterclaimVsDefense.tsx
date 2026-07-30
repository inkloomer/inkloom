import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CasesScene, ConceptScene, RecapScene, TechniqueScene} from './scenes/CounterclaimScenes';
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

export const CounterclaimVsDefense = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <SceneSequence name="01-concept" {...SCENES.concept}>
        <ConceptScene />
      </SceneSequence>
      <SceneSequence name="02-technique" {...SCENES.technique}>
        <TechniqueScene />
      </SceneSequence>
      <SceneSequence name="03-cases" {...SCENES.cases}>
        <CasesScene />
      </SceneSequence>
      <SceneSequence name="04-recap" {...SCENES.recap}>
        <RecapScene />
      </SceneSequence>
      <FilmRail frame={frame} totalFrames={DURATION_FRAMES} />
    </AbsoluteFill>
  );
};
