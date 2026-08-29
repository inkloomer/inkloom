import {SourcesOfLaw} from '@/animations/theoretical-law/01/sources-of-law/remotion/SourcesOfLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/sources-of-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'meaning-split', number: '01', title: '法律渊源的含义：正式与非正式', ...SCENES.meaningSplit},
  {id: 'legislative-ladder', number: '02', title: '当代中国的正式法律渊源（立法体制）', ...SCENES.legislativeLadder},
  {id: 'hierarchy-conflicts', number: '03', title: '不同位阶的冲突：上位法优于下位法', ...SCENES.hierarchyConflicts},
  {id: 'same-level-conflicts', number: '04', title: '同一位阶的冲突：原则与裁决路线', ...SCENES.sameLevelConflicts},
  {id: 'informal-sources', number: '05', title: '常见的非正式法源', ...SCENES.informalSources},
];

export const SourcesOfLawPlayer = () => (
  <RemotionDeck
    animationId="sources-of-law"
    component={SourcesOfLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律渊源：正式与非正式、位阶与裁决"
  />
);

export default SourcesOfLawPlayer;
