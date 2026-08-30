import type {CSSProperties, ReactNode} from 'react';
import {BellRing, Building2, CalendarClock, FileBadge, Home, MapPin, Megaphone, RefreshCw, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  wall: '#33453E',
  wallDeep: '#26332E',
  panel: '#EAE6D4',
  panelDim: '#DBD8C2',
  edge: '#5F6E60',
  ink: '#1F2A24',
  inkSoft: '#4A574E',
  jade: '#3E7C6B',
  bamboo: '#7FA05C',
  persimmon: '#C25E33',
  gold: '#C9A24B',
  paper: '#F5F2E4',
} as const;

const prog = (frame: number, delay: number, span = 18) => interpolate(frame, [delay, delay + span], [0, 1], CLAMP);

const Enter = ({
  children,
  delay = 0,
  distance = 26,
  from = 'up',
  marker,
  span = 18,
  style,
}: {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly distance?: number;
  readonly from?: 'down' | 'left' | 'none' | 'right' | 'up';
  readonly marker?: string;
  readonly span?: number;
  readonly style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, span);
  const origin =
    from === 'left'
      ? `-${distance}px 0px`
      : from === 'right'
        ? `${distance}px 0px`
        : from === 'down'
          ? `0px -${distance}px`
          : from === 'none'
            ? '0px 0px'
            : `0px ${distance}px`;
  return (
    <div
      data-final-knowledge={marker}
      style={{
        ...style,
        opacity: p,
        translate: interpolate(frame, [delay, delay + span], [origin, '0px 0px'], CLAMP),
      }}
    >
      {children}
    </div>
  );
};

