import {NomineeImpersonationMasks} from '@/animations/commercial-economic-law/01/nominee-impersonation-masks/remotion/NomineeImpersonationMasks';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/nominee-impersonation-masks/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'mask-theft', number: '01', title: '偷戴的脸谱：被冒名者不是股东', ...SCENES.maskTheft},
  {id: 'negative-suit', number: '02', title: '摘脸谱之诉：确认我不是股东', ...SCENES.negativeSuit},
  {id: 'proxy-holding', number: '03', title: '代持的脸谱：协议有效，价款追缴', ...SCENES.proxyHolding},
];

export const NomineeImpersonationMasksPlayer = () => <RemotionDeck animationId="nominee-impersonation-masks" component={NomineeImpersonationMasks} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="名义股东与实际出资人：偷戴与代挂的脸谱" />;
export default NomineeImpersonationMasksPlayer;
