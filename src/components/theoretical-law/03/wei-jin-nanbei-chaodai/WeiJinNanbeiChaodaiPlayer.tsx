import {WeiJinNanbeiChaodai} from '@/animations/theoretical-law/03/wei-jin-nanbei-chaodai/remotion/WeiJinNanbeiChaodai';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/wei-jin-nanbei-chaodai/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'four-codes', number: '01', title: '四大法典里程碑', ...SCENES.fourCodes},
  {id: 'ten-crimes', number: '02', title: '重罪十条到十恶', ...SCENES.tenCrimes},
  {id: 'sui-transition', number: '03', title: '五刑五服与官当', ...SCENES.suiTransition},
];

export const WeiJinNanbeiChaodaiPlayer = () => (
  <RemotionDeck
    animationId="wei-jin-nanbei-chaodai"
    component={WeiJinNanbeiChaodai}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="魏晋南北朝法制：八议·重罪十条·五服"
  />
);

export default WeiJinNanbeiChaodaiPlayer;
