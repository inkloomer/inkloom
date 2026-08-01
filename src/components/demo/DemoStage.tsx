import {Player} from '@remotion/player';
import {ChevronLeft, ChevronRight, Grid3X3} from 'lucide-react';
import {demoById, STYLE_DEMOS} from './demo-registry';
import './DemoStage.css';

export const DemoStage = ({demoId}: {readonly demoId: string}) => {
  const demoIndex = STYLE_DEMOS.findIndex((candidate) => candidate.id === demoId);
  const demo = demoById(demoId);

  if (!demo || demoIndex < 0) return <p role="alert">Demo 不存在。</p>;

  const previous = STYLE_DEMOS[(demoIndex - 1 + STYLE_DEMOS.length) % STYLE_DEMOS.length];
  const next = STYLE_DEMOS[(demoIndex + 1) % STYLE_DEMOS.length];

  return (
    <section className="demo-stage" data-animation-viewport>
      <div className="demo-stage__player">
        <Player
          component={demo.component}
          durationInFrames={demo.durationInFrames}
          fps={demo.fps}
          compositionWidth={1920}
          compositionHeight={1080}
          controls
          loop
          acknowledgeRemotionLicense
          style={{width: '100%', height: '100%'}}
        />
      </div>
      <nav className="demo-stage__navigation" aria-label="Demo 风格导航">
        <a href={previous.href ?? '/inkloom/demo/'} title={`上一个：${previous.title}`}>
          <ChevronLeft size={19} aria-hidden="true" />
          <span>{previous.title}</span>
        </a>
        <a className="demo-stage__all" href="/inkloom/demo/" title="全部 Demo">
          <Grid3X3 size={19} aria-hidden="true" />
          <span>全部</span>
        </a>
        <a href={next.href ?? '/inkloom/demo/'} title={`下一个：${next.title}`}>
          <span>{next.title}</span>
          <ChevronRight size={19} aria-hidden="true" />
        </a>
      </nav>
    </section>
  );
};
