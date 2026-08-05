import {typography} from '@/animations/civil-procedure/18/public-interest-litigation-network/animation.meta';
import {PublicInterestLitigationNetwork} from '@/animations/civil-procedure/18/public-interest-litigation-network/remotion/PublicInterestLitigationNetwork';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/18/public-interest-litigation-network/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'public-interest-entry', number: '01', title: '公益诉讼的主体、条件与管辖', ...SCENES.publicInterestEntry},
  {id: 'co-plaintiff-and-private-claims', number: '02', title: '共同原告与私益诉讼并行', ...SCENES.coPlaintiffAndPrivateClaims},
  {id: 'settlement-public-review', number: '03', title: '和解调解与社会公告审查', ...SCENES.settlementPublicReview},
  {id: 'procuratorate-supplementarity', number: '04', title: '检察机关的补充起诉路径', ...SCENES.procuratorateSupplementarity},
];

export default () => <RemotionDeck animationId="public-interest-litigation-network" component={PublicInterestLitigationNetwork} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="公益诉讼程序" typography={typography} typographyScope={{animationId: 'public-interest-litigation-network', subject: 'civil-procedure', topic: '18'}} />;
