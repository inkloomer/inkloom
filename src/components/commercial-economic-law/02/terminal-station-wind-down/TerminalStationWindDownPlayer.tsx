import {TerminalStationWindDown} from '@/animations/commercial-economic-law/02/terminal-station-wind-down/remotion/TerminalStationWindDown';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/02/terminal-station-wind-down/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'removal-arrival', number: '01', title: '异议不阻生效：齐某的除名与解散', ...SCENES.removalArrival},
  {id: 'notice', number: '02', title: '已知债权人也要通知：10日＋60日', ...SCENES.notice},
  {id: 'liability', number: '03', title: '未清偿也可注销：责任分层不灭失', ...SCENES.liability},
];

export const TerminalStationWindDownPlayer = () => <RemotionDeck animationId="terminal-station-wind-down" component={TerminalStationWindDown} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="解散清算注销：进站、清点与摘牌" />;
export default TerminalStationWindDownPlayer;
