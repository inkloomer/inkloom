import {ConstitutionSourcesStructure} from '@/animations/theoretical-law/01/constitution-sources-structure/remotion/ConstitutionSourcesStructure';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/constitution-sources-structure/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'sources-five', number: '01', title: '五种宪法渊源', ...SCENES.sourcesFive},
  {id: 'codex-structure', number: '02', title: '宪法典三段结构', ...SCENES.codexStructure},
  {id: 'verdict-board', number: '03', title: '渊源判词与中美对比', ...SCENES.verdictBoard},
];

export const ConstitutionSourcesStructurePlayer = () => (
  <RemotionDeck
    animationId="constitution-sources-structure"
    component={ConstitutionSourcesStructure}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="宪法的渊源与宪法典结构"
  />
);

export default ConstitutionSourcesStructurePlayer;
