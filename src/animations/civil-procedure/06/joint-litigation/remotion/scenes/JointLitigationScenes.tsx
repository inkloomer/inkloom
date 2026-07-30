import {
  UsersRound,
  GitMerge,
  GitBranch,
  Scale,
  ShieldAlert,
  Building2,
  UserCog,
  HeartHandshake,
  Handshake,
  Landmark,
  Split,
  ArrowRight,
  FileText,
  Gavel,
  Ban,
  CheckCircle2,
  AlertTriangle,
  UserPlus,
  Briefcase,
  Truck,
  Coins,
  Group,
} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  baseTextStyle,
  ENTER_EASING,
  FlowArrow,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
} from '../visual-system';

/* ========== 01 定义 ========== */
export const DefinitionScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [30, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [80, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="概念" title="什么是共同诉讼？" accent="red" />

      <MaskedReveal delay={18} duration={28} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 64, fontWeight: 900, lineHeight: 1.18}}>
          一方或双方
          <br />
          <Keyword accent="red">两人以上</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 520,
          display: 'flex',
          gap: 60,
          opacity: p1,
          translate: `0px ${interpolate(frame, [30, 80], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20}}>
          <IconNode icon={GitBranch} label="普通共同诉讼" detail="标的同种类" accent="teal" />
          <div style={{...baseTextStyle, fontSize: 20, color: PALETTE.teal, fontWeight: 800}}>可分之诉 · 行为独立</div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20}}>
          <IconNode icon={GitMerge} label="必要共同诉讼" detail="标的同一" accent="red" />
          <div style={{...baseTextStyle, fontSize: 20, color: PALETTE.red, fontWeight: 800}}>不可拆分 · 合一判决</div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 980,
          top: 280,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          opacity: p2,
          translate: `0px ${interpolate(frame, [80, 120], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.ink, marginBottom: 10}}>核心区分</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 200, height: 60, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, border: `3px solid ${PALETTE.teal}`, borderRadius: 8, ...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.teal}}>同种类</div>
          <div style={{...baseTextStyle, fontSize: 20, color: PALETTE.muted}}>普通</div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 200, height: 60, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, border: `3px solid ${PALETTE.red}`, borderRadius: 8, ...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.red}}>同一</div>
          <div style={{...baseTextStyle, fontSize: 20, color: PALETTE.muted}}>必要</div>
        </div>
      </div>

      <ImpactReveal delay={130} style={{position: 'absolute', left: 120, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 26, color: PALETTE.muted, fontWeight: 700}}>
          共同诉讼 = 当事人一方或双方为两人以上的诉讼形式
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 02 普通共同诉讼 ========== */
export const OrdinaryScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [60, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [100, 140], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="分类一" title="普通共同诉讼" accent="teal" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, lineHeight: 1.22}}>
          诉讼标的<span style={{color: PALETTE.teal}}>同种类</span>
          <br />
          数个<span style={{color: PALETTE.teal}}>可分之诉</span>的合并
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 120, top: 500, display: 'flex', gap: 28, alignItems: 'flex-start'}}>
        <div style={{opacity: p1, translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
          <IconNode icon={Split} label="可分之诉" detail="本质独立" accent="teal" compact />
        </div>
        <div style={{opacity: p2, translate: `0px ${interpolate(frame, [60, 100], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
          <IconNode icon={Handshake} label="法院同意 + 当事人同意" detail="合并条件" accent="gold" compact />
        </div>
        <div style={{opacity: p3, translate: `0px ${interpolate(frame, [100, 140], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
          <IconNode icon={UsersRound} label="行为独立" detail="互不影响" accent="blue" compact />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 980,
          top: 280,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          opacity: p2,
          translate: `0px ${interpolate(frame, [60, 100], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.teal, marginBottom: 10}}>合并流程</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <IconNode icon={FileText} label="诉1" accent="teal" compact style={{width: 120, minHeight: 80}} />
          <IconNode icon={FileText} label="诉2" accent="teal" compact style={{width: 120, minHeight: 80}} />
          <IconNode icon={FileText} label="诉3" accent="teal" compact style={{width: 120, minHeight: 80}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ArrowRight size={40} color={PALETTE.teal} style={{rotate: '90deg'}} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <IconNode icon={Landmark} label="法院同意" accent="gold" compact style={{width: 140, minHeight: 80}} />
          <IconNode icon={CheckCircle2} label="当事人同意" accent="gold" compact style={{width: 140, minHeight: 80}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ArrowRight size={40} color={PALETTE.teal} style={{rotate: '90deg'}} />
        </div>
        <IconNode icon={Gavel} label="合并审理 · 分别判决" accent="teal" compact style={{width: 300, minHeight: 80}} />
      </div>
    </div>
  );
};

/* ========== 03 必要共同诉讼 ========== */
export const NecessaryScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [60, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [100, 140], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="分类二" title="必要共同诉讼" accent="red" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, lineHeight: 1.22}}>
          诉讼标的<span style={{color: PALETTE.red}}>同一</span>
          <br />
          法院<span style={{color: PALETTE.red}}>必须</span>合并审理
        </div>
      </MaskedReveal>

      <div style={{position: 'absolute', left: 120, top: 500, display: 'flex', gap: 28, alignItems: 'flex-start'}}>
        <div style={{opacity: p1, translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
          <IconNode icon={GitMerge} label="标的同一" detail="只有一个诉" accent="red" compact />
        </div>
        <div style={{opacity: p2, translate: `0px ${interpolate(frame, [60, 100], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
          <IconNode icon={Landmark} label="必须合并" detail="不可拆分" accent="gold" compact />
        </div>
        <div style={{opacity: p3, translate: `0px ${interpolate(frame, [100, 140], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
          <IconNode icon={HeartHandshake} label="经承认生效" detail="内部相互影响" accent="blue" compact />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 980,
          top: 280,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          opacity: p2,
          translate: `0px ${interpolate(frame, [60, 100], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.red, marginBottom: 10}}>单一标的结构</div>
        <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
          <IconNode icon={UsersRound} label="原告A" accent="red" compact style={{width: 140, minHeight: 80}} />
          <IconNode icon={UsersRound} label="原告B" accent="red" compact style={{width: 140, minHeight: 80}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ArrowRight size={40} color={PALETTE.red} style={{rotate: '90deg'}} />
        </div>
        <div style={{width: 320, height: 80, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, border: `3px solid ${PALETTE.red}`, borderRadius: 8, ...baseTextStyle, fontSize: 24, fontWeight: 900, color: PALETTE.red}}>
          同一诉讼标的
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ArrowRight size={40} color={PALETTE.red} style={{rotate: '90deg'}} />
        </div>
        <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
          <IconNode icon={Landmark} label="法院" accent="red" compact style={{width: 140, minHeight: 80}} />
          <IconNode icon={Gavel} label="合一判决" accent="red" compact style={{width: 140, minHeight: 80}} />
        </div>
      </div>
    </div>
  );
};

/* ========== 04 对比 ========== */
export const ComparisonScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  const items = [
    {left: {icon: Split, label: '同种类', sub: '多个独立标的'}, right: {icon: GitMerge, label: '同一', sub: '只有一个标的'}},
    {left: {icon: CheckCircle2, label: '可分之诉', sub: '本质独立'}, right: {icon: Ban, label: '不可分', sub: '只有一个诉'}},
    {left: {icon: Handshake, label: '需双方同意', sub: '法院+当事人'}, right: {icon: AlertTriangle, label: '必须合并', sub: '法院强制'}},
    {left: {icon: UsersRound, label: '行为独立', sub: '互不影响'}, right: {icon: HeartHandshake, label: '经承认生效', sub: '相互影响'}},
    {left: {icon: Gavel, label: '分别判决', sub: '各自独立'}, right: {icon: Landmark, label: '合一判决', sub: '统一确定'}},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="对比" title="普通 vs 必要 共同诉讼" accent="gold" />

      <div style={{position: 'absolute', left: 120, top: 260, display: 'flex', gap: 0, opacity: p, translate: `0px ${interpolate(frame, [20, 60], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
        <div style={{width: 500, padding: '28px 24px', backgroundColor: PALETTE.paper, borderRadius: 10, border: `3px solid ${PALETTE.teal}`, boxShadow: '0 14px 36px rgba(23,32,29,0.09)', marginRight: 40}}>
          <div style={{...baseTextStyle, fontSize: 30, fontWeight: 900, color: PALETTE.teal, marginBottom: 24, textAlign: 'center'}}>普通共同诉讼</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            {items.map((item, i) => {
              const delay = 60 + i * 20;
              const itemReveal = interpolate(frame, [delay, delay + 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
              return (
                <div key={i} style={{opacity: itemReveal, display: 'flex', alignItems: 'center', gap: 12}}>
                  <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
                    <item.left.icon size={26} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div style={{...baseTextStyle, fontSize: 20, fontWeight: 800, color: PALETTE.teal}}>{item.left.label}</div>
                    <div style={{...baseTextStyle, fontSize: 16, color: PALETTE.muted}}>{item.left.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{width: 2, backgroundColor: PALETTE.line, marginRight: 40}} />

        <div style={{width: 500, padding: '28px 24px', backgroundColor: PALETTE.paper, borderRadius: 10, border: `3px solid ${PALETTE.red}`, boxShadow: '0 14px 36px rgba(23,32,29,0.09)'}}>
          <div style={{...baseTextStyle, fontSize: 30, fontWeight: 900, color: PALETTE.red, marginBottom: 24, textAlign: 'center'}}>必要共同诉讼</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            {items.map((item, i) => {
              const delay = 60 + i * 20;
              const itemReveal = interpolate(frame, [delay, delay + 20], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
              return (
                <div key={i} style={{opacity: itemReveal, display: 'flex', alignItems: 'center', gap: 12}}>
                  <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
                    <item.right.icon size={26} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div style={{...baseTextStyle, fontSize: 20, fontWeight: 800, color: PALETTE.red}}>{item.right.label}</div>
                    <div style={{...baseTextStyle, fontSize: 16, color: PALETTE.muted}}>{item.right.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========== 05 常考情形 ========== */
export const ExamplesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());

  const items = [
    {icon: Building2, text: '挂靠关系', sub: '挂靠方+被挂靠方'},
    {icon: UserCog, text: '个体工商户', sub: '登记+实际经营者'},
    {icon: Group, text: '个人合伙', sub: '全体合伙人'},
    {icon: ShieldAlert, text: '共有财产受侵害', sub: '其他共有权人'},
    {icon: HeartHandshake, text: '追索赡养费', sub: '所有赡养义务人'},
    {icon: Coins, text: '遗产继承', sub: '其他继承人'},
    {icon: Briefcase, text: '企业分立/注销', sub: '分立后企业/股东'},
    {icon: Truck, text: '劳务派遣', sub: '用工单位+派遣单位'},
  ];

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="高频考点" title="常考必要共同诉讼人" accent="blue" />

      <div style={{position: 'absolute', left: 120, top: 260, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px 20px', width: 1500}}>
        {items.map((item, i) => {
          const delay = 30 + i * 18;
          const itemReveal = interpolate(frame, [delay, delay + 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
          return (
            <div
              key={i}
              style={{
                opacity: itemReveal,
                translate: `0px ${interpolate(frame, [delay, delay + 24], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
              }}
            >
              <IconNode icon={item.icon} label={item.text} detail={item.sub} accent="blue" compact />
            </div>
          );
        })}
      </div>

      <ImpactReveal delay={180} style={{position: 'absolute', left: 120, top: 840}}>
        <div style={{display: 'flex', gap: 16}}>
          <div style={{...baseTextStyle, padding: '10px 18px', backgroundColor: PALETTE.blueSoft, borderRadius: 6, fontSize: 18, fontWeight: 700, color: PALETTE.blue}}>借用资质</div>
          <div style={{...baseTextStyle, padding: '10px 18px', backgroundColor: PALETTE.blueSoft, borderRadius: 6, fontSize: 18, fontWeight: 700, color: PALETTE.blue}}>连带保证</div>
          <div style={{...baseTextStyle, padding: '10px 18px', backgroundColor: PALETTE.blueSoft, borderRadius: 6, fontSize: 18, fontWeight: 700, color: PALETTE.blue}}>共同侵权</div>
          <div style={{...baseTextStyle, padding: '10px 18px', backgroundColor: PALETTE.blueSoft, borderRadius: 6, fontSize: 18, fontWeight: 700, color: PALETTE.blue}}>共同危险</div>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 06 回顾 ========== */
export const RecapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [20, 70], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="06" eyebrow="总结" title="共同诉讼总览" accent="red" />

      <div style={{position: 'absolute', left: 120, top: 280, display: 'flex', gap: 60, opacity: p}}>
        <div
          style={{
            width: 560,
            padding: '36px 32px',
            backgroundColor: PALETTE.paper,
            borderRadius: 10,
            border: `3px solid ${PALETTE.teal}`,
            boxShadow: '0 18px 44px rgba(23,32,29,0.1)',
          }}
        >
          <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900, color: PALETTE.teal, marginBottom: 24, textAlign: 'center'}}>普通共同诉讼</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}><Split size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>诉讼标的<span style={{color: PALETTE.teal, fontWeight: 800}}>同种类</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}><CheckCircle2 size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>数个<span style={{color: PALETTE.teal, fontWeight: 800}}>可分之诉</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}><Handshake size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>法院同意 + 当事人同意</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}><UsersRound size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}><span style={{color: PALETTE.teal, fontWeight: 800}}>行为独立</span>，互不影响</div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 560,
            padding: '36px 32px',
            backgroundColor: PALETTE.paper,
            borderRadius: 10,
            border: `3px solid ${PALETTE.red}`,
            boxShadow: '0 18px 44px rgba(23,32,29,0.1)',
          }}
        >
          <div style={{...baseTextStyle, fontSize: 34, fontWeight: 900, color: PALETTE.red, marginBottom: 24, textAlign: 'center'}}>必要共同诉讼</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}><GitMerge size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>诉讼标的<span style={{color: PALETTE.red, fontWeight: 800}}>同一</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}><Ban size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>只有<span style={{color: PALETTE.red, fontWeight: 800}}>一个诉</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}><Landmark size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>法院<span style={{color: PALETTE.red, fontWeight: 800}}>必须</span>合并审理</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}><HeartHandshake size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>经<span style={{color: PALETTE.red, fontWeight: 800}}>承认</span>生效</div>
            </div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={90} style={{position: 'absolute', left: 120, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.gold}}>
          核心口诀：同一则必要，同种类则普通
        </div>
      </ImpactReveal>
    </div>
  );
};
