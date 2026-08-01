import {AdmissionCourtRecord} from '@/animations/civil-procedure/09/admission-court-record/remotion/AdmissionCourtRecord';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/09/admission-court-record/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'admission-occasions', number: '01', title: '自认的场合', ...SCENES.admissionOccasions},
  {id: 'admission-effect', number: '02', title: '自认的效果', ...SCENES.admissionEffect},
  {id: 'admission-veto', number: '03', title: '一票否决', ...SCENES.admissionVeto},
  {id: 'conditional-admission', number: '04', title: '附条件自认', ...SCENES.conditionalAdmission},
  {id: 'withdrawal-compromise', number: '05', title: '撤销与调解妥协', ...SCENES.withdrawalCompromise},
];

export const AdmissionCourtRecordPlayer = () => <RemotionDeck animationId="admission-court-record" component={AdmissionCourtRecord} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="自认的成立与效力边界" />;

export default AdmissionCourtRecordPlayer;
