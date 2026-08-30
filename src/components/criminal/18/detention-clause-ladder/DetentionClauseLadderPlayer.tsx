import {DetentionClauseLadder} from '@/animations/criminal/18/detention-clause-ladder/remotion/DetentionClauseLadder';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/18/detention-clause-ladder/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'conduct-deception-gate', number: '01', title: '构成要件·拘禁行为与欺骗的分水岭', ...SCENES.conductDeceptionGate},
  {id: 'aggravated-result-chain', number: '02', title: '第2款第1句·结果加重犯的因果链', ...SCENES.aggravatedResultChain},
  {id: 'fiction-conversion-gate', number: '03', title: '第2款第2句·法律拟制与第二行为的转化', ...SCENES.fictionConversionGate},
  {id: 'four-branch-loom', number: '04', title: '四分法·经线行为类型 × 纬线主观心理', ...SCENES.fourBranchLoom},
  {id: 'debt-detention-notice', number: '05', title: '第238条第3款·索债型扣押与注意规定', ...SCENES.debtDetentionNotice},
];

export const DetentionClauseLadderPlayer = () => (
  <RemotionDeck
    animationId="detention-clause-ladder"
    component={DetentionClauseLadder}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="人身犯罪·非法拘禁罪第238条的三款与四分法定性"
  />
);

export default DetentionClauseLadderPlayer;
