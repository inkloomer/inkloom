import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PatentRightsInvalidity} from '@/animations/intellectual-property-law/08/patent-rights-invalidity/remotion/PatentRightsInvalidity';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/intellectual-property-law/08/patent-rights-invalidity/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'patent-rights-invalidity-scene-01', number: '01', title: '许可三轨', ...SCENES['patent-rights-invalidity-scene-01']},
  {id: 'patent-rights-invalidity-scene-02', number: '02', title: '保护期与无效', ...SCENES['patent-rights-invalidity-scene-02']},
];
export const PatentRightsInvalidityPlayer=()=> <RemotionDeck animationId="patent-rights-invalidity" title="专利权的内容与无效" component={PatentRightsInvalidity} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PatentRightsInvalidityPlayer;
