import {SpecialTortWarningMap} from '@/animations/civil-law/19/special-tort-warning-map/remotion/SpecialTortWarningMap';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/19/special-tort-warning-map/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'employment-liability-lane',
    number: '01',
    title: '用工责任谱系：雇主·派遣·帮工·定作',
    ...SCENES['employment-liability-lane'],
  },
  {
    id: 'pollution-presumption-causeway',
    number: '02',
    title: '环境污染责任',
    ...SCENES['pollution-presumption-causeway'],
  },
  {
    id: 'falling-object-hazard-ladder',
    number: '03',
    title: '物品掉落与物件致损',
    ...SCENES['falling-object-hazard-ladder'],
  },
  {
    id: 'animal-guardian-paddock',
    number: '04',
    title: '动物损害与监护人责任',
    ...SCENES['animal-guardian-paddock'],
  },
  {
    id: 'crossroads-traffic-medical-product',
    number: '05',
    title: '交通事故、医疗、产品与网络侵权',
    ...SCENES['crossroads-traffic-medical-product'],
  },
];

export const SpecialTortWarningMapPlayer = () => (
  <RemotionDeck
    animationId="special-tort-warning-map"
    title="特殊侵权——警示路牌阵"
    component={SpecialTortWarningMap}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SpecialTortWarningMapPlayer;
