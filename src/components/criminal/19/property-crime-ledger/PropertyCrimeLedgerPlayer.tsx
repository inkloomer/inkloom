import {PropertyCrimeLedger} from '@/animations/criminal/19/property-crime-ledger/remotion/PropertyCrimeLedger';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/19/property-crime-ledger/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'interest-three-models', number: '01', title: '财产法益三层次·三模型', ...SCENES.interestThreeModels},
  {id: 'possession-purpose-ward', number: '02', title: '非法占有目的＝排除意思＋利用意思', ...SCENES.possessionPurposeWard},
  {id: 'theft-transfer-peace', number: '03', title: '盗窃罪：转移占有·平和手段', ...SCENES.theftTransferPeace},
  {id: 'robbery-coercion-steps', number: '04', title: '抢劫罪：强制手段·事后转化·当场性', ...SCENES.robberyCoercionSteps},
  {id: 'fraud-extortion-split', number: '05', title: '诈骗 vs 盗窃（处分）·敲诈勒索', ...SCENES.fraudExtortionSplit},
  {id: 'embezzlement-trust-ledger', number: '06', title: '侵占罪：他人所有·自己占有', ...SCENES.embezzlementTrustLedger},
  {id: 'snatch-violence-lane', number: '07', title: '抢夺罪：对物暴力·对人有危险', ...SCENES.snatchViolenceLane},
  {id: 'robbery-aggravation-board', number: '08', title: '抢劫罪：八个法定刑升格条件', ...SCENES.robberyAggravationBoard},
  {id: 'extortion-will-freedom', number: '09', title: '敲诈勒索：恐惧心理·意志自由', ...SCENES.extortionWillFreedom},
  {id: 'minor-crimes-completion', number: '10', title: '普通罪名：毁坏·挪用·欠薪', ...SCENES.minorCrimesCompletion},
  {id: 'completion-control-lattice', number: '11', title: '既遂标准：取得控制说', ...SCENES.completionControlLattice},
];

export const PropertyCrimeLedgerPlayer = () => <RemotionDeck animationId="property-crime-ledger" component={PropertyCrimeLedger} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="财产犯罪：法益·非法占有目的·盗窃·抢劫·诈骗" />;
export default PropertyCrimeLedgerPlayer;
