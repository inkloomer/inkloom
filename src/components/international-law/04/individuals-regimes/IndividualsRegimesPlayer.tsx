import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {IndividualsRegimes} from '@/animations/international-law/04/individuals-regimes/remotion/IndividualsRegimes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/04/individuals-regimes/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'nationality', number: '01', title: '国籍法', ...SCENES.nationality},
  {id: 'entry-exit', number: '02', title: '出入境管理', ...SCENES.entryExit},
  {id: 'extradition-refusal', number: '03', title: '引渡：应当拒绝的情形', ...SCENES.extraditionRefusal},
  {id: 'extradition-process', number: '04', title: '引渡程序与机关', ...SCENES.extraditionProcess},
  {id: 'protection-asylum', number: '05', title: '外交保护 VS 庇护', ...SCENES.protectionAsylum},
];

export const IndividualsRegimesPlayer = () => (
  <RemotionDeck
    animationId="individuals-regimes"
    title="国际法上的个人"
    component={IndividualsRegimes}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default IndividualsRegimesPlayer;
