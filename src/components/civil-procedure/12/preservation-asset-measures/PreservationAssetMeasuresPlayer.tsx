import {PreservationAssetMeasures} from '@/animations/civil-procedure/12/preservation-asset-measures/remotion/PreservationAssetMeasures';
import {typography} from '@/animations/civil-procedure/12/preservation-asset-measures/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/preservation-asset-measures/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'ordinary-property', number: '01', title: '一般财产保全', ...SCENES.ordinaryProperty},
  {id: 'perishable-value', number: '02', title: '鲜活易腐物变价', ...SCENES.perishableValue},
  {id: 'secured-property', number: '03', title: '担保财产与优先权', ...SCENES.securedProperty},
];
export default () => <RemotionDeck animationId="preservation-asset-measures" component={PreservationAssetMeasures} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="保全财产措施" typography={typography} typographyScope={{animationId: 'preservation-asset-measures', subject: 'civil-procedure', topic: '12'}} />;
