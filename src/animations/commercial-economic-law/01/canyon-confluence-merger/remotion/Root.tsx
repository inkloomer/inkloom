import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CanyonConfluenceMerger} from './CanyonConfluenceMerger';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CanyonConfluenceMerger" component={withAnimationTypography(CanyonConfluenceMerger, getAnimationTypographyConfiguration('canyon-confluence-merger'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
