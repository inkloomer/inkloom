import {TangCodeLiuzangLiusha} from '@/animations/theoretical-law/03/tang-code-liuzang-liusha/remotion/TangCodeLiuzangLiusha';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/03/tang-code-liuzang-liusha/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'liuzang', number: '01', title: '六赃：官吏与常人', ...SCENES.liuzang},
  {id: 'liusha', number: '02', title: '六杀：从故意到过失', ...SCENES.liusha},
  {id: 'evolution', number: '03', title: '谋杀与故杀的演变', ...SCENES.evolution},
];

export const TangCodeLiuzangLiushaPlayer = () => (
  <RemotionDeck
    animationId="tang-code-liuzang-liusha"
    component={TangCodeLiuzangLiusha}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="《唐律疏议》：六赃与六杀"
  />
);

export default TangCodeLiuzangLiushaPlayer;
