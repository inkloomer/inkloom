import React from 'react';
import { AbsoluteFill } from 'remotion';
import { OnyxCourier } from './OnyxCourier';
import { DURATION_FRAMES, FPS } from './storyboard';
import { withAnimationTypography } from '../../../../typography/animation-provider';
import { getAnimationTypographyConfiguration } from '../../../../typography/animation-registry';

export const RemotionRoot: React.FC = () => (
  <AbsoluteFill>
    <Composition
      id="OnyxCourier"
      component={withAnimationTypography(OnyxCourier, getAnimationTypographyConfiguration('onyx-courier'))}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
    />
  </AbsoluteFill>
);

import { Composition } from 'remotion';
