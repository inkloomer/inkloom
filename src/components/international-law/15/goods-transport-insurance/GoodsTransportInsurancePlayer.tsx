import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {GoodsTransportInsurance} from '@/animations/international-law/15/goods-transport-insurance/remotion/GoodsTransportInsurance';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/15/goods-transport-insurance/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'bill-of-lading', number: '01', title: '海运提单', ...SCENES.billOfLading},
  {id: 'carrier-delivery', number: '02', title: '无正本提单交货的责任', ...SCENES.carrierDelivery},
  {id: 'carrier-cargo-loss', number: '03', title: '承运人的货损责任', ...SCENES.carrierCargoLoss},
  {id: 'three-rules', number: '04', title: '海牙·维斯比 vs 汉堡', ...SCENES.threeRules},
  {id: 'transport-modes', number: '05', title: '海运·空运·铁路对照', ...SCENES.transportModes},
  {id: 'marine-risks-losses', number: '06', title: '海上风险与损失判定', ...SCENES.marineRisksLosses},
  {id: 'insurance-coverage', number: '07', title: '保险险别与期间', ...SCENES.insuranceCoverage},
];

export const GoodsTransportInsurancePlayer = () => (
  <RemotionDeck
    animationId="goods-transport-insurance"
    title="国际货物运输与保险"
    component={GoodsTransportInsurance}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default GoodsTransportInsurancePlayer;
