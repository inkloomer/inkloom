import type {CSSProperties, ReactElement, ReactNode} from 'react';
import {Children, cloneElement, isValidElement, useLayoutEffect, useRef} from 'react';
import {ArrowRight} from 'lucide-react';
import {Easing, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AnimationSceneTypographyScope} from '../../typography/animation-provider';

export const CLAMP = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export type SceneTiming = {
  readonly start: number;
  readonly duration: number;
  readonly previewEndTrimFrames: number;
};

type LayoutAuditInputProps = {
  readonly __inkloomFinalFrameAudit?: boolean;
  readonly __inkloomLayoutAudit?: boolean;
};

const formatRect = (rect: DOMRect) =>
  `[${Math.round(rect.left)},${Math.round(rect.top)} ${Math.round(rect.width)}x${Math.round(rect.height)}]`;
const quote = (value: string) => `"${value}"`;

const WENKAI_SCREEN = 'LXGW WenKai Screen';
const WENKAI_MONO = 'LXGW WenKai Mono GB Screen';

const isLoadedWenkaiFont = (family: string, text: string) => {
  const expectedFamily = family.includes(WENKAI_MONO)
    ? WENKAI_MONO
    : family.includes(WENKAI_SCREEN)
      ? WENKAI_SCREEN
      : undefined;
  if (!expectedFamily) return false;
  return document.fonts.check(`400 16px "${expectedFamily}"`, text);
};

const LayoutAudit = ({children, name}: {readonly children: ReactNode; readonly name: string}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const {height, props, width} = useVideoConfig();
  const enabled = (props as LayoutAuditInputProps).__inkloomLayoutAudit === true;
  const finalFrameAuditEnabled = (props as LayoutAuditInputProps).__inkloomFinalFrameAudit === true;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!enabled || !root) return;

    const tolerance = 2;
    const canvas = root.getBoundingClientRect();
    const failures: string[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => (node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
    });

    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const parent = node.parentElement;
      if (!parent) continue;
      const style = window.getComputedStyle(parent);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;

      const text = node.textContent?.trim().replace(/\s+/g, ' ') ?? '';
      if (!isLoadedWenkaiFont(style.fontFamily, text)) {
        failures.push(`"${text.slice(0, 80)}" does not use a loaded WenKai font (${style.fontFamily})`);
        continue;
      }

      let boundary: HTMLElement | null = parent;
      while (boundary && boundary !== root) {
        const boundaryStyle = window.getComputedStyle(boundary);
        const hasBorder = [boundaryStyle.borderTopWidth, boundaryStyle.borderRightWidth, boundaryStyle.borderBottomWidth, boundaryStyle.borderLeftWidth]
          .some((width) => Number.parseFloat(width) > 0);
        if (hasBorder || boundary.dataset.auditBoundary === 'true') break;
        boundary = boundary.parentElement;
      }

      const limit = boundary && boundary !== root ? boundary.getBoundingClientRect() : canvas;
      const range = document.createRange();
      range.selectNodeContents(node);
      for (const rect of range.getClientRects()) {
        if (rect.width === 0 || rect.height === 0) continue;
        const outside =
          rect.left < limit.left - tolerance ||
          rect.top < limit.top - tolerance ||
          rect.right > limit.right + tolerance ||
          rect.bottom > limit.bottom + tolerance;
        if (outside) {
          failures.push(`"${text.slice(0, 80)}" ${formatRect(rect)} exceeds ${formatRect(limit)}`);
        }
      }
    }

    if (finalFrameAuditEnabled) {
      const finalKnowledge = [...root.querySelectorAll<HTMLElement>('[data-final-knowledge]')];
      if (finalKnowledge.length === 0) {
        failures.push('final frame declares no data-final-knowledge elements');
      }

      const sourceIds = new Set(
        [...root.querySelectorAll<HTMLElement>('[data-stateful-source]')]
          .map((element) => element.dataset.statefulSource)
          .filter((value): value is string => Boolean(value)),
      );
      const terminals = [...root.querySelectorAll<HTMLElement>('[data-stateful-terminal]')];
      const terminalIds = new Set(
        terminals
          .map((element) => element.dataset.statefulTerminal)
          .filter((value): value is string => Boolean(value)),
      );

      for (const sourceId of sourceIds) {
        if (!terminalIds.has(sourceId)) failures.push(`stateful object ${quote(sourceId)} has no terminal representation`);
      }

      const auditedElements = [...new Set([...finalKnowledge, ...terminals])];
      for (const element of auditedElements) {
        const identifier = element.dataset.finalKnowledge ?? element.dataset.statefulTerminal ?? 'unknown';
        const rect = element.getBoundingClientRect();
        let cumulativeOpacity = 1;
        let current: HTMLElement | null = element;
        let hidden = rect.width <= tolerance || rect.height <= tolerance;

        while (current && current !== root) {
          const style = window.getComputedStyle(current);
          cumulativeOpacity *= Number(style.opacity || 1);
          if (style.display === 'none' || style.visibility === 'hidden') hidden = true;
          current = current.parentElement;
        }

        if (hidden || cumulativeOpacity < 0.98) {
          failures.push(`final knowledge ${quote(identifier)} is not fully visible`);
        }
        if (
          rect.left < canvas.left - tolerance ||
          rect.top < canvas.top - tolerance ||
          rect.right > canvas.right + tolerance ||
          rect.bottom > canvas.bottom + tolerance
        ) {
          failures.push(`final knowledge ${quote(identifier)} ${formatRect(rect)} exceeds canvas ${formatRect(canvas)}`);
        }
      }

      for (let leftIndex = 0; leftIndex < finalKnowledge.length; leftIndex += 1) {
        const left = finalKnowledge[leftIndex];
        const leftRect = left.getBoundingClientRect();
        for (let rightIndex = leftIndex + 1; rightIndex < finalKnowledge.length; rightIndex += 1) {
          const right = finalKnowledge[rightIndex];
          if (left.contains(right) || right.contains(left)) continue;
          const rightRect = right.getBoundingClientRect();
          const overlapWidth = Math.max(0, Math.min(leftRect.right, rightRect.right) - Math.max(leftRect.left, rightRect.left));
          const overlapHeight = Math.max(0, Math.min(leftRect.bottom, rightRect.bottom) - Math.max(leftRect.top, rightRect.top));
          const overlapArea = overlapWidth * overlapHeight;
          const smallerArea = Math.min(leftRect.width * leftRect.height, rightRect.width * rightRect.height);
          if (overlapWidth > tolerance && overlapHeight > tolerance && overlapArea > smallerArea * 0.02) {
            const leftId = left.dataset.finalKnowledge ?? 'unknown';
            const rightId = right.dataset.finalKnowledge ?? 'unknown';
            failures.push(`final knowledge ${quote(leftId)} overlaps ${quote(rightId)}`);
          }
        }
      }
    }

    if (failures.length > 0) {
      throw new Error(`[layout-audit] ${name}: ${failures.join(' | ')}`);
    }
  }, [enabled, finalFrameAuditEnabled, name]);

  if (!enabled) return <>{children}</>;
  return <div ref={rootRef} style={{position: 'absolute', left: 0, top: 0, width, height}}>{children}</div>;
};

