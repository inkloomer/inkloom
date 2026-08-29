import {MarxistLawEssence} from '@/animations/theoretical-law/01/marxist-law-essence/remotion/MarxistLawEssence';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/marxist-law-essence/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'official-formality', number: '01', title: '正式性：绑定国家机器', ...SCENES.officialFormality},
  {id: 'class-will', number: '02', title: '阶级性：唯一的意志来源', ...SCENES.classWill},
  {id: 'material-determinism', number: '03', title: '物质制约性：地基决定上部', ...SCENES.materialDeterminism},
  {id: 'depth-ladder-status', number: '04', title: '三重定性与理论地位', ...SCENES.depthLadderStatus},
];

export const MarxistLawEssencePlayer = () => (
  <RemotionDeck
    animationId="marxist-law-essence"
    component={MarxistLawEssence}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="马列法律本质：三重定性与理论地位"
  />
);

export default MarxistLawEssencePlayer;
