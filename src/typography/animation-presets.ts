import {fontStack, fontSynthesis, type FontId} from './font-registry';
import {ANIMATION_TYPOGRAPHY_ROLES, type AnimationTypographyRole, type RoleMap} from './roles';

export type AnimationTypographyPresetId = 'wenkai';
export type TypographyRoleOverrides = Partial<Record<AnimationTypographyRole, FontId>>;

export type AnimationTypographyMetadata = {
  readonly preset?: AnimationTypographyPresetId;
  readonly roles?: TypographyRoleOverrides;
  readonly scenes?: Readonly<Record<string, {readonly preset?: AnimationTypographyPresetId; readonly roles?: TypographyRoleOverrides}>>;
};

type AnimationTypographyPreset = {readonly roles: RoleMap<AnimationTypographyRole, FontId>};

const ANIMATION_TYPOGRAPHY_PRESETS: Readonly<Record<AnimationTypographyPresetId, AnimationTypographyPreset>> = {
  wenkai: {
    roles: {title: 'wenkai', body: 'wenkai', label: 'wenkai', meta: 'wenkai', footer: 'wenkai', mono: 'wenkai-mono'},
  },
};

export const ANIMATION_TYPOGRAPHY_DEFAULTS = {
  global: 'wenkai',
  subjects: {'civil-procedure': 'wenkai', criminal: 'wenkai', demo: 'wenkai'},
  topics: {},
} as const;

const asRoleMap = (presetId: AnimationTypographyPresetId, overrides?: TypographyRoleOverrides) => ({
  ...ANIMATION_TYPOGRAPHY_PRESETS[presetId].roles,
  ...overrides,
}) as RoleMap<AnimationTypographyRole, FontId>;

export const defineAnimationTypography = <const Metadata extends AnimationTypographyMetadata>(metadata: Metadata) => metadata;

export const resolveAnimationTypography = ({metadata, sceneId}: {readonly metadata?: AnimationTypographyMetadata; readonly sceneId?: string}) => {
  const animationPreset = metadata?.preset ?? ANIMATION_TYPOGRAPHY_DEFAULTS.global;
  const animationRoles = asRoleMap(animationPreset, metadata?.roles);
  const scene = sceneId ? metadata?.scenes?.[sceneId] : undefined;
  const roles = asRoleMap(scene?.preset ?? animationPreset, {...animationRoles, ...scene?.roles});
  return {
    roles,
    style: {
      ...Object.fromEntries(ANIMATION_TYPOGRAPHY_ROLES.map((role) => [`--inkloom-animation-${role}`, fontStack(roles[role])])),
      '--inkloom-animation-font-synthesis': fontSynthesis(roles.body),
    } as Record<`--inkloom-animation-${AnimationTypographyRole}` | '--inkloom-animation-font-synthesis', string>,
  };
};
