import {PublicOrderWatchTower} from '@/animations/criminal/22/public-order-watch-tower/remotion/PublicOrderWatchTower';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/22/public-order-watch-tower/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'official-duty-board', number: '01', title: '妨害公务罪与袭警罪', ...SCENES.officialDutyBoard},
  {id: 'credential-forge-bench', number: '02', title: '公文证件印章犯罪·招摇撞骗罪', ...SCENES.credentialForgeBench},
  {id: 'street-squat-stage', number: '03', title: '聚众斗殴·寻衅滋事·高空抛物', ...SCENES.streetSquatStage},
  {id: 'boss-den-counter', number: '04', title: '黑社会·赌博·虚假信息·作弊·计算机', ...SCENES.bossDenCounter},
  {id: 'justice-testimony-hall', number: '05', title: '伪证·妨害作证·帮助毁灭伪造证据', ...SCENES.justiceTestimonyHall},
  {id: 'justice-harbor-quay', number: '06', title: '窝藏包庇·掩饰隐瞒·脱逃', ...SCENES.justiceHarborQuay},
  {id: 'drug-dispatch-lane', number: '07', title: '毒品犯罪', ...SCENES.drugDispatchLane},
  {id: 'vice-brocade-room', number: '08', title: '卖淫类犯罪·淫秽物品犯罪', ...SCENES.viceBrocadeRoom},
];

export const PublicOrderWatchTowerPlayer = () => <RemotionDeck animationId="public-order-watch-tower" component={PublicOrderWatchTower} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="社会秩序犯罪：妨害公务·司法·毒品·卖淫" />;
export default PublicOrderWatchTowerPlayer;
