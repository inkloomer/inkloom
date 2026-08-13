import {CivilServantCareerFile} from '@/animations/administrative-law/03/civil-servant-career-file/remotion/CivilServantCareerFile';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/administrative-law/03/civil-servant-career-file/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id:'identity-dual-ladder',number:'01',title:'职务与职级',...SCENES['identity-dual-ladder']},
  {id:'appointment-entry-doors',number:'02',title:'四类取得入口',...SCENES['appointment-entry-doors']},
  {id:'exam-recruitment-runway',number:'03',title:'考试录用跑道',...SCENES['exam-recruitment-runway']},
  {id:'contract-dossier',number:'04',title:'聘任合同',...SCENES['contract-dossier']},
  {id:'exchange-route-map',number:'05',title:'交流与调任',...SCENES['exchange-route-map']},
  {id:'resignation-countdown-gate',number:'06',title:'辞职闸门',...SCENES['resignation-countdown-gate']},
  {id:'dismissal-retirement-balance',number:'07',title:'辞退、保护与退休',...SCENES['dismissal-retirement-balance']},
  {id:'discipline-boundary-scale',number:'08',title:'处分边界',...SCENES['discipline-boundary-scale']},
  {id:'appeal-scope-selector',number:'09',title:'申诉范围',...SCENES['appeal-scope-selector']},
  {id:'review-appeal-fork',number:'10',title:'复核与申诉',...SCENES['review-appeal-fork']},
];

export const CivilServantCareerFilePlayer = () => (
  <RemotionDeck animationId="civil-servant-career-file" title="公务员法" component={CivilServantCareerFile} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} />
);

export default CivilServantCareerFilePlayer;
