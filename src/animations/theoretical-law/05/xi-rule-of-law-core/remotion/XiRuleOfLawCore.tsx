import type {CSSProperties, ReactNode} from 'react';
import {Ban, BookOpen, Building2, Clock, Crown, Flag, Gavel, Globe, Landmark, Link, PenLine, Scale, ScrollText, Star, Users} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  hall: '#33302E',
  hallDeep: '#262422',
  panel: '#F0EBDA',
  panelDim: '#E1DCC7',
  edge: '#6B6459',
  ink: '#282421',
  inkSoft: '#5B5449',
  banner: '#B04834',
  star: '#C0983E',
  position: '#4E7D74',
  paper: '#F6F1E0',
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
      backgroundColor: C.hall,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `radial-gradient(1100px 460px at 50% -8%, rgba(176, 72, 52, 0.13), transparent 72%), repeating-linear-gradient(0deg, transparent 0 118px, rgba(38, 36, 34, 0.55) 118px 121px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.star}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.edge}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.hallDeep, borderLeft: `8px solid ${C.banner}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 87 · {code}</span>
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
        borderBottom: `2px solid ${C.star}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 42, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.star, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Panel = ({children, marker, style, tone, watermark}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string; readonly watermark?: ReactNode}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.panel, border: `2px solid ${C.edge}`, color: C.ink, position: 'relative', overflow: 'hidden', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.position}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.position}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.position}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.position}} />
    {watermark ? <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{watermark}</span> : null}
    {children}
  </div>
);

const BannerTab = ({children, bar = C.banner, icon}: {readonly children: ReactNode; readonly bar?: string; readonly icon?: ReactNode}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', backgroundColor: C.hallDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{icon}{children}</span>
);

const BannerStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(38, 36, 34, 0.94)', border: `2px solid ${C.star}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

