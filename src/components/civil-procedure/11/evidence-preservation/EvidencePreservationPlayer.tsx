import {EvidencePreservation} from '@/animations/civil-procedure/11/evidence-preservation/remotion/EvidencePreservation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/11/evidence-preservation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'preservation-trigger', number: '01', title: '证据保全的共同前提', ...SCENES.preservationTrigger},
  {id: 'during-litigation', number: '02', title: '诉讼中证据保全', ...SCENES.duringLitigation},
  {id: 'before-litigation', number: '03', title: '诉前证据保全', ...SCENES.beforeLitigation},
];

export const EvidencePreservationPlayer = () => <RemotionDeck animationId="evidence-preservation" component={EvidencePreservation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="诉前与诉讼中证据保全" />;
export default EvidencePreservationPlayer;
