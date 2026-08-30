import {ZhouLegalHistory} from '@/animations/theoretical-law/03/zhou-legal-history/remotion/ZhouLegalHistory';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/zhou-legal-history/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'ideology', number: '01', title: '以德配天明德慎罚', ...SCENES.ideology},
  {id: 'marriage', number: '02', title: '婚姻三原则六礼七出', ...SCENES.marriage},
  {id: 'judicature', number: '03', title: '狱讼两分五听三刺', ...SCENES.judicature},
];

export const ZhouLegalHistoryPlayer = () => (
  <RemotionDeck
    animationId="zhou-legal-history"
    component={ZhouLegalHistory}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="西周法制：德刑礼乐"
  />
);

export default ZhouLegalHistoryPlayer;
