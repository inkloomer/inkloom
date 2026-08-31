import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {CoreMapScene, GuaranteeRulesScene, JudgmentDocumentRulesScene, ThirdPartySignatureScene} from './MediationCoreRecapScenes';
import {SCENES} from './storyboard';

export const MediationCoreRecap = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-core-map" start={SCENES.coreMap.start} duration={SCENES.coreMap.duration}><CoreMapScene/></TimelineSequence>
    <TimelineSequence name="02-judgment-document-rules" start={SCENES.judgmentRules.start} duration={SCENES.judgmentRules.duration}><JudgmentDocumentRulesScene/></TimelineSequence>
    <TimelineSequence name="03-third-party-signature" start={SCENES.thirdPartyRules.start} duration={SCENES.thirdPartyRules.duration}><ThirdPartySignatureScene/></TimelineSequence>
    <TimelineSequence name="04-guarantee-rules" start={SCENES.guaranteeRules.start} duration={SCENES.guaranteeRules.duration}><GuaranteeRulesScene/></TimelineSequence>
  </AbsoluteFill>
);