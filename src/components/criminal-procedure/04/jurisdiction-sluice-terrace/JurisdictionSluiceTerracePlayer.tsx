import {
  JurisdictionSluiceTerrace,
} from '@/animations/criminal-procedure/04/jurisdiction-sluice-terrace/remotion/JurisdictionSluiceTerrace';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/04/jurisdiction-sluice-terrace/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'level-terrace-gates',
    number: '01',
    title: '级别闸室',
    ...SCENES['level-terrace-gates'],
  },
  {
    id: 'territory-main-auxiliary',
    number: '02',
    title: '主辅水渠',
    ...SCENES['territory-main-auxiliary'],
  },
  {
    id: 'transfer-designation-board',
    number: '03',
    title: '移送调度',
    ...SCENES['transfer-designation-board'],
  },
];

export const JurisdictionSluiceTerracePlayer = () => (
  <RemotionDeck
    animationId="jurisdiction-sluice-terrace"
    title="刑事管辖：级别闸室、主辅水渠与移送调度板"
    component={JurisdictionSluiceTerrace}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default JurisdictionSluiceTerracePlayer;
