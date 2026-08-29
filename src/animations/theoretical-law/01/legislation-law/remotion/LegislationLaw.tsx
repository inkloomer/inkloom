import type {CSSProperties, ReactNode} from 'react';
import {ArrowUpDown, ClipboardCheck, Clock, Compass, FileText, GitBranch, Landmark, ShieldCheck, Stamp as StampIcon, Users, Vote} from 'lucide-react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';

const PLAYER_CONTROL_SAFE_BOTTOM = 176;

const C = {
  kiln: '#5A3428',
  kilnDeep: '#47291F',
  mold: '#F2E7CE',
  moldDim: '#E3D6B8',
  moldEdge: '#6E5F4C',
  ink: '#2B2119',
  inkSoft: '#5C4F3E',
  molten: '#C96A2A',
  moltenPale: '#F2D5B8',
  iron: '#55575A',
  brass: '#A9822F',
  brassPale: '#E5D3A4',
  paper: '#F6F1E2',
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
      backgroundColor: C.kiln,
      color: C.paper,
      fontFamily: 'var(--inkloom-animation-body)',
      overflow: 'hidden',
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0 128px, ${C.molten}0C 128px 130px)`,
    }}
  >
    <div style={{position: 'absolute', left: 30, top: 30, right: 30, bottom: 30, border: `3px solid ${C.iron}`}} />
    <div style={{position: 'absolute', left: 40, top: 40, right: 40, bottom: 40, border: `1px solid ${C.molten}`}} />
    <div style={{position: 'absolute', left: 62, top: 44, padding: '10px 16px', backgroundColor: C.kilnDeep, borderLeft: `8px solid ${C.molten}`}}>
      <span style={{fontSize: 22, fontWeight: 950, color: C.paper, letterSpacing: 2}}>考点 23 · {code}</span>
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
        borderBottom: `2px solid ${C.molten}`,
      }}
    >
      <h1 style={{fontFamily: 'var(--inkloom-animation-title)', margin: 0, fontSize: 44, lineHeight: 1.08, fontWeight: 950, color: C.paper}}>{title}</h1>
      <span style={{fontSize: 21, fontWeight: 850, color: C.brassPale, textAlign: 'right'}}>{kicker}</span>
    </header>
    <main style={{position: 'absolute', left: 72, right: 72, top: 152, bottom: PLAYER_CONTROL_SAFE_BOTTOM}}>{children}</main>
  </AbsoluteFill>
);

const Mold = ({children, marker, style, tone}: {readonly children: ReactNode; readonly marker?: string; readonly style?: CSSProperties; readonly tone?: string}) => (
  <div
    data-final-knowledge={marker}
    style={{backgroundColor: C.mold, border: `2px solid ${C.moldEdge}`, color: C.ink, position: 'relative', borderTop: tone ? `8px solid ${tone}` : undefined, ...style}}
  >
    <span style={{position: 'absolute', left: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, top: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', left: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    <span style={{position: 'absolute', right: 6, bottom: 6, width: 8, height: 8, borderRadius: 4, backgroundColor: tone ?? C.brass}} />
    {children}
  </div>
);

const LabelTab = ({children, bar = C.molten}: {readonly children: ReactNode; readonly bar?: string}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', padding: '5px 14px', backgroundColor: C.kilnDeep, borderLeft: `6px solid ${bar}`, color: C.paper, fontSize: 22, fontWeight: 900, letterSpacing: 2}}>{children}</span>
);

const BillChip = ({tone = C.molten, children, solid = false}: {readonly tone?: string; readonly children: ReactNode; readonly solid?: boolean}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      border: `2px solid ${tone}`,
      backgroundColor: solid ? tone : `${tone}14`,
      fontSize: 23,
      fontWeight: 880,
      color: solid ? C.paper : C.ink,
    }}
  >
    {children}
  </span>
);

const ForgeStamp = ({children, delay = 0, size = 26, tone = C.brass}: {readonly children: ReactNode; readonly delay?: number; readonly size?: number; readonly tone?: string}) => {
  const frame = useCurrentFrame();
  const p = prog(frame, delay, 14);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        border: `5px solid ${tone}`,
        color: tone,
        backgroundColor: `${tone}10`,
        fontSize: size,
        fontWeight: 950,
        letterSpacing: 2,
        opacity: p,
        scale: 0.86 + p * 0.14,
        rotate: '-3deg',
      }}
    >
      {children}
    </span>
  );
};

const InkUnderline = ({children, color = C.molten, delay = 0}: {readonly children: ReactNode; readonly color?: string; readonly delay?: number}) => {
  const frame = useCurrentFrame();
  return (
    <span style={{position: 'relative', display: 'inline-block'}}>
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -6,
          height: 4,
          backgroundColor: color,
          scale: `${prog(frame, delay, 22)} 1`,
          transformOrigin: 'left center',
        }}
      />
    </span>
  );
};

const Soft = ({children, color}: {readonly children: ReactNode; readonly color: string}) => (
  <span style={{display: 'inline-block', backgroundColor: `${color}2b`, padding: '2px 9px'}}>{children}</span>
);

const DarkStrip = ({children, style}: {readonly children: ReactNode; readonly style?: CSSProperties}) => (
  <div style={{backgroundColor: 'rgba(71, 41, 31, 0.92)', border: `2px solid ${C.molten}`, color: C.paper, display: 'flex', alignItems: 'center', gap: 16, padding: '14px 26px', ...style}}>{children}</div>
);

export const PrinciplesProposalScene = () => {
  /* data-final-knowledge="principles-heading" data-final-knowledge="principles-bench" data-final-knowledge="assembly-proposal-lane" data-final-knowledge="committee-proposal-lane" */
  return (
    <Shell code="01" kicker="原则与提案" title="立法三部曲开炉：原则与提案">
      <div
        data-layout="principles-bench-with-proposal-pair"
        data-visual-anchor="comparison-axis"
        data-text-treatments="label-block,chip,soft-highlight,thin-underline"
        data-visual-grammar="three-principles-bench,assembly-proposal-lane,standing-committee-proposal-lane"
        data-focal-rule="bills-enter-through-fixed-movers-under-three-principles"
        data-focal-channels="icon,contrast,enclosure,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="principles-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.mold, border: `3px solid ${C.moldEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              难事<InkUnderline delay={36}>论证</InkUnderline>，大事<InkUnderline color={C.brass} delay={48}>听证</InkUnderline>，草案公开三十天
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="up" marker="principles-bench" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 128}}>
          <Mold tone={C.molten} style={{height: '100%', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 14}}>
            <LabelTab>三原则</LabelTab>
            <div style={{display: 'flex', gap: 14, flex: 1}}>
              <div style={{flex: 1, border: `2px solid ${C.moldEdge}`, backgroundColor: C.moldDim, padding: '10px 14px'}}>
                <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 24, fontWeight: 950, color: C.ink}}>
                  <Compass size={30} color={C.molten} strokeWidth={2.3} />
                  科学性
                </div>
                <div style={{marginTop: 4, fontSize: 21, fontWeight: 870, color: C.inkSoft}}>规划论证评估 · 条文明细可操作</div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.moldEdge}`, backgroundColor: C.moldDim, padding: '10px 14px'}}>
                <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 24, fontWeight: 950, color: C.ink}}>
                  <Users size={30} color={C.molten} strokeWidth={2.3} />
                  民主性
                </div>
                <div style={{marginTop: 4, fontSize: 21, fontWeight: 870, color: C.inkSoft}}>听证会 · 草案公示≥30日 · 基层联系点</div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.moldEdge}`, backgroundColor: C.moldDim, padding: '10px 14px'}}>
                <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 24, fontWeight: 950, color: C.ink}}>
                  <ShieldCheck size={30} color={C.molten} strokeWidth={2.3} />
                  合法性
                </div>
                <div style={{marginTop: 4, fontSize: 21, fontWeight: 870, color: C.inkSoft}}>法定权限与程序 · 维护宪法权威</div>
              </div>
            </div>
          </Mold>
        </Enter>
        <Enter delay={64} from="left" marker="assembly-proposal-lane" style={{position: 'absolute', left: 40, top: 260, width: 1736, height: 156}}>
          <Mold tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <LabelTab bar={C.brass}>全国人大 · 提案</LabelTab>
              <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>机关提案应当列入大会议程</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>机关：</span>
              <BillChip tone={C.brass} solid>
                主席团
              </BillChip>
              <BillChip tone={C.brass}>两央：国务院 · 中央军委</BillChip>
              <BillChip tone={C.brass}>两高：最高法 · 最高检</BillChip>
              <BillChip tone={C.brass}>三委：全人常 · 监委 · 专委会</BillChip>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>个人：</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>一个代表团 或 <Soft color={C.molten}>30名以上代表</Soft>联名——由主席团决定是否列入</span>
            </div>
          </Mold>
        </Enter>
        <Enter delay={100} from="left" marker="committee-proposal-lane" style={{position: 'absolute', left: 40, top: 440, width: 1736, height: 156}}>
          <Mold tone={C.molten} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
              <LabelTab>全国人大常委会 · 提案</LabelTab>
              <span style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>委员长会议提案外，其余可向常委会或专委会提交</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>机关：</span>
              <BillChip tone={C.molten} solid>
                委员长会议
              </BillChip>
              <BillChip tone={C.molten}>两央 · 两高</BillChip>
              <BillChip tone={C.molten}>监委 · 专委会</BillChip>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <span style={{fontSize: 23, fontWeight: 900, color: C.ink}}>个人：</span>
              <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>常委会组成人员<Soft color={C.molten}>10人以上</Soft>联名——由委员长会议决定是否列入</span>
            </div>
          </Mold>
        </Enter>
        <Enter delay={170} from="up" style={{position: 'absolute', left: 40, top: 626, width: 1736}}>
          <DarkStrip style={{height: 70}}>
            <span style={{padding: '4px 13px', backgroundColor: C.molten, color: C.kilnDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>对照</span>
            <span style={{fontSize: 23, fontWeight: 900, color: C.paper}}>
              联名门槛 30 比 10 · 拍板人 主席团 比 委员长会议
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const DeliberationVotingScene = () => {
  const frame = useCurrentFrame();
  /* data-final-knowledge="deliberation-heading" data-final-knowledge="assembly-lane" data-final-knowledge="committee-lane" data-final-knowledge="vote-gate" data-final-knowledge="passage-verdict" */
  const lineP = prog(frame, 40, 24);
  return (
    <Shell code="02" kicker="审议与表决" title="人大五步，常委会三读">
      <div
        data-layout="bill-casting-line-with-vote-gate"
        data-visual-anchor="timeline-gate"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="assembly-five-step-lane,committee-three-reading-lane,vote-passage-gate"
        data-focal-rule="bills-are-reheated-through-fixed-readings-before-one-vote-gate"
        data-focal-channels="icon,connector,contrast,motion,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="deliberation-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.mold, border: `3px solid ${C.moldEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              人大<InkUnderline delay={36}>一个月</InkUnderline>前发草案 · 常委会<InkUnderline color={C.brass} delay={48}>一星期</InkUnderline>前
            </span>
          </div>
        </Enter>
        <span style={{position: 'absolute', left: 60, top: 330, width: 1656 * lineP, height: 3, backgroundColor: C.molten, opacity: 0.7}} />
        <Enter delay={30} from="left" marker="assembly-lane" style={{position: 'absolute', left: 40, top: 104, width: 1200, height: 190}}>
          <Mold tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <FileText size={32} color={C.brass} strokeWidth={2.3} />
              <LabelTab bar={C.brass}>全国人大 · 五步审议</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              ①会议前1个月发草案 ②大会听提案人说明 ③代表团＋专门委员会审议 ④宪法法律委形成<Soft color={C.molten}>修改稿</Soft>再交代表团 ⑤形成<Soft color={C.molten}>表决稿</Soft>交大会表决
            </div>
            <div style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>合宪性问题与重要不同意见应当说明；撤回→主席团同意即终止</div>
          </Mold>
        </Enter>
        <Enter delay={66} from="right" marker="committee-lane" style={{position: 'absolute', left: 1280, top: 104, width: 496, height: 190}}>
          <Mold tone={C.molten} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <Clock size={30} color={C.molten} strokeWidth={2.3} />
              <LabelTab>常委会 · 三读</LabelTab>
            </div>
            <div style={{fontSize: 22, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              原则<Soft color={C.molten}>三次审议</Soft>后表决；意见一致可<Soft color={C.brass}>两次</Soft>；事项单一/紧急可<Soft color={C.brass}>一次</Soft>
            </div>
            <div style={{fontSize: 21, fontWeight: 850, color: C.inkSoft}}>搁置满2年未再审议→终止审议</div>
          </Mold>
        </Enter>
        <Enter delay={110} marker="vote-gate" from="up" style={{position: 'absolute', left: 300, top: 330, width: 1320, height: 160}}>
          <div style={{height: '100%', border: `4px solid ${C.iron}`, backgroundColor: C.iron, color: C.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '0 30px'}}>
            <Vote size={44} color={C.brassPale} strokeWidth={2.2} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <span style={{fontSize: 27, fontWeight: 950}}>表决三型 · 通过两线</span>
              <span style={{fontSize: 22, fontWeight: 870, opacity: 0.9}}>一般表决 ｜ 个别分歧大条款单独表决 ｜ 同类条款合并表决</span>
            </div>
          </div>
        </Enter>
        <Enter delay={160} from="up" marker="passage-verdict" style={{position: 'absolute', left: 40, top: 524, width: 1736, height: 140}}>
          <Mold tone={C.brass} style={{height: '100%', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 22}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>一般通过：</span>
                <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>全体代表 或 常委会全体组成人员<Soft color={C.molten}>过半数</Soft></span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink}}>宪法修改：</span>
                <span style={{fontSize: 24, fontWeight: 900, color: C.ink}}>全体代表<Soft color={C.molten}>2/3以上</Soft>多数</span>
              </div>
            </div>
            <ForgeStamp delay={180} size={26}>法律主席相对多 · 宪法主席团绝对多</ForgeStamp>
          </Mold>
        </Enter>
      </div>
    </Shell>
  );
};

export const ReviewFilingScene = () => {
  /* data-final-knowledge="review-heading" data-final-knowledge="prior-approval-gate" data-final-knowledge="relations-branches" data-final-knowledge="filing-rail" data-final-knowledge="passive-review-rail" */
  return (
    <Shell code="03" kicker="审查与备案" title="谁批谁管，备案四句">
      <div
        data-layout="review-relations-flow-with-filing-rail"
        data-visual-anchor="flow-path"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="prior-approval-gate,leadership-supervision-branches,passive-review-rail"
        data-focal-rule="approved-bills-are-treated-as-the-approver-s-own-and-relations-decide-remedies"
        data-focal-channels="icon,connector,contrast,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="review-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.mold, border: `3px solid ${C.moldEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              批准当自己 · 备案找上级 · <InkUnderline delay={36}>人大不备案</InkUnderline> · 规章只到国务院
            </span>
          </div>
        </Enter>
        <Enter delay={28} from="left" marker="prior-approval-gate" style={{position: 'absolute', left: 40, top: 104, width: 1736, height: 120}}>
          <Mold tone={C.molten} style={{height: '100%', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
            <StampIcon size={34} color={C.molten} strokeWidth={2.3} />
            <LabelTab>事前批准（只有两类）</LabelTab>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>
              地级市地方性法规→<Soft color={C.molten}>省人常</Soft>批准（合法性·4个月内）｜ 民族自治法规→<Soft color={C.molten}>区州提一级 · 自治县提两级</Soft>人常批准
            </span>
          </Mold>
        </Enter>
        <Enter delay={64} from="left" marker="relations-branches" style={{position: 'absolute', left: 40, top: 248, width: 1736, height: 150}}>
          <Mold tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
            <ArrowUpDown size={36} color={C.brass} strokeWidth={2.3} />
            <div style={{display: 'flex', gap: 16, flex: 1}}>
              <div style={{flex: 1, border: `2px solid ${C.moldEdge}`, backgroundColor: C.moldDim, padding: '10px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>领导关系</div>
                <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, marginTop: 4}}>审查<Soft color={C.molten}>不适当</Soft>（合法性＋合理性）→ 改变·撤销</div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.moldEdge}`, backgroundColor: C.moldDim, padding: '10px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>监督关系</div>
                <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, marginTop: 4}}>审查<Soft color={C.molten}>合法性</Soft>→ 只能撤销</div>
              </div>
              <div style={{flex: 1, border: `2px solid ${C.moldEdge}`, backgroundColor: C.moldDim, padding: '10px 16px'}}>
                <div style={{fontSize: 24, fontWeight: 950, color: C.ink}}>例外提醒</div>
                <div style={{fontSize: 22, fontWeight: 870, color: C.inkSoft, marginTop: 4}}>地方人常对同级政府：只撤销但审不适当</div>
              </div>
            </div>
          </Mold>
        </Enter>
        <Enter delay={110} from="up" marker="filing-rail" style={{position: 'absolute', left: 40, top: 422, width: 1736, height: 100}}>
          <Mold tone={C.molten} style={{height: '100%', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
            <ClipboardCheck size={34} color={C.molten} strokeWidth={2.3} />
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink}}>
              备案实例：市<b>政府</b>规章→<Soft color={C.molten}>市人常＋国务院</Soft>；晋城市<b>人大</b>法规（经省人常批准）→<Soft color={C.molten}>国务院＋全人常</Soft>；自治条例·三区法规备案须<Soft color={C.brass}>说明变通情况</Soft>
            </span>
          </Mold>
        </Enter>
        <Enter delay={150} from="up" marker="passive-review-rail" style={{position: 'absolute', left: 40, top: 546, width: 1736, height: 110}}>
          <Mold tone={C.brass} style={{height: '100%', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
            <LabelTab bar={C.brass}>被动审查</LabelTab>
            <span style={{fontSize: 23, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
              <BillChip tone={C.molten} solid>
                审查要求
              </BillChip>
              两央·两高·监省常 → 向全人常提 ｜
              <BillChip tone={C.brass}>审查建议</BillChip>
              其他机关与公民 ｜ 规章→国务院只建议
            </span>
          </Mold>
        </Enter>
      </div>
    </Shell>
  );
};

export const AdjudicationScene = () => {
  /* data-final-knowledge="adjudication-heading" data-final-knowledge="conflict-fork-board" data-final-knowledge="self-then-superior-rule" */
  return (
    <Shell code="04" kicker="立法裁决" title="冲突四路，各有去处">
      <div
        data-layout="four-conflict-fork-board"
        data-visual-anchor="document-fork"
        data-text-treatments="label-block,chip,soft-highlight,stamp"
        data-visual-grammar="same-maker-conflict,rule-regulation-conflict,delegated-conflict"
        data-focal-rule="settle-it-yourself-else-escalate-to-the-common-superior"
        data-focal-channels="icon,contrast,connector,spatial,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} from="down" marker="adjudication-heading" style={{position: 'absolute', left: 300, top: 0, width: 1176}}>
          <div style={{backgroundColor: C.mold, border: `3px solid ${C.moldEdge}`, padding: '11px 24px', textAlign: 'center'}}>
            <span style={{fontSize: 34, fontWeight: 950, color: C.ink, fontFamily: 'var(--inkloom-animation-title)'}}>
              原则解不开时——<InkUnderline delay={36}>特事特办</InkUnderline>的四种裁决
            </span>
          </div>
        </Enter>
        <div data-final-knowledge="conflict-fork-board" style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
          {[
            {name: '同一机关 · 新一般 vs 旧特别', to: '制定机关裁决（人大制定的由常委会）', tone: C.molten},
            {name: '部门规章 vs 地方性法规', to: '国务院提意见→认为适用地方性法规就地适用→认为用规章则提请全人常裁决', tone: C.brass},
            {name: '部门规章之间 · 部门规章 vs 地方政府规章', to: '国务院裁决', tone: C.molten},
            {name: '授权立法 vs 法律', to: '全国人大常委会裁决', tone: C.brass},
          ].map((route, index) => (
            <Enter key={route.name} delay={28 + index * 26} from="left" style={{position: 'absolute', left: 40, top: 104 + index * 118, width: 1736, height: 104}}>
              <Mold tone={route.tone} style={{height: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
                <GitBranch size={34} color={route.tone} strokeWidth={2.3} />
                <span style={{fontSize: 24, fontWeight: 950, color: C.ink, width: 620}}>{route.name}</span>
                <span style={{fontSize: 24, fontWeight: 900, color: C.molten}}>→</span>
                <span style={{fontSize: 23, fontWeight: 880, color: C.ink, flex: 1}}>{route.to}</span>
                {index === 3 ? (
                  <span style={{marginLeft: 'auto'}}>
                    <Landmark size={34} color={route.tone} strokeWidth={2.3} />
                  </span>
                ) : null}
              </Mold>
            </Enter>
          ))}
        </div>
        <Enter delay={160} from="up" marker="self-then-superior-rule" style={{position: 'absolute', left: 40, top: 596, width: 1736}}>
          <DarkStrip style={{height: 90}}>
            <span style={{padding: '4px 13px', backgroundColor: C.molten, color: C.kilnDeep, fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>规律</span>
            <span style={{fontSize: 25, fontWeight: 900, color: C.paper}}>
              自己能解决自己解决——<InkUnderline color={C.brassPale} delay={180}>自己解决不了，找共同上级</InkUnderline>
            </span>
          </DarkStrip>
        </Enter>
      </div>
    </Shell>
  );
};

export const LegislationLaw = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-principles-proposal" {...SCENES.principlesProposal}>
      <PrinciplesProposalScene />
    </TimelineSequence>
    <TimelineSequence name="02-deliberation-voting" {...SCENES.deliberationVoting}>
      <DeliberationVotingScene />
    </TimelineSequence>
    <TimelineSequence name="03-review-filing" {...SCENES.reviewFiling}>
      <ReviewFilingScene />
    </TimelineSequence>
    <TimelineSequence name="04-adjudication" {...SCENES.adjudication}>
      <AdjudicationScene />
    </TimelineSequence>
  </AbsoluteFill>
);
