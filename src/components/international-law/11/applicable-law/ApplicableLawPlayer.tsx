import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {ApplicableLaw} from '@/animations/international-law/11/applicable-law/remotion/ApplicableLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/11/applicable-law/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'autonomy-closest', number: '01', title: '意思自治与最密切联系', ...SCENES.autonomyClosest},
  {id: 'subjects-agency', number: '02', title: '民事主体·时效·代理·信托', ...SCENES.subjectsAgency},
  {id: 'marriage', number: '03', title: '婚姻与夫妻关系', ...SCENES.marriage},
  {id: 'family-protection', number: '04', title: '父母子女·扶养·监护·收养', ...SCENES.familyProtection},
  {id: 'succession-property', number: '05', title: '继承与物权', ...SCENES.successionProperty},
  {id: 'contract-torts', number: '06', title: '合同与侵权之债', ...SCENES.contractTorts},
  {id: 'enrichment-ip-negotiable', number: '07', title: '不当得利·知产·票据', ...SCENES.enrichmentIpNegotiable},
  {id: 'maritime-aviation', number: '08', title: '海事与民用航空', ...SCENES.maritimeAviation},
];

export const ApplicableLawPlayer = () => (
  <RemotionDeck
    animationId="applicable-law"
    title="国际民商事法律适用"
    component={ApplicableLaw}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ApplicableLawPlayer;
