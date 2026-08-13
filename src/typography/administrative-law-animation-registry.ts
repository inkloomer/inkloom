import {typography} from '../animations/administrative-law/01/administrative-principles-compass/animation.meta';
import {typography as typography2} from '../animations/administrative-law/02/administrative-subject-command/animation.meta';
import {typography as typography3} from '../animations/administrative-law/03/civil-servant-career-file/animation.meta';
import {typography as typography4} from '../animations/administrative-law/04/abstract-act-printworks/animation.meta';
import {typography as typography5} from '../animations/administrative-law/05/concrete-act-laboratory/animation.meta';

export const ADMINISTRATIVE_LAW_TYPOGRAPHY_CONFIGURATIONS = {
  'administrative-principles-compass': {
    metadata: typography,
    scope: {animationId: 'administrative-principles-compass', subject: 'administrative-law', topic: '01'},
  },
  'administrative-subject-command': {
    metadata: typography2,
    scope: {animationId: 'administrative-subject-command', subject: 'administrative-law', topic: '02'},
  },
  'civil-servant-career-file': {
    metadata: typography3,
    scope: {animationId: 'civil-servant-career-file', subject: 'administrative-law', topic: '03'},
  },
  'abstract-act-printworks': {
    metadata: typography4,
    scope: {animationId: 'abstract-act-printworks', subject: 'administrative-law', topic: '04'},
  },
  'concrete-act-laboratory': {
    metadata: typography5,
    scope: {animationId: 'concrete-act-laboratory', subject: 'administrative-law', topic: '05'},
  },
} as const;
