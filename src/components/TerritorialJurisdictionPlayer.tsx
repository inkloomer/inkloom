import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {TerritorialJurisdiction} from '@/animations/civil-procedure/04/territorial-jurisdiction/remotion/TerritorialJurisdiction';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/04/territorial-jurisdiction/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '地域管辖在找什么？', ...SCENES.orientation},
  {number: '02', title: '一般：看当事人所在地', ...SCENES.general},
  {number: '03', title: '特殊：看法律事实所在地', ...SCENES.special},
  {number: '04', title: '专属：法定锁定法院', ...SCENES.exclusive},
  {number: '05', title: '协议：书面约定与红线', ...SCENES.agreement},
  {number: '06', title: '合同三步走：专属→协议→法定', ...SCENES.threestep},
];

export const TerritorialJurisdictionPlayer = () => (
  <RemotionDeck
    title="地域管辖"
    component={TerritorialJurisdiction}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TerritorialJurisdictionPlayer;
