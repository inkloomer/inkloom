import {CitizenFundamentalRights} from '@/animations/theoretical-law/01/citizen-fundamental-rights/remotion/CitizenFundamentalRights';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/citizen-fundamental-rights/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'equality-political', number: '01', title: '平等权与政治权利和自由', ...SCENES.equalityPolitical},
  {id: 'supervision-religion', number: '02', title: '监督权、国家赔偿与宗教信仰自由', ...SCENES.supervisionReligion},
  {id: 'personal-freedom', number: '03', title: '人身自由：一盏灯下四格', ...SCENES.personalFreedom},
  {id: 'social-economic', number: '04', title: '社会经济和文化教育权利', ...SCENES.socialEconomic},
];

export const CitizenFundamentalRightsPlayer = () => (
  <RemotionDeck
    animationId="citizen-fundamental-rights"
    component={CitizenFundamentalRights}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公民的基本权利：六灯权利廊"
  />
);

export default CitizenFundamentalRightsPlayer;
