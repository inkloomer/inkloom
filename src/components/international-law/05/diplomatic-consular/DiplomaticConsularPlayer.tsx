import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {DiplomaticConsular} from '@/animations/international-law/05/diplomatic-consular/remotion/DiplomaticConsular';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/05/diplomatic-consular/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'mission-comparison', number: '01', title: '外交关系 VS 领事关系', ...SCENES.missionComparison},
  {id: 'envoy-structure', number: '02', title: '外交机关与使馆三级', ...SCENES.envoyStructure},
  {id: 'staff-protocol', number: '03', title: '人员派遣与职务开始', ...SCENES.staffProtocol},
  {id: 'premises-immunity', number: '04', title: '使领馆特权与豁免', ...SCENES.premisesImmunity},
  {id: 'personal-immunities', number: '05', title: '人员特权与豁免', ...SCENES.personalImmunities},
  {id: 'mission-duties', number: '06', title: '使馆人员的义务', ...SCENES.missionDuties},
];

export const DiplomaticConsularPlayer = () => (
  <RemotionDeck
    animationId="diplomatic-consular"
    title="外交关系与领事关系法"
    component={DiplomaticConsular}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DiplomaticConsularPlayer;
