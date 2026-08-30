import {InterestRightsBalance} from '@/animations/criminal/03/interest-rights-balance/remotion/InterestRightsBalance';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/03/interest-rights-balance/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'object-interest-rows', number: '01', title: '对象与客体·一盘两层', ...SCENES.objectInterestRows},
  {id: 'doctrine-fork-empty-house', number: '02', title: '法益的解释功能·空房案', ...SCENES.doctrineForkEmptyHouse},
  {id: 'dual-charter-balance', number: '03', title: '双重任务·冲突时优先人权', ...SCENES.dualCharterBalance},
];

export const InterestRightsBalancePlayer = () => <RemotionDeck animationId="interest-rights-balance" component={InterestRightsBalance} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="犯罪客体：法益·解释功能·保障人权" />;
export default InterestRightsBalancePlayer;
