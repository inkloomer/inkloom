import {SurpriseJudgmentFocus} from '@/animations/civil-procedure/11/surprise-judgment-focus/remotion/SurpriseJudgmentFocus';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/11/surprise-judgment-focus/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'recognition-mismatch', number: '01', title: '法院认定与当事人主张不一致', ...SCENES.recognitionMismatch},
  {id: 'issue-hearing-path', number: '02', title: '把不一致列为争议焦点', ...SCENES.issueHearingPath},
  {id: 'disposition-boundary', number: '03', title: '变更诉请与处分边界', ...SCENES.dispositionBoundary},
];

export const SurpriseJudgmentFocusPlayer = () => <RemotionDeck animationId="surprise-judgment-focus" component={SurpriseJudgmentFocus} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="法律关系认定与防止突袭裁判" />;
export default SurpriseJudgmentFocusPlayer;
