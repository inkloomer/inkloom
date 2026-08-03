import {ServiceDeliveryNetwork} from '@/animations/civil-procedure/14/service-delivery-network/remotion/ServiceDeliveryNetwork';
import {typography} from '@/animations/civil-procedure/14/service-delivery-network/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/14/service-delivery-network/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'direct-recipients', number: '01', title: '直接送达的对象与地点', ...SCENES.directRecipients},
  {id: 'refusal-service', number: '02', title: '拒签后的留置送达', ...SCENES.refusalService},
  {id: 'confirmed-routes', number: '03', title: '替代送达的路径与日期', ...SCENES.confirmedRoutes},
  {id: 'public-notice-boundary', number: '04', title: '公告送达的严格门槛', ...SCENES.publicNoticeBoundary},
];

export default () => <RemotionDeck animationId="service-delivery-network" component={ServiceDeliveryNetwork} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="送达方式与日期判断" typography={typography} typographyScope={{animationId: 'service-delivery-network', subject: 'civil-procedure', topic: '14'}} />;
