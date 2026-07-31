import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {LegalJurisdiction} from '@/animations/civil-procedure/04/legal-jurisdiction/remotion/LegalJurisdiction';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/04/legal-jurisdiction/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'definition', number: '01', title: '主管是什么？', ...SCENES.definition},
  {id: 'court-scope', number: '02', title: '哪些争议归法院？', ...SCENES.scope},
  {id: 'dispute-resolution', number: '03', title: '三种纠纷处理关系', ...SCENES.relations},
  {id: 'mediation-confirmation', number: '04', title: '人民调解与司法确认', ...SCENES.mediation},
  {id: 'arbitration-exclusion', number: '05', title: '仲裁：或裁或审', ...SCENES.arbitration},
  {id: 'labor-arbitration', number: '06', title: '劳动仲裁前置', ...SCENES.labor},
  {id: 'relationship-map', number: '07', title: '最终关系图', ...SCENES.recap},
];

export const LegalJurisdictionPlayer = () => (
  <RemotionDeck
    animationId="legal-jurisdiction"
    title="民事诉讼主管"
    component={LegalJurisdiction}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LegalJurisdictionPlayer;
