import {JurisdictionSeaChart} from '@/animations/criminal-procedure-gold/04/jurisdiction-sea-chart/remotion/JurisdictionSeaChart';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/04/jurisdiction-sea-chart/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'filing-authority-split', number: '01', title: '立案三分流：谁家孩子谁家抱', ...SCENES.filingAuthoritySplit},
  {id: 'trial-jurisdiction-ladder', number: '02', title: '审判管辖：先纵后横两把尺', ...SCENES.trialJurisdictionLadder},
  {id: 'special-venue-ledger', number: '03', title: '特殊地段与并案：航线各记各的锚点', ...SCENES.specialVenueLedger},
];

export const JurisdictionSeaChartPlayer = () => <RemotionDeck animationId="jurisdiction-sea-chart" component={JurisdictionSeaChart} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑事管辖——立案三分流、先纵后横与特殊地段锚点" />;
export default JurisdictionSeaChartPlayer;
