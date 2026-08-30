import {FilingRegistryHall} from '@/animations/criminal-procedure-gold/11/filing-registry-hall/remotion/FilingRegistryHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/11/filing-registry-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'intake-condition-desk', number: '01', title: '挂号台：初查温和，立案三验', ...SCENES.intakeConditionDesk},
  {id: 'relief-three-doors', number: '02', title: '救济三扇门：控告人独享，举报人止步', ...SCENES.reliefThreeDoors},
  {id: 'supervision-four-steps', number: '03', title: '立案监督：四步走，不许跳', ...SCENES.supervisionFourSteps},
];

export const FilingRegistryHallPlayer = () => <RemotionDeck animationId="filing-registry-hall" component={FilingRegistryHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑事立案——初查边界、三验条件、救济三门与监督四步" />;
export default FilingRegistryHallPlayer;
