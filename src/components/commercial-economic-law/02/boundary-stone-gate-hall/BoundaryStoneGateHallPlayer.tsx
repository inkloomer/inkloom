import {BoundaryStoneGateHall} from '@/animations/commercial-economic-law/02/boundary-stone-gate-hall/remotion/BoundaryStoneGateHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/boundary-stone-gate-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'expulsion', number: '01', title: '拔碑：除名到达生效', ...SCENES.expulsion},
  {id: 'admission', number: '02', title: '立碑：新合伙人入伙的两连问', ...SCENES.admission},
  {id: 'inheritance', number: '03', title: '继承资格与结算：不清算、不公告', ...SCENES.inheritance},
];

export const BoundaryStoneGateHallPlayer = () => <RemotionDeck animationId="boundary-stone-gate-hall" component={BoundaryStoneGateHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="入伙退伙：立碑拔碑与继承结算" />;
export default BoundaryStoneGateHallPlayer;
