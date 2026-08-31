import {UnjustEnrichmentHall} from '@/animations/civil-law/05/unjust-enrichment-hall/remotion/UnjustEnrichmentHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/05/unjust-enrichment-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'elements-gate',
    number: '01',
    title: '不当得利的构成要件',
    ...SCENES['elements-gate'],
  },
  {
    id: 'return-scope-lane',
    number: '02',
    title: '不当得利的返还规则',
    ...SCENES['return-scope-lane'],
  },
  {
    id: 'return-target-fork',
    number: '03',
    title: '返还请求权的对象',
    ...SCENES['return-target-fork'],
  },
  {
    id: 'cumulation-ledger',
    number: '04',
    title: '不当得利与无因管理的竞合',
    ...SCENES['cumulation-ledger'],
  },
];

export const UnjustEnrichmentHallPlayer = () => (
  <RemotionDeck
    animationId="unjust-enrichment-hall"
    title="不当得利——不当得利馆"
    component={UnjustEnrichmentHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default UnjustEnrichmentHallPlayer;
