import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {NominalShareholder} from '@/animations/commercial-law/03/nominal-shareholder/remotion/NominalShareholder';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/03/nominal-shareholder/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'nominal-shareholder-scene-01', number: '01', title: '代持股的四角关系', ...SCENES['nominal-shareholder-scene-01']},
  {id: 'nominal-shareholder-scene-02', number: '02', title: '名义股东处分股权', ...SCENES['nominal-shareholder-scene-02']},
  {id: 'nominal-shareholder-scene-03', number: '03', title: '代持与冒名的边界', ...SCENES['nominal-shareholder-scene-03']},
];
export const NominalShareholderPlayer=()=> <RemotionDeck animationId="nominal-shareholder" title="实际出资人与名义股东" component={NominalShareholder} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default NominalShareholderPlayer;
