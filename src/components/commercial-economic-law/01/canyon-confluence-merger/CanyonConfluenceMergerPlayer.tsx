import {CanyonConfluenceMerger} from '@/animations/commercial-economic-law/01/canyon-confluence-merger/remotion/CanyonConfluenceMerger';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/canyon-confluence-merger/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'simplified-merger', number: '01', title: '简易合并：主河道吞下支流', ...SCENES.simplifiedMerger},
  {id: 'survivor-vote', number: '02', title: '合并方的闸：七件大事要 2/3', ...SCENES.survivorVote},
  {id: 'minority-notice', number: '03', title: '岸边救生梯：通知与回购权', ...SCENES.minorityNotice},
];

export const CanyonConfluenceMergerPlayer = () => <RemotionDeck animationId="canyon-confluence-merger" component={CanyonConfluenceMerger} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="简易合并：主河道、泄洪闸与救生梯" />;
export default CanyonConfluenceMergerPlayer;
