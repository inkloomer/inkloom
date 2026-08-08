import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ContractGeneralProvisionsAtlas} from './ContractGeneralProvisionsAtlas';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ContractGeneralProvisionsAtlas" component={withAnimationTypography(ContractGeneralProvisionsAtlas, getAnimationTypographyConfiguration('contract-general-provisions-atlas'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
