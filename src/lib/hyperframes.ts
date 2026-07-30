export interface HyperFramesScene {
  number: string;
  title: string;
  start: number;
  end: number;
}

interface HyperFramesManifest {
  version?: number;
  scenes?: unknown;
}

export function parseHyperFramesScenes(input: unknown, sourceLabel: string): HyperFramesScene[] {
  const manifest = input as HyperFramesManifest;
  const candidate = Array.isArray(input) ? input : manifest?.scenes;

  if (!Array.isArray(candidate) || candidate.length === 0) {
    throw new Error(`${sourceLabel} must contain a non-empty scenes array.`);
  }

  return candidate.map((value, index) => {
    const scene = value as Partial<HyperFramesScene>;
    const start = Number(scene.start);
    const end = Number(scene.end);

    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
      throw new Error(`${sourceLabel} scene ${index + 1} must have finite start/end values with end > start.`);
    }

    return {
      number: String(scene.number ?? index + 1).padStart(2, '0'),
      title: String(scene.title ?? `Scene ${index + 1}`),
      start,
      end,
    };
  });
}
