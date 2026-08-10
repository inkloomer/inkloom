import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ContractBookAtlas} from './ContractBookAtlas';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ContractBookAtlas" component={withAnimationTypography(ContractBookAtlas, getAnimationTypographyConfiguration('contract-book-atlas'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
