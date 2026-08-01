import {PartyStatements} from '@/animations/civil-procedure/10/party-statements/remotion/PartyStatements'; import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/party-statements/remotion/storyboard'; import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'corroboration', number: '01', title: '不得单独定案', ...SCENES.corroboration},
  {id: 'refusal-conditions', number: '02', title: '拒绝陈述的不利后果', ...SCENES.refusalConditions},
  {id: 'procedural-boundary', number: '03', title: '拒绝到庭的程序边界', ...SCENES.proceduralBoundary},
];
export default () => <RemotionDeck animationId="party-statements" component={PartyStatements} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="当事人陈述规则" />;
