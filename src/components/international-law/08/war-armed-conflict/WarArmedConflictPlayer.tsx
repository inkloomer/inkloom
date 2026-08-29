import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {WarArmedConflict} from '@/animations/international-law/08/war-armed-conflict/remotion/WarArmedConflict';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/08/war-armed-conflict/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'war-definition', number: '01', title: '战争与武装冲突的界定', ...SCENES.warDefinition},
  {id: 'war-consequences', number: '02', title: '战争开始的法律后果', ...SCENES.warConsequences},
  {id: 'combat-limits', number: '03', title: '作战手段的限制', ...SCENES.combatLimits},
  {id: 'geneva-icc', number: '04', title: '日内瓦保护与国际刑事法院', ...SCENES.genevaIcc},
];

export const WarArmedConflictPlayer = () => (
  <RemotionDeck
    animationId="war-armed-conflict"
    title="战争与武装冲突法"
    component={WarArmedConflict}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default WarArmedConflictPlayer;
