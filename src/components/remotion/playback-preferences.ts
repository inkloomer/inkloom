export const PLAYBACK_PREFERENCE_STORAGE_KEY = 'inkloom.remotion-playback-preferences.v1';
export const PLAYBACK_PREFERENCE_CHANGE_EVENT = 'inkloom:remotion-playback-preferences';

export const PLAYBACK_SPEEDS = [0.5, 0.6, 0.75, 1, 1.25, 1.5, 2] as const;

export type PlaybackSpeed = (typeof PLAYBACK_SPEEDS)[number];
export type PlaybackScope = 'global' | 'topic' | 'page';

export interface PlaybackScopeKeys {
  readonly topic?: string;
  readonly page?: string;
}

export interface PlaybackPreferences {
  readonly global: PlaybackSpeed;
  readonly topics: Readonly<Record<string, PlaybackSpeed>>;
  readonly pages: Readonly<Record<string, PlaybackSpeed>>;
}

export const DEFAULT_PLAYBACK_PREFERENCES: PlaybackPreferences = {
  global: 1,
  topics: {},
  pages: {},
};

const isPlaybackSpeed = (value: unknown): value is PlaybackSpeed =>
  typeof value === 'number' && PLAYBACK_SPEEDS.includes(value as PlaybackSpeed);

const validOverrides = (value: unknown): Record<string, PlaybackSpeed> => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, PlaybackSpeed] => isPlaybackSpeed(entry[1])),
  );
};

export const parsePlaybackPreferences = (serialized: string | null): PlaybackPreferences => {
  if (!serialized) return DEFAULT_PLAYBACK_PREFERENCES;

  try {
    const parsed: unknown = JSON.parse(serialized);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return DEFAULT_PLAYBACK_PREFERENCES;

    const candidate = parsed as Partial<PlaybackPreferences>;
    return {
      global: isPlaybackSpeed(candidate.global) ? candidate.global : DEFAULT_PLAYBACK_PREFERENCES.global,
      topics: validOverrides(candidate.topics),
      pages: validOverrides(candidate.pages),
    };
  } catch {
    return DEFAULT_PLAYBACK_PREFERENCES;
  }
};

export const playbackScopeKeysFromPathname = (pathname: string): PlaybackScopeKeys => {
  const pathWithoutBase = pathname.replace(/^\/inkloom(?=\/|$)/, '');
  const parts = pathWithoutBase.split('/').filter(Boolean);
  if (parts.length === 0) return {};

  return {
    topic: parts.length >= 3 ? parts.slice(0, 3).join('/') : undefined,
    page: parts.join('/'),
  };
};

export const configuredPlaybackSpeed = (
  preferences: PlaybackPreferences,
  scope: PlaybackScope,
  keys: PlaybackScopeKeys,
): PlaybackSpeed | undefined => {
  if (scope === 'global') return preferences.global;
  const key = keys[scope];
  return key ? preferences[`${scope}s`][key] : undefined;
};

export const resolvedPlaybackSpeed = (
  preferences: PlaybackPreferences,
  keys: PlaybackScopeKeys,
): PlaybackSpeed =>
  configuredPlaybackSpeed(preferences, 'page', keys)
  ?? configuredPlaybackSpeed(preferences, 'topic', keys)
  ?? preferences.global;

export const inheritedPlaybackSpeed = (
  preferences: PlaybackPreferences,
  scope: Exclude<PlaybackScope, 'global'>,
  keys: PlaybackScopeKeys,
): PlaybackSpeed =>
  scope === 'page'
    ? configuredPlaybackSpeed(preferences, 'topic', keys) ?? preferences.global
    : preferences.global;

export const withPlaybackPreference = (
  preferences: PlaybackPreferences,
  scope: PlaybackScope,
  keys: PlaybackScopeKeys,
  speed: PlaybackSpeed | undefined,
): PlaybackPreferences => {
  if (scope === 'global') {
    return speed ? {...preferences, global: speed} : preferences;
  }

  const key = keys[scope];
  if (!key) return preferences;

  const collectionName = `${scope}s` as const;
  const collection = {...preferences[collectionName]};
  if (speed === undefined) delete collection[key];
  else collection[key] = speed;

  return {...preferences, [collectionName]: collection};
};
