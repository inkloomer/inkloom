import {LegalDepartmentsSystem} from '@/animations/theoretical-law/01/legal-departments-system/remotion/LegalDepartmentsSystem';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/legal-departments-system/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'department-standards', number: '01', title: '法律部门与划分标准', ...SCENES.departmentStandards},
  {id: 'system-features', number: '02', title: '法律体系两大特征', ...SCENES.systemFeatures},
  {id: 'seven-departments', number: '03', title: '七大法律部门', ...SCENES.sevenDepartments},
];

export const LegalDepartmentsSystemPlayer = () => (
  <RemotionDeck
    animationId="legal-departments-system"
    component={LegalDepartmentsSystem}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律部门与法律体系：划分与整体"
  />
);

export default LegalDepartmentsSystemPlayer;
