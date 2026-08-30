import {InvestigationFieldKit} from '@/animations/criminal-procedure-gold/12/investigation-field-kit/remotion/InvestigationFieldKit';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/12/investigation-field-kit/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'interrogation-row', number: '01', title: '讯问', ...SCENES.interrogationRow},
  {id: 'appraisal-lineup-bench', number: '02', title: '鉴定 · 辨认', ...SCENES.appraisalLineupBench},
  {id: 'tech-surveillance-gate', number: '03', title: '技术侦查 · 核准追诉', ...SCENES.techSurveillanceGate},
];

export const InvestigationFieldKitPlayer = () => <RemotionDeck animationId="investigation-field-kit" component={InvestigationFieldKit} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="侦查——讯问、鉴定辨认、技术侦查与核准追诉" />;
export default InvestigationFieldKitPlayer;
