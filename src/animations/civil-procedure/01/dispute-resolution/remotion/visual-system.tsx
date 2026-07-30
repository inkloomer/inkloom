import {createLegalVisualSystem} from '../../../../shared/legal-visual';
import {PALETTE, accentColor, accentSoftColor, toSourceFrame, type Accent} from './storyboard';

const system = createLegalVisualSystem<Accent>({
  PALETTE,
  accentColor,
  accentSoftColor,
  toSourceFrame,
  chapterLabel: 'CIVIL PROCEDURE / 01',
  defaultAccent: 'red',
});

export const {
  FONT_FAMILY,
  ENTER_EASING,
  EXIT_EASING,
  baseTextStyle,
  Enter,
  StaggerEnter,
  MaskedReveal,
  FadeIn,
  ImpactReveal,
  Keyword,
  KeywordFocus,
  SceneHeading,
  IconNode,
  FlowArrow,
  VerticalArrow,
  BranchConnector,
  FilmRail,
  GateChip,
  SceneMotion,
  BackgroundStructure,
  SceneSequence,
  DeckShell,
} = system;
