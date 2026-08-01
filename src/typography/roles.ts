export const SITE_TYPOGRAPHY_ROLES = ['body', 'heading', 'ui', 'mono'] as const;
export const ANIMATION_TYPOGRAPHY_ROLES = ['title', 'body', 'label', 'meta', 'footer', 'mono'] as const;

export type SiteTypographyRole = (typeof SITE_TYPOGRAPHY_ROLES)[number];
export type AnimationTypographyRole = (typeof ANIMATION_TYPOGRAPHY_ROLES)[number];

export type RoleMap<Role extends string, Value> = Readonly<Record<Role, Value>>;
