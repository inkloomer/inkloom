import {PrinciplesChalkboardHall} from '@/animations/criminal-procedure-gold/02/principles-chalkboard-hall/remotion/PrinciplesChalkboardHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/02/principles-chalkboard-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'principle-pillars', number: '01', title: '原则三柱：程序法定·权利保障·专属定罪', ...SCENES.principlePillars},
  {id: 'supervision-leniency-board', number: '02', title: '监督有边界，从宽有闸门', ...SCENES.supervisionLeniencyBoard},
  {id: 'statute-bar-border-notes', number: '03', title: '第16条的边界与涉外的四条规矩', ...SCENES.statuteBarBorderNotes},
];

export const PrinciplesChalkboardHallPlayer = () => <RemotionDeck animationId="principles-chalkboard-hall" component={PrinciplesChalkboardHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑诉基本原则——程序法定、认罪认罚从宽与法定不追责" />;
export default PrinciplesChalkboardHallPlayer;
