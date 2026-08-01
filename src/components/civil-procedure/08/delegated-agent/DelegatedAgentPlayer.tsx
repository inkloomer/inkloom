import {DelegatedAgent} from '@/animations/civil-procedure/08/delegated-agent/remotion/DelegatedAgent';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/08/delegated-agent/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'authorization-fork', number: '01', title: '授权分流', ...SCENES.authorizationFork},
  {id: 'special-authorization', number: '02', title: '特别授权', ...SCENES.specialAuthorization},
  {id: 'mediation-boundary', number: '03', title: '调解边界', ...SCENES.mediationBoundary},
  {id: 'stage-boundary', number: '04', title: '阶段边界', ...SCENES.stageBoundary},
];

export const DelegatedAgentPlayer = () => <RemotionDeck animationId="delegated-agent" animatedMediaFps={30} component={DelegatedAgent} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="委托代理的授权边界" />;

export default DelegatedAgentPlayer;
