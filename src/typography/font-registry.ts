export type FontId = 'wenkai' | 'wenkai-mono';

export type FontSource =
  | {readonly kind: 'local'; readonly path: string; readonly sha256: string}
  | {
      readonly kind: 'package';
      readonly packageName: string;
      readonly version: string;
      readonly integrity: string;
      readonly stylesheet: string;
    };

export type RegisteredFont = {
  readonly family: string;
  readonly fallback: readonly string[];
  readonly fontSynthesis: 'none' | 'weight';
  readonly license: string;
  readonly sources: readonly FontSource[];
  readonly weights: readonly number[];
};

export const FONT_REGISTRY: Readonly<Record<FontId, RegisteredFont>> = {
  wenkai: {
    family: '"LXGW WenKai Screen"',
    fallback: ['serif'],
    fontSynthesis: 'weight',
    license: 'OFL-1.1',
    sources: [{
      kind: 'package',
      packageName: 'lxgw-wenkai-screen-web',
      version: '1.522.0',
      integrity: 'sha512-LH1nDJz9prHgMYNKErg8XpDEIhs9+1bf6hPVKviy29be1r6Z4AXXbo9uuwmOH2hAzKMbe3kZ5+rzJ9zb/58+jw==',
      stylesheet: 'lxgw-wenkai-screen-web/lxgwwenkaiscreen/result.css',
    }],
    weights: [400],
  },
  'wenkai-mono': {
    family: '"LXGW WenKai Mono GB Screen"',
    fallback: ['monospace'],
    fontSynthesis: 'weight',
    license: 'OFL-1.1',
    sources: [{
      kind: 'package',
      packageName: 'lxgw-wenkai-mono-gb-screen-webfont',
      version: '1.0.1',
      integrity: 'sha512-GuJbWOsusYJjPifhhIVH25WEADKnaRPrbSLlhjDN/FtFOwa8sCj7s/FAYOGkzbM/7jEAFp7DM+6ImEQuXSSzxg==',
      stylesheet: 'lxgw-wenkai-mono-gb-screen-webfont/fonts/style.css',
    }],
    weights: [400],
  },
};

export const fontStack = (fontId: FontId) => {
  const font = FONT_REGISTRY[fontId];
  return [font.family, ...font.fallback].join(', ');
};

export const fontSynthesis = (fontId: FontId) => FONT_REGISTRY[fontId].fontSynthesis;
