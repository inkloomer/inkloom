import {LegalHistoryFirsts} from '@/animations/theoretical-law/03/legal-history-firsts/remotion/LegalHistoryFirsts';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/legal-history-firsts/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'china-codes', number: '01', title: '中国法典之最', ...SCENES.chinaCodes},
  {id: 'institutions', number: '02', title: '制度首创', ...SCENES.institutions},
  {id: 'modern-foreign', number: '03', title: '近代与外国之最', ...SCENES.modernForeign},
];

export const LegalHistoryFirstsPlayer = () => (
  <RemotionDeck
    animationId="legal-history-firsts"
    component={LegalHistoryFirsts}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="中外法制史之最"
  />
);

export default LegalHistoryFirstsPlayer;
