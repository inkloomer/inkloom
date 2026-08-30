import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {BurdenLedgerDesk} from './BurdenLedgerDesk';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="BurdenLedgerDesk" component={withAnimationTypography(BurdenLedgerDesk, getAnimationTypographyConfiguration('burden-ledger-desk'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
