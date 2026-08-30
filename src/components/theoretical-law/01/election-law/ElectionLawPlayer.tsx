import {ElectionLaw} from '@/animations/theoretical-law/01/election-law/remotion/ElectionLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/election-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'principles', number: '01', title: '选举五大原则', ...SCENES.principles},
  {id: 'hosts-voters', number: '02', title: '主持人与投票人', ...SCENES.hostsVoters},
  {id: 'candidates', number: '03', title: '候选人提名差额公示', ...SCENES.candidates},
  {id: 'voting-result', number: '04', title: '投票当选双过半', ...SCENES.votingResult},
  {id: 'review-recall', number: '05', title: '资格复查与罢免辞职', ...SCENES.reviewRecall},
];

export const ElectionLawPlayer = () => (
  <RemotionDeck
    animationId="election-law"
    component={ElectionLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="选举法：原则、程序与代表"
  />
);

export default ElectionLawPlayer;
