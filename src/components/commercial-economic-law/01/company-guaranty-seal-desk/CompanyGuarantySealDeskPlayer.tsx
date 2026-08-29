import {CompanyGuarantySealDesk} from '@/animations/commercial-economic-law/01/company-guaranty-seal-desk/remotion/CompanyGuarantySealDesk';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/01/company-guaranty-seal-desk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'sole-guaranty', number: '01', title: '一人公司为股东担保：无需决议', ...SCENES.soleGuaranty},
  {id: 'inversion-scale', number: '02', title: '担保担穿了：举证责任倒置的连带', ...SCENES.inversionScale},
  {id: 'forged-resolution', number: '03', title: '伪造的决议：越权担保四连问', ...SCENES.forgedResolution},
];

export const CompanyGuarantySealDeskPlayer = () => <RemotionDeck animationId="company-guaranty-seal-desk" component={CompanyGuarantySealDesk} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="公司担保：一人公司的印与伪造的印" />;
export default CompanyGuarantySealDeskPlayer;
