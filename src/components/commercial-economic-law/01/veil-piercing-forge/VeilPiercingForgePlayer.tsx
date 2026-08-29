import {VeilPiercingForge} from '@/animations/commercial-economic-law/01/veil-piercing-forge/remotion/VeilPiercingForge';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/veil-piercing-forge/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'piercing-grounds-chain', number: '01', title: '锤穿面纱：滥用换来连带', ...SCENES.piercingGrounds},
  {id: 'suit-structure-roster', number: '02', title: '被告名单怎么摆：释明而不代劳', ...SCENES.suitStructure},
  {id: 'triangle-pierce-map', number: '03', title: '三角刺破：一条链锁三扇门', ...SCENES.trianglePierce},
];

export const VeilPiercingForgePlayer = () => <RemotionDeck animationId="veil-piercing-forge" component={VeilPiercingForge} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="法人人格否认：刺破面纱与诉讼坐席" />;
export default VeilPiercingForgePlayer;