const Mark = ({children, color = C.banner}: {readonly children: ReactNode; readonly color?: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2e`, color: C.ink, padding: '1px 8px', fontWeight: 950}}>{children}</span>
);

const PosChip = ({children, tone = C.position, delay = 0}: {readonly children: ReactNode; readonly tone?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span style={{display: 'inline-block', padding: '4px 12px', border: `5px solid ${tone}`, color: tone, backgroundColor: `${tone}12`, fontSize: 22, fontWeight: 950, letterSpacing: 2, opacity: p, rotate: '-2deg'}}>{children}</span>
  );
};

const IconChip = ({icon, tone, title, children}: {readonly icon: ReactNode; readonly tone: string; readonly title: string; readonly children: ReactNode}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.panelDim, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
    <span style={{flexShrink: 0, width: 50, height: 50, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 0 rgba(0,0,0,0.18)'}}>{icon}</span>
    <span style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.45}}>
      <span style={{fontWeight: 950, color: tone}}>{title}</span>
      {children}
    </span>
  </div>
);

export const Persist13Scene = () => {
  /* data-final-knowledge="persist-1-3" */
  return (
    <Shell code="坚持一至三" kicker="根本保证 · 根本立场 · 唯一正确道路" title="党的领导 · 以人民为中心 · 法治道路">
      <div
        data-layout="three-banner-rows"
        data-visual-anchor="main center"
        data-text-treatments="banner-rows,position-chips"
        data-visual-grammar="party-banner,people-banner,path-banner"
        data-focal-rule="party-leadership-is-soul-of-socialist-rule-of-law"
        data-focal-channels="three-banners,soul-of-rule-of-law"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="persist-1-3" style={{position: 'absolute', left: 0, top: 0, width: 1776}}>
          <Panel tone={C.banner} watermark={<Flag size={180} color={C.banner} strokeWidth={1.6} />} style={{height: 218, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <BannerTab bar={C.banner} icon={<Flag size={26} color={C.paper} strokeWidth={2.2} />}>坚持一 · 党对全面依法治国的领导 <PosChip tone={C.position} delay={110}>根本保证</PosChip></BannerTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              党的领导是中国特色社会主义法治<Mark color={C.banner}>之魂</Mark>——我国法治同西方资本主义国家法治<Mark color={C.banner}>最大的区别</Mark>；党和法的关系是政治和法治关系的<Mark color={C.position}>集中反映</Mark>；全面依法治国决不是削弱党的领导，而是<Mark color={C.banner}>加强和改善</Mark>党的领导
            </div>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="三者统一：">
              党的领导是人民当家作主和依法治国的<Mark color={C.star}>根本保证</Mark>；人民当家作主是社会主义民主政治的<Mark color={C.banner}>本质特征</Mark>；依法治国是党领导人民治理国家的<Mark color={C.position}>基本方式</Mark>
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="四成语：">
              党<Mark color={C.position}>领导立法</Mark>（党的主张经法定程序转化为国家意志）· <Mark color={C.position}>保证执法</Mark>（宪法法律正确有效实施）· <Mark color={C.position}>支持司法</Mark>（司法机关依法独立公正行使职权）· <Mark color={C.position}>带头守法</Mark>（党必须在宪法和法律范围内活动）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={40} from="left" style={{position: 'absolute', left: 0, top: 242, width: 1776}}>
          <Panel tone={C.star} watermark={<Users size={180} color={C.star} strokeWidth={1.6} />} style={{height: 176, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <BannerTab bar={C.star} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>坚持二 · 坚持以人民为中心 <PosChip tone={C.star} delay={140}>根本立场</PosChip></BannerTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              全面依法治国最广泛·最深厚的基础是<Mark color={C.star}>人民</Mark>；人民是依法治国的<Mark color={C.star}>主体和力量源泉</Mark>；公平正义是法治的<Mark color={C.banner}>生命线</Mark>，努力让人民群众在每一个司法案件中感受到公平正义
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              依法保障人民权益是推进全面依法治国的<Mark color={C.banner}>根本目的</Mark>——不断增强人民群众<Mark color={C.star}>获得感·幸福感·安全感</Mark>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} from="left" style={{position: 'absolute', left: 0, top: 442, width: 1776}}>
          <Panel tone={C.position} watermark={<Scale size={180} color={C.position} strokeWidth={1.6} />} style={{height: 206, padding: '12px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <BannerTab bar={C.position} icon={<Scale size={26} color={C.paper} strokeWidth={2.2} />}>坚持三 · 坚持中国特色社会主义法治道路 <PosChip tone={C.position} delay={170}>唯一正确道路</PosChip></BannerTab>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.55}}>
              三个核心要义：<Mark color={C.banner}>坚持党的领导</Mark> · 坚持<Mark color={C.star}>中国特色社会主义制度</Mark> · 贯彻<Mark color={C.position}>中国特色社会主义法治理论</Mark> —— 规定和确保法治体系的制度属性和前进方向
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              既不能罔顾国情·超越阶段，也不能因循守旧·墨守成规；<Mark color={C.position}>不搞「全盘西化」「全面移植」</Mark>；必须<Mark color={C.banner}>以我为主·为我所用</Mark>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const Persist45Scene = () => {
  /* data-final-knowledge="persist-4-5" */
  const dates = [
    '2014 年设立「国家宪法日」（12 月 4 日）',
    '2015 年实行宪法宣誓制度（2018 年修订）',
    '2018 年法律委员会更名为宪法和法律委员会',
  ] as const;
  return (
    <Shell code="坚持四至五" kicker="首要任务 · 时代使命" title="依宪治国依宪执政 · 法治轨道现代化">
      <div
        data-layout="twin-banner-columns"
        data-visual-anchor="main center"
        data-text-treatments="banner-columns,timeline-chips"
        data-visual-grammar="constitution-banner,track-banner"
        data-focal-rule="constitution-based-governance-and-rule-on-legal-track"
        data-focal-channels="constitution-dates,three-guarantees"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="persist-4-5" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 620}}>
          <Panel tone={C.banner} watermark={<ScrollText size={190} color={C.banner} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.banner} icon={<ScrollText size={26} color={C.paper} strokeWidth={2.2} />}>坚持四 · 依宪治国·依宪执政 <PosChip tone={C.position} delay={110}>首要任务</PosChip></BannerTab>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="总章程：">
              宪法是党和人民意志的集中体现，具有<Mark color={C.banner}>最高法律地位·权威·效力</Mark>，是治国理政的总章程、一切法律法规的总依据总源头
            </IconChip>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="首要基本人权：">
              我国宪法坚持以<Mark color={C.star}>生存权·发展权</Mark>为首要的基本人权
            </IconChip>
            <IconChip icon={<Clock size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="贯彻实施节点：">
              {dates.join('；')}；宪法的生命和权威都在于<Mark color={C.position}>实施</Mark>
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="合宪性审查：">
              监督宪法实施·解释宪法是全国人大及其常委会职责；健全合宪性审查机制·撤销纠正违宪违法规范性文件；加强备案审查制度能力；根基在于人民发自内心拥护，抓住<Mark color={C.banner}>「关键少数」</Mark>领导干部，宪法法律教育纳入国民教育体系
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 620}}>
          <Panel tone={C.position} watermark={<Landmark size={190} color={C.position} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.position} icon={<Landmark size={26} color={C.paper} strokeWidth={2.2} />}>坚持五 · 在法治轨道上全面建设社会主义现代化国家 <PosChip tone={C.star} delay={140}>时代使命</PosChip></BannerTab>
            <IconChip icon={<Gavel size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="深刻革命：">
              全面依法治国是国家治理的一场深刻革命；法治是<Mark color={C.banner}>制度之治</Mark>最基本最稳定最可靠的保障；二十届三中全会总目标：进一步全面深化改革·推进中国式现代化
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="重要依托：">
              法治是治国理政的基本方式；有效保障国家治理体系的系统性·规范性·协调性
            </IconChip>
            <IconChip icon={<Star size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="三个保障作用：">
              <Mark color={C.banner}>固根本</Mark>（长治久安）· <Mark color={C.star}>稳预期</Mark>（政策稳定）· <Mark color={C.position}>利长远</Mark>（民族复兴）
            </IconChip>
            <IconChip icon={<Globe size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="三个延伸：">
              依法治军从严治军（中国特色军事法治体系）· 依法保障「一国两制」（依法治港治澳·宪法和基本法共同构成特区宪制基础）· 依法治网（依法管网·办网·上网）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const Persist67Scene = () => {
  /* data-final-knowledge="persist-6-7" */
  const systems = [
    {name: '完备的法律规范体系', role: '前提', tone: C.banner},
    {name: '高效的法治实施体系', role: '重点', tone: C.star},
    {name: '严密的法治监督体系', role: '保障', tone: C.position},
    {name: '有力的法治保障体系', role: '支撑', tone: C.banner},
    {name: '完善的党内法规体系', role: '关键', tone: C.star},
  ] as const;
  return (
    <Shell code="坚持六至七" kicker="总抓手 · 工作布局" title="法治体系 · 工作布局">
      <div
        data-layout="system-plus-layout"
        data-visual-anchor="main center"
        data-text-treatments="system-rows,layout-chips"
        data-visual-grammar="system-panel,layout-panel"
        data-focal-rule="legal-system-as-general-handle"
        data-focal-channels="five-systems,three-one-layout"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="persist-6-7" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 620}}>
          <Panel tone={C.banner} watermark={<BookOpen size={190} color={C.banner} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.banner} icon={<BookOpen size={26} color={C.paper} strokeWidth={2.2} />}>坚持六 · 中国特色社会主义法治体系 <PosChip tone={C.position} delay={110}>总抓手</PosChip></BannerTab>
            <div style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.5, backgroundColor: `${C.banner}12`, borderLeft: `6px solid ${C.banner}`, padding: '9px 13px'}}>
              总目标：建设中国特色社会主义法治体系，建设社会主义法治国家
            </div>
            {systems.map((s) => (
              <div key={s.name} style={{fontSize: 22, fontWeight: 880, color: C.ink, backgroundColor: C.panelDim, borderLeft: `5px solid ${s.tone}`, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10}}>
                <PosChip tone={s.tone} delay={140}>{s.role}</PosChip>
                {s.name}{s.role === '关键' ? ' —— 党内法规是法治体系的重要组成部分' : s.role === '保障' ? ' —— 把权力关进制度的笼子里' : s.role === '重点' ? ' —— 法律的生命力在于实施' : s.role === '前提' ? ' —— 立法先行·立改废释并举' : ''}
              </div>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 620}}>
          <Panel tone={C.star} watermark={<Building2 size={190} color={C.star} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <BannerTab bar={C.star} icon={<Building2 size={26} color={C.paper} strokeWidth={2.2} />}>坚持七 · 依法治国·依法执政·依法行政共同推进，法治国家·法治政府·法治社会一体建设 <PosChip tone={C.banner} delay={140}>工作布局</PosChip></BannerTab>
            <IconChip icon={<Flag size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="三个共同推进：">
              依法治国 · 依法执政 · 依法行政
            </IconChip>
            <IconChip icon={<Building2 size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="三个一体建设：">
              法治国家 · 法治政府 · 法治社会
            </IconChip>
            <IconChip icon={<Landmark size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="定位：">
              法治国家是<Mark color={C.star}>目标</Mark>；法治政府是<Mark color={C.banner}>主体</Mark>和重点工程（2025 年取得重大进展）；法治社会是<Mark color={C.position}>基础</Mark>（法治教育与法治实践相结合）
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const Persist89Scene = () => {
  /* data-final-knowledge="persist-8-9" */
  const links = [
    {name: '科学立法', role: '前提', tone: C.banner, body: '提高立法质量；科学立法·民主立法·依法立法'},
    {name: '严格执法', role: '关键', tone: C.star, body: '法律的生命力在于实施；执法是行政机关履行政府职能的重要方式；严格规范公正文明执法；落实行政执法责任制和责任追究制度'},
    {name: '公正司法', role: '最后防线', tone: C.position, body: '维护社会公平正义的最后一道防线；深化司法体制综合配套改革；落实司法责任制'},
    {name: '全民守法', role: '基础工程', tone: C.banner, body: '全面落实「谁执法谁普法」的普法责任制；做社会主义法治的忠实崇尚者·自觉遵守者·坚定捍卫者'},
  ] as const;
  return (
    <Shell code="坚持八至九" kicker="重要环节 · 迫切任务" title="重要环节 · 国内涉外法治">
      <div
        data-layout="links-plus-domestic"
        data-visual-anchor="main center"
        data-text-treatments="link-rows,domestic-chips"
        data-visual-grammar="links-panel,domestic-panel"
        data-focal-rule="four-links-and-coordinated-domestic-foreign"
        data-focal-channels="four-links,anti-sanctions"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="persist-8-9" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 620}}>
          <Panel tone={C.banner} watermark={<PenLine size={190} color={C.banner} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.banner} icon={<PenLine size={26} color={C.paper} strokeWidth={2.2} />}>坚持八 · 全面推进科学立法·严格执法·公正司法·全民守法 <PosChip tone={C.position} delay={110}>重要环节</PosChip></BannerTab>
            {links.map((link) => (
              <IconChip key={link.name} icon={link.tone === C.star ? <Gavel size={28} color={C.paper} strokeWidth={2.2} /> : link.tone === C.position ? <Scale size={28} color={C.paper} strokeWidth={2.2} /> : <PenLine size={28} color={C.paper} strokeWidth={2.2} />} tone={link.tone} title={`${link.name}（${link.role}）：`}>
                {link.body}
              </IconChip>
            ))}
          </Panel>
        </Enter>
        <Enter delay={30} from="right" style={{position: 'absolute', left: 910, top: 0, width: 866, height: 620}}>
          <Panel tone={C.position} watermark={<Globe size={190} color={C.position} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.position} icon={<Globe size={26} color={C.paper} strokeWidth={2.2} />}>坚持九 · 统筹推进国内法治和涉外法治 <PosChip tone={C.star} delay={140}>迫切任务</PosChip></BannerTab>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="战略布局：">
              涉外法律制度是国家法制的重要组成部分；坚持<Mark color={C.banner}>立法先行</Mark>·立改废释并举；法治是最好的营商环境
            </IconChip>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="三个健全机制：">
              健全<Mark color={C.banner}>反制裁·反干涉·反「长臂管辖」</Mark>机制；培育一批国际一流的仲裁机构·律师事务所
            </IconChip>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="对外交流合作：">
              坚定法治自信，讲好新时代中国法治故事；加强反腐败国际合作，加大海外追赃追逃·遣返引渡力度
            </IconChip>
            <IconChip icon={<Globe size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="人类命运共同体：">
              坚定维护以联合国为核心的国际体系·以国际法为基础的国际秩序；推动建设相互尊重·公平正义·合作共赢的新型国际关系
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const Persist1012Scene = () => {
  /* data-final-knowledge="persist-10-12" */
  return (
    <Shell code="坚持十至十二" kicker="基础性保障 · 关键所在 · 内在要求" title="法治队伍 · 关键少数 · 依规治党">
      <div
        data-layout="triple-banner-columns"
        data-visual-anchor="main center"
        data-text-treatments="banner-columns,quote-chips"
        data-visual-grammar="team-banner,minority-banner,rules-banner"
        data-focal-rule="key-minority-and-party-rules-unity"
        data-focal-channels="three-banners,key-minority-rules"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="left" marker="persist-10-12" style={{position: 'absolute', left: 0, top: 0, width: 584, height: 620}}>
          <Panel tone={C.banner} watermark={<Users size={180} color={C.banner} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.banner} icon={<Users size={26} color={C.paper} strokeWidth={2.2} />}>坚持十 · 高素质法治工作队伍</BannerTab>
            <div style={{fontSize: 20, fontWeight: 860, color: C.ink, lineHeight: 1.5}}>
              <Mark color={C.position}>基础性保障</Mark>；忠于党·忠于国家·忠于人民·忠于法律
              <br />
              法治工作是<Mark color={C.banner}>政治性很强的业务工作，也是业务性很强的政治工作</Mark>
            </div>
            <IconChip icon={<Ban size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="专门队伍（体制内）：">
              政治标准放在首位；杜绝<Mark color={C.banner}>「金钱案」「权力案」「人情案」</Mark>；建立法律职业人员统一职前培训制度；健全法官·检察官员额管理制度
            </IconChip>
            <IconChip icon={<Users size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="法律服务队伍（社会）：">
              律师·公证员·司法鉴定人·仲裁员·人民调解员；<Mark color={C.star}>拥护中国共产党领导·拥护社会主义法治</Mark>是基本要求；社会·公职·公司律师优势互补
            </IconChip>
            <IconChip icon={<BookOpen size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="人才培养：">
              高校是<Mark color={C.banner}>第一阵地</Mark>；推动习近平法治思想进教材·进课堂·进头脑；坚决反对和抵制西方「宪政」「三权鼎立」「司法独立」等错误观点
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} from="up" style={{position: 'absolute', left: 596, top: 0, width: 584, height: 620}}>
          <Panel tone={C.star} watermark={<Crown size={180} color={C.star} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.star} icon={<Crown size={26} color={C.paper} strokeWidth={2.2} />}>坚持十一 · 抓住领导干部这个「关键少数」</BannerTab>
            <IconChip icon={<Crown size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="关键所在：">
              领导干部是重要组织者·推动者·实践者；既可关键推动，也可能<Mark color={C.banner}>致命破坏</Mark>；做<Mark color={C.star}>尊法学法守法用法</Mark>的模范（民「以吏为师」）
            </IconChip>
            <IconChip icon={<ScrollText size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="两项制度：">
              重大决策<Mark color={C.banner}>终身责任追究</Mark>及责任倒查机制；领导干部干预司法·插手具体案件处理的<Mark color={C.banner}>记录·通报和责任追究制度</Mark>
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="法治思维：">
              基于法治固有特性和信念的思维方式；做到<Mark color={C.position}>法定职责必须为、法无授权不可为</Mark>；把权力关进制度的笼子里
            </IconChip>
            <IconChip icon={<Flag size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="第一责任人：">
              党政主要负责人是推进法治建设<Mark color={C.banner}>第一责任人</Mark>；与经济社会发展<Mark color={C.star}>同部署·同推进·同督促·同考核·同奖惩</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={60} from="right" style={{position: 'absolute', left: 1192, top: 0, width: 584, height: 620}}>
          <Panel tone={C.position} watermark={<Link size={180} color={C.position} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <BannerTab bar={C.position} icon={<Link size={26} color={C.paper} strokeWidth={2.2} />}>坚持十二 · 依法治国和依规治党有机统一</BannerTab>
            <IconChip icon={<Link size={28} color={C.paper} strokeWidth={2.2} />} tone={C.position} title="互补性：">
              国家法律法规和党内法规制度<Mark color={C.position}>相辅相成·相互促进·相互保障</Mark>；党的政策是国家法律的先导和指引；善于通过法定程序使党的主张成为国家意志
            </IconChip>
            <IconChip icon={<BookOpen size={28} color={C.paper} strokeWidth={2.2} />} tone={C.star} title="基本方式：">
              依规治党深入党心，依法治国才能深入民心；<Mark color={C.star}>党章</Mark>是党的总章程·党的根本大法；坚决防止「破窗效应」
            </IconChip>
            <IconChip icon={<Scale size={28} color={C.paper} strokeWidth={2.2} />} tone={C.banner} title="纪法贯通：">
              党的规矩包括：党章·党的纪律·国家法律·优良传统和工作惯例；<Mark color={C.banner}>纪严于法·纪在法前</Mark>；党员<Mark color={C.banner}>「破法」无不始于「破纪」</Mark>
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

export const XiRuleOfLawCore = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-persist-1-3" {...SCENES.persist13}>
      <Persist13Scene />
    </TimelineSequence>
    <TimelineSequence name="02-persist-4-5" {...SCENES.persist45}>
      <Persist45Scene />
    </TimelineSequence>
    <TimelineSequence name="03-persist-6-7" {...SCENES.persist67}>
      <Persist67Scene />
    </TimelineSequence>
    <TimelineSequence name="04-persist-8-9" {...SCENES.persist89}>
      <Persist89Scene />
    </TimelineSequence>
    <TimelineSequence name="05-persist-10-12" {...SCENES.persist1012}>
      <Persist1012Scene />
    </TimelineSequence>
  </AbsoluteFill>
);
