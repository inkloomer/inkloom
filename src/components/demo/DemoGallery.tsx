import {useEffect, useRef, useState} from 'react';
import {Player} from '@remotion/player';
import {ArrowUpRight} from 'lucide-react';
import {STYLE_DEMOS, type DemoDefinition} from './demo-registry';
import './DemoGallery.css';

const DemoPreview = ({demo}: {readonly demo: DemoDefinition}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = frameRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {rootMargin: '240px 0px'},
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const preview = (
    <>
      <div ref={frameRef} className="demo-gallery__frame">
        {isVisible ? (
          <Player
            component={demo.component}
            durationInFrames={demo.durationInFrames}
            fps={demo.fps}
            compositionWidth={1920}
            compositionHeight={1080}
            autoPlay
            loop
            controls={false}
            clickToPlay={false}
            acknowledgeRemotionLicense
            style={{width: '100%', height: '100%', pointerEvents: 'none'}}
          />
        ) : null}
      </div>
      <div className="demo-gallery__caption">
        <span>{demo.direction}</span>
        <strong>{demo.title}</strong>
        {demo.href ? <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.8} /> : null}
      </div>
    </>
  );

  return (
    <article className="demo-gallery__item">
      {demo.href ? <a href={demo.href} aria-label={`打开${demo.title}动画`}>{preview}</a> : preview}
    </article>
  );
};

export const DemoGallery = () => (
  <div className="demo-gallery" data-demo-gallery>
    {STYLE_DEMOS.map((demo) => <DemoPreview key={demo.id} demo={demo} />)}
  </div>
);
