import {OverviewPorcelainHall} from '@/animations/criminal-procedure-gold/01/overview-porcelain-hall/remotion/OverviewPorcelainHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/01/overview-porcelain-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'twin-value-screen', number: '01', title: '程序对实体：工具价值与独立价值', ...SCENES.twinValueScreen},
  {id: 'value-triad-cabinet', number: '02', title: '三大价值与效率理念', ...SCENES.valueTriadCabinet},
  {id: 'function-structure-stage', number: '03', title: '职能三分与控辩式构造', ...SCENES.functionStructureStage},
];

export const OverviewPorcelainHallPlayer = () => <RemotionDeck animationId="overview-porcelain-hall" component={OverviewPorcelainHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑诉概述——程序双价值、三大职能与控辩式构造" />;
export default OverviewPorcelainHallPlayer;
