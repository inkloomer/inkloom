import type {CSSProperties, ComponentType, ReactNode} from 'react';
import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {loadFont} from '@remotion/fonts';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';
import {resolveAnimationTypography, type AnimationTypographyMetadata} from './animation-presets';

import '../animations/styles/animation-tailwind.css';

type AnimationTypographyContextValue = {readonly metadata?: AnimationTypographyMetadata};

const AnimationTypographyContext = createContext<AnimationTypographyContextValue>({});
const localWenkaiPath = 'fonts/lxgw-wenkai-screen/lxgw-wenkai-screen-regular.woff2';
let fontsReady: Promise<void> | undefined;

const publicFontUrl = () => {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/inkloom/')) return `/inkloom/${localWenkaiPath}`;
  return staticFile(localWenkaiPath);
};

const ensureAnimationFonts = () => {
  fontsReady ??= (async () => {
    await loadFont({family: 'LXGW WenKai Screen', url: publicFontUrl(), weight: '400', style: 'normal', display: 'block'});
    if (typeof document !== 'undefined') {
      await document.fonts.load('400 16px "LXGW WenKai Mono GB Screen"', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
      await document.fonts.ready;
    }
  })();
  return fontsReady;
};

const styleFor = (metadata?: AnimationTypographyMetadata, sceneId?: string) =>
  resolveAnimationTypography({metadata, sceneId}).style as CSSProperties;

export const AnimationTypographyProvider = ({children, metadata}: {readonly children: ReactNode; readonly metadata?: AnimationTypographyMetadata}) => {
  const [handle] = useState(() => delayRender('Loading InkLoom animation typography'));

  useEffect(() => {
    let active = true;
    void ensureAnimationFonts()
      .then(() => {
        if (active) continueRender(handle);
      }, (error: unknown) => {
        if (active) cancelRender(error);
      });
    return () => {
      active = false;
    };
  }, [handle]);

  const value = useMemo(() => ({metadata}), [metadata]);
  return (
    <AnimationTypographyContext.Provider value={value}>
      <div className="inkloom-animation-typography font-animation-body" style={styleFor(metadata)}>
        {children}
      </div>
    </AnimationTypographyContext.Provider>
  );
};

export const AnimationSceneTypographyScope = ({children, sceneId}: {readonly children: ReactNode; readonly sceneId: string}) => {
  const {metadata} = useContext(AnimationTypographyContext);
  return <div className="font-animation-body" style={styleFor(metadata, sceneId)}>{children}</div>;
};

export const withAnimationTypography = (Component: ComponentType<Record<string, never>>, metadata?: AnimationTypographyMetadata) => {
  const TypographyWrapped = () => (
    <AnimationTypographyProvider metadata={metadata}>
      <Component />
    </AnimationTypographyProvider>
  );
  TypographyWrapped.displayName = `Typography(${Component.displayName ?? Component.name ?? 'Animation'})`;
  return TypographyWrapped;
};
