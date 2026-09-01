import {CrimeNumberReckoning} from '@/animations/criminal/13/crime-number-reckoning/remotion/CrimeNumberReckoning';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/13/crime-number-reckoning/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'one-act-three-relations', number: '01', title: '一个行为·三种罪名关系', ...SCENES.oneActThreeRelations},
  {id: 'continue-aggravate-lane', number: '02', title: '继续犯·加重犯', ...SCENES.continueAggravateLane},
  {id: 'combined-serial-yard', number: '03', title: '两个行为·结合犯·连续犯', ...SCENES.combinedSerialYard},
  {id: 'absorb-post-acts', number: '04', title: '吸收犯·不可罚的事后行为', ...SCENES.absorbPostActs},
  {id: 'involved-principle-floor', number: '05', title: '牵连犯·罪数底层原理', ...SCENES.involvedPrincipleFloor},
  {id: 'aggravate-one-act-upgrade', number: '06', title: '加重犯·一个行为·法定刑升格', ...SCENES.aggravateOneActUpgrade},
];

export const CrimeNumberReckoningPlayer = () => <RemotionDeck animationId="crime-number-reckoning" component={CrimeNumberReckoning} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="罪数：一行为·两行为·处断原理" />;
export default CrimeNumberReckoningPlayer;
