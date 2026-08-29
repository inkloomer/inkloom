import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {
  Anchor,
  Ban,
  Compass,
  LandPlot,
  Mountain,
  Plane,
  Rocket,
  Ship,
  Snowflake,
  Waves,
} from 'lucide-react';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {PALETTE, SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 160;

const enter = (frame: number, delay: number, y = 24): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `0px ${interpolate(frame, [delay, delay + 22], [y, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px`,
});

const enterX = (frame: number, delay: number, x = 52): CSSProperties => ({
  opacity: interpolate(frame, [delay, delay + 16], [0, 1], CLAMP),
  translate: `${interpolate(frame, [delay, delay + 24], [x, 0], {...CLAMP, easing: Easing.out(Easing.cubic)})}px 0px`,
});

const CHART_CODE = ['壹', '贰', '叁', '肆', '伍', '陆', '柒'];

const ChartShell = ({
  children,
  code,
  station,
  title,
}: {
  readonly children: ReactNode;
  readonly code: number;
  readonly station: number;
  readonly title: string;
}) => (
  <AbsoluteFill
    className="font-animation-body"
    style={{
      color: PALETTE.paperText,
      backgroundColor: PALETTE.chart,
      backgroundImage:
        'repeating-linear-gradient(0deg, rgba(122,180,196,0.05) 0 1px, transparent 1px 44px), repeating-linear-gradient(90deg, rgba(122,180,196,0.05) 0 1px, transparent 1px 44px), radial-gradient(circle at 10% 100%, rgba(55,160,142,0.14), transparent 34%)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', inset: 22, border: `2px solid ${PALETTE.line}`}} />
    <div style={{position: 'absolute', inset: 28, border: `1px solid ${PALETTE.sand}44`}} />
    <header style={{position: 'absolute', left: 64, right: 64, top: 44, height: 104, display: 'flex', alignItems: 'center', gap: 24, borderBottom: `3px solid ${PALETTE.sand}`}}>
      <div style={{width: 70, height: 70, border: `3px solid ${PALETTE.orange}`, transform: 'rotate(45deg)', display: 'grid', placeItems: 'center'}}>
        <span style={{fontSize: 26, fontWeight: 800, color: PALETTE.orange, transform: 'rotate(-45deg)'}}>{CHART_CODE[code]}</span>
      </div>
      <h1 className="font-animation-title" style={{fontSize: 42, lineHeight: 1.1, margin: 0, fontWeight: 800, color: PALETTE.sand}}>
        {title}
      </h1>
      <div style={{marginLeft: 'auto', textAlign: 'right'}}>
        <div style={{fontSize: 16, fontWeight: 700, letterSpacing: 4, color: PALETTE.muted}}>NAUTICAL SURVEY · 三国法</div>
        <div style={{fontSize: 18, color: PALETTE.muted, marginTop: 6}}>国际法上的空间</div>
      </div>
    </header>
    <div style={{position: 'absolute', left: 66, top: 210, width: 104, height: 640, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40}}>
      {[0, 1, 2, 3, 4, 5, 6].map((index) => {
        const active = index === station;
        return (
          <div
            key={index}
            style={{
              width: 58,
              height: 58,
              transform: 'rotate(45deg)',
              border: `2px solid ${active ? PALETTE.orange : PALETTE.line}`,
              backgroundColor: active ? PALETTE.orange : PALETTE.deep,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <span className="font-animation-mono" style={{fontSize: 17, fontWeight: 700, color: active ? PALETTE.chart : PALETTE.muted, transform: 'rotate(-45deg)'}}>{String(index + 1).padStart(2, '0')}</span>
          </div>
        );
      })}
    </div>
    <main style={{position: 'absolute', left: 210, right: 64, top: 190, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Buoy = ({color, text}: {readonly color: string; readonly text: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', backgroundColor: `${color}22`, borderLeft: `6px solid ${color}`, padding: '4px 14px'}}>
    <span style={{fontSize: 22, fontWeight: 800, color}}>{text}</span>
  </span>
);

const Sand = ({children}: {readonly children: ReactNode}) => (
  <span style={{backgroundColor: 'rgba(233,223,200,0.18)', padding: '2px 10px', fontWeight: 800, color: PALETTE.sand}}>{children}</span>
);

const Underline = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{boxShadow: `inset 0 -3px ${color}`, paddingBottom: 2, fontWeight: 700}}>{children}</span>
);

const ChartStamp = ({
  color = PALETTE.orange,
  delay,
  frame,
  rotate = -5,
  text,
}: {
  readonly color?: string;
  readonly delay: number;
  readonly frame: number;
  readonly rotate?: number;
  readonly text: string;
}) => (
  <span
    style={{
      ...enter(frame, delay, 10),
      display: 'inline-block',
      border: `3px solid ${color}`,
      borderRadius: 6,
      color,
      padding: '6px 18px',
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: 2,
      rotate: `${rotate}deg`,
      backgroundColor: 'rgba(14,42,58,0.6)',
    }}
  >
    {text}
  </span>
);

export const TerritoryPartsScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="border-regime" data-final-knowledge="river-rules" data-final-knowledge="airspace-rule" data-final-knowledge="subsoil-rule" */
  const frame = useCurrentFrame();
  const rivers = [
    {name: '内河', rule: '完全主权', color: PALETTE.teal},
    {name: '界河', rule: '中心线为界 · 可航行不得靠泊 · 设施须经对方许可', color: PALETTE.sand},
    {name: '多国河流', rule: '仅对沿岸国船舶开放 · 不得改道堵塞', color: PALETTE.teal},
    {name: '国际河流', rule: '对所有国家非军用船开放 · 条约设专门机构管理', color: PALETTE.sand},
    {name: '国际运河', rule: '所在国完全主权 · 条约定航行制度', color: PALETTE.teal},
  ];
  return (
    <ChartShell code={0} station={0} title="领土的构成：领陆、领水、领空、底土">
      <div
        data-layout="layered-territory-strata-with-river-cards"
        data-visual-anchor="boundary"
        data-visual-grammar="four-territory-strata-stack-from-surface-to-subsoil,five-river-regimes-line-the-water-band"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="border-marker-repair-requires-both-parties"
        data-focal-channels="enclosure,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="border-regime"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 20, width: 780, height: 190, border: `3px solid ${PALETTE.sand}`, borderTop: `12px solid ${PALETTE.sand}`, backgroundColor: PALETTE.deep, padding: '18px 28px'}}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <LandPlot size={28} color={PALETTE.sand} />
            <span style={{fontSize: 29, fontWeight: 800, color: PALETTE.sand}}>领陆 · 边境制度</span>
          </div>
          <div style={{marginTop: 14, fontSize: 23, lineHeight: 1.5}}>
            允许边民往来边贸 · 尊重
            <Underline color={PALETTE.orange}>邻国相邻权</Underline>
            <br />
            <Sand>界标修复须双方代表在场</Sand>
          </div>
        </div>
        <div
          data-final-knowledge="airspace-rule"
          style={{...enter(frame, 44), position: 'absolute', left: 866, top: 20, width: 780, height: 88, border: `2px solid ${PALETTE.teal}`, backgroundColor: PALETTE.deep, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px', fontSize: 24, fontWeight: 700}}
        >
          <Plane size={26} color={PALETTE.teal} />
          <span>
            领空：完全主权 · 劫机犯
            <Sand>"或引渡或起诉"</Sand>
          </span>
        </div>
        <div
          data-final-knowledge="subsoil-rule"
          style={{...enter(frame, 58), position: 'absolute', left: 866, top: 122, width: 780, height: 88, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.deep, display: 'flex', alignItems: 'center', gap: 16, padding: '0 26px', fontSize: 24, fontWeight: 700}}
        >
          <Mountain size={26} color={PALETTE.muted} />
          <span>底土：完全主权</span>
        </div>
        <div
          style={{...enter(frame, 84), position: 'absolute', left: 0, top: 236, width: 1646, height: 500, border: `3px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.06)', padding: '18px 30px'}}
        >
          <div data-final-knowledge="river-rules" style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Waves size={28} color={PALETTE.teal} />
            <span style={{fontSize: 28, fontWeight: 800, color: PALETTE.teal}}>领水 · 河流制度五型</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16}}>
            {rivers.map((river) => (
              <div key={river.name} style={{...enterX(frame, 108 + rivers.indexOf(river) * 16, 40), display: 'flex', alignItems: 'center', gap: 18, borderLeft: `8px solid ${river.color}`, backgroundColor: 'rgba(233,223,200,0.06)', padding: '11px 20px'}}>
                <span style={{width: 110, fontSize: 23, fontWeight: 800, color: river.color}}>{river.name}</span>
                <span style={{fontSize: 22, fontWeight: 600}}>{river.rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChartShell>
  );
};

export const TerritoryAcquisitionScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="acquire-lawful" data-final-knowledge="acquire-unlawful" data-final-knowledge="occupation-elements" data-final-knowledge="accretion-rule" data-final-knowledge="cession-rule" data-final-knowledge="lease-contrast" data-final-knowledge="limitation-types" */
  const frame = useCurrentFrame();
  return (
    <ChartShell code={1} station={1} title="领土主权的取得与限制">
      <div
        data-layout="dual-verdict-acquisition-board"
        data-visual-anchor="typographic-sequence"
        data-visual-grammar="lawful-and-unlawful-modes-sort-into-two-verdict-columns,cession-and-lease-split-acquisition-from-limitation"
        data-text-treatments="stamp,soft-highlight,thin-underline"
        data-focal-rule="occupation-needs-terra-nullius-and-effective-control"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="acquire-lawful"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 16, width: 1010, height: 396, border: `3px solid ${PALETTE.teal}`, borderTop: `12px solid ${PALETTE.teal}`, backgroundColor: PALETTE.deep, padding: '18px 30px'}}
        >
          <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.teal}}>合法的取得方式</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14, fontSize: 22, lineHeight: 1.4}}>
            <div data-final-knowledge="occupation-elements" style={{...enterX(frame, 42, 36), borderLeft: `8px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.1)', padding: '10px 18px'}}>
              <Sand>先占</Sand>：要件 = 天然形成的
              <Underline color={PALETTE.teal}>无主地</Underline>
              + 国家
              <Underline color={PALETTE.teal}>有效占领</Underline>
            </div>
            <div data-final-knowledge="accretion-rule" style={{...enterX(frame, 66, 36), borderLeft: `8px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.1)', padding: '10px 18px'}}>
              <Sand>添附</Sand>：须以领土为基础 · 不得侵害相邻权 ·
              <Glow>大陆架不是领土</Glow>
            </div>
            <div data-final-knowledge="cession-rule" style={{...enterX(frame, 90, 36), borderLeft: `8px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.1)', padding: '10px 18px'}}>
              <Sand>割让</Sand>：非强制割让（平等条约）合法 · 强制割让不合法
            </div>
            <div style={{...enterX(frame, 114, 36), borderLeft: `8px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.1)', padding: '10px 18px'}}>
              <Sand>殖民地独立</Sand>合法 ·
              <Sand>公民投票</Sand>效力取决于国内法或协议
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="acquire-unlawful"
          style={{...enter(frame, 40), position: 'absolute', left: 1064, top: 16, width: 582, height: 396, border: `3px solid ${PALETTE.alert}`, backgroundColor: 'rgba(200,73,60,0.08)', padding: '18px 28px'}}
        >
          <div style={{fontSize: 27, fontWeight: 800, color: PALETTE.alert}}>不合法 / 有争议</div>
          <div style={{marginTop: 20, display: 'flex', flexDirection: 'column', gap: 20}}>
            <div style={{border: `3px solid ${PALETTE.alert}`, padding: '16px 20px', fontSize: 24, fontWeight: 800, color: PALETTE.alert}}>
              <Ban size={22} style={{marginRight: 10, verticalAlign: -4}} />
              征服 —— 不合法
            </div>
            <div style={{border: `3px solid ${PALETTE.orange}`, padding: '16px 20px', fontSize: 24, fontWeight: 700}}>
              时效 —— 有争议，
              <Underline color={PALETTE.orange}>我国不承认</Underline>
            </div>
          </div>
        </div>
        <div
          data-final-knowledge="lease-contrast"
          style={{...enter(frame, 150), position: 'absolute', left: 0, top: 436, width: 1010, height: 170, border: `3px solid ${PALETTE.sand}`, backgroundColor: 'rgba(233,223,200,0.08)', padding: '16px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.sand}}>易混对比：割让 VS 租借</div>
          <div style={{marginTop: 12, fontSize: 23, lineHeight: 1.55}}>
            合法性都取决于条约是否
            <Underline color={PALETTE.sand}>平等自愿</Underline>
            ；但
            <Sand>割让 = 取得方式</Sand>
            ，
            <Glow>租借 = 对领土主权的限制</Glow>
          </div>
        </div>
        <div
          data-final-knowledge="limitation-types"
          style={{...enter(frame, 176), position: 'absolute', left: 1064, top: 436, width: 582, height: 170, border: `2px solid ${PALETTE.line}`, backgroundColor: PALETTE.deep, padding: '16px 26px'}}
        >
          <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.muted}}>领土主权的特殊限制四类</div>
          <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.5}}>
            <Sand>共管 · 租借 · 地役 · 势力范围</Sand>
          </div>
        </div>
      </div>
    </ChartShell>
  );
};

const Glow = ({children}: {readonly children: ReactNode}) => (
  <span style={{backgroundColor: PALETTE.orangeSoft, padding: '2px 8px', fontWeight: 800, color: PALETTE.orange}}>{children}</span>
);

export const SeaZonesScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="internal-waters-zone" data-final-knowledge="territorial-sea-zone" data-final-knowledge="contiguous-zone" data-final-knowledge="eez-zone" data-final-knowledge="high-seas-zone" data-final-knowledge="port-jurisdiction" data-final-knowledge="innocent-passage-rule" */
  const frame = useCurrentFrame();
  const zones = [
    {name: '内海', width: 300, color: PALETTE.sand, rule: '完全主权 · 非经许可不得进入', id: 'internal-waters-zone', key: '渤海、琼州海峡属我国内海'},
    {name: '领海', width: 330, color: PALETTE.teal, rule: '完全主权 · 受无害通过限制', id: 'territorial-sea-zone', key: '我国不允许军舰无害通过（保留）'},
    {name: '毗连区', width: 300, color: PALETTE.strata, rule: '海关·财政·移民·卫生管制', id: 'contiguous-zone', key: '我国声明+国家安全 · 属我EEZ一部分'},
    {name: '专属经济区', width: 360, color: PALETTE.orange, rule: '自然资源专属 · 以事先宣告为条件', id: 'eez-zone', key: '施工行为无须许可 · 施工方案须同意'},
    {name: '公海', width: 300, color: PALETTE.line, rule: '船旗国管辖 · 一船一旗', id: 'high-seas-zone', key: '普遍管辖：海盗·非法广播·贩奴·贩毒'},
  ];
  let left = 0;
  return (
    <ChartShell code={2} station={2} title="海洋水域：五个海域的权利递减">
      <div
        data-layout="descending-sea-zone-strata"
        data-visual-anchor="flow-path"
        data-visual-grammar="five-sea-zones-descend-from-shore-to-high-seas,each-zone-carries-its-key-rule-plaque"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="rights-diminish-outward-from-the-coast"
        data-focal-channels="spatial,contrast,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 30, width: 1646, height: 300}}>
          {zones.map((zone) => {
            const x = left;
            left += zone.width + 12;
            return (
              <div
                key={zone.name}
                data-final-knowledge={zone.id}
                style={{
                  ...enterX(frame, 14 + zones.indexOf(zone) * 22, 44),
                  position: 'absolute',
                  left: x,
                  top: 0,
                  width: zone.width,
                  height: 300,
                  border: `3px solid ${zone.color}`,
                  borderTop: `14px solid ${zone.color}`,
                  backgroundColor: PALETTE.deep,
                  padding: '16px 20px',
                }}
              >
                <div style={{fontSize: 27, fontWeight: 800, color: zone.color}}>{zone.name}</div>
                <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.45, fontWeight: 700}}>{zone.rule}</div>
                <div style={{marginTop: 14, fontSize: 21, color: PALETTE.muted, lineHeight: 1.4, borderTop: `1px solid ${PALETTE.line}`, paddingTop: 10}}>{zone.key}</div>
              </div>
            );
          })}
        </div>
        <div
          data-final-knowledge="port-jurisdiction"
          style={{...enter(frame, 140), position: 'absolute', left: 0, top: 366, width: 780, height: 150, border: `2px solid ${PALETTE.sand}`, backgroundColor: 'rgba(233,223,200,0.07)', padding: '14px 26px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.sand}}>港口刑事管辖（外籍船）口诀</div>
          <div style={{marginTop: 10, fontSize: 22, lineHeight: 1.5}}>
            <Sand>三主动</Sand>：扰乱港口安宁 · 受害者为沿岸国或其国民 · 案情重大
            <br />
            <Sand>两被动</Sand>：船旗国领事或船长请求
          </div>
        </div>
        <div
          data-final-knowledge="innocent-passage-rule"
          style={{...enter(frame, 168), position: 'absolute', left: 866, top: 366, width: 780, height: 150, border: `2px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.08)', padding: '14px 26px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.teal}}>无害通过四要义</div>
          <div style={{marginTop: 10, fontSize: 22, lineHeight: 1.5}}>
            <Underline color={PALETTE.teal}>连续不停 · 迅速通过</Underline>
            · 潜水器
            <Sand>浮出水面展示国旗</Sand>
            · 通过必须无害
          </div>
        </div>
        <div style={{...enter(frame, 196), position: 'absolute', left: 0, top: 540, width: 1646, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: 'rgba(217,111,50,0.12)', borderTop: `3px solid ${PALETTE.orange}`, fontSize: 24, fontWeight: 800, color: PALETTE.orange, whiteSpace: 'nowrap'}}>
          毗连区、专属经济区、公海都不是领水 —— 上空非领空，底土非领土
        </div>
      </div>
    </ChartShell>
  );
};

export const HotPursuitScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="visit-subjects" data-final-knowledge="visit-start" data-final-knowledge="pursuit-start" data-final-knowledge="pursuit-steps" */
  const frame = useCurrentFrame();
  return (
    <ChartShell code={3} station={3} title="登临权 VS 紧追权：起点决定一切">
      <div
        data-layout="twin-powers-pair-with-pursuit-steps"
        data-visual-anchor="role-pair"
        data-visual-grammar="visit-and-pursuit-diverge-at-the-jurisdiction-start,pursuit-marches-signal-to-termination"
        data-text-treatments="label-block,thin-underline,soft-highlight"
        data-focal-rule="jurisdiction-start-distinguishes-visit-from-pursuit"
        data-focal-channels="contrast,connector,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="visit-subjects"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 30, width: 1646, height: 130, border: `3px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.08)', padding: '16px 28px'}}
        >
          <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.teal}}>共同点 · 主体</div>
          <div style={{marginTop: 10, fontSize: 23, lineHeight: 1.5}}>
            <Sand>军舰、军用机、经授权的公务船机</Sand>
            —— 可成为追检主体，但不能成为
            <Underline color={PALETTE.teal}>被追检对象</Underline>
          </div>
        </div>
        <div
          data-final-knowledge="visit-start"
          style={{...enter(frame, 60), position: 'absolute', left: 0, top: 186, width: 780, height: 220, border: `3px solid ${PALETTE.teal}`, borderTop: `12px solid ${PALETTE.teal}`, backgroundColor: PALETTE.deep, padding: '20px 30px'}}
        >
          <Ship size={30} color={PALETTE.teal} />
          <div style={{fontSize: 30, fontWeight: 800, color: PALETTE.teal, marginTop: 8}}>登临权（临检权）</div>
          <div style={{marginTop: 16, fontSize: 24, lineHeight: 1.5}}>
            在
            <Sand>公海直接提起</Sand>
            管辖
          </div>
          <div style={{marginTop: 12, fontSize: 22, color: PALETTE.muted}}>针对无国籍船、海盗船等</div>
        </div>
        <div
          data-final-knowledge="pursuit-start"
          style={{...enter(frame, 84), position: 'absolute', left: 866, top: 186, width: 780, height: 220, border: `3px solid ${PALETTE.orange}`, borderTop: `12px solid ${PALETTE.orange}`, backgroundColor: PALETTE.deep, padding: '20px 30px'}}
        >
          <Anchor size={30} color={PALETTE.orange} />
          <div style={{fontSize: 30, fontWeight: 800, color: PALETTE.orange, marginTop: 8}}>紧追权</div>
          <div style={{marginTop: 16, fontSize: 24, lineHeight: 1.5}}>
            <Sand>他域提起</Sand>
            并延伸至公海
          </div>
          <div style={{marginTop: 12, fontSize: 22, color: PALETTE.muted}}>起点海域须有相应管辖权；进入公海不终止</div>
        </div>
        <div
          data-final-knowledge="pursuit-steps"
          style={{...enter(frame, 130), position: 'absolute', left: 0, top: 432, width: 1646, height: 130, border: `3px solid ${PALETTE.orange}`, backgroundColor: 'rgba(217,111,50,0.1)', padding: '16px 30px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.orange}}>紧追三步 · 顺序不可乱</div>
          <div style={{marginTop: 12, fontSize: 24, fontWeight: 700, display: 'flex', gap: 20, alignItems: 'center'}}>
            <span style={{border: `2px solid ${PALETTE.orange}`, padding: '8px 18px'}}>① 发停驶信号</span>
            <span style={{color: PALETTE.orange}}>→</span>
            <span style={{border: `2px solid ${PALETTE.orange}`, padding: '8px 18px'}}>② 连续不中断</span>
            <span style={{color: PALETTE.orange}}>→</span>
            <span style={{border: `2px solid ${PALETTE.orange}`, padding: '8px 18px'}}>③ 被捕或进入他国领海时终止</span>
          </div>
        </div>
        <div style={{...enter(frame, 170), position: 'absolute', left: 0, top: 586, width: 1646, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(233,223,200,0.1)', borderTop: `3px solid ${PALETTE.sand}`, fontSize: 24, fontWeight: 800, color: PALETTE.sand, whiteSpace: 'nowrap'}}>
          区别不在行为方式，而在
          <span style={{backgroundColor: 'rgba(217,111,50,0.25)', padding: '2px 10px', margin: '0 10px'}}>管辖权的起点</span>
          不同
        </div>
      </div>
    </ChartShell>
  );
};

export const ContinentalShelfScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="shelf-under-200" data-final-knowledge="shelf-200-350" data-final-knowledge="shelf-over-350" data-final-knowledge="shelf-rights" data-final-knowledge="seabed-area-regime" */
  const frame = useCurrentFrame();
  const bands = [
    {label: '< 200 海里', rule: '可扩展到 200 海里', id: 'shelf-under-200', color: PALETTE.teal, delay: 46},
    {label: '200 — 350 海里', rule: '为其实际宽度', id: 'shelf-200-350', color: PALETTE.sand, delay: 70},
    {label: '> 350 海里', rule: '≤350 海里 或 ≤2500 公尺等深线外 100 海里，取较近者', id: 'shelf-over-350', color: PALETTE.orange, delay: 94},
  ];
  return (
    <ChartShell code={4} station={4} title="大陆架：三种界限与底土制度">
      <div
        data-layout="three-shelf-distance-bands-with-seabed-rules"
        data-visual-anchor="comparison-axis"
        data-visual-grammar="three-distance-bands-measure-the-shelf-limit,seabed-regimes-close-the-bottom-band"
        data-text-treatments="soft-highlight,thin-underline,label-block"
        data-focal-rule="shelf-rights-rest-on-scientific-evidence-not-occupation"
        data-focal-channels="contrast,spatial,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 16, width: 1646, fontSize: 24, fontWeight: 800, color: PALETTE.sand}}>
          从领海基线量起 · 到大陆边外缘的三种距离
        </div>
        <div style={{position: 'absolute', left: 0, top: 70, width: 1646, height: 260}}>
          {bands.map((band) => (
            <div
              key={band.id}
              data-final-knowledge={band.id}
              style={{...enterX(frame, band.delay, 44), position: 'absolute', left: bands.indexOf(band) * 556, top: 0, width: 534, height: 260, border: `3px solid ${band.color}`, borderTop: `14px solid ${band.color}`, backgroundColor: PALETTE.deep, padding: '20px 28px'}}
            >
              <div className="font-animation-mono" style={{fontSize: 26, fontWeight: 700, color: band.color}}>{band.label}</div>
              <div style={{marginTop: 16, fontSize: 24, lineHeight: 1.5}}>{band.rule}</div>
            </div>
          ))}
        </div>
        <div
          data-final-knowledge="shelf-rights"
          style={{...enter(frame, 128), position: 'absolute', left: 0, top: 356, width: 1010, height: 200, border: `3px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.08)', padding: '16px 28px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.teal}}>大陆架权利四要点</div>
          <div style={{marginTop: 10, fontSize: 22, lineHeight: 1.6}}>
            以
            <Underline color={PALETTE.teal}>科学信息和证据</Underline>
            为依据（非占领或公告）· 非生物资源专属勘探开发
            <br />
            他国架施工须
            <Sand>沿海国同意</Sand>
            · 200 海里外开发经
            <Glow>国际海底管理局缴费</Glow>
            （发展中国家符合条件可免缴）
          </div>
        </div>
        <div
          data-final-knowledge="seabed-area-regime"
          style={{...enter(frame, 156), position: 'absolute', left: 1064, top: 356, width: 582, height: 200, border: `3px solid ${PALETTE.orange}`, backgroundColor: 'rgba(217,111,50,0.1)', padding: '16px 26px'}}
        >
          <div style={{fontSize: 24, fontWeight: 800, color: PALETTE.orange}}>国际海底区域</div>
          <div style={{marginTop: 12, fontSize: 23, lineHeight: 1.55}}>
            适用
            <Sand>平行开发制</Sand>
            ：勘探者与国际海底局平行开发
          </div>
          <div style={{marginTop: 12, fontSize: 21, color: PALETTE.muted}}>专属经济区=水域 · 大陆架=底土</div>
        </div>
      </div>
    </ChartShell>
  );
};

export const SpecialWatersScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="archipelago-regime" data-final-knowledge="strait-definition" data-final-knowledge="transit-passage" data-final-knowledge="innocent-strait" data-final-knowledge="free-passage" data-final-knowledge="special-agreement" */
  const frame = useCurrentFrame();
  const regimes = [
    {name: '过境通行制', rule: '船舶 + 飞机 · 连续不停迅速过境', note: '国际海峡最主要的制度（两国陆地之间）', id: 'transit-passage', color: PALETTE.orange, delay: 106},
    {name: '无害通过制', rule: '仅船舶 · 不经许可连续不停', note: '一国大陆与岛屿构成 · 岛屿向海面有航道', id: 'innocent-strait', color: PALETTE.teal, delay: 126},
    {name: '自由通行制', rule: '船舶飞机自由航行飞越', note: '海峡中属公海或专属经济区的航道', id: 'free-passage', color: PALETTE.strata, delay: 146},
    {name: '特别协定制', rule: '由专门公约规定通行制度', note: '例外安排', id: 'special-agreement', color: PALETTE.line, delay: 166},
  ];
  return (
    <ChartShell code={5} station={5} title="群岛水域与国际海峡">
      <div
        data-layout="archipelago-panel-with-strait-regime-fork"
        data-visual-anchor="document-fork"
        data-visual-grammar="strait-traffic-forks-into-four-regimes,archipelago-waters-hold-innocent-passage"
        data-text-treatments="label-block,soft-highlight,thin-underline"
        data-focal-rule="transit-passage-is-the-default-for-international-straits"
        data-focal-channels="contrast,connector,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="archipelago-regime"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 30, width: 620, height: 566, border: `3px solid ${PALETTE.teal}`, borderTop: `12px solid ${PALETTE.teal}`, backgroundColor: PALETTE.deep, padding: '22px 30px'}}
        >
          <Compass size={30} color={PALETTE.teal} />
          <div style={{fontSize: 30, fontWeight: 800, color: PALETTE.teal, marginTop: 10}}>群岛水域</div>
          <div style={{marginTop: 18, fontSize: 23, lineHeight: 1.55}}>
            构成：群岛
            <Underline color={PALETTE.teal}>基线以内</Underline>
            、河口海湾港口
            <Underline color={PALETTE.teal}>封闭线以外</Underline>
          </div>
          <div style={{marginTop: 16, fontSize: 23, lineHeight: 1.55}}>
            地位：
            <Sand>领水 · 完全主权</Sand>
          </div>
          <div style={{marginTop: 16, fontSize: 23, lineHeight: 1.55}}>
            通行：
            <Glow>无害通过</Glow>
            为基本制度
          </div>
          <div style={{marginTop: 16, fontSize: 22, lineHeight: 1.55, color: PALETTE.muted}}>
            群岛国
            <Sand>"可以"指定海道与空中通道</Sand>
            （非应当）
          </div>
        </div>
        <div
          data-final-knowledge="strait-definition"
          style={{...enter(frame, 50), position: 'absolute', left: 674, top: 30, width: 972, height: 62, border: `2px solid ${PALETTE.sand}`, backgroundColor: 'rgba(233,223,200,0.08)', display: 'flex', alignItems: 'center', gap: 14, padding: '0 26px', fontSize: 23, fontWeight: 700}}
        >
          <Anchor size={24} color={PALETTE.sand} />
          国际海峡：两端连接公海或专属经济区 · 用于国际航行；通行制度不改变海峡水域的法律地位
        </div>
        <div style={{position: 'absolute', left: 674, top: 116, width: 972, height: 480}}>
          {regimes.map((regime) => (
            <div
              key={regime.id}
              data-final-knowledge={regime.id}
              style={{...enterX(frame, regime.delay, 40), position: 'absolute', left: 0, top: (regimes.indexOf(regime)) * 122, width: 972, height: 110, borderLeft: `10px solid ${regime.color}`, backgroundColor: 'rgba(233,223,200,0.05)', padding: '14px 24px'}}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                <span style={{fontSize: 25, fontWeight: 800, color: regime.color}}>{regime.name}</span>
                <span style={{fontSize: 22, fontWeight: 700}}>{regime.rule}</span>
              </div>
              <div style={{marginTop: 8, fontSize: 21, color: PALETTE.muted}}>{regime.note}</div>
            </div>
          ))}
        </div>
      </div>
    </ChartShell>
  );
};

export const AntarcticaSpaceScene = () => {
  /* Stable-final-frame inventory: data-final-knowledge="antarctica-freeze" data-final-knowledge="registration-regime" data-final-knowledge="rescue-regime" data-final-knowledge="liability-launch-state" data-final-knowledge="space-ground-strict" data-final-knowledge="space-space-fault" data-final-knowledge="register-vs-launch" */
  const frame = useCurrentFrame();
  return (
    <ChartShell code={6} station={6} title="南极与外层空间法律制度">
      <div
        data-layout="polar-panel-with-space-regime-stack"
        data-visual-anchor="flow-path"
        data-visual-grammar="space-regimes-stack-registration-rescue-liability,liability-splits-air-to-ground-versus-air-to-air"
        data-text-treatments="label-block,stamp,soft-highlight"
        data-focal-rule="space-to-ground-strict-liability-space-to-space-fault"
        data-focal-channels="contrast,enclosure,locator"
        style={{position: 'absolute', inset: 0}}
      >
        <div
          data-final-knowledge="antarctica-freeze"
          style={{...enter(frame, 14), position: 'absolute', left: 0, top: 30, width: 520, height: 566, border: `3px solid ${PALETTE.foam}`, borderTop: `12px solid ${PALETTE.foam}`, backgroundColor: PALETTE.deep, padding: '22px 30px'}}
        >
          <Snowflake size={30} color={PALETTE.foam} />
          <div style={{fontSize: 30, fontWeight: 800, color: PALETTE.foam, marginTop: 10}}>南极</div>
          <div style={{marginTop: 20, fontSize: 24, lineHeight: 1.6}}>
            共同原则：人类共同利益 · 和平 ·
            <Sand>自由科考</Sand>
          </div>
          <div style={{marginTop: 24}}>
            <ChartStamp delay={56} frame={frame} color={PALETTE.foam} rotate={-6} text={"“冻结”领土要求"} />
          </div>
          <div style={{marginTop: 18, fontSize: 22, lineHeight: 1.55, color: PALETTE.muted}}>
            冻结 = 不前进、也不后退；建科考站不构成领土主张
          </div>
        </div>
        <div style={{position: 'absolute', left: 574, top: 30, width: 1072, height: 566}}>
          <div
            data-final-knowledge="registration-regime"
            style={{...enter(frame, 40), position: 'absolute', left: 0, top: 0, width: 520, height: 268, border: `3px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.08)', padding: '18px 26px'}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.teal}}>登记制度</div>
            <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.55}}>
              向
              <Underline color={PALETTE.teal}>联合国秘书长</Underline>
              登记
              <br />
              <Sand>所有权和管辖权</Sand>
              的依据
            </div>
          </div>
          <div
            data-final-knowledge="rescue-regime"
            style={{...enter(frame, 62), position: 'absolute', left: 552, top: 0, width: 520, height: 268, border: `3px solid ${PALETTE.sand}`, backgroundColor: 'rgba(233,223,200,0.08)', padding: '18px 26px'}}
          >
            <div style={{fontSize: 25, fontWeight: 800, color: PALETTE.sand}}>营救制度</div>
            <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.55}}>
              三步：
              <Sand>援助 → 通知 → 送回</Sand>
            </div>
          </div>
          <div
            data-final-knowledge="liability-launch-state"
            style={{...enter(frame, 92), position: 'absolute', left: 0, top: 292, width: 1072, height: 274, border: `3px solid ${PALETTE.orange}`, backgroundColor: 'rgba(217,111,50,0.1)', padding: '18px 28px'}}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <Rocket size={26} color={PALETTE.orange} />
              <span style={{fontSize: 25, fontWeight: 800, color: PALETTE.orange}}>责任制度 · 责任主体 = 发射国</span>
            </div>
            <div style={{marginTop: 12, fontSize: 22, lineHeight: 1.5}}>
              实际发射 · 促使发射 ·
              <Underline color={PALETTE.orange}>从其领土或设施发射</Underline>
              的国家
            </div>
            <div style={{display: 'flex', gap: 20, marginTop: 14}}>
              <div data-final-knowledge="space-ground-strict" style={{...enterX(frame, 138, 36), flex: 1, border: `2px solid ${PALETTE.alert}`, backgroundColor: 'rgba(200,73,60,0.12)', padding: '10px 16px', fontSize: 22, fontWeight: 700}}>
                "空对地"（地面/内空飞机）→
                <Sand>绝对责任</Sand>
              </div>
              <div data-final-knowledge="space-space-fault" style={{...enterX(frame, 160, 36), flex: 1, border: `2px solid ${PALETTE.teal}`, backgroundColor: 'rgba(55,160,142,0.12)', padding: '10px 16px', fontSize: 22, fontWeight: 700}}>
                "空对空"（他空间物体）→
                <Sand>过错责任</Sand>
              </div>
            </div>
            <div data-final-knowledge="register-vs-launch" style={{...enter(frame, 188), marginTop: 14, fontSize: 22, fontWeight: 800, color: PALETTE.sand}}>
              <Sand>权属看登记国</Sand>
              ，
              <Glow>责任看发射国</Glow>
              ；两公约不调整缔约国与本国人之间的关系
            </div>
          </div>
        </div>
      </div>
    </ChartShell>
  );
};

export const SpatialRegimes = () => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{backgroundColor: PALETTE.chart, overflow: 'hidden'}}
  >
    <TimelineSequence name="01-territory-parts" {...SCENES.territoryParts}>
      <TerritoryPartsScene />
    </TimelineSequence>
    <TimelineSequence name="02-territory-acquisition" {...SCENES.territoryAcquisition}>
      <TerritoryAcquisitionScene />
    </TimelineSequence>
    <TimelineSequence name="03-sea-zones" {...SCENES.seaZones}>
      <SeaZonesScene />
    </TimelineSequence>
    <TimelineSequence name="04-hot-pursuit" {...SCENES.hotPursuit}>
      <HotPursuitScene />
    </TimelineSequence>
    <TimelineSequence name="05-continental-shelf" {...SCENES.continentalShelf}>
      <ContinentalShelfScene />
    </TimelineSequence>
    <TimelineSequence name="06-special-waters" {...SCENES.specialWaters}>
      <SpecialWatersScene />
    </TimelineSequence>
    <TimelineSequence name="07-antarctica-space" {...SCENES.antarcticaSpace}>
      <AntarcticaSpaceScene />
    </TimelineSequence>
  </AbsoluteFill>
);
