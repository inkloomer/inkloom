import {MaritalPropertyDivorceDesk} from '@/animations/civil-law/20/marital-property-divorce-desk/remotion/MaritalPropertyDivorceDesk';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/20/marital-property-divorce-desk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'property-ownership-gates',
    number: '01',
    title: '夫妻财产的归属',
    ...SCENES['property-ownership-gates'],
  },
  {
    id: 'house-and-fruit-sorter',
    number: '02',
    title: '房屋归属与孳息增值',
    ...SCENES['house-and-fruit-sorter'],
  },
  {
    id: 'debt-and-gift-lane',
    number: '03',
    title: '夫妻负债与家庭赠与',
    ...SCENES['debt-and-gift-lane'],
  },
  {
    id: 'divorce-paths-lane',
    number: '04',
    title: '协议离婚与诉讼离婚',
    ...SCENES['divorce-paths-lane'],
  },
  {
    id: 'divorce-aftermath-bench',
    number: '05',
    title: '离婚后的抚养、分割与赔偿',
    ...SCENES['divorce-aftermath-bench'],
  },
];

export const MaritalPropertyDivorceDeskPlayer = () => (
  <RemotionDeck
    animationId="marital-property-divorce-desk"
    title="婚姻法——妆匣账台"
    component={MaritalPropertyDivorceDesk}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default MaritalPropertyDivorceDeskPlayer;
