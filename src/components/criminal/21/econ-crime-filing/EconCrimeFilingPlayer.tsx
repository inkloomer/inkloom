import {EconCrimeFiling} from '@/animations/criminal/21/econ-crime-filing/remotion/EconCrimeFiling';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/21/econ-crime-filing/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'production-smuggling', number: '01', title: '生产销售伪劣·走私犯罪', ...SCENES.productionSmuggling},
  {id: 'credit-card-fraud', number: '02', title: '信用卡诈骗罪（五星级罪名）', ...SCENES.creditCardFraud},
  {id: 'money-laundering-tax', number: '03', title: '洗钱罪·逃税罪', ...SCENES.moneyLaunderingTax},
  {id: 'insurance-loan-fraud', number: '04', title: '贷款诈骗罪·保险诈骗罪', ...SCENES.insuranceLoanFraud},
];

export const EconCrimeFilingPlayer = () => <RemotionDeck animationId="econ-crime-filing" component={EconCrimeFiling} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="经济犯罪：伪劣产品·信用卡诈骗·洗钱·逃税·保险" />;
export default EconCrimeFilingPlayer;
