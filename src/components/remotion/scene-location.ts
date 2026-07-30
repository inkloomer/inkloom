export interface SceneLocationTarget {
  readonly id?: string;
  readonly number: string;
}

const normalizedSceneKey = (value: string) => value.trim().toLowerCase();

const sceneKeys = (scene: SceneLocationTarget) => {
  const numericNumber = Number(scene.number);
  return [scene.id, scene.number, Number.isFinite(numericNumber) ? String(numericNumber) : undefined]
    .filter((value): value is string => Boolean(value))
    .map(normalizedSceneKey);
};

export const sceneLocationKey = (scene: SceneLocationTarget) => scene.id ?? scene.number;

export const sceneIndexFromSearch = (
  scenes: readonly SceneLocationTarget[],
  search: string,
  parameter = 'scene',
) => {
  const requestedKey = new URLSearchParams(search).get(parameter);
  if (!requestedKey) return 0;

  const normalizedRequestedKey = normalizedSceneKey(requestedKey);
  const matchedIndex = scenes.findIndex((scene) => sceneKeys(scene).includes(normalizedRequestedKey));
  return matchedIndex >= 0 ? matchedIndex : 0;
};

export const urlWithScene = (
  href: string,
  scene: SceneLocationTarget,
  parameter = 'scene',
) => {
  const url = new URL(href);
  url.searchParams.set(parameter, sceneLocationKey(scene));
  return `${url.pathname}${url.search}${url.hash}`;
};
