import {LegalAid} from '@/animations/theoretical-law/04/legal-aid/remotion/LegalAid';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/legal-aid/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'features-objects', number: '01', title: '法律援助的特征与对象', ...SCENES.featuresObjects},
  {id: 'appointment-implementation', number: '02', title: '指定辩护与实施形式', ...SCENES.appointmentImplementation},
  {id: 'procedure-remedy', number: '03', title: '实施程序、终止与救济', ...SCENES.procedureRemedy},
];

export const LegalAidPlayer = () => (
  <RemotionDeck
    animationId="legal-aid"
    component={LegalAid}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律援助制度"
  />
);

export default LegalAidPlayer;
