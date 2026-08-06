import {typography} from '@/animations/civil-procedure/16/party-death-procedure-effects/animation.meta';
import {PartyDeathProcedureEffects} from '@/animations/civil-procedure/16/party-death-procedure-effects/remotion/PartyDeathProcedureEffects';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/16/party-death-procedure-effects/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'pre-suit-death', number: '01', title: '起诉前被告死亡：无明确被告 → 程序性裁定', ...SCENES.preSuitDeath},
  {id: 'during-suit-general', number: '02', title: '诉讼中一方死亡：一般案件中止、等继承人表态', ...SCENES.duringSuitGeneral},
  {id: 'during-suit-identity', number: '03', title: '身份关系案件：标的随人走 · 直接裁定终结', ...SCENES.duringSuitIdentity},
];

export default () => (
  <RemotionDeck
    animationId="party-death-procedure-effects"
    component={PartyDeathProcedureEffects}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="当事人死亡对诉讼程序的影响"
    typography={typography}
    typographyScope={{animationId: 'party-death-procedure-effects', subject: 'civil-procedure', topic: '16'}}
  />
);
