import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {SocialSecurityLaw} from '@/animations/labor-social-law/04/social-security-law/remotion/SocialSecurityLaw';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/labor-social-law/04/social-security-law/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'social-security-law-scene-01', number: '01', title: '缴费与养老', ...SCENES['social-security-law-scene-01']},
  {id: 'social-security-law-scene-02', number: '02', title: '医保与工伤', ...SCENES['social-security-law-scene-02']},
  {id: 'social-security-law-scene-03', number: '03', title: '失业保险', ...SCENES['social-security-law-scene-03']},
  {id: 'social-security-law-scene-04', number: '04', title: '军人保险', ...SCENES['social-security-law-scene-04']},
];
export const SocialSecurityLawPlayer=()=> <RemotionDeck animationId="social-security-law" title="社会保障法" component={SocialSecurityLaw} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default SocialSecurityLawPlayer;
