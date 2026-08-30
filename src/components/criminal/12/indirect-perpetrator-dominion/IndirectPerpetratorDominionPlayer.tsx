import {IndirectPerpetratorDominion} from '@/animations/criminal/12/indirect-perpetrator-dominion/remotion/IndirectPerpetratorDominion';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/indirect-perpetrator-dominion/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'dominion-formula', number: '01', title: '间接正犯·与教唆犯一线之隔', ...SCENES.dominionFormula},
  {id: 'dominion-three-sources', number: '02', title: '支配力的三个来源', ...SCENES.dominionThreeSources},
  {id: 'coercion-modes', number: '03', title: '强制手段·三情形', ...SCENES.coercionModes},
  {id: 'deception-modes', number: '04', title: '欺骗手段·四情形', ...SCENES.deceptionModes},
  {id: 'statutory-identity-case', number: '05', title: '法定身份·虐囚案双镜', ...SCENES.statutoryIdentityCase},
  {id: 'accessory-dependence', number: '06', title: '共犯从属性·两说对决', ...SCENES.accessoryDependence},
  {id: 'form-stage-dependence', number: '07', title: '犯罪形态的从属性', ...SCENES.formStageDependence},
  {id: 'form-case-quiz', number: '08', title: '形态对照·真题印证', ...SCENES.formCaseQuiz},
];

export const IndirectPerpetratorDominionPlayer = () => <RemotionDeck animationId="indirect-perpetrator-dominion" component={IndirectPerpetratorDominion} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（二）：间接正犯·共犯从属性" />;
export default IndirectPerpetratorDominionPlayer;
