import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {SpatialRegimes} from '@/animations/international-law/03/spatial-regimes/remotion/SpatialRegimes';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/03/spatial-regimes/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'territory-parts', number: '01', title: '领土的构成', ...SCENES.territoryParts},
  {id: 'territory-acquisition', number: '02', title: '领土取得与限制', ...SCENES.territoryAcquisition},
  {id: 'sea-zones', number: '03', title: '海洋水域五大海域', ...SCENES.seaZones},
  {id: 'hot-pursuit', number: '04', title: '登临权 VS 紧追权', ...SCENES.hotPursuit},
  {id: 'continental-shelf', number: '05', title: '大陆架与底土', ...SCENES.continentalShelf},
  {id: 'special-waters', number: '06', title: '群岛水域与国际海峡', ...SCENES.specialWaters},
  {id: 'antarctica-space', number: '07', title: '南极与外层空间', ...SCENES.antarcticaSpace},
];

export const SpatialRegimesPlayer = () => (
  <RemotionDeck
    animationId="spatial-regimes"
    title="国际法上的空间"
    component={SpatialRegimes}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SpatialRegimesPlayer;