const Shell = ({children, code, kicker, title}: {readonly children: ReactNode; readonly code: string; readonly kicker: string; readonly title: string}) => (
  <AbsoluteFill
    data-player-control-safe-bottom={PLAYER_CONTROL_SAFE_BOTTOM}
    style={{
      backgroundColor: C.wall,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(90deg, transparent 0 118px, ${C.wallDeep} 118px 122px), repeating-linear-gradient(0deg, transparent 0 58px, rgba(38, 51, 46, 0.55) 58px 61px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.gold}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.wallDeep, borderLeft: `8px solid ${C.persimmon}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 37 · {code}</span>
    </div>
    <header
      style={{
        position: 'absolute',
        left: 250,
        right: 72,
        top: 34,
        height: 88,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 22,
        borderBottom: `2px solid ${C.gold}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.gold, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.jade}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.jade}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.jade}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.jade}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.jade}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.wallDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const NoticeStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: C.wallDeep, border: `2px solid ${C.gold}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Tag = ({children, color = C.persimmon}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const Soft = ({children}: {readonly children: ReactNode}) => (
  <span style={{display: 'inline-block', backgroundColor: 'rgba(201, 162, 75, 0.3)', padding: '1px 8px'}}>{children}</span>
);

const SealChip = ({children, tone = C.persimmon, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '7px 15px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 24, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

export const FeaturesScene = () => {
  /* data-final-knowledge="feature-mass" data-final-knowledge="feature-self" data-final-knowledge="feature-grassroots" */
  const drums = [
    {name: '群众性', tone: C.jade, lines: ['基于群众的共同需要而建立', '保障五民主：选举 · 协商 · 决策 · 管理 · 监督']},
    {name: '自治性', tone: C.persimmon, lines: ['四自我：自我管理 · 服务 · 教育 · 监督', '并非一级政权机关，也不是国家机关的下属组织']},
    {name: '基层性', tone: C.gold, lines: ['只存在于居住地范围的基层社区', '办理本社区公共事务和公益事业']},
  ] as const;
  return (
    <Shell code="特点" kicker="82 宪法确立" title="三性根基：群众性 · 自治性 · 基层性">
      <div
        data-layout="triple-stone-drum"
        data-visual-anchor="main center"
        data-text-treatments="stone-carved-heading,engraved-list-body"
        data-visual-grammar="mass-drum,self-drum,grassroots-drum"
        data-focal-rule="three-features-define-grassroots-self-governance"
        data-focal-channels="drum-heading,mnemonic-strip"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.panel, border: `3px solid ${C.edge}`, padding: '10px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 32, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              基层群众性自治组织 · <span style={{color: C.jade}}>三大特点</span>（82 宪法）
            </span>
          </div>
        </Enter>
        {drums.map((drum, index) => (
          <Enter key={drum.name} delay={26 + index * 24} from="up" style={{position: 'absolute', left: 40 + index * 586, top: 88, width: 554}}>
            <Panel tone={drum.tone} style={{height: 478, padding: '18px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
              <div style={{width: 112, height: 112, borderRadius: 56, backgroundColor: C.wallDeep, border: `4px solid ${drum.tone}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {index === 0 ? <Users size={52} color={C.paper} strokeWidth={2.1} /> : index === 1 ? <RefreshCw size={52} color={C.paper} strokeWidth={2.1} /> : <MapPin size={52} color={C.paper} strokeWidth={2.1} />}
              </div>
              <div style={{fontSize: 36, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)', letterSpacing: 6}}>{drum.name}</div>
              <div style={{width: 120, height: 3, backgroundColor: drum.tone}} />
              <div style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.62, textAlign: 'center'}}>
                {drum.lines[0]}
                <br />
                {drum.lines[1]}
              </div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={130} from="up" style={{position: 'absolute', left: 40, top: 604, width: 1736}}>
          <NoticeStrip style={{height: 100}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.wallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              群众性<SealChip tone={C.gold} delay={160}>五民主</SealChip> · 自治性<SealChip tone={C.persimmon} delay={172}>四自我</SealChip> · 基层性办社区公益 —— 非政权机关 · 非国家机关下属
            </span>
          </NoticeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const AssembliesScene = () => {
  /* data-final-knowledge="assembly-quorum" data-final-knowledge="assembly-term" data-final-knowledge="assembly-notice" */
  const cols = [
    {name: '村民会', tone: C.jade, quorum: '过半数成年村民 或 2/3以上户代表', term: '每年一次', extra: '1/10 村民 或 1/3 户代表', notice: '提前 10 日通知'},
    {name: '村代会', tone: C.bamboo, quorum: '村委会成员＋村民代表：代表占4/5 · 妇女占1/3，2/3以上到会', term: '每季度一次', extra: '1/5 村民代表', notice: '村民可列席'},
    {name: '居民会', tone: C.persimmon, quorum: '过半数成年居民 或 户代表（户代表＝居民）', term: '不固定', extra: '1/10 居民 或 1/3 户代表', notice: '提前 10 日通知'},
    {name: '居代会', tone: C.gold, quorum: '居委会成员＋居民代表：代表占4/5，2/3以上到会', term: '每半年一次', extra: '1/5 居民代表', notice: '居民可列席'},
  ] as const;
  const rowLabel = {display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: C.wallDeep, color: C.paper, fontSize: 23, fontWeight: 950, letterSpacing: 2} as CSSProperties;
  return (
    <Shell code="四会对照" kicker="村民会·村代会·居民会·居代会" title="四场议事会：一张簿看全">
      <div
        data-layout="four-column-ledger"
        data-visual-anchor="main center"
        data-text-treatments="ledger-row-label,cell-body"
        data-visual-grammar="quorum-row,term-row,extra-row,notice-row"
        data-focal-rule="quorum-term-and-extra-convening-rules-across-four-assemblies"
        data-focal-channels="column-heads,extra-convening-row"
        style={{position: 'absolute', inset: 0}}
      >
        <div style={{position: 'absolute', left: 0, top: 0, width: 190, height: 52}}>
          <div style={{...rowLabel, height: '100%', border: `2px solid ${C.edge}`}}>对照项</div>
        </div>
        {cols.map((col, index) => (
          <Enter key={col.name} delay={8 + index * 14} from="down" style={{position: 'absolute', left: 198 + index * 395, top: 0, width: 387, height: 52}}>
            <div style={{height: '100%', backgroundColor: col.tone, color: C.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: `2px solid ${C.edge}`}}>
              {index === 0 ? <Vote size={30} color={C.paper} strokeWidth={2.2} /> : index === 1 ? <CalendarClock size={30} color={C.paper} strokeWidth={2.2} /> : index === 2 ? <Megaphone size={30} color={C.paper} strokeWidth={2.2} /> : <BellRing size={30} color={C.paper} strokeWidth={2.2} />}
              <span style={{fontSize: 27, fontWeight: 950, letterSpacing: 3, fontFamily: 'var(--inkloom-animation-title)'}}>{col.name}</span>
            </div>
          </Enter>
        ))}
        <Enter delay={70} from="left" marker="assembly-quorum" style={{position: 'absolute', left: 0, top: 60, width: 1776}}>
          <div style={{display: 'grid', gridTemplateColumns: '190px repeat(4, 1fr)', gap: 8}}>
            <div style={{...rowLabel, height: 116}}>开会有效</div>
            {cols.map((col) => (
              <div key={col.name} style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, padding: '10px 14px', fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5, display: 'flex', alignItems: 'center'}}>{col.quorum}</div>
            ))}
          </div>
        </Enter>
        <Enter delay={96} from="left" style={{position: 'absolute', left: 0, top: 184, width: 1776}}>
          <div style={{display: 'grid', gridTemplateColumns: '190px repeat(4, 1fr)', gap: 8}}>
            <div style={{...rowLabel, height: 56}}>通过决议</div>
            {cols.map((col) => (
              <div key={col.name} style={{backgroundColor: C.panelDim, border: `2px solid ${C.edge}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23, fontWeight: 950, color: C.jade}}>到会过半</div>
            ))}
          </div>
        </Enter>
        <Enter delay={118} from="left" marker="assembly-term" style={{position: 'absolute', left: 0, top: 248, width: 1776}}>
          <div style={{display: 'grid', gridTemplateColumns: '190px repeat(4, 1fr)', gap: 8}}>
            <div style={{...rowLabel, height: 56}}>会期</div>
            {cols.map((col) => (
              <div key={col.name} style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 950, color: C.ink}}>{col.term}</div>
            ))}
          </div>
        </Enter>
        <Enter delay={140} from="left" style={{position: 'absolute', left: 0, top: 312, width: 1776}}>
          <div style={{display: 'grid', gridTemplateColumns: '190px repeat(4, 1fr)', gap: 8}}>
            <div style={{...rowLabel, height: 96, borderLeft: `8px solid ${C.persimmon}`}}>临时召集</div>
            {cols.map((col) => (
              <div key={col.name} style={{backgroundColor: C.panel, border: `2px solid ${C.persimmon}`, padding: '8px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4}}>
                <span style={{fontSize: 23, fontWeight: 950, color: C.persimmon}}>{col.extra}</span>
                <span style={{fontSize: 22, fontWeight: 900, color: C.inkSoft}}>提议召集</span>
              </div>
            ))}
          </div>
        </Enter>
        <Enter delay={162} from="left" marker="assembly-notice" style={{position: 'absolute', left: 0, top: 416, width: 1776}}>
          <div style={{display: 'grid', gridTemplateColumns: '190px repeat(4, 1fr)', gap: 8}}>
            <div style={{...rowLabel, height: 56}}>通知列席</div>
            {cols.map((col) => (
              <div key={col.name} style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23, fontWeight: 900, color: C.ink}}>{col.notice}</div>
            ))}
          </div>
        </Enter>
        <Enter delay={196} from="up" style={{position: 'absolute', left: 0, top: 496, width: 1776}}>
          <NoticeStrip style={{height: 106}}>
            <span style={{padding: '4px 13px', backgroundColor: C.jade, color: C.wallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>领导关系</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper, lineHeight: 1.5}}>
              村民会→村代会→村委会 ｜ 居民会→居代会→居委会：听报告 · 评工作 · 改撤决
              <br />
              重要事项开会讨论前，均需经<Soft>基层党组织研究</Soft>
            </span>
          </NoticeStrip>
        </Enter>
        <Enter delay={224} from="up" style={{position: 'absolute', left: 0, top: 618, width: 1776}}>
          <NoticeStrip style={{height: 96, borderColor: C.jade}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.wallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>授权差异</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              村民会≈村代会（制定村规民约·同意设立村委会除外）｜ 居民会＝居代会，可完整授权
            </span>
          </NoticeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const CommitteesScene = () => {
  /* data-final-knowledge="committee-setup" data-final-knowledge="committee-recall" data-final-knowledge="committee-legal-person" */
  const wings = [
    {
      name: '村委会（村）',
      tone: C.jade,
      icon: <Home size={30} color={C.paper} strokeWidth={2.2} />,
      setup: '乡提出 · 村同意 · 县批准',
      make: '主任·副主任·委员共 3-7 人，应当有妇女成员；近亲属回避，可与村党组织交叉任职（鼓励一肩挑）',
      recall: '1/5 以上有选举权村民 或 1/3 以上村民代表联名 → 登记参选村民过半数参加投票 ＋ 投票村民过半数通过（唯一双过半）',
    },
    {
      name: '居委会（城）',
      tone: C.persimmon,
      icon: <Building2 size={30} color={C.paper} strokeWidth={2.2} />,
      setup: '街道办提出 · 上一级批准',
      make: '主任·副主任·委员共 5-9 人，必须有妇女成员；近亲属回避，可与社区党组织交叉任职',
      recall: '1/10 以上有选举权居民或户代表 或 1/3 以上居民代表联名 → 居民会 或 居代会通过',
    },
  ] as const;
  return (
    <Shell code="两委设置" kicker="村里三到七 · 城里五到九" title="村委会 VS 居委会：东西两厢">
      <div
        data-layout="east-west-wing-pair"
        data-visual-anchor="main center"
        data-text-treatments="wing-heading-plaque,paired-rows"
        data-visual-grammar="setup-row,makeup-row,recall-row"
        data-focal-rule="village-vs-city-committee-setup-and-recall-thresholds"
        data-focal-channels="wing-headings,recall-row"
        style={{position: 'absolute', inset: 0}}
      >
        {wings.map((wing, index) => (
          <Enter key={wing.name} delay={10 + index * 22} from={index === 0 ? 'left' : 'right'} marker={index === 0 ? 'committee-setup' : undefined} style={{position: 'absolute', left: index === 0 ? 0 : 910, top: 0, width: 866}}>
            <Panel tone={wing.tone} style={{height: 356, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                {wing.icon}
                <span style={{fontSize: 30, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>{wing.name}</span>
                <span style={{marginLeft: 'auto', fontSize: 22, fontWeight: 950, color: wing.tone}}>任期 5 年 · 连选连任</span>
              </div>
              <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.55}}>
                <Tag color={wing.tone}>设立</Tag> {wing.setup}
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
                <Tag color={wing.tone}>组成</Tag> {wing.make}
              </div>
              <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55, borderTop: `2px dashed ${C.edge}`, paddingTop: 10}}>
                <Tag color={C.persimmon}>罢免</Tag> {wing.recall}
              </div>
            </Panel>
          </Enter>
        ))}
        <Enter delay={70} from="up" marker="committee-recall" style={{position: 'absolute', left: 0, top: 376, width: 1776}}>
          <Panel tone={C.gold} style={{height: 186, padding: '14px 22px', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 22}}>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.66}}>
              <LabelTab bar={C.gold}>选举与法人</LabelTab>
              <div style={{marginTop: 10}}>
                村民（居民）<Tag color={C.jade}>直接选举</Tag>，选委会以推选方式产生（选举村委·推选其他）；选民资格以户籍＋经常居住为准（村务工作者满 1 年 · 社区工作者满半年可参选）
                <br />
                <FileBadge size={26} color={C.jade} strokeWidth={2.2} style={{verticalAlign: '-4px', marginRight: 4}} />
                基层群众性自治组织<Soft>法人资格</Soft>：主任为法定代表人，可从事职责内民事活动，但<Soft>不得提供担保</Soft>
              </div>
            </div>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.66, borderLeft: `2px dashed ${C.edge}`, paddingLeft: 22}}>
              <LabelTab bar={C.persimmon}>任务八句</LabelTab>
              <div style={{marginTop: 10, fontSize: 23, fontWeight: 950, color: C.ink}}>
                办事业 · 调纠纷 · 维治安 · 管财产
                <br />
                普法律 · 提意见 · 搞卫生 · 协执法
              </div>
              <div style={{marginTop: 8, fontSize: 22, fontWeight: 880, color: C.inkSoft}}>重大事项组织村民（居民）与利益相关方协商：议事会·听证会·恳谈会</div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={130} from="up" style={{position: 'absolute', left: 0, top: 582, width: 1776}}>
          <NoticeStrip style={{height: 96}}>
            <span style={{padding: '4px 13px', backgroundColor: C.gold, color: C.wallDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>一句记</span>
            <span style={{fontSize: 24, fontWeight: 900, color: C.paper}}>
              设立「乡村县 / 街上批」· 组成「<SealChip tone={C.jade} delay={160}>三到七</SealChip> / <SealChip tone={C.persimmon} delay={170}>五到九</SealChip>」· 任期「五年连选连任」· 罢免「村双过半 / 居会议通过」
            </span>
          </NoticeStrip>
        </Enter>
        <Enter delay={165} from="up" style={{position: 'absolute', left: 0, top: 692, width: 1776}}>
          <NoticeStrip style={{height: 60, borderColor: C.jade}}>
            <span style={{padding: '3px 12px', backgroundColor: C.persimmon, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>三特例</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>
              设立须批准 · 村规民约报乡级政府备案 · 违法责令改正（村民可起诉撤销）
            </span>
          </NoticeStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const GrassrootsAutonomy = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-features" {...SCENES.features}>
      <FeaturesScene />
    </TimelineSequence>
    <TimelineSequence name="02-assemblies" {...SCENES.assemblies}>
      <AssembliesScene />
    </TimelineSequence>
    <TimelineSequence name="03-committees" {...SCENES.committees}>
      <CommitteesScene />
    </TimelineSequence>
  </AbsoluteFill>
);


