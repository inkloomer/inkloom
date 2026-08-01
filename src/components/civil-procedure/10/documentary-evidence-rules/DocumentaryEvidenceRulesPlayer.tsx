import {DocumentaryEvidenceRules} from '@/animations/civil-procedure/10/documentary-evidence-rules/remotion/DocumentaryEvidenceRules';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/documentary-evidence-rules/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'authenticity-rule', number: '01', title: '文书真实性规则', ...SCENES.authenticityRule},
  {id: 'document-order', number: '02', title: '文书提出命令规则', ...SCENES.documentOrder},
  {id: 'best-evidence', number: '03', title: '最佳证据规则', ...SCENES.bestEvidence},
];

export const DocumentaryEvidenceRulesPlayer = () => <RemotionDeck animationId="documentary-evidence-rules" component={DocumentaryEvidenceRules} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="书证的三大证据规则" />;

export default DocumentaryEvidenceRulesPlayer;
