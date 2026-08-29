import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { ReviewRelayNetwork } from "./ReviewRelayNetwork";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="ReviewRelayNetwork"
    component={withAnimationTypography(
      ReviewRelayNetwork,
      getAnimationTypographyConfiguration('review-relay-network'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
