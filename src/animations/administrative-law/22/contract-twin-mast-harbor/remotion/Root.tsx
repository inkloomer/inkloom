import { Composition } from "remotion";
import { getAnimationTypographyConfiguration } from "../../../../../typography/animation-registry";
import { withAnimationTypography } from "../../../../../typography/animation-provider";
import { ContractTwinMastHarbor } from "./ContractTwinMastHarbor";
import { DURATION_FRAMES, FPS } from "./storyboard";

export const RemotionRoot = () => (
  <Composition
    id="ContractTwinMastHarbor"
    component={withAnimationTypography(
      ContractTwinMastHarbor,
      getAnimationTypographyConfiguration('contract-twin-mast-harbor'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
