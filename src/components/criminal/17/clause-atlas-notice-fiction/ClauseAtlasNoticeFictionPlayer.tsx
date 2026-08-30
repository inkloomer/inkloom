import {ClauseAtlasNoticeFiction} from '@/animations/criminal/17/clause-atlas-notice-fiction/remotion/ClauseAtlasNoticeFiction';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/17/clause-atlas-notice-fiction/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'crime-name-three-forms', number: '01', title: '罪名：单一 · 选择 · 概括', ...SCENES.crimeNameThreeForms},
  {id: 'crime-description-four', number: '02', title: '罪状：四种类型', ...SCENES.crimeDescriptionFour},
  {id: 'notice-fiction-fork', number: '03', title: '注意规定与法律拟制', ...SCENES.noticeFictionFork},
  {id: 'fiction-nine-atlas', number: '04', title: '刑法分则中常考的法律拟制', ...SCENES.fictionNineAtlas},
];

export const ClauseAtlasNoticeFictionPlayer = () => <RemotionDeck animationId="clause-atlas-notice-fiction" component={ClauseAtlasNoticeFiction} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="分论概说：罪名·罪状·注意规定与法律拟制" />;
export default ClauseAtlasNoticeFictionPlayer;
