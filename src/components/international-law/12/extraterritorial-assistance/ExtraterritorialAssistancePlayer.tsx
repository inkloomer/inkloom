import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {ExtraterritorialAssistance} from '@/animations/international-law/12/extraterritorial-assistance/remotion/ExtraterritorialAssistance';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/12/extraterritorial-assistance/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'service-routes', number: '01', title: '域外文书送达', ...SCENES.serviceRoutes},
  {id: 'hague-inbound', number: '02', title: '海牙公约管道', ...SCENES.hagueInbound},
  {id: 'evidence-lanes', number: '03', title: '域外调查取证', ...SCENES.evidenceLanes},
  {id: 'judgment-recognition', number: '04', title: '外国判决承认与执行', ...SCENES.judgmentRecognition},
  {id: 'arbitral-awards', number: '05', title: '外国仲裁裁决', ...SCENES.arbitralAwards},
];

export const ExtraterritorialAssistancePlayer = () => (
  <RemotionDeck
    animationId="extraterritorial-assistance"
    title="域外司法协助"
    component={ExtraterritorialAssistance}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ExtraterritorialAssistancePlayer;
