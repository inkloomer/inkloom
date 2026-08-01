import {fontStack, type FontId} from './font-registry';
import {SITE_TYPOGRAPHY_ROLES, type RoleMap, type SiteTypographyRole} from './roles';

export type SiteTypographyPresetId = 'wenkai';

export type SiteTypographyPreset = {
  readonly roles: RoleMap<SiteTypographyRole, FontId>;
};

export const SITE_TYPOGRAPHY_PRESETS: Readonly<Record<SiteTypographyPresetId, SiteTypographyPreset>> = {
  wenkai: {
    roles: {body: 'wenkai', heading: 'wenkai', ui: 'wenkai', mono: 'wenkai-mono'},
  },
};

export const SITE_TYPOGRAPHY_PRESET_IDS = Object.keys(SITE_TYPOGRAPHY_PRESETS) as SiteTypographyPresetId[];

export const resolveSiteTypography = (presetId: SiteTypographyPresetId = 'wenkai') => {
  const preset = SITE_TYPOGRAPHY_PRESETS[presetId];
  return Object.fromEntries(
    SITE_TYPOGRAPHY_ROLES.map((role) => [`--inkloom-site-${role}`, fontStack(preset.roles[role])]),
  ) as Record<`--inkloom-site-${SiteTypographyRole}`, string>;
};

export const siteTypographyCss = (presetId?: SiteTypographyPresetId) => {
  const variables = resolveSiteTypography(presetId);
  return `:root{${Object.entries(variables).map(([name, value]) => `${name}:${value};`).join('')}}`;
};
