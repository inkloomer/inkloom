import {IdentityUnitSubject} from '@/animations/criminal/04/identity-unit-subject/remotion/IdentityUnitSubject';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/04/identity-unit-subject/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'status-crime-duality', number: '01', title: '真正与不真正身份犯', ...SCENES.statusCrimeDuality},
  {id: 'public-official-dial', number: '02', title: '国家工作人员·从事公务', ...SCENES.publicOfficialDial},
  {id: 'unit-crime-gate', number: '03', title: '单位犯罪·成立条件', ...SCENES.unitCrimeGate},
  {id: 'four-model-crossing', number: '04', title: '单位犯罪·四模型十字口', ...SCENES.fourModelCrossing},
  {id: 'unit-crossing-rules', number: '05', title: '串线规则·处罚·单位没了', ...SCENES.unitCrossingRules},
];

export const IdentityUnitSubjectPlayer = () => <RemotionDeck animationId="identity-unit-subject" component={IdentityUnitSubject} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="犯罪主体：身份·国家工作人员·单位犯罪" />;
export default IdentityUnitSubjectPlayer;
