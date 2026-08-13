import { TransparencyOpticsLab } from "@/animations/administrative-law/09/transparency-optics-lab/remotion/TransparencyOpticsLab";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/09/transparency-optics-lab/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const titles = [
  "设定权光谱",
  "规章权限衰减",
  "设定陷阱透镜",
  "授权棱镜",
  "委托滤镜",
  "集中实施光圈",
  "主体陷阱暗房",
  "听证信号分流",
  "处罚听证波段",
  "许可听证双焦点",
  "听证时钟阵列",
  "听证共同控制台",
  "听证误区扫描",
  "政府信息投影",
  "公开主体路由",
  "绝对遮光阀",
  "隐私平衡滤镜",
  "可不公开调光器",
  "主动公开光束",
  "主动公开曝光",
  "申请输入标本",
  "收到日探测器",
  "答复分光器",
  "材料补正闸",
  "特殊申请路由器",
  "滥用申请节流",
];
const ids = Object.keys(SCENES) as (keyof typeof SCENES)[];
const scenes: readonly RemotionScene[] = ids.map((id, index) => ({
  id,
  number: String(index + 1).padStart(2, "0"),
  title: titles[index],
  ...SCENES[id],
}));

export const TransparencyOpticsLabPlayer = () => (
  <RemotionDeck
    animationId="transparency-optics-lab"
    title="三法对比与政府信息公开"
    component={TransparencyOpticsLab}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default TransparencyOpticsLabPlayer;
