import {OxbloodShieldWorkshop} from '@/animations/commercial-economic-law/06/oxblood-shield-workshop/remotion/OxbloodShieldWorkshop';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/06/oxblood-shield-workshop/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'guaranty-defence', number: '01', title: '保证成立与有因抗辩的边界', ...SCENES.guarantyDefence},
  {id: 'recourse-chain', number: '02', title: '追索对象与代位再追索', ...SCENES.recourseChain},
];

export const OxbloodShieldWorkshopPlayer = () => <RemotionDeck animationId="oxblood-shield-workshop" component={OxbloodShieldWorkshop} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="票据法：票据抗辩" />;
export default OxbloodShieldWorkshopPlayer;
