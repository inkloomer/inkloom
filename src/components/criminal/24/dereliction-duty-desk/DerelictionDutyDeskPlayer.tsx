import {DerelictionDutyDesk} from '@/animations/criminal/24/dereliction-duty-desk/remotion/DerelictionDutyDesk';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/24/dereliction-duty-desk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'abuse-negligence-split', number: '01', title: '滥用职权罪与玩忽职守罪', ...SCENES.abuseNegligenceSplit},
  {id: 'perversion-justice', number: '02', title: '徇私枉法罪·受贿关系', ...SCENES.perversionJustice},
  {id: 'ordinary-crimes', number: '03', title: '私放在押人员罪·徇私舞弊不移交刑事案件罪', ...SCENES.ordinaryCrimes},
];

export const DerelictionDutyDeskPlayer = () => <RemotionDeck animationId="dereliction-duty-desk" component={DerelictionDutyDesk} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="渎职罪：滥用职权·玩忽职守·徇私枉法" />;
export default DerelictionDutyDeskPlayer;
