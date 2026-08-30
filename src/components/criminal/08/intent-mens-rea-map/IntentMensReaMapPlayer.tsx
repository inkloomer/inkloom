import {IntentMensReaMap} from '@/animations/criminal/08/intent-mens-rea-map/remotion/IntentMensReaMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/08/intent-mens-rea-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'intent-consistency', number: '01', title: '犯罪故意·主客观相一致', ...SCENES.intentConsistency},
  {id: 'fault-spectrum', number: '02', title: '罪过形式·六格刻度盘', ...SCENES.faultSpectrum},
  {id: 'mistake-two-step', number: '03', title: '对象错误 vs 打击错误·两步走', ...SCENES.mistakeTwoStep},
  {id: 'hit-error-two-theories', number: '04', title: '打击错误两说·狭义因果错误', ...SCENES.hitErrorTwoTheories},
  {id: 'defer-advance-absorb', number: '05', title: '推迟·提前·抽象错误', ...SCENES.deferAdvanceAbsorb},
];

export const IntentMensReaMapPlayer = () => <RemotionDeck animationId="intent-mens-rea-map" component={IntentMensReaMap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="主观要件：故意·罪过形式·事实认识错误" />;
export default IntentMensReaMapPlayer;
