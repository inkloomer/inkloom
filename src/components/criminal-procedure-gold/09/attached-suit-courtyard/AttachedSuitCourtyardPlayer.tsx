import {AttachedSuitCourtyard} from '@/animations/criminal-procedure-gold/09/attached-suit-courtyard/remotion/AttachedSuitCourtyard';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/09/attached-suit-courtyard/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'plaintiff-eligibility-hall', number: '01', title: '东厢·原告资格：谁来递状', ...SCENES.plaintiffEligibilityHall},
  {id: 'loss-scope-gate', number: '02', title: '西厢·受理闸：只放物质损失两型', ...SCENES.lossScopeGate},
  {id: 'public-interest-track', number: '03', title: '跨院联办·公益之诉与随案移送', ...SCENES.publicInterestTrack},
];

export const AttachedSuitCourtyardPlayer = () => <RemotionDeck animationId="attached-suit-courtyard" component={AttachedSuitCourtyard} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="附带民事诉讼——原告资格、受理闸与公益并轨" />;
export default AttachedSuitCourtyardPlayer;
