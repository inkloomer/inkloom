import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ProductQualityLaw} from '@/animations/economic-law/04/product-quality-law/remotion/ProductQualityLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/economic-law/04/product-quality-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'product-quality-law-scene-01', number: '01', title: '监督与瑕疵', ...SCENES['product-quality-law-scene-01']},
  {id: 'product-quality-law-scene-02', number: '02', title: '缺陷责任', ...SCENES['product-quality-law-scene-02']},
  {id: 'product-quality-law-scene-03', number: '03', title: '免责与时效', ...SCENES['product-quality-law-scene-03']},
];
export const ProductQualityLawPlayer=()=> <RemotionDeck animationId="product-quality-law" title="产品质量法" component={ProductQualityLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ProductQualityLawPlayer;
