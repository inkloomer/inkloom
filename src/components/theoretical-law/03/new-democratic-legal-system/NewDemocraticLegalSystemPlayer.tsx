import {NewDemocraticLegalSystem} from '@/animations/theoretical-law/03/new-democratic-legal-system/remotion/NewDemocraticLegalSystem';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/new-democratic-legal-system/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'constitutional-docs', number: '01', title: '宪法性文件', ...SCENES.constitutionalDocs},
  {id: 'judicial-system', number: '02', title: '马锡五审判与人民调解', ...SCENES.judicialSystem},
];

export const NewDemocraticLegalSystemPlayer = () => (
  <RemotionDeck
    animationId="new-democratic-legal-system"
    component={NewDemocraticLegalSystem}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="新民主主义革命时期法制"
  />
);

export default NewDemocraticLegalSystemPlayer;
