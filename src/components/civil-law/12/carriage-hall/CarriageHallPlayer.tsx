import {CarriageHall} from '@/animations/civil-law/12/carriage-hall/remotion/CarriageHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/carriage-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'passenger-liability',
    number: '01',
    title: '旅客的身份与免责闸',
    ...SCENES['passenger-liability'],
  },
  {
    id: 'cargo-liability-split',
    number: '02',
    title: '三条责任车道',
    ...SCENES['cargo-liability-split'],
  },
  {
    id: 'shipper-free-change',
    number: '03',
    title: '交付前的四向闸刀',
    ...SCENES['shipper-free-change'],
  },
];

export const CarriageHallPlayer = () => (
  <RemotionDeck
    animationId="carriage-hall"
    title="运输——靛蓝站台馆"
    component={CarriageHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CarriageHallPlayer;
