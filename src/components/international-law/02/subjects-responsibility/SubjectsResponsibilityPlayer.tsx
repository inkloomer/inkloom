import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {SubjectsResponsibility} from '@/animations/international-law/02/subjects-responsibility/remotion/SubjectsResponsibility';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/02/subjects-responsibility/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'immunity', number: '01', title: '外国国家豁免', ...SCENES.immunity},
  {id: 'recognition', number: '02', title: '国际法上的承认', ...SCENES.recognition},
  {id: 'succession', number: '03', title: '国际法上的继承', ...SCENES.succession},
  {id: 'organizations', number: '04', title: '政府间与非政府间组织', ...SCENES.organizations},
  {id: 'un-organs', number: '05', title: '联合国大会与安理会', ...SCENES.unOrgans},
  {id: 'council-vote', number: '06', title: '安理会表决制度', ...SCENES.councilVote},
  {id: 'responsibility', number: '07', title: '国际法律责任', ...SCENES.responsibility},
];

export const SubjectsResponsibilityPlayer = () => (
  <RemotionDeck
    animationId="subjects-responsibility"
    title="国际法主体与法律责任"
    component={SubjectsResponsibility}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SubjectsResponsibilityPlayer;
