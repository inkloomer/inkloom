import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {UrbanRealEstateLaw} from './UrbanRealEstateLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="UrbanRealEstateLaw" component={withAnimationTypography(UrbanRealEstateLaw,getAnimationTypographyConfiguration('urban-real-estate-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
