import {CreationOfConstitution} from '@/animations/theoretical-law/01/creation-of-constitution/remotion/CreationOfConstitution';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/creation-of-constitution/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'four-subjects', number: '01', title: '制宪修宪释宪监督', ...SCENES.fourSubjects},
  {id: 'creation-procedure', number: '02', title: '制宪程序四步', ...SCENES.creationProcedure},
  {id: 'delegation-power', number: '03', title: '委托关系与权界', ...SCENES.delegationPower},
];

export const CreationOfConstitutionPlayer = () => (
  <RemotionDeck
    animationId="creation-of-constitution"
    component={CreationOfConstitution}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="宪法的制定：制宪权与制宪程序"
  />
);

export default CreationOfConstitutionPlayer;
