import {
  UsersRound,
  UserCheck,
  Scale,
  Gavel,
  Megaphone,
  ClipboardList,
  Landmark,
  ArrowRightLeft,
  Vote,
  UserPlus,
  FileText,
  Bell,
  Calendar,
  XCircle,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Shield,
  Eye,
  EyeOff,
  ArrowRight,
  Split,
  GitMerge,
} from 'lucide-react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  baseTextStyle,
  ENTER_EASING,
  IconNode,
  ImpactReveal,
  Keyword,
  MaskedReveal,
  SceneHeading,
} from '../visual-system';

/* ========== 01 概念 ========== */
export const ConceptScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [30, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [80, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="01" eyebrow="概念" title="什么是代表人诉讼？" accent="red" />

      <MaskedReveal delay={18} duration={28} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 64, fontWeight: 900, lineHeight: 1.18}}>
          一方或双方
          <br />
          <Keyword accent="red">10人以上</Keyword>
          <br />
          推举 <Keyword accent="gold">2~5人</Keyword> 为代表
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 680,
          display: 'flex',
          gap: 28,
          opacity: p1,
          translate: `0px ${interpolate(frame, [30, 80], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <IconNode icon={UsersRound} label="人数众多" detail="10人以上" accent="red" compact />
        <IconNode icon={UserCheck} label="推举代表" detail="2~5人" accent="gold" compact />
        <IconNode icon={Scale} label="本质也是" detail="共同诉讼" accent="teal" compact />
      </div>

      <div
        style={{
          position: 'absolute',
          left: 960,
          top: 280,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          opacity: p2,
          translate: `0px ${interpolate(frame, [80, 120], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.ink, marginBottom: 10}}>构成要件</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 8, color: PALETTE.red}}>
            <UsersRound size={28} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.red}}>人数要件</div>
            <div style={{...baseTextStyle, fontSize: 18, color: PALETTE.muted}}>一方或双方 10 人以上</div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 8, color: PALETTE.gold}}>
            <UserCheck size={28} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.gold}}>代表要件</div>
            <div style={{...baseTextStyle, fontSize: 18, color: PALETTE.muted}}>推举 2~5 人为代表</div>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <div style={{width: 50, height: 50, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 8, color: PALETTE.teal}}>
            <Scale size={28} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.teal}}>本质要件</div>
            <div style={{...baseTextStyle, fontSize: 18, color: PALETTE.muted}}>属于共同诉讼</div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={130} style={{position: 'absolute', left: 120, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 26, color: PALETTE.muted, fontWeight: 700}}>
          代表人诉讼 = 共同诉讼 + 人数众多（10人以上）+ 推举代表
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 02 权限 ========== */
export const AuthorityScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 110], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [120, 160], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="02" eyebrow="权限" title="代表人的诉讼权限" accent="teal" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, lineHeight: 1.22}}>
          区分程序性行为
          <br />
          与 <Keyword accent="red">实体处分行为</Keyword>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 500,
          width: 620,
          padding: '28px 24px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.teal}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p1,
          translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.teal, marginBottom: 18}}>直接生效</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <Gavel size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>出庭应诉、陈述辩论</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <ClipboardList size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>举证、质证</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <Vote size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>一般程序性行为</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 820,
          top: 500,
          width: 620,
          padding: '28px 24px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.red}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p2,
          translate: `0px ${interpolate(frame, [70, 110], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.red, marginBottom: 18}}>须经被代表当事人同意</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <XCircle size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>放弃诉讼请求</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <ArrowRightLeft size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>变更诉讼请求</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <CheckCircle2 size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>承认对方请求 / 和解</div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={150} style={{position: 'absolute', left: 120, top: 860, width: 1320}}>
        <div style={{...baseTextStyle, padding: '24px 28px', backgroundColor: PALETTE.paper, borderRadius: 8, border: `2px solid ${PALETTE.gold}`, boxShadow: '0 12px 32px rgba(23,32,29,0.08)'}}>
          <div style={{fontSize: 22, fontWeight: 800, color: PALETTE.gold, marginBottom: 10}}>命题要点</div>
          <div style={{fontSize: 20, color: PALETTE.muted, lineHeight: 1.6}}>
            涉及<span style={{color: PALETTE.red, fontWeight: 800}}>处分实体权利</span>的行为（放弃、变更、承认、和解）必须经被代表当事人同意；
            一般程序性行为（如在线开庭同意）直接生效。
          </div>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 03 人数确定 ========== */
export const DeterminedScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [60, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="03" eyebrow="分类一" title="人数确定的代表人诉讼" accent="blue" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, lineHeight: 1.22}}>
          起诉时人数<span style={{color: PALETTE.blue}}>确定</span>
          <br />
          可以是必要或普通共同诉讼
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 500,
          width: 600,
          padding: '32px 28px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.red}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p1,
          translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, color: PALETTE.red, marginBottom: 20}}>必要共同诉讼</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <GitMerge size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>基于<span style={{color: PALETTE.red, fontWeight: 800}}>同一标的</span></div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <UsersRound size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>50人共有财产受侵害</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <UserPlus size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>选不出代表人：<span style={{color: PALETTE.red, fontWeight: 800}}>自己参加诉讼</span></div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 820,
          top: 500,
          width: 600,
          padding: '32px 28px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.teal}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p2,
          translate: `0px ${interpolate(frame, [60, 100], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, color: PALETTE.teal, marginBottom: 20}}>普通共同诉讼</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <Split size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>标的<span style={{color: PALETTE.teal, fontWeight: 800}}>同种类</span>（50个独立侵权）</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <UsersRound size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>50家养殖户起诉化工厂</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <FileText size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>选不出代表人：<span style={{color: PALETTE.teal, fontWeight: 800}}>另行起诉</span></div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={110} style={{position: 'absolute', left: 120, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 24, color: PALETTE.muted, fontWeight: 700}}>
          代表人确定方式：全体推选共同代表人，或部分当事人推选自己的代表人
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 04 人数不确定 ========== */
export const UndeterminedScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p1 = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p2 = interpolate(frame, [70, 110], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const p3 = interpolate(frame, [120, 160], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="04" eyebrow="分类二" title="人数不确定的代表人诉讼" accent="gold" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, lineHeight: 1.22}}>
          起诉时人数<span style={{color: PALETTE.gold}}>不确定</span>
          <br />
          只能是<span style={{color: PALETTE.gold}}>普通共同诉讼</span>
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 500,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          opacity: p1,
          translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 26, fontWeight: 900, color: PALETTE.gold, marginBottom: 6}}>程序流程</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <IconNode icon={Megaphone} label="法院公告" detail="通知权利人登记" accent="gold" compact style={{width: 240, minHeight: 90}} />
          <ArrowRight size={32} color={PALETTE.gold} />
          <IconNode icon={ClipboardList} label="权利人登记" detail="证明法律关系与损害" accent="teal" compact style={{width: 260, minHeight: 90}} />
          <ArrowRight size={32} color={PALETTE.gold} />
          <IconNode icon={Gavel} label="审理判决" detail="对全体登记者" accent="blue" compact style={{width: 240, minHeight: 90}} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 8}}>
          <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 6, color: PALETTE.gold}}>
            <Calendar size={22} strokeWidth={2.2} />
          </div>
          <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700, color: PALETTE.gold}}>公告期限 ≥ 30 日</div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 1060,
          top: 500,
          width: 500,
          padding: '28px 24px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.blue}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p3,
          translate: `0px ${interpolate(frame, [120, 160], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 24, fontWeight: 900, color: PALETTE.blue, marginBottom: 18}}>判决效力</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.blueSoft, borderRadius: 6, color: PALETTE.blue}}>
              <CheckCircle2 size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>对<span style={{color: PALETTE.blue, fontWeight: 800}}>登记权利人</span>直接生效</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 6, color: PALETTE.gold}}>
              <BookOpen size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>未登记者：<span style={{color: PALETTE.gold, fontWeight: 800}}>预决效力</span></div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={170} style={{position: 'absolute', left: 120, top: 840, width: 900}}>
        <div style={{...baseTextStyle, padding: '24px 28px', backgroundColor: PALETTE.paper, borderRadius: 8, border: `2px solid ${PALETTE.gold}`, boxShadow: '0 12px 32px rgba(23,32,29,0.08)'}}>
          <div style={{fontSize: 22, fontWeight: 800, color: PALETTE.gold, marginBottom: 10}}>预决效力</div>
          <div style={{fontSize: 20, color: PALETTE.muted, lineHeight: 1.6}}>
            未登记的权利人在诉讼时效期间内起诉，法院认定请求成立的，<span style={{color: PALETTE.gold, fontWeight: 800}}>裁定适用</span>已作出的判决、裁定。
            立法目的：避免大规模集团诉讼出现类似案件不同判决，激化社会矛盾。
          </div>
        </div>
      </ImpactReveal>
    </div>
  );
};

/* ========== 05 证券特别代表人诉讼 ========== */
export const SecuritiesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [20, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <SceneHeading index="05" eyebrow="特别制度" title="证券特别代表人诉讼" accent="red" />

      <MaskedReveal delay={14} duration={26} style={{position: 'absolute', left: 120, top: 286}}>
        <div style={{...baseTextStyle, fontSize: 48, fontWeight: 900, lineHeight: 1.22}}>
          <Keyword accent="red">投资者保护机构</Keyword>
          <br />
          受 <Keyword accent="gold">50名以上</Keyword> 投资者委托
          <br />
          作为特别代表人参加诉讼
        </div>
      </MaskedReveal>

      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 560,
          width: 600,
          padding: '32px 28px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.teal}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p,
          translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, color: PALETTE.teal, marginBottom: 20}}>普通代表人诉讼</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <UserCheck size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>代表人：权利人<span style={{color: PALETTE.teal, fontWeight: 800}}>推举</span></div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <Eye size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>参诉方式：<span style={{color: PALETTE.teal, fontWeight: 800}}>明示加入（登记）</span></div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.tealSoft, borderRadius: 6, color: PALETTE.teal}}>
              <Landmark size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>判决对<span style={{color: PALETTE.teal, fontWeight: 800}}>参加登记</span>的权利人生效</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 820,
          top: 560,
          width: 600,
          padding: '32px 28px',
          backgroundColor: PALETTE.paper,
          borderRadius: 10,
          border: `3px solid ${PALETTE.red}`,
          boxShadow: '0 14px 36px rgba(23,32,29,0.09)',
          opacity: p,
          translate: `0px ${interpolate(frame, [20, 60], ['30px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`,
        }}
      >
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 900, color: PALETTE.red, marginBottom: 20}}>特别代表人诉讼</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <Shield size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>代表人：<span style={{color: PALETTE.red, fontWeight: 800}}>投资者保护机构</span></div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <EyeOff size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>参诉方式：<span style={{color: PALETTE.red, fontWeight: 800}}>默示加入（不声明退出）</span></div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 44, height: 44, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.redSoft, borderRadius: 6, color: PALETTE.red}}>
              <TrendingUp size={24} strokeWidth={2.2} />
            </div>
            <div style={{...baseTextStyle, fontSize: 20, fontWeight: 700}}>判决对<span style={{color: PALETTE.red, fontWeight: 800}}>未声明退出</span>的所有权利人生效</div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={80} style={{position: 'absolute', left: 120, top: 880}}>
        <div style={{...baseTextStyle, fontSize: 24, color: PALETTE.muted, fontWeight: 700}}>
          声明退出期限：公告期间届满后 <span style={{color: PALETTE.red, fontWeight: 800}}>15日内</span>
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
      <SceneHeading index="06" eyebrow="总结" title="代表人诉讼对比" accent="blue" />

      <div style={{position: 'absolute', left: 120, top: 280, display: 'flex', gap: 60, opacity: p, translate: `0px ${interpolate(frame, [20, 70], ['40px', '0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING})}`}}>
        <div
          style={{
            width: 600,
            padding: '36px 32px',
            backgroundColor: PALETTE.paper,
            borderRadius: 10,
            border: `3px solid ${PALETTE.blue}`,
            boxShadow: '0 18px 44px rgba(23,32,29,0.1)',
          }}
        >
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900, color: PALETTE.blue, marginBottom: 24, textAlign: 'center'}}>人数确定</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.blueSoft, borderRadius: 6, color: PALETTE.blue}}><CheckCircle2 size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>起诉时人数<span style={{color: PALETTE.blue, fontWeight: 800}}>确定</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.blueSoft, borderRadius: 6, color: PALETTE.blue}}><GitMerge size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>可以是<span style={{color: PALETTE.blue, fontWeight: 800}}>必要或普通</span>共同诉讼</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.blueSoft, borderRadius: 6, color: PALETTE.blue}}><UserPlus size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>选不出代表人：必要<span style={{color: PALETTE.red, fontWeight: 800}}>自己参加</span> / 普通<span style={{color: PALETTE.teal, fontWeight: 800}}>另行起诉</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.blueSoft, borderRadius: 6, color: PALETTE.blue}}><Landmark size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>判决对<span style={{color: PALETTE.blue, fontWeight: 800}}>当事人直接生效</span></div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 600,
            padding: '36px 32px',
            backgroundColor: PALETTE.paper,
            borderRadius: 10,
            border: `3px solid ${PALETTE.gold}`,
            boxShadow: '0 18px 44px rgba(23,32,29,0.1)',
          }}
        >
          <div style={{...baseTextStyle, fontSize: 32, fontWeight: 900, color: PALETTE.gold, marginBottom: 24, textAlign: 'center'}}>人数不确定</div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 6, color: PALETTE.gold}}><AlertTriangle size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>起诉时人数<span style={{color: PALETTE.gold, fontWeight: 800}}>不确定</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 6, color: PALETTE.gold}}><Split size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>只能是<span style={{color: PALETTE.gold, fontWeight: 800}}>普通共同诉讼</span></div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 6, color: PALETTE.gold}}><Bell size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>公告 <span style={{color: PALETTE.gold, fontWeight: 800}}>≥30日</span> + 登记</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <div style={{width: 40, height: 40, display: 'grid', placeItems: 'center', backgroundColor: PALETTE.goldSoft, borderRadius: 6, color: PALETTE.gold}}><BookOpen size={22} /></div>
              <div style={{...baseTextStyle, fontSize: 22, fontWeight: 700}}>登记者生效；未登记者<span style={{color: PALETTE.gold, fontWeight: 800}}>预决效力</span></div>
            </div>
          </div>
        </div>
      </div>

      <ImpactReveal delay={90} style={{position: 'absolute', left: 120, top: 860}}>
        <div style={{...baseTextStyle, fontSize: 28, fontWeight: 800, color: PALETTE.gold}}>
          核心口诀：同一则必要，同种类则普通；人数确定可必要，不确定则只能普通
        </div>
      </ImpactReveal>
    </div>
  );
};
