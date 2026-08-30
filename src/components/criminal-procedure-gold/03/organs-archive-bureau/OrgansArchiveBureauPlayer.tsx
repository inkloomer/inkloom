import {OrgansArchiveBureau} from '@/animations/criminal-procedure-gold/03/organs-archive-bureau/remotion/OrgansArchiveBureau';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/03/organs-archive-bureau/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'organ-hierarchy-lattice', number: '01', title: '专门机关：两样上下级，一张职权单', ...SCENES.organHierarchyLattice},
  {id: 'participant-sorting-desk', number: '02', title: '诉讼参与人：进围栏，再看交集', ...SCENES.participantSortingDesk},
  {id: 'unit-defendant-ledger', number: '03', title: '单位被告人：人格照自然人，代表人有讲究', ...SCENES.unitDefendantLedger},
];

export const OrgansArchiveBureauPlayer = () => <RemotionDeck animationId="organs-archive-bureau" component={OrgansArchiveBureau} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="专门机关与诉讼参与人——上下级两样关系、参与人围栏与单位被告人" />;
export default OrgansArchiveBureauPlayer;
