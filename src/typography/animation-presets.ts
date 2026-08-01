import {fontStack, fontSynthesis, type FontId} from './font-registry';
import {ANIMATION_TYPOGRAPHY_ROLES, type AnimationTypographyRole, type RoleMap} from './roles';

export type AnimationTypographyPresetId = 'wenkai';
export type TypographyRoleOverrides = Partial<Record<AnimationTypographyRole, FontId>>;

export type AnimationTypographyScope = {
  readonly animationId: string;
  readonly subject?: string;
  readonly topic?: string;
};

export type AnimationTypographyMetadata = {
  readonly preset?: AnimationTypographyPresetId;
  readonly roles?: TypographyRoleOverrides;
  readonly scenes?: Readonly<Record<string, {readonly preset?: AnimationTypographyPresetId; readonly roles?: TypographyRoleOverrides}>>;
};

export type AnimationTypographyConfiguration = {
  readonly metadata?: AnimationTypographyMetadata;
  readonly scope: AnimationTypographyScope;
};

type AnimationTypographyPreset = {readonly roles: RoleMap<AnimationTypographyRole, FontId>};

const ANIMATION_TYPOGRAPHY_PRESETS: Readonly<Record<AnimationTypographyPresetId, AnimationTypographyPreset>> = {
  wenkai: {
    roles: {title: 'wenkai', body: 'wenkai', label: 'wenkai', meta: 'wenkai', footer: 'wenkai', mono: 'wenkai-mono'},
  },
};

export const ANIMATION_TYPOGRAPHY_DEFAULTS: {
  readonly global: AnimationTypographyPresetId;
  readonly subjects: Readonly<Record<string, AnimationTypographyPresetId>>;
  readonly topics: Readonly<Record<string, AnimationTypographyPresetId>>;
} = {
  global: 'wenkai',
  subjects: {'civil-procedure': 'wenkai', criminal: 'wenkai', demo: 'wenkai'},
  topics: {},
};

const asRoleMap = (presetId: AnimationTypographyPresetId, overrides?: TypographyRoleOverrides) => ({
  ...ANIMATION_TYPOGRAPHY_PRESETS[presetId].roles,
  ...overrides,
}) as RoleMap<AnimationTypographyRole, FontId>;

export const defineAnimationTypography = <const Metadata extends AnimationTypographyMetadata>(metadata: Metadata) => metadata;

export const resolveAnimationTypography = ({
  metadata,
  sceneId,
  scope,
}: {
  readonly metadata?: AnimationTypographyMetadata;
  readonly sceneId?: string;
  readonly scope?: AnimationTypographyScope;
}) => {
  const subjectPreset = scope?.subject
    ? ANIMATION_TYPOGRAPHY_DEFAULTS.subjects[scope.subject] ?? ANIMATION_TYPOGRAPHY_DEFAULTS.global
    : ANIMATION_TYPOGRAPHY_DEFAULTS.global;
  const topicPreset = scope?.subject && scope.topic
    ? ANIMATION_TYPOGRAPHY_DEFAULTS.topics[`${scope.subject}/${scope.topic}`] ?? subjectPreset
    : subjectPreset;
  const animationPreset = metadata?.preset ?? topicPreset;
  const animationRoles = asRoleMap(animationPreset, metadata?.roles);
  const scene = sceneId ? metadata?.scenes?.[sceneId] : undefined;
  const roles = asRoleMap(scene?.preset ?? animationPreset, {...animationRoles, ...scene?.roles});
  return {
    roles,
    style: {
      ...Object.fromEntries(ANIMATION_TYPOGRAPHY_ROLES.flatMap((role) => [
        [`--inkloom-animation-${role}`, fontStack(roles[role])],
        [`--inkloom-animation-${role}-font-synthesis`, fontSynthesis(roles[role])],
      ])),
    } as Record<string, string>,
  };
};
