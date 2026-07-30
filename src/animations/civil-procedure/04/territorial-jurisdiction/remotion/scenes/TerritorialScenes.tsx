import {
  Building2,
  FileCheck2,
  FileText,
  Gavel,
  Home,
  Landmark,
  LockKeyhole,
  MapPinned,
  ShipWheel,
  UserRound,
} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, accentColor, accentSoftColor, toSourceFrame} from '../storyboard';
import {Keyword, NodeCard, RouteLine, RuleChip, SceneHeading, baseTextStyle} from '../visual-system';

const reveal = (frame: number, start: number, end: number) => interpolate(frame, [start, end], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.45, 0, 0.2, 1)});

export const OrientationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = reveal(frame, 30, 132);
  const scale = interpolate(progress, [0, 1], [0.88, 1]);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="先找入口" title="地域管辖在找什么？" accent="red" />
      <div style={{position: 'absolute', left: 120, top: 360, opacity: progress, scale: `${scale}`}}>
        <NodeCard icon={FileText} label="民事案件" detail="已经确定由法院主管" accent="red" />
      </div>
      <RouteLine left={420} top={420} width={830} progress={progress} accent="red" label="沿着地域连接点定位" />
      <div style={{position: 'absolute', left: 1310, top: 345, opacity: progress, scale: `${scale}`}}>
        <NodeCard icon={MapPinned} label="有管辖权的法院" detail="可以受理这一案件" accent="teal" />
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 612, top: 610, color: PALETTE.muted, fontSize: 26, fontWeight: 800}}>
        关键不是“法院在哪里”，而是案件与法院的<Keyword accent="red">连接点</Keyword>
      </div>
    </div>
  );
};

export const GeneralScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const mainProgress = reveal(frame, 18, 88);
  const exceptionProgress = reveal(frame, 110, 178);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="一般地域" title="原则：原告就被告" accent="blue" />
      <div style={{position: 'absolute', left: 120, top: 330, opacity: mainProgress, translate: `${interpolate(mainProgress, [0, 1], [-48, 0])}px 0px`}}>
        <NodeCard icon={UserRound} label="原告" detail="提起诉讼" accent="blue" />
      </div>
      <RouteLine left={418} top={390} width={500} progress={mainProgress} accent="blue" label="原则路径" />
      <div style={{position: 'absolute', left: 980, top: 330, opacity: mainProgress}}>
        <NodeCard icon={Home} label="被告住所地" detail="通常的连接点" accent="blue" />
      </div>
      <div style={{position: 'absolute', left: 120, top: 650, opacity: exceptionProgress, translate: `${interpolate(exceptionProgress, [0, 1], [-48, 0])}px 0px`}}>
        <RuleChip accent="gold">例外：被告就原告</RuleChip>
      </div>
      <RouteLine left={440} top={694} width={480} progress={exceptionProgress} accent="gold" label="身份关系等法定例外" />
      <div style={{position: 'absolute', left: 980, top: 640, opacity: exceptionProgress}}>
        <NodeCard icon={UserRound} label="原告住所地" detail="法律特别允许时" accent="gold" compact />
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 121, top: 830, color: PALETTE.muted, fontSize: 23, fontWeight: 800}}>
        两条路径都仍属于<Keyword accent="blue">一般地域管辖</Keyword>
      </div>
    </div>
  );
};

const specialRows = [
  {label: '侵权纠纷', icon: Gavel, accent: 'red' as const, target: '侵权行为地 / 被告住所地'},
  {label: '合同纠纷', icon: FileCheck2, accent: 'gold' as const, target: '合同履行地 / 被告住所地'},
  {label: '公司诉讼', icon: Building2, accent: 'teal' as const, target: '公司住所地'},
];

export const SpecialScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = reveal(frame, 20, 120);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="特殊地域" title="纠纷类型改变连接点" accent="gold" />
      <div style={{position: 'absolute', left: 120, top: 350, opacity: progress}}>
        <NodeCard icon={MapPinned} label="法律事实所在地" detail="侵权、合同、公司" accent="gold" />
      </div>
      {specialRows.map((row, index) => {
        const rowProgress = reveal(frame, 38 + index * 24, 90 + index * 24);
        return (
          <div key={row.label} style={{opacity: rowProgress}}>
            <RouteLine left={430} top={384 + index * 145} width={390} progress={rowProgress} accent={row.accent} />
            <div style={{position: 'absolute', left: 860, top: 328 + index * 145}}>
              <NodeCard icon={row.icon} label={row.label} detail={row.target} accent={row.accent} compact />
            </div>
          </div>
        );
      })}
      <div style={{...baseTextStyle, position: 'absolute', left: 120, top: 820, color: PALETTE.muted, fontSize: 23, fontWeight: 800}}>
        看到<Keyword accent="gold">特殊案型</Keyword>，再去找与事实最密切的地点
      </div>
    </div>
  );
};

const exclusiveRows = [
  {label: '不动产纠纷', detail: '不动产所在地', icon: Home},
  {label: '港口作业纠纷', detail: '港口所在地', icon: ShipWheel},
  {label: '继承遗产纠纷', detail: '死亡时住所地 / 主要遗产所在地', icon: Landmark},
];

