import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {DocumentForksScene, NonContractShiftsScene, NoticeRegistrationScene, ObjectionRegistrationScene} from './PreRegistrationScenes';

export const PreRegistrationHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-non-contract-shifts" {...SCENES['non-contract-shifts']}>
      <NonContractShiftsScene />
    </TimelineSequence>
    <TimelineSequence name="02-document-forks" {...SCENES['document-forks']}>
      <DocumentForksScene />
    </TimelineSequence>
    <TimelineSequence name="03-notice-registration" {...SCENES['notice-registration']}>
      <NoticeRegistrationScene />
    </TimelineSequence>
    <TimelineSequence name="04-objection-registration" {...SCENES['objection-registration']}>
      <ObjectionRegistrationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
