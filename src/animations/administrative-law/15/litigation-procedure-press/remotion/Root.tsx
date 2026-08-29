import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { LitigationProcedurePress } from "./LitigationProcedurePress";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="LitigationProcedurePress"
    component={withAnimationTypography(
      LitigationProcedurePress,
      getAnimationTypographyConfiguration('litigation-procedure-press'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