export const createPlaybackTimeline = ({
  fps,
  playbackRate,
  previewExitTrimSourceFrames,
  sourceDurationSeconds,
}: {
  readonly fps: number;
  readonly playbackRate: number;
  readonly previewExitTrimSourceFrames: number;
  readonly sourceDurationSeconds: number;
}) => {
  const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / playbackRate);
  const toSourceFrame = (playbackFrame: number) => playbackFrame * playbackRate;
  const previewEndTrimFrames = toPlaybackFrames(previewExitTrimSourceFrames);
  const durationFrames = toPlaybackFrames(sourceDurationSeconds * fps);

  return {
    durationFrames,
    durationSeconds: durationFrames / fps,
    scene: (start: number, duration: number): SceneTiming => ({
      start: toPlaybackFrames(start),
      duration: toPlaybackFrames(duration),
      previewEndTrimFrames,
    }),
    toPlaybackFrames,
    toSourceFrame,
  };
};

export const TimelineSequence = ({
  children,
  duration,
  name,
  start,
}: {
  readonly children: ReactNode;
  readonly duration: number;
  readonly name: string;
  readonly start: number;
}) => (
  <Sequence from={start} durationInFrames={duration} name={name} layout="none">
    <AnimationSceneTypographyScope sceneId={name.replace(/^\d+-/, '')}>
      <LayoutAudit name={name}>{children}</LayoutAudit>
    </AnimationSceneTypographyScope>
  </Sequence>
);

