import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DeathConsequencesScene, JudgmentTargetScene, PartyIdentityScene, SourceOfAuthorityScene} from './scenes/StatutoryAgentScenes';

export const StatutoryAgent = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-source-of-authority" {...SCENES.sourceOfAuthority}><SourceOfAuthorityScene /></TimelineSequence>
    <TimelineSequence name="02-party-identity" {...SCENES.partyIdentity}><PartyIdentityScene /></TimelineSequence>
    <TimelineSequence name="03-judgment-target" {...SCENES.judgmentTarget}><JudgmentTargetScene /></TimelineSequence>
    <TimelineSequence name="04-death-consequences" {...SCENES.deathConsequences}><DeathConsequencesScene /></TimelineSequence>
  </AbsoluteFill>
);
