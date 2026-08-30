import {CentralMilitaryCommission} from '@/animations/theoretical-law/01/central-military-commission/remotion/CentralMilitaryCommission';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/central-military-commission/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'tallies', number: '01', title: '虎符令签：决定与公布对照', ...SCENES.tallies},
  {id: 'cmc', number: '02', title: '帅帐铭牌：中央军事委员会', ...SCENES.cmc},
];

export const CentralMilitaryCommissionPlayer = () => (
  <RemotionDeck
    animationId="central-military-commission"
    component={CentralMilitaryCommission}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="中央军委：虎符辕门"
  />
);

export default CentralMilitaryCommissionPlayer;
