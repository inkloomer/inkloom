import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TaxLaw} from './TaxLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="TaxLaw" component={withAnimationTypography(TaxLaw,getAnimationTypographyConfiguration('tax-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
