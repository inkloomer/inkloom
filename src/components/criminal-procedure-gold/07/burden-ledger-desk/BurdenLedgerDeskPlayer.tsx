import {BurdenLedgerDesk} from '@/animations/criminal-procedure-gold/07/burden-ledger-desk/remotion/BurdenLedgerDesk';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/07/burden-ledger-desk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'subject-object-ledger', number: '01', title: '证明三联账：谁记账、记什么、免记什么', ...SCENES.subjectObjectLedger},
  {id: 'burden-split-rules', number: '02', title: '责任分账：谁主张，谁举证', ...SCENES.burdenSplitRules},
  {id: 'traps-recap-shelf', number: '03', title: '易错上架：动机能佐证，臆测要下架', ...SCENES.trapsRecapShelf},
];

export const BurdenLedgerDeskPlayer = () => <RemotionDeck animationId="burden-ledger-desk" component={BurdenLedgerDesk} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑事证据·下——证明三联账、责任分账与易错上架" />;
export default BurdenLedgerDeskPlayer;
