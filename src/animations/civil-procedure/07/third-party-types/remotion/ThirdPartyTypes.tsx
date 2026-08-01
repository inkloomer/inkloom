import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {ComparisonScene, DefinitionScene, DistinctionScene, NoIndependentClaimRulesScene, NoIndependentClaimScene, RightsScene} from './scenes/TypeScenes';
import {DURATION_FRAMES, PALETTE, SCENES, toSourceFrame} from './storyboard';
import {RelationBackdrop} from './visual-system';
import {TimelineSequence} from '../../../../shared/remotion-runtime';

const SceneMotion = ({children, duration}: {readonly children: ReactNode; readonly duration: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const sourceDuration = toSourceFrame(duration);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: interpolate(frame, [0, 14, sourceDuration - 12, sourceDuration], [0, 1, 1, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: [Easing.bezier(0.16, 1, 0.3, 1), Easing.linear, Easing.bezier(0.7, 0, 0.84, 0)],
        }),
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

export const ThirdPartyTypes = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <RelationBackdrop />
      <SceneSequence name="01-definition" {...SCENES.definition}>
        <DefinitionScene />
      </SceneSequence>
      <SceneSequence name="02-comparison" {...SCENES.comparison}>
        <ComparisonScene />
      </SceneSequence>
      <SceneSequence name="03-rights" {...SCENES.rights}>
        <RightsScene />
      </SceneSequence>
      <SceneSequence name="04-distinction" {...SCENES.distinction}>
        <DistinctionScene />
      </SceneSequence>
      <SceneSequence name="05-no-independent-claim" {...SCENES.noIndependentClaim}>
        <NoIndependentClaimScene />
      </SceneSequence>
      <SceneSequence name="06-no-independent-claim-rules" {...SCENES.noIndependentClaimRules}>
        <NoIndependentClaimRulesScene />
      </SceneSequence>
      <div style={{position: 'absolute', left: 94, right: 94, bottom: 64, height: 2, backgroundColor: PALETTE.grid}}>
        <div style={{width: `${interpolate(frame, [0, DURATION_FRAMES - 1], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, height: '100%', backgroundColor: PALETTE.mint}} />
      </div>
    </AbsoluteFill>
  );
};
