import {PeriodRelayStation} from '@/animations/criminal-procedure-gold/10/period-relay-station/remotion/PeriodRelayStation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/10/period-relay-station/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'recalc-four-vents', number: '01', title: '重算的四个驿口，其余照走', ...SCENES.recalcFourVents},
  {id: 'appeal-clock-timeline', number: '02', title: '卢某案时刻表：一条十里驿道', ...SCENES.appealClockTimeline},
  {id: 'mail-recovery-rules', number: '03', title: '交邮不逾期；无耽误无恢复', ...SCENES.mailRecoveryRules},
];

export const PeriodRelayStationPlayer = () => <RemotionDeck animationId="period-relay-station" component={PeriodRelayStation} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="期间与送达——重算四驿口、上诉时刻表与交邮闸" />;
export default PeriodRelayStationPlayer;
