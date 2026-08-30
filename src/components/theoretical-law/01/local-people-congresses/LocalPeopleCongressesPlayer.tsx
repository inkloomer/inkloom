import {LocalPeopleCongresses} from '@/animations/theoretical-law/01/local-people-congresses/remotion/LocalPeopleCongresses';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/local-people-congresses/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'tenure-personnel', number: '01', title: '任期职权·代理正职', ...SCENES.tenurePersonnel},
  {id: 'special-appointment', number: '02', title: '谁任命谁·提名链', ...SCENES.specialAppointment},
  {id: 'meetings', number: '03', title: '开会的规矩', ...SCENES.meetings},
  {id: 'motions-removal', number: '04', title: '奏章双轨与撤职案', ...SCENES.motionsRemoval},
];

export const LocalPeopleCongressesPlayer = () => (
  <RemotionDeck
    animationId="local-people-congresses"
    component={LocalPeopleCongresses}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="地方各级人大及其常委会"
  />
);

export default LocalPeopleCongressesPlayer;
