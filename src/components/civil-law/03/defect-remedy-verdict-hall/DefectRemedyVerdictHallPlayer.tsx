import {
  DefectRemedyVerdictHall,
} from '@/animations/civil-law/03/defect-remedy-verdict-hall/remotion/DefectRemedyVerdictHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/03/defect-remedy-verdict-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'void-core-wall',
    number: '01',
    title: '无效的概念与事由',
    ...SCENES['void-core-wall'],
  },
  {
    id: 'mandatory-rules-desk',
    number: '02',
    title: '效力性与管理性强制规定',
    ...SCENES['mandatory-rules-desk'],
  },
  {
    id: 'voidable-rights-desk',
    number: '03',
    title: '可撤销与撤销权',
    ...SCENES['voidable-rights-desk'],
  },
  {
    id: 'fraud-mistake-forks',
    number: '04',
    title: '欺诈与重大误解',
    ...SCENES['fraud-mistake-forks'],
  },
  {
    id: 'duress-fairness-forks',
    number: '05',
    title: '胁迫与显失公平',
    ...SCENES['duress-fairness-forks'],
  },
  {
    id: 'pending-final-ledger',
    number: '06',
    title: '效力待定与最终无效',
    ...SCENES['pending-final-ledger'],
  },
];

export const DefectRemedyVerdictHallPlayer = () => (
  <RemotionDeck
    animationId="defect-remedy-verdict-hall"
    title="无效·可撤销·效力待定——效力瑕疵判决馆"
    component={DefectRemedyVerdictHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DefectRemedyVerdictHallPlayer;
