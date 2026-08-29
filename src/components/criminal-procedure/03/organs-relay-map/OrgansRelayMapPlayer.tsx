import {
  OrgansRelayMap,
} from '@/animations/criminal-procedure/03/organs-relay-map/remotion/OrgansRelayMap';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/03/organs-relay-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'vertical-lines-compare',
    number: '01',
    title: '领导与监督',
    ...SCENES['vertical-lines-compare'],
  },
  {
    id: 'investigation-organs-map',
    number: '02',
    title: '侦查权驿站图',
    ...SCENES['investigation-organs-map'],
  },
  {
    id: 'procuratorate-rules-route',
    number: '03',
    title: '检察内部令牌',
    ...SCENES['procuratorate-rules-route'],
  },
];

export const OrgansRelayMapPlayer = () => (
  <RemotionDeck
    animationId="organs-relay-map"
    title="公检法组织体系：领导与监督两线、侦查权驿站与检察内部令牌"
    component={OrgansRelayMap}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default OrgansRelayMapPlayer;
