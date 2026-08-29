import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {OtherRegimesInternationalEconomicLaw} from '@/animations/international-law/19/other-regimes-international-economic-law/remotion/OtherRegimesInternationalEconomicLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/19/other-regimes-international-economic-law/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'paris-berne', number: '01', title: '巴黎×伯尔尼公约', ...SCENES.parisBerne},
  {id: 'trips-upgrade', number: '02', title: 'TRIPS', ...SCENES.tripsUpgrade},
  {id: 'miga-icsid', number: '03', title: 'MIGA×ICSID', ...SCENES.migaIcsid},
  {id: 'loans-guarantees', number: '04', title: '贷款与保函', ...SCENES.loansGuarantees},
  {id: 'tax-regimes', number: '05', title: '税收管辖与CRS', ...SCENES.taxRegimes},
];

export const OtherRegimesInternationalEconomicLawPlayer = () => (
  <RemotionDeck
    animationId="other-regimes-international-economic-law"
    title="国际经济法其他制度"
    component={OtherRegimesInternationalEconomicLaw}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default OtherRegimesInternationalEconomicLawPlayer;
