import {NotaryRefusal} from '@/animations/theoretical-law/04/notary-refusal/remotion/NotaryRefusal';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-refusal/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'refusal', number: '01', title: '不予办理公证的情形', ...SCENES.refusal},
  {id: 'stop-object', number: '02', title: '终止公证的情形与公证对象', ...SCENES.stopObject},
];

export const NotaryRefusalPlayer = () => (
  <RemotionDeck
    animationId="notary-refusal"
    component={NotaryRefusal}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="不予办理公证与应当终止公证的情形"
  />
);

export default NotaryRefusalPlayer;
