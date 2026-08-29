import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { EvidenceVitrineMuseum } from "./EvidenceVitrineMuseum";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="EvidenceVitrineMuseum"
    component={withAnimationTypography(
      EvidenceVitrineMuseum,
      getAnimationTypographyConfiguration('evidence-vitrine-museum'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
