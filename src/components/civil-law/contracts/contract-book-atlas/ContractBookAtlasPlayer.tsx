import {typography} from '@/animations/civil-law/contracts/contract-book-atlas/animation.meta';
import {ContractBookAtlas} from '@/animations/civil-law/contracts/contract-book-atlas/remotion/ContractBookAtlas';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/contracts/contract-book-atlas/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'scope-and-chapter-spine', number: '01', title: '通则边界与八章骨架', ...SCENES.scopeAndChapterSpine},
  {id: 'formation-and-effect', number: '02', title: '合同订立与效力门', ...SCENES.formationAndEffect},
  {id: 'performance-and-preservation', number: '03', title: '履行与合同保全', ...SCENES.performanceAndPreservation},
  {id: 'change-termination-and-breach', number: '04', title: '变更、终止与违约救济', ...SCENES.changeTerminationAndBreach},
  {id: 'three-subdivision-map', number: '05', title: '合同编三分编与二十九章', ...SCENES.threeSubdivisionMap},
  {id: 'typical-contract-families', number: '06', title: '十九类典型合同的位置', ...SCENES.typicalContractFamilies},
  {id: 'quasi-contract-restitution', number: '07', title: '无因管理与不当得利', ...SCENES.quasiContractRestitution},
];

export default () => <RemotionDeck animationId="contract-book-atlas" component={ContractBookAtlas} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="《民法典》合同编全景图" typography={typography} typographyScope={{animationId: 'contract-book-atlas', subject: 'civil-law', topic: 'contracts'}} />;
