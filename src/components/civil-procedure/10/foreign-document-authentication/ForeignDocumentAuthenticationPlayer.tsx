import {ForeignDocumentAuthentication} from '@/animations/civil-procedure/10/foreign-document-authentication/remotion/ForeignDocumentAuthentication';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/10/foreign-document-authentication/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'public-document-route', number: '01', title: '域外公文书证的证明路线', ...SCENES.publicDocumentRoute},
  {id: 'identity-document-route', number: '02', title: '身份关系证据的认证升级', ...SCENES.identityDocumentRoute},
  {id: 'translation-and-trap', number: '03', title: '中文译本与未经认证的反例', ...SCENES.translationAndTrap},
];

export const ForeignDocumentAuthenticationPlayer = () => <RemotionDeck animationId="foreign-document-authentication" component={ForeignDocumentAuthentication} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="域外书证的认证规则" />;
export default ForeignDocumentAuthenticationPlayer;
