import {ContributionDefectAudit} from '@/animations/commercial-economic-law/01/contribution-defect-audit/remotion/ContributionDefectAudit';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/contribution-defect-audit/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'defective-title', number: '01', title: '有瑕疵的房屋出资：两道墨线', ...SCENES.defectiveTitle},
  {id: 'forms-checkup', number: '02', title: '四种出资形式过验讫台', ...SCENES.formsCheckup},
  {id: 'transfer-duality', number: '03', title: '转让两张底牌：恶意掺水 vs 未届期', ...SCENES.transferDuality},
];

export const ContributionDefectAuditPlayer = () => <RemotionDeck animationId="contribution-defect-audit" component={ContributionDefectAudit} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="出资瑕疵：验讫台上的四份卷宗" />;
export default ContributionDefectAuditPlayer;
