import {ProofFilingInvestigation} from '@/animations/civil-procedure/11/proof-filing-investigation/remotion/ProofFilingInvestigation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/11/proof-filing-investigation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'deadline-routes', number: '01', title: '不同程序的举证期限', ...SCENES.deadlineRoutes},
  {id: 'extension-bridge', number: '02', title: '举证期限的延长', ...SCENES.extensionBridge},
  {id: 'late-evidence-switch', number: '03', title: '逾期证据的四路后果', ...SCENES.lateEvidenceSwitch},
  {id: 'court-collection-boundary', number: '04', title: '法院调查取证的边界', ...SCENES.courtCollectionBoundary},
];

export const ProofFilingInvestigationPlayer = () => <RemotionDeck animationId="proof-filing-investigation" component={ProofFilingInvestigation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="举证期限与法院调查取证" />;
export default ProofFilingInvestigationPlayer;
