import {EconCrimeFiling} from '@/animations/criminal/21/econ-crime-filing/remotion/EconCrimeFiling';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/21/econ-crime-filing/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'production-smuggling', number: '01', title: '生产销售伪劣·走私犯罪', ...SCENES.productionSmuggling},
  {id: 'credit-card-fraud', number: '02', title: '信用卡诈骗罪（五星级罪名）', ...SCENES.creditCardFraud},
  {id: 'money-laundering-tax', number: '03', title: '洗钱罪·逃税罪', ...SCENES.moneyLaunderingTax},
  {id: 'insurance-loan-fraud', number: '04', title: '贷款诈骗罪·保险诈骗罪', ...SCENES.insuranceLoanFraud},
  {id: 'company-order', number: '05', title: '妨害对公司、企业的管理秩序罪', ...SCENES.companyOrder},
  {id: 'currency-notes', number: '06', title: '货币犯罪·金融票证·妨害信用卡管理', ...SCENES.currencyNotes},
  {id: 'tax-rebate-fund', number: '07', title: '骗取出口退税·虚开发票·集资类犯罪', ...SCENES.taxRebateFund},
  {id: 'ip-crimes', number: '08', title: '侵犯知识产权罪', ...SCENES.ipCrimes},
  {id: 'market-order', number: '09', title: '扰乱市场秩序罪', ...SCENES.marketOrder},
];

export const EconCrimeFilingPlayer = () => <RemotionDeck animationId="econ-crime-filing" component={EconCrimeFiling} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="经济犯罪：伪劣产品·信用卡诈骗·洗钱·逃税·保险" />;
export default EconCrimeFilingPlayer;
