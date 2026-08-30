import {FrostTribunalDocket} from '@/animations/commercial-economic-law/05/frost-tribunal-docket/remotion/FrostTribunalDocket';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/05/frost-tribunal-docket/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'filing', number: '01', title: '破产申请进门：四方角色与书面凭证', ...SCENES.filing},
  {id: 'ruling-remedy', number: '02', title: '驳回与救济：裁定不是判决', ...SCENES.rulingRemedy},
  {id: 'executory-lease', number: '03', title: '待履行合同：管理人的一支笔', ...SCENES.executoryLease},
];

export const FrostTribunalDocketPlayer = () => <RemotionDeck animationId="frost-tribunal-docket" component={FrostTribunalDocket} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="破产法：申请和受理" />;
export default FrostTribunalDocketPlayer;
