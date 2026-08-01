import {InspectionRecord} from '@/animations/civil-procedure/10/inspection-record/remotion/InspectionRecord';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/inspection-record/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'initiation', number: '01', title: '申请与依职权启动', ...SCENES.initiation},
  {id: 'scope', number: '02', title: '物证与现场', ...SCENES.scope},
  {id: 'expert-participation', number: '03', title: '鉴定人参与与现场鉴定', ...SCENES.expertParticipation},
];

export default () => <RemotionDeck animationId="inspection-record" component={InspectionRecord} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="勘验笔录规则" />;