export const createMotionPrimitives = (toSourceFrame: (playbackFrame: number) => number) => {
  const Enter = ({
    children,
    delay = 0,
    distance = 28,
    duration = 28,
    easing = Easing.bezier(0.16, 1, 0.3, 1),
    from = 'up',
    style,
  }: {
    readonly children: ReactNode;
    readonly delay?: number;
    readonly distance?: number;
    readonly duration?: number;
    readonly easing?: (input: number) => number;
    readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
    readonly style?: CSSProperties;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const origin = {
      down: `0px -${distance}px`,
      left: `${distance}px 0px`,
      none: '0px 0px',
      right: `-${distance}px 0px`,
      up: `0px ${distance}px`,
    }[from];

    return (
      <div
        style={{
          ...style,
          opacity: interpolate(frame, [delay, delay + duration], [0, 1], {...CLAMP, easing}),
          translate: interpolate(frame, [delay, delay + duration], [origin, '0px 0px'], {
            ...CLAMP,
            easing,
          }),
        }}
      >
        {children}
      </div>
    );
  };

  const StaggerEnter = ({
    baseDelay = 16,
    children,
    direction = 'row',
    distance = 24,
    duration = 28,
    from = 'up',
    gap = 24,
    step = 22,
    style,
  }: {
    readonly baseDelay?: number;
    readonly children: ReactNode;
    readonly direction?: 'column' | 'row';
    readonly distance?: number;
    readonly duration?: number;
    readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
    readonly gap?: number;
    readonly step?: number;
    readonly style?: CSSProperties;
  }) => (
    <div style={{display: 'flex', flexDirection: direction, gap, ...style}}>
      {Children.toArray(children).map((child, index) => {
        const delay = baseDelay + index * step;
        if (isValidElement(child) && child.type === Enter) {
          return cloneElement(child as ReactElement<{delay?: number}>, {
            key: index,
            delay: (child.props as {delay?: number}).delay ?? delay,
          });
        }
        return (
          <Enter key={index} delay={delay} distance={distance} duration={duration} from={from}>
            {child}
          </Enter>
        );
      })}
    </div>
  );

  const MaskedReveal = ({
    children,
    delay = 0,
    distance = 36,
    duration = 28,
    edge = 'left',
    style,
  }: {
    readonly children: ReactNode;
    readonly delay?: number;
    readonly distance?: number;
    readonly duration?: number;
    readonly edge?: 'bottom' | 'left' | 'right' | 'top';
    readonly style?: CSSProperties;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const hidden = interpolate(frame, [delay, delay + duration], [100, 0], {
      ...CLAMP,
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
    const clipPath = {
      bottom: `inset(0 0 ${hidden}% 0)`,
      left: `inset(0 ${hidden}% 0 0)`,
      right: `inset(0 0 0 ${hidden}%)`,
      top: `inset(${hidden}% 0 0 0)`,
    }[edge];
    const origin = {
      bottom: `0px -${distance}px`,
      left: `-${distance}px 0px`,
      right: `${distance}px 0px`,
      top: `0px ${distance}px`,
    }[edge];

    return (
      <div style={{...style, clipPath}}>
        <div
          style={{
            translate: interpolate(frame, [delay, delay + duration], [origin, '0px 0px'], {
              ...CLAMP,
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          {children}
        </div>
      </div>
    );
  };

  const ImpactReveal = ({
    children,
    delay,
    style,
  }: {
    readonly children: ReactNode;
    readonly delay: number;
    readonly style?: CSSProperties;
  }) => {
    const frame = toSourceFrame(useCurrentFrame());
    const {fps} = useVideoConfig();
    return (
      <div
        style={{
          ...style,
          opacity: interpolate(frame, [delay, delay + 3], [0, 1], CLAMP),
          scale: spring({
            frame: frame - delay,
            fps,
            config: {damping: 16, mass: 0.65, stiffness: 180},
            durationInFrames: 30,
          }),
        }}
      >
        {children}
      </div>
    );
  };

  return {Enter, ImpactReveal, MaskedReveal, StaggerEnter};
};

export const ProgressArrow = ({
  color,
  headSize = 42,
  label,
  labelStyle,
  left,
  progress,
  thickness = 5,
  top,
  width,
}: {
  readonly color: string;
  readonly headSize?: number;
  readonly label?: string;
  readonly labelStyle?: CSSProperties;
  readonly left: number;
  readonly progress: number;
  readonly thickness?: number;
  readonly top: number;
  readonly width: number;
}) => (
  <div style={{position: 'absolute', left, top, width, height: Math.max(70, headSize)}}>
    {label ? (
      <div style={{position: 'absolute', left: 0, top: -34, color, opacity: progress, ...labelStyle}}>{label}</div>
    ) : null}
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 24,
        width,
        height: thickness,
        backgroundColor: color,
        scale: `${progress} 1`,
        transformOrigin: 'left center',
      }}
    />
    <ArrowRight
      size={headSize}
      strokeWidth={2.5}
      style={{
        position: 'absolute',
        right: -Math.round(headSize * 0.31),
        top: 4,
        color,
        opacity: interpolate(progress, [0.82, 1], [0, 1], CLAMP),
      }}
    />
  </div>
);
