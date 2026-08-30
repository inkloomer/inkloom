import {MeasuresNightTower} from '@/animations/criminal-procedure-gold/08/measures-night-tower/remotion/MeasuresNightTower';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/08/measures-night-tower/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'principle-beacon-grid', number: '01', title: '塔台四灯：法定·比例·变更·必要', ...SCENES.principleBeaconGrid},
  {id: 'bail-residence-gauges', number: '02', title: '取保与监居：两块仪表分开读', ...SCENES.bailResidenceGauges},
  {id: 'detention-clearance-strip', number: '03', title: '拘传与拘留：滑行即计时', ...SCENES.detentionClearanceStrip},
  {id: 'arrest-holdshort-bay', number: '04', title: '逮捕与羁押审查：三灯全绿才放行', ...SCENES.arrestHoldshortBay},
];

export const MeasuresNightTowerPlayer = () => <RemotionDeck animationId="measures-night-tower" component={MeasuresNightTower} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="强制措施——塔台四灯、取保监居双表、拘留计时与逮捕三灯" />;
export default MeasuresNightTowerPlayer;
