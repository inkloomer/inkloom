import {RepublicConstitutionHistory} from '@/animations/theoretical-law/03/republic-constitution-history/remotion/RepublicConstitutionHistory';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/republic-constitution-history/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'linshi-yuefa', number: '01', title: '临时约法', ...SCENES.linshiYuefa},
  {id: 'tiantan-yuanji', number: '02', title: '天坛宪草与袁记约法', ...SCENES.tiantanYuanji},
  {id: 'huixuan-1947', number: '03', title: '贿选宪法与1947宪法', ...SCENES.huixuan1947},
];

export const RepublicConstitutionHistoryPlayer = () => (
  <RemotionDeck
    animationId="republic-constitution-history"
    component={RepublicConstitutionHistory}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="民国的制宪活动：五部宪政文件"
  />
);

export default RepublicConstitutionHistoryPlayer;