export const ExclusiveScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = reveal(frame, 20, 102);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="专属管辖" title="这一次，法院不能随便选" accent="red" />
      <div style={{position: 'absolute', left: 150, top: 380, opacity: progress, scale: `${interpolate(progress, [0, 1], [0.86, 1])}`}}>
        <NodeCard icon={LockKeyhole} label="专属" detail="只能由法定法院管辖" accent="red" />
      </div>
      {exclusiveRows.map((row, index) => {
        const rowProgress = reveal(frame, 44 + index * 22, 100 + index * 22);
        return (
          <div key={row.label} style={{opacity: rowProgress}}>
            <RouteLine left={472} top={414 + index * 150} width={190} progress={rowProgress} accent="red" />
            <div style={{position: 'absolute', left: 720, top: 350 + index * 150}}>
              <NodeCard icon={row.icon} label={row.label} detail={row.detail} accent="red" compact />
            </div>
          </div>
        );
      })}
      <div style={{...baseTextStyle, position: 'absolute', left: 1120, top: 760, width: 600, color: PALETTE.muted, fontSize: 23, fontWeight: 800, lineHeight: 1.5}}>
        <Keyword accent="red">注意：</Keyword>普通商品房、商铺买卖合同纠纷，不当然适用不动产专属管辖。
      </div>
    </div>
  );
};

const agreementTargets = ['被告住所地', '合同履行地', '合同签订地', '原告住所地', '标的物所在地'];

export const AgreementScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const progress = reveal(frame, 20, 112);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="协议管辖" title="可以约定，但不能越过两条红线" accent="teal" />
      <div style={{position: 'absolute', left: 112, top: 380, opacity: progress, translate: `${interpolate(progress, [0, 1], [-35, 0])}px 0px`}}>
        <NodeCard icon={FileText} label="书面协议" detail="合同 / 财产权益纠纷" accent="teal" />
      </div>
      {agreementTargets.map((target, index) => {
        const targetProgress = reveal(frame, 46 + index * 12, 94 + index * 12);
        const top = 285 + index * 120;
        return (
          <div key={target} style={{opacity: targetProgress}}>
            <RouteLine left={420} top={top + 52} width={300} progress={targetProgress} accent="teal" />
            <div style={{position: 'absolute', left: 770, top}}>
              <RuleChip accent="teal">{target}</RuleChip>
            </div>
          </div>
        );
      })}
      <div style={{position: 'absolute', left: 1335, top: 365, opacity: progress}}>
        <div style={{...baseTextStyle, width: 410, padding: '22px 26px', border: `2px solid ${PALETTE.red}`, borderRadius: 10, backgroundColor: PALETTE.redSoft}}>
          <div style={{color: PALETTE.red, fontSize: 23, fontWeight: 950}}>不能突破</div>
          <div style={{marginTop: 14, fontSize: 27, fontWeight: 900, lineHeight: 1.35}}>级别管辖<br />专属管辖</div>
        </div>
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 112, top: 850, color: PALETTE.muted, fontSize: 23, fontWeight: 800}}>
        口头协议无效；多个实际联系地点，可以选择其中一个起诉
      </div>
    </div>
  );
};

const recapSteps = [
  {number: '01', label: '一般', detail: '先看被告所在地', accent: 'blue' as const},
  {number: '02', label: '特殊', detail: '再看纠纷事实地点', accent: 'gold' as const},
  {number: '03', label: '专属', detail: '法定法院锁定', accent: 'red' as const},
  {number: '04', label: '协议', detail: '书面约定但守边界', accent: 'teal' as const},
];

export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="06" eyebrow="判断顺序" title="把复杂管辖题变成四步" accent="blue" />
      {recapSteps.map((step, index) => {
        const progress = reveal(frame, 18 + index * 32, 74 + index * 32);
        const left = 118 + index * 450;
        return (
          <div key={step.number} style={{position: 'absolute', left, top: 380, opacity: progress, scale: `${interpolate(progress, [0, 1], [0.9, 1])}`}}>
            <div style={{...baseTextStyle, width: 320, minHeight: 174, boxSizing: 'border-box', padding: '22px 24px', border: `2px solid ${accentColor(step.accent)}`, borderRadius: 10, backgroundColor: accentSoftColor(step.accent), boxShadow: '0 12px 28px rgba(23, 32, 29, 0.07)'}}>
              <div style={{color: accentColor(step.accent), fontSize: 18, fontWeight: 950}}>{step.number}</div>
              <div style={{marginTop: 16, fontSize: 32, fontWeight: 950}}>{step.label}</div>
              <div style={{marginTop: 12, color: PALETTE.muted, fontSize: 18, fontWeight: 800}}>{step.detail}</div>
            </div>
            {index < recapSteps.length - 1 ? <RouteLine left={326} top={90} width={112} progress={progress} accent={step.accent} /> : null}
          </div>
        );
      })}
      <div style={{...baseTextStyle, position: 'absolute', left: 320, top: 710, width: 1280, textAlign: 'center', fontSize: 32, fontWeight: 900}}>
        最终落点：<Keyword accent="red">有管辖权的法院</Keyword>
      </div>
      <div style={{...baseTextStyle, position: 'absolute', left: 430, top: 785, width: 1060, textAlign: 'center', color: PALETTE.muted, fontSize: 22, fontWeight: 800}}>
        一般看人，特殊看事实，专属看法定地点，协议看书面与边界
      </div>
    </div>
  );
};
