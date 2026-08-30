import {PlumAppealsClockhouse} from '@/animations/commercial-economic-law/05/plum-appeals-clockhouse/remotion/PlumAppealsClockhouse';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/05/plum-appeals-clockhouse/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'guarantor-triptych', number: '01', title: '保证人的三条出路：不免责', ...SCENES.guarantorTriptych},
  {id: 'defendant-compass', number: '02', title: '确认之诉：被告永远是债务人', ...SCENES.defendantCompass},
  {id: 'clepsydra-deadline', number: '03', title: '15 日漏刻：除斥期间不开闸', ...SCENES.clepsydraDeadline},
];

export const PlumAppealsClockhousePlayer = () => <RemotionDeck animationId="plum-appeals-clockhouse" component={PlumAppealsClockhouse} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="破产法：破产债权" />;
export default PlumAppealsClockhousePlayer;
