import type {CSSProperties, ComponentType, ReactNode} from 'react';
import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {loadFont} from '@remotion/fonts';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';
import {resolveAnimationTypography, type AnimationTypographyConfiguration} from './animation-presets';

import '../animations/styles/animation-tailwind.css';

type AnimationTypographyContextValue = {readonly configuration?: AnimationTypographyConfiguration};

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

const styleFor = (configuration?: AnimationTypographyConfiguration, sceneId?: string) =>
  resolveAnimationTypography({
    metadata: configuration?.metadata,
    sceneId,
    scope: configuration?.scope,
  }).style as CSSProperties;

export const AnimationTypographyProvider = ({
  children,
  configuration,
}: {
  readonly children: ReactNode;
  readonly configuration?: AnimationTypographyConfiguration;
}) => {
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

  const value = useMemo(() => ({configuration}), [configuration]);
  return (
    <AnimationTypographyContext.Provider value={value}>
      <div className="inkloom-animation-typography font-animation-body" style={styleFor(configuration)}>
        {children}
      </div>
    </AnimationTypographyContext.Provider>
  );
};

export const AnimationSceneTypographyScope = ({children, sceneId}: {readonly children: ReactNode; readonly sceneId: string}) => {
  const {configuration} = useContext(AnimationTypographyContext);
  return <div className="font-animation-body" style={styleFor(configuration, sceneId)}>{children}</div>;
};

export const withAnimationTypography = (Component: ComponentType<Record<string, never>>, configuration?: AnimationTypographyConfiguration) => {
  const TypographyWrapped = () => (
    <AnimationTypographyProvider configuration={configuration}>
      <Component />
    </AnimationTypographyProvider>
  );
  TypographyWrapped.displayName = `Typography(${Component.displayName ?? Component.name ?? 'Animation'})`;
  return TypographyWrapped;
};
