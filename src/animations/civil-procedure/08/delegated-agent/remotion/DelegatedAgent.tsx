import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {DivorceDutyScene, ExecutionStageScene, FullPowerTrapScene, ScopeScene} from './scenes/DelegatedAgentScenes';
import {DURATION_FRAMES, PALETTE, SCENES, toSourceFrame} from './storyboard';
import {ContractBackdrop} from './visual-system';
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

export const DelegatedAgent = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: PALETTE.background, overflow: 'hidden'}}>
      <ContractBackdrop frame={toSourceFrame(frame)} />
      <SceneSequence name="01-scope" {...SCENES.scope}>
        <ScopeScene />
      </SceneSequence>
      <SceneSequence name="02-full-power-trap" {...SCENES.fullPowerTrap}>
        <FullPowerTrapScene />
      </SceneSequence>
      <SceneSequence name="03-execution-stage" {...SCENES.executionStage}>
        <ExecutionStageScene />
      </SceneSequence>
      <SceneSequence name="04-divorce-duty" {...SCENES.divorceDuty}>
        <DivorceDutyScene />
      </SceneSequence>
      <div style={{position: 'absolute', left: 94, right: 94, bottom: 56, height: 4, backgroundColor: PALETTE.line}}>
        <div style={{width: `${interpolate(frame, [0, DURATION_FRAMES - 1], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, height: '100%', backgroundColor: PALETTE.seal}} />
      </div>
    </AbsoluteFill>
  );
};
