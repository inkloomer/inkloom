import {ShareholderRegisterPigeonhole} from '@/animations/commercial-economic-law/01/shareholder-register-pigeonhole/remotion/ShareholderRegisterPigeonhole';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/shareholder-register-pigeonhole/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'title-transfer', number: '01', title: '换签即取得，挂铜牌才对抗', ...SCENES.titleTransfer},
  {id: 'equal-condition', number: '02', title: '同等条件：天平两端不可替换', ...SCENES.equalCondition},
  {id: 'bona-fide-pledge', number: '03', title: '凭牌善意取得：质权与责任收口', ...SCENES.bonaFidePledge},
];

export const ShareholderRegisterPigeonholePlayer = () => <RemotionDeck animationId="shareholder-register-pigeonhole" component={ShareholderRegisterPigeonhole} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="股东资格：换签取得与铜牌对抗" />;
export default ShareholderRegisterPigeonholePlayer;
