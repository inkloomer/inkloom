import {NotaryProcedure} from '@/animations/theoretical-law/04/notary-procedure/remotion/NotaryProcedure';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/notary-procedure/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'agency', number: '01', title: '公证代理与现场监督类公证', ...SCENES.agency},
  {id: 'joint', number: '02', title: '三类公证·二人共同办理', ...SCENES.joint},
];

export const NotaryProcedurePlayer = () => (
  <RemotionDeck
    animationId="notary-procedure"
    component={NotaryProcedure}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="公证程序的特别规定"
  />
);

export default NotaryProcedurePlayer;
