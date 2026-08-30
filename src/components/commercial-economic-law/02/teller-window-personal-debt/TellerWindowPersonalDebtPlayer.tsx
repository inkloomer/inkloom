import {TellerWindowPersonalDebt} from '@/animations/commercial-economic-law/02/teller-window-personal-debt/remotion/TellerWindowPersonalDebt';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/teller-window-personal-debt/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'two-permits', number: '01', title: '两扇允许的窗：收益与份额', ...SCENES.twoPermits},
  {id: 'two-bans', number: '02', title: '两扇锁死的门：抵销与代位', ...SCENES.twoBans},
  {id: 'preemption', number: '03', title: '接手优先权：给合伙人，不给债权人', ...SCENES.preemption},
];

export const TellerWindowPersonalDebtPlayer = () => <RemotionDeck animationId="teller-window-personal-debt" component={TellerWindowPersonalDebt} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="个人债务两开两锁：收益、份额、抵销、代位" />;
export default TellerWindowPersonalDebtPlayer;
