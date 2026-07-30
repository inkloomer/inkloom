import {TrialOrganizationPath} from '@/animations/civil-procedure/03/trial-organization-path/remotion/TrialOrganizationPath';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/03/trial-organization-path/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'path-gate', number: '01', title: '先锁审级与程序', ...SCENES.pathGate},
  {id: 'first-instance', number: '02', title: '一审：简易与普通', ...SCENES.firstInstance},
  {id: 'second-instance', number: '03', title: '二审四道门', ...SCENES.secondInstance},
  {id: 'mid-court-ban', number: '04', title: '中院一审双禁独任', ...SCENES.midCourtBan},
  {id: 'misconceptions', number: '05', title: '组织≠程序类型', ...SCENES.misconceptions},
  {id: 'jurors', number: '06', title: '陪审员双要件', ...SCENES.jurors},
];

export const TrialOrganizationPathPlayer = () => (
  <RemotionDeck
    title="审判组织选择路径"
    component={TrialOrganizationPath}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TrialOrganizationPathPlayer;
