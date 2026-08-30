import {ComplicityPrinciplesJointPrincipal} from '@/animations/criminal/12/complicity-principles-joint-principal/remotion/ComplicityPrinciplesJointPrincipal';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/complicity-principles-joint-principal/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'role-taxonomy', number: '01', title: '共同犯罪·四大角色总览', ...SCENES.roleTaxonomy},
  {id: 'perpetrator-variants', number: '02', title: '正犯两个维度·三类分类', ...SCENES.perpetratorVariants},
  {id: 'joint-meaning-principle', number: '03', title: '『共同』『犯罪』原理拆词', ...SCENES.jointMeaningPrinciple},
  {id: 'child-lookout-case', number: '04', title: '10岁儿童与大爷望风案', ...SCENES.childLookoutCase},
  {id: 'co-principal-requirements', number: '05', title: '共同正犯·成立条件', ...SCENES.coPrincipalRequirements},
  {id: 'joint-liability-rule', number: '06', title: '部分实行·全部负责', ...SCENES.jointLiabilityRule},
  {id: 'negligence-three-theories', number: '07', title: '打野猪案·三说对决', ...SCENES.negligenceThreeTheories},
  {id: 'co-principal-variants', number: '08', title: '共同正犯的种类', ...SCENES.coPrincipalVariants},
];

export const ComplicityPrinciplesJointPrincipalPlayer = () => <RemotionDeck animationId="complicity-principles-joint-principal" component={ComplicityPrinciplesJointPrincipal} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（一）：分类原理·共同正犯" />;
export default ComplicityPrinciplesJointPrincipalPlayer;
