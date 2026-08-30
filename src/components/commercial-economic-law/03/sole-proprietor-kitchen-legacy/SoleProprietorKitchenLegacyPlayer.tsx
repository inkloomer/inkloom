import {SoleProprietorKitchenLegacy} from '@/animations/commercial-economic-law/03/sole-proprietor-kitchen-legacy/remotion/SoleProprietorKitchenLegacy';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/03/sole-proprietor-kitchen-legacy/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'identity', number: '01', title: '一个灶主：家庭出资不改招牌', ...SCENES.identity},
  {id: 'five-year', number: '02', title: '熄灶五年：责任的尾巴', ...SCENES.fiveYear},
  {id: 'inheritance', number: '03', title: '传家灶：继承的三条路', ...SCENES.inheritance},
];

export const SoleProprietorKitchenLegacyPlayer = () => <RemotionDeck animationId="sole-proprietor-kitchen-legacy" component={SoleProprietorKitchenLegacy} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="个人独资企业：一个灶主、五年尾巴与三条继承路" />;
export default SoleProprietorKitchenLegacyPlayer;
