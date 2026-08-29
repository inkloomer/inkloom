import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { ReckoningAbacusDesk } from "./ReckoningAbacusDesk";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="ReckoningAbacusDesk"
    component={withAnimationTypography(
      ReckoningAbacusDesk,
      getAnimationTypographyConfiguration('reckoning-abacus-desk'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
