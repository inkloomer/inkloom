import {StateSecurityWireRoom} from '@/animations/criminal/25/state-security-wire-room/remotion/StateSecurityWireRoom';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/25/state-security-wire-room/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'spy-wire-trio', number: '01', title: '间谍罪·叛逃罪', ...SCENES.spyWireTrio},
  {id: 'secrets-define-bench', number: '02', title: '国家秘密类犯罪·缩小解释', ...SCENES.secretsDefineBench},
  {id: 'secrets-crimes-compare', number: '03', title: '国家秘密类犯罪·罪名比较', ...SCENES.secretsCrimesCompare},
];

export const StateSecurityWireRoomPlayer = () => <RemotionDeck animationId="state-security-wire-room" component={StateSecurityWireRoom} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="危害国家安全罪：间谍·国家秘密·叛逃" />;
export default StateSecurityWireRoomPlayer;
