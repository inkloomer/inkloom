import {LegalInterpretation} from '@/animations/theoretical-law/17/legal-interpretation/remotion/LegalInterpretation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/17/legal-interpretation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'method-sources', number: '01', title: '六种解释方法的取义依据', ...SCENES.methodSources},
  {id: 'hermeneutic-circle', number: '02', title: '解释学循环与体系解释', ...SCENES.hermeneuticCircle},
  {id: 'rank-order', number: '03', title: '解释位阶与推翻通道', ...SCENES.rankOrder},
  {id: 'institutional-system', number: '04', title: '一元多级解释体制', ...SCENES.institutionalSystem},
  {id: 'formal-boundary', number: '05', title: '正式解释的效力边界', ...SCENES.formalBoundary},
];

export const LegalInterpretationPlayer = () => (
  <RemotionDeck
    animationId="legal-interpretation"
    component={LegalInterpretation}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律解释：六种方法、解释位阶与一元多级体制"
  />
);

export default LegalInterpretationPlayer;
