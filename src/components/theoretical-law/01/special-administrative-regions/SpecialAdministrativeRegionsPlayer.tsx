import {SpecialAdministrativeRegions} from '@/animations/theoretical-law/01/special-administrative-regions/remotion/SpecialAdministrativeRegions';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/special-administrative-regions/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'power-split', number: '01', title: '中央与特区权力分配', ...SCENES.powerSplit},
  {id: 'officials', number: '02', title: '港澳官员任职', ...SCENES.officials},
  {id: 'oath-interpret', number: '03', title: '宣誓与释法', ...SCENES.oathInterpret},
];

export const SpecialAdministrativeRegionsPlayer = () => (
  <RemotionDeck
    animationId="special-administrative-regions"
    component={SpecialAdministrativeRegions}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="特别行政区制度：中央与高度自治"
  />
);

export default SpecialAdministrativeRegionsPlayer;
