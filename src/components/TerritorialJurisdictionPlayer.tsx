import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {TerritorialJurisdiction} from '@/animations/civil-procedure/04/territorial-jurisdiction/remotion/TerritorialJurisdiction';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/04/territorial-jurisdiction/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '地域管辖在找什么？', ...SCENES.orientation},
  {number: '02', title: '原则：原告就被告', ...SCENES.general},
  {number: '03', title: '纠纷类型改变连接点', ...SCENES.special},
  {number: '04', title: '专属：法院不能随便选', ...SCENES.exclusive},
  {number: '05', title: '协议：可以约定但不能越界', ...SCENES.agreement},
  {number: '06', title: '把管辖题变成四步', ...SCENES.recap},
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
