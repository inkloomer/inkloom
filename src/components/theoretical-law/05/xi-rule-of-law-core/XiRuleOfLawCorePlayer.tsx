import {XiRuleOfLawCore} from '@/animations/theoretical-law/05/xi-rule-of-law-core/remotion/XiRuleOfLawCore';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/05/xi-rule-of-law-core/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'persist-1-3', number: '01', title: '党的领导·以人民为中心·法治道路', ...SCENES.persist13},
  {id: 'persist-4-5', number: '02', title: '依宪治国依宪执政·法治轨道', ...SCENES.persist45},
  {id: 'persist-6-7', number: '03', title: '法治体系·工作布局', ...SCENES.persist67},
  {id: 'persist-8-9', number: '04', title: '重要环节·国内涉外法治', ...SCENES.persist89},
  {id: 'persist-10-12', number: '05', title: '法治队伍·关键少数·依规治党', ...SCENES.persist1012},
];

export const XiRuleOfLawCorePlayer = () => (
  <RemotionDeck
    animationId="xi-rule-of-law-core"
    component={XiRuleOfLawCore}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="习近平法治思想的核心要义"
  />
);

export default XiRuleOfLawCorePlayer;
