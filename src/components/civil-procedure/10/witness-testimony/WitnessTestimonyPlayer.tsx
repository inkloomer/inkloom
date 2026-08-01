import {WitnessTestimony} from '@/animations/civil-procedure/10/witness-testimony/remotion/WitnessTestimony';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/witness-testimony/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'qualification', number: '01', title: '证人资格', ...SCENES.qualification},
  {id: 'appearance', number: '02', title: '出庭原则与例外', ...SCENES.appearance},
  {id: 'testimony-conduct', number: '03', title: '作证方式与费用', ...SCENES.testimonyConduct},
];
export default () => <RemotionDeck animationId="witness-testimony" component={WitnessTestimony} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="证人证言规则" />;
