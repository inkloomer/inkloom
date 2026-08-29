import {JudicialVsAdministrative} from '@/animations/theoretical-law/01/judicial-vs-administrative/remotion/JudicialVsAdministrative';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/judicial-vs-administrative/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'dual-meanings', number: '01', title: '司法与行政的定义', ...SCENES.dualMeanings},
  {id: 'four-criteria', number: '02', title: '司法与执法四别', ...SCENES.fourCriteria},
  {id: 'authority-independence', number: '03', title: '最终判断与司法独立', ...SCENES.authorityIndependence},
];

export const JudicialVsAdministrativePlayer = () => (
  <RemotionDeck
    animationId="judicial-vs-administrative"
    component={JudicialVsAdministrative}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="司法与行政的区别：对席两案"
  />
);

export default JudicialVsAdministrativePlayer;
