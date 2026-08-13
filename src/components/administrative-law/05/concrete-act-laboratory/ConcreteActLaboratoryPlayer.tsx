import {ConcreteActLaboratory} from '@/animations/administrative-law/05/concrete-act-laboratory/remotion/ConcreteActLaboratory';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/administrative-law/05/concrete-act-laboratory/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
 {id:'four-lens-identification',number:'01',title:'四重鉴别镜',...SCENES['four-lens-identification']},
 {id:'factual-act-exclusion-chamber',number:'02',title:'事实行为排除',...SCENES['factual-act-exclusion-chamber']},
 {id:'criminal-administrative-spectrum',number:'03',title:'刑事与行政光谱',...SCENES['criminal-administrative-spectrum']},
 {id:'five-axis-classifier',number:'04',title:'五轴分类',...SCENES['five-axis-classifier']},
 {id:'formation-effect-ignition',number:'05',title:'成立与生效',...SCENES['formation-effect-ignition']},
 {id:'three-force-locks',number:'06',title:'三种效力',...SCENES['three-force-locks']},
 {id:'five-illegality-probes',number:'07',title:'违法五要素',...SCENES['five-illegality-probes']},
 {id:'invalid-revoke-abolish-reactor',number:'08',title:'无效撤销废止',...SCENES['invalid-revoke-abolish-reactor']},
 {id:'street-vendor-case-console',number:'09',title:'综合案例',...SCENES['street-vendor-case-console']},
];
export const ConcreteActLaboratoryPlayer=()=> <RemotionDeck animationId="concrete-act-laboratory" title="具体行政行为一般理论" component={ConcreteActLaboratory} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ConcreteActLaboratoryPlayer;
