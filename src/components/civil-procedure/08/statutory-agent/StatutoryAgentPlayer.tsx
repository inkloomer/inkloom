import {StatutoryAgent} from '@/animations/civil-procedure/08/statutory-agent/remotion/StatutoryAgent';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/08/statutory-agent/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'source-of-authority', number: '01', title: '权源', ...SCENES.sourceOfAuthority},
  {id: 'party-identity', number: '02', title: '身份', ...SCENES.partyIdentity},
  {id: 'judgment-target', number: '03', title: '裁判对象', ...SCENES.judgmentTarget},
  {id: 'death-consequences', number: '04', title: '死亡后果', ...SCENES.deathConsequences},
];

export const StatutoryAgentPlayer = () => <RemotionDeck animationId="statutory-agent" animatedMediaFps={30} component={StatutoryAgent} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="法定代理人的身份与诉讼后果" />;

export default StatutoryAgentPlayer;
