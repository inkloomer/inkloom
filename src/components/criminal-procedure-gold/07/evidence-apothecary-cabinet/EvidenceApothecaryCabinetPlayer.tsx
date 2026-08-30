import {EvidenceApothecaryCabinet} from '@/animations/criminal-procedure-gold/07/evidence-apothecary-cabinet/remotion/EvidenceApothecaryCabinet';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/07/evidence-apothecary-cabinet/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'attribute-twin-scales', number: '01', title: '证据两把尺：有关联，且来得合法', ...SCENES.attributeTwinScales},
  {id: 'kind-sort-bench', number: '02', title: '种类八格柜：按取证时的形态入格', ...SCENES.kindSortBench},
  {id: 'class-pair-loom', number: '03', title: '分类双棱镜：来源分原始，独证分直接', ...SCENES.classPairLoom},
];

export const EvidenceApothecaryCabinetPlayer = () => <RemotionDeck animationId="evidence-apothecary-cabinet" component={EvidenceApothecaryCabinet} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑事证据·上——属性双尺、种类八格柜与分类双棱镜" />;
export default EvidenceApothecaryCabinetPlayer;
