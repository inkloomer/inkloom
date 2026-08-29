import {createElement, lazy, Suspense, type ComponentType} from 'react';

// Registry entries must not statically import Remotion compositions: the demo
// gallery would otherwise pull every composition's module graph on page open.
// Each entry instead carries a Suspense-wrapped lazy component so a
// composition's modules load only when its card actually mounts.
export const lazyDemo = (load: () => Promise<{default: ComponentType<Record<string, never>>}>) => {
  const Loaded = lazy(load);
  const SuspendedDemo = () => createElement(Suspense, {fallback: null}, createElement(Loaded));
  SuspendedDemo.displayName = 'SuspendedDemo';
  return SuspendedDemo;
};
