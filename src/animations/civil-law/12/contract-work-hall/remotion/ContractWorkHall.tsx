import {AbsoluteFill} from 'remotion';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {ContractorEmploymentScene, RescissionTrioScene} from './ContractWorkScenes';
import {SitePriceScene, SitePriorityScene, SiteTypesScene, SiteVoidScene} from './SiteWorkScenes';

export const ContractWorkHall = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-contractor-employment-fork" {...SCENES['contractor-employment-fork']}>
      <ContractorEmploymentScene />
    </TimelineSequence>
    <TimelineSequence name="02-rescission-trio" {...SCENES['rescission-trio']}>
      <RescissionTrioScene />
    </TimelineSequence>
    <TimelineSequence name="03-site-types-forms" {...SCENES['site-types-forms']}>
      <SiteTypesScene />
    </TimelineSequence>
    <TimelineSequence name="04-site-void-causes" {...SCENES['site-void-causes']}>
      <SiteVoidScene />
    </TimelineSequence>
    <TimelineSequence name="05-site-price-bidding" {...SCENES['site-price-bidding']}>
      <SitePriceScene />
    </TimelineSequence>
    <TimelineSequence name="06-site-priority-litigation" {...SCENES['site-priority-litigation']}>
      <SitePriorityScene />
    </TimelineSequence>
  </AbsoluteFill>
);
