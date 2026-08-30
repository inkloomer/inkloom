import {CrimeConstitutionAtlas} from '@/animations/criminal/02/crime-constitution-atlas/remotion/CrimeConstitutionAtlas';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/02/crime-constitution-atlas/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'elements-pipeline', number: '01', title: '四要件·审查流水线', ...SCENES.elementsPipeline},
  {id: 'staged-crime-ladder', number: '02', title: '犯罪概念的阶段化·15岁抢夺案', ...SCENES.stagedCrimeLadder},
  {id: 'objective-first-syllogism', number: '03', title: '先客观后主观·三段论', ...SCENES.objectiveFirstSyllogism},
  {id: 'element-type-matrix', number: '04', title: '构成要件要素·四对分类', ...SCENES.elementTypeMatrix},
  {id: 'doubt-concurrence-fork', number: '05', title: '存疑利于被告·想象竞合', ...SCENES.doubtConcurrenceFork},
];

export const CrimeConstitutionAtlasPlayer = () => <RemotionDeck animationId="crime-constitution-atlas" component={CrimeConstitutionAtlas} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="犯罪构成：四要件体系·三段论定罪" />;
export default CrimeConstitutionAtlasPlayer;
