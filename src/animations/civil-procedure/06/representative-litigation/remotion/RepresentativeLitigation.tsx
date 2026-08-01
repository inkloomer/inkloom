import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {DURATION_FRAMES, PALETTE, SCENES} from './storyboard';
import {ConsoleCanvas} from './visual-system';
import {
  AuthorityScene,
  ConceptScene,
  DeterminedScene,
  RecapScene,
  SecuritiesScene,
  UndeterminedScene,
} from './scenes/RepresentativeLitigationScenes';

export const RepresentativeLitigation = () => (
  <AbsoluteFill style={{backgroundColor: PALETTE.panel}}>
    <ConsoleCanvas>
      <TimelineSequence name="01-concept" {...SCENES.concept}><ConceptScene /></TimelineSequence>
      <TimelineSequence name="02-authority" {...SCENES.authority}><AuthorityScene /></TimelineSequence>
      <TimelineSequence name="03-determined" {...SCENES.determined}><DeterminedScene /></TimelineSequence>
      <TimelineSequence name="04-undetermined" {...SCENES.undetermined}><UndeterminedScene /></TimelineSequence>
      <TimelineSequence name="05-securities" {...SCENES.securities}><SecuritiesScene /></TimelineSequence>
      <TimelineSequence name="06-recap" {...SCENES.recap}><RecapScene /></TimelineSequence>
      <div style={{position: 'absolute', left: 78, right: 78, bottom: 54, display: 'flex', alignItems: 'center', gap: 18}}>
        <div style={{fontFamily: 'var(--inkloom-animation-meta)', fontSize: 16, fontWeight: 900, color: PALETTE.signal}}>REP SIGNAL / ONLINE</div>
        <div style={{height: 3, flex: 1, background: PALETTE.ink}} />
        <div style={{fontSize: 16, fontWeight: 900}}>代表人诉讼</div>
      </div>
    </ConsoleCanvas>
  </AbsoluteFill>
);

export const REPRESENTATIVE_LITIGATION_DURATION_FRAMES = DURATION_FRAMES;
