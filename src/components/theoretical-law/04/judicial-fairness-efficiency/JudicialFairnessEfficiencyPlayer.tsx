import {JudicialFairnessEfficiency} from '@/animations/theoretical-law/04/judicial-fairness-efficiency/remotion/JudicialFairnessEfficiency';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judicial-fairness-efficiency/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'fairness', number: '01', title: '明镜高悬：公正的意义与七要素', ...SCENES.fairness},
  {id: 'openness-integrity', number: '02', title: '镜面铭带：公开与廉洁', ...SCENES.opennessIntegrity},
  {id: 'efficiency', number: '03', title: '堂训天平：公正优先兼顾效率', ...SCENES.efficiency},
];

export const JudicialFairnessEfficiencyPlayer = () => (
  <RemotionDeck
    animationId="judicial-fairness-efficiency"
    component={JudicialFairnessEfficiency}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="司法公正与司法效率"
  />
);

export default JudicialFairnessEfficiencyPlayer;
