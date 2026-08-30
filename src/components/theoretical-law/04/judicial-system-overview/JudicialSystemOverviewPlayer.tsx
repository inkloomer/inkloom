import {JudicialSystemOverview} from '@/animations/theoretical-law/04/judicial-system-overview/remotion/JudicialSystemOverview';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judicial-system-overview/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '玉璧镌义：什么是司法', ...SCENES.concept},
  {id: 'comparison', number: '02', title: '东西玉屏：司法机关的范围', ...SCENES.comparison},
];

export const JudicialSystemOverviewPlayer = () => (
  <RemotionDeck
    animationId="judicial-system-overview"
    component={JudicialSystemOverview}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="司法的概述：墨玉法堂"
  />
);

export default JudicialSystemOverviewPlayer;
