import {SpringAutumnWarringStates} from '@/animations/theoretical-law/03/spring-autumn-warring-states/remotion/SpringAutumnWarringStates';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/spring-autumn-warring-states/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'casting', number: '01', title: '两次公布成文法', ...SCENES.casting},
  {id: 'fajing', number: '02', title: '《法经》六篇', ...SCENES.fajing},
  {id: 'shang-yang', number: '03', title: '商鞅变法四措施', ...SCENES.shangYang},
];

export const SpringAutumnWarringStatesPlayer = () => (
  <RemotionDeck
    animationId="spring-autumn-warring-states"
    component={SpringAutumnWarringStates}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="春秋战国：铸刑鼎·法经·商鞅变法"
  />
);

export default SpringAutumnWarringStatesPlayer;
