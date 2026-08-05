import {typography} from '@/animations/civil-procedure/23/public-notice-cancellation-path/animation.meta';
import {PublicNoticeCancellationPath} from '@/animations/civil-procedure/23/public-notice-cancellation-path/remotion/PublicNoticeCancellationPath';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/23/public-notice-cancellation-path/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'notice-entry-and-period',number:'01',title:'票据遗失后：止付与不少于 60 日公告',...SCENES.noticeEntryAndPeriod},
  {id:'claim-filing-window',number:'02',title:'权利申报使非讼程序退出',...SCENES.claimFilingWindow},
  {id:'cancellation-and-relief',number:'03',title:'除权判决、付款请求与 1 年救济',...SCENES.cancellationAndRelief},
];
export default ()=> <RemotionDeck animationId="public-notice-cancellation-path" component={PublicNoticeCancellationPath} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="公示催告与除权路径" typography={typography} typographyScope={{animationId:'public-notice-cancellation-path',subject:'civil-procedure',topic:'23'}}/>;
