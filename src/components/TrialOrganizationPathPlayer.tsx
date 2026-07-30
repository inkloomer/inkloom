import {TrialOrganizationPath} from '@/animations/civil-procedure/03/trial-organization-path/remotion/TrialOrganizationPath';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/03/trial-organization-path/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'overview', number: '01', title: '先定位程序', ...SCENES.overview},
  {id: 'first-instance', number: '02', title: '一审审判组织', ...SCENES.firstInstance},
  {id: 'second-instance', number: '03', title: '二审独任制条件', ...SCENES.secondInstance},
  {id: 'special-procedures', number: '04', title: '再审与特别程序', ...SCENES.specialProcedures},
  {id: 'misconceptions', number: '05', title: '两组高频混淆', ...SCENES.misconceptions},
  {id: 'conversion', number: '06', title: '独任制转合议制', ...SCENES.conversion},
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
