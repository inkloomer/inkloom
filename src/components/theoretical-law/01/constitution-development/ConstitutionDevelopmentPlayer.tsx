import {ConstitutionDevelopment} from '@/animations/theoretical-law/01/constitution-development/remotion/ConstitutionDevelopment';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/constitution-development/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'documents-timeline', number: '01', title: '共同纲领与四部宪法', ...SCENES.documentsTimeline},
  {id: 'amendments-early', number: '02', title: '1988与1993修正案', ...SCENES.amendmentsEarly},
  {id: 'amendments-modern', number: '03', title: '1999与2004修正案', ...SCENES.amendmentsModern},
  {id: 'amendment-2018', number: '04', title: '2018修正案要点', ...SCENES.amendment2018},
  {id: 'mnemonics', number: '05', title: '连续变化口诀', ...SCENES.mnemonics},
];

export const ConstitutionDevelopmentPlayer = () => (
  <RemotionDeck
    animationId="constitution-development"
    component={ConstitutionDevelopment}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="新中国宪法的发展：四部宪法与五次修正"
  />
);

export default ConstitutionDevelopmentPlayer;
