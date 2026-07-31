import {createLegalVisualSystem} from '../../../../shared/legal-visual';
import {PALETTE, accentColor, accentSoftColor, type Accent} from './storyboard';

const system = createLegalVisualSystem<Accent>({
  PALETTE,
  accentColor,
  accentSoftColor,
  toSourceFrame: (frame) => frame,
  chapterLabel: 'CIVIL PROCEDURE / 03',
  defaultAccent: 'teal',
});

export const {
  ENTER_EASING,
  baseTextStyle,
  FlowArrow,
  IconNode,
  Keyword,
  KeywordFocus,
  MaskedReveal,
  SceneHeading,
  SceneSequence,
  DeckShell,
  BackgroundStructure,
} = system;
