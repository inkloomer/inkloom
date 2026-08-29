import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {InterregionalAssistance} from '@/animations/international-law/13/interregional-assistance/remotion/InterregionalAssistance';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/13/interregional-assistance/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'document-service', number: '01', title: '区际文书委托送达', ...SCENES.documentService},
  {id: 'evidence-taking', number: '02', title: '涉港澳委托调取证据', ...SCENES.evidenceTaking},
  {id: 'judgment-enforcement', number: '03', title: '判决的认可与执行', ...SCENES.judgmentEnforcement},
  {id: 'arbitral-award', number: '04', title: '仲裁裁决与保全', ...SCENES.arbitralAward},
  {id: 'common-rules', number: '05', title: '司法协助共同规则', ...SCENES.commonRules},
];

export const InterregionalAssistancePlayer = () => (
  <RemotionDeck
    animationId="interregional-assistance"
    title="区际司法协助"
    component={InterregionalAssistance}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default InterregionalAssistancePlayer;
