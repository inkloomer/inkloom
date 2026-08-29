import {BranchWalletLedger} from '@/animations/commercial-economic-law/01/branch-wallet-ledger/remotion/BranchWalletLedger';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/branch-wallet-ledger/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'branch-status-map', number: '01', title: '分公司是夹层：一家还是两家', ...SCENES.branchStatus},
  {id: 'execution-draw-order', number: '02', title: '执行顺序：一个钱包分夹层，逐层取出', ...SCENES.executionDraw},
  {id: 'exam-trap-verdict', number: '03', title: '选非题：割裂血脉的选项，当选', ...SCENES.examTrap},
];

export const BranchWalletLedgerPlayer = () => <RemotionDeck animationId="branch-wallet-ledger" component={BranchWalletLedger} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="分公司法律地位：一座钱柜的夹层与执行顺序" />;
export default BranchWalletLedgerPlayer;
