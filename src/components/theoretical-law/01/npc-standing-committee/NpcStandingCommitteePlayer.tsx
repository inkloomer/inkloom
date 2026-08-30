import {NpcStandingCommittee} from '@/animations/theoretical-law/01/npc-standing-committee/remotion/NpcStandingCommittee';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/npc-standing-committee/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'composition', number: '01', title: '两席对照：组成与任期', ...SCENES.composition},
  {id: 'supervision-legislation', number: '02', title: '监督方式五法·立法权分工', ...SCENES.supervisionLegislation},
  {id: 'personnel', number: '03', title: '人事权：选举→决定→任免', ...SCENES.personnel},
  {id: 'meetings-decisions', number: '04', title: '会议制度·重大事项决定权', ...SCENES.meetingsDecisions},
  {id: 'motions', number: '05', title: '议案程序：从提案到公布', ...SCENES.motions},
];

export const NpcStandingCommitteePlayer = () => (
  <RemotionDeck
    animationId="npc-standing-committee"
    component={NpcStandingCommittee}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="全国人大与全国人大常委会：华表议政堂"
  />
);

export default NpcStandingCommitteePlayer;
