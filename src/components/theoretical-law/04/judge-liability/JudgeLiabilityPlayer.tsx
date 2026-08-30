import {JudgeLiability} from '@/animations/theoretical-law/04/judge-liability/remotion/JudgeLiability';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judge-liability/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'no-punish', number: '01', title: '不予与免予纪律处分', ...SCENES.noPunish},
  {id: 'relieve-revoke', number: '02', title: '处分的解除、变更和撤销', ...SCENES.relieveRevoke},
];

export const JudgeLiabilityPlayer = () => (
  <RemotionDeck
    animationId="judge-liability"
    component={JudgeLiability}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法官职业责任"
  />
);

export default JudgeLiabilityPlayer;
