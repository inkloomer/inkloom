import { LinkageRailSwitch } from "@/animations/administrative-law/12/linkage-rail-switch/remotion/LinkageRailSwitch";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/12/linkage-rail-switch/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  {id: 'three-mode-overview', number: '01', title: '三模式总览', ...SCENES['three-mode-overview']},
  {id: 'free-choice-track', number: '02', title: '自由选择', ...SCENES['free-choice-track']},
  {id: 'mandatory-first-track', number: '03', title: '复议前置', ...SCENES['mandatory-first-track']},
  {id: 'final-review-track', number: '04', title: '复议终局', ...SCENES['final-review-track']},
  {id: 'switchyard-traps', number: '05', title: '最爱考判断', ...SCENES['switchyard-traps']},
];

export const LinkageRailSwitchPlayer = () => (
  <RemotionDeck
    animationId="linkage-rail-switch"
    title="行政诉讼和行政复议程序的衔接"
    component={LinkageRailSwitch}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default LinkageRailSwitchPlayer;
