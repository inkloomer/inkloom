import {PropertyCrimeLedger} from '@/animations/criminal/19/property-crime-ledger/remotion/PropertyCrimeLedger';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/19/property-crime-ledger/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'interest-three-models', number: '01', title: '财产法益三层次·三模型', ...SCENES.interestThreeModels},
  {id: 'possession-purpose-ward', number: '02', title: '非法占有目的＝排除意思＋利用意思', ...SCENES.possessionPurposeWard},
  {id: 'theft-transfer-peace', number: '03', title: '盗窃罪：转移占有·平和手段', ...SCENES.theftTransferPeace},
  {id: 'robbery-coercion-steps', number: '04', title: '抢劫罪：强制手段·事后转化·当场性', ...SCENES.robberyCoercionSteps},
  {id: 'fraud-extortion-split', number: '05', title: '诈骗 vs 盗窃（处分）·敲诈勒索', ...SCENES.fraudExtortionSplit},
  {id: 'embezzlement-trust-ledger', number: '06', title: '侵占罪：变占有为所有的转捩线', ...SCENES.embezzlementTrustLedger},
  {id: 'snatch-violence-lane', number: '07', title: '抢夺罪：暴力三阶与凶器拟制闸', ...SCENES.snatchViolenceLane},
  {id: 'robbery-aggravation-board', number: '08', title: '八个升格条件：通往加重法定刑的阶梯', ...SCENES.robberyAggravationBoard},
  {id: 'extortion-notice-flow', number: '09', title: '敲诈勒索：恐吓的四步流程', ...SCENES.extortionNoticeFlow},
  {id: 'extortion-freedom-spectrum', number: '10', title: '与抢劫罪的区分：意志自由光谱', ...SCENES.extortionFreedomSpectrum},
  {id: 'exercise-right-gate', number: '11', title: '与行使权利的区分：两道闸门', ...SCENES.exerciseRightGate},
  {id: 'minor-damage-misuse', number: '12', title: '故意毁坏财物罪：毁坏的三层环', ...SCENES.minorDamageMisuse},
  {id: 'minor-funds-wages', number: '13', title: '特定款物传送带与欠薪红线闸', ...SCENES.minorFundsWages},
  {id: 'completion-control-lattice', number: '14', title: '既遂标准：取得控制·三层控制圈', ...SCENES.completionControlLattice},
];

export const PropertyCrimeLedgerPlayer = () => <RemotionDeck animationId="property-crime-ledger" component={PropertyCrimeLedger} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="财产犯罪：法益·非法占有目的·盗窃·抢劫·诈骗" />;
export default PropertyCrimeLedgerPlayer;
