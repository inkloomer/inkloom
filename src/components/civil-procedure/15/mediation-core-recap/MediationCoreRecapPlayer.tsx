import {typography} from '@/animations/civil-procedure/15/mediation-core-recap/animation.meta';
import {MediationCoreRecap} from '@/animations/civil-procedure/15/mediation-core-recap/remotion/MediationCoreRecap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/15/mediation-core-recap/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'core-map', number: '01', title: '调解核心要点总览', ...SCENES.coreMap},
  {id: 'judgment-document-rules', number: '02', title: '制作判决书的原则与例外', ...SCENES.judgmentRules},
  {id: 'third-party-signature', number: '03', title: '无独三与调解书生效', ...SCENES.thirdPartyRules},
  {id: 'guarantee-rules', number: '04', title: '担保的准许与生效', ...SCENES.guaranteeRules},
];

export default () => <RemotionDeck animationId="mediation-core-recap" component={MediationCoreRecap} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="调解核心要点总结" typography={typography} typographyScope={{animationId: 'mediation-core-recap', subject: 'civil-procedure', topic: '15'}} />;
