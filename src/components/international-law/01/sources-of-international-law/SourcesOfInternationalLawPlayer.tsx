import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {SourcesOfInternationalLaw} from '@/animations/international-law/01/sources-of-international-law/remotion/SourcesOfInternationalLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/01/sources-of-international-law/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'sources', number: '01', title: '渊源只有三项', ...SCENES.sources},
  {id: 'custom-formation', number: '02', title: '国际习惯：反复实践与持续反对者', ...SCENES.customFormation},
  {id: 'custom-vs-convention', number: '03', title: '国际习惯 VS 国际惯例', ...SCENES.customVsConvention},
  {id: 'counter-sanctions', number: '04', title: '反外国制裁法', ...SCENES.counterSanctions},
  {id: 'blockade-chain', number: '05', title: '反外国不当域外管辖：全链条', ...SCENES.blockadeChain},
];

export const SourcesOfInternationalLawPlayer = () => (
  <RemotionDeck
    animationId="sources-of-international-law"
    title="国际法的渊源"
    component={SourcesOfInternationalLaw}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SourcesOfInternationalLawPlayer;
