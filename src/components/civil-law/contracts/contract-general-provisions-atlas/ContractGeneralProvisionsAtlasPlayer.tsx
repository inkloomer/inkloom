import {typography} from '@/animations/civil-law/contracts/contract-general-provisions-atlas/animation.meta';
import {ContractGeneralProvisionsAtlas} from '@/animations/civil-law/contracts/contract-general-provisions-atlas/remotion/ContractGeneralProvisionsAtlas';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/contracts/contract-general-provisions-atlas/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'scope-and-chapter-spine', number: '01', title: '通则边界与八章骨架', ...SCENES.scopeAndChapterSpine},
  {id: 'formation-and-effect', number: '02', title: '合同订立与效力门', ...SCENES.formationAndEffect},
  {id: 'performance-and-preservation', number: '03', title: '履行与合同保全', ...SCENES.performanceAndPreservation},
  {id: 'change-termination-and-breach', number: '04', title: '变更、终止与违约救济', ...SCENES.changeTerminationAndBreach},
];

export default () => <RemotionDeck animationId="contract-general-provisions-atlas" component={ContractGeneralProvisionsAtlas} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="《民法典》合同编通则全景图" typography={typography} typographyScope={{animationId: 'contract-general-provisions-atlas', subject: 'civil-law', topic: 'contracts'}} />;
