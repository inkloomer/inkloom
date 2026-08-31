import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {PropertyInsurance} from '@/animations/commercial-law/26/property-insurance/remotion/PropertyInsurance';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/26/property-insurance/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'property-insurance-scene-01', number: '01', title: '标的转让', ...SCENES['property-insurance-scene-01']},
  {id: 'property-insurance-scene-02', number: '02', title: '责任保险', ...SCENES['property-insurance-scene-02']},
  {id: 'property-insurance-scene-03', number: '03', title: '代位求偿权', ...SCENES['property-insurance-scene-03']},
  {id: 'property-insurance-scene-04', number: '04', title: '适用除外', ...SCENES['property-insurance-scene-04']},
];
export const PropertyInsurancePlayer=()=> <RemotionDeck animationId="property-insurance" title="财产保险合同" component={PropertyInsurance} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default PropertyInsurancePlayer;
