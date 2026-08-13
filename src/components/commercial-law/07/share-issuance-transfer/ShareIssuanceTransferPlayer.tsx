import {RemotionDeck,type RemotionScene} from '../../../remotion/RemotionDeck';
import {ShareIssuanceTransfer} from '@/animations/commercial-law/07/share-issuance-transfer/remotion/ShareIssuanceTransfer';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/commercial-law/07/share-issuance-transfer/remotion/storyboard';
const scenes:readonly RemotionScene[]=[
  {id: 'share-issuance-transfer-scene-01', number: '01', title: '资本制与票面', ...SCENES['share-issuance-transfer-scene-01']},
  {id: 'share-issuance-transfer-scene-02', number: '02', title: '转让的三限', ...SCENES['share-issuance-transfer-scene-02']},
  {id: 'share-issuance-transfer-scene-03', number: '03', title: '回购限制与财务资助', ...SCENES['share-issuance-transfer-scene-03']},
];
export const ShareIssuanceTransferPlayer=()=> <RemotionDeck animationId="share-issuance-transfer" title="股份公司的股份发行与转让" component={ShareIssuanceTransfer} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS}/>;
export default ShareIssuanceTransferPlayer;
