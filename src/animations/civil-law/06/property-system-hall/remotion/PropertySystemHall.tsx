import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {OriginalFruitScene, PrincipalAccessoryScene, SystemTreeScene} from './PropertySystemScenes';

export const PropertySystemHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-system-tree" {...SCENES['system-tree']}>
      <SystemTreeScene />
    </TimelineSequence>
    <TimelineSequence name="02-principal-accessory" {...SCENES['principal-accessory']}>
      <PrincipalAccessoryScene />
    </TimelineSequence>
    <TimelineSequence name="03-original-fruit" {...SCENES['original-fruit']}>
      <OriginalFruitScene />
    </TimelineSequence>
  </AbsoluteFill>
);
