import type {ReactNode} from 'react';
import {Ban, Briefcase, FileText, Files, HeartHandshake, ListChecks, Stamp, UserRound, UserX} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PALETTE, toSourceFrame} from '../storyboard';
import {
  baseTextStyle,
  ClauseChip,
  ClausePanel,
  ContractArrow,
  ContractHeading,
  DocBadge,
  ENTER_EASING,
  GateBar,
  ImpactReveal,
  InkReveal,
  Keyword,
  SealStamp,
  SoftReveal,
  VerdictBar,
} from '../visual-system';

const BanItem = ({children, delay}: {readonly children: ReactNode; readonly delay: number}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const p = interpolate(frame, [delay, delay + 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 10, backgroundColor: PALETTE.redSoft, border: `2px solid ${PALETTE.red}`, color: PALETTE.red, fontSize: 21, fontWeight: 800, opacity: p, translate: `0px ${(1 - p) * 20}px`}}>
      <Ban size={17} strokeWidth={2.4} />
      <span>{children}</span>
    </div>
  );
};

const Sheet = ({left, top, width, height, children}: {readonly left: number; readonly top: number; readonly width: number; readonly height: number; readonly children: ReactNode}) => (
  <div style={{position: 'absolute', left, top, width, height, backgroundColor: PALETTE.paper, border: `1px solid ${PALETTE.line}`, boxShadow: '0 10px 26px rgba(38, 55, 74, 0.12)'}}>{children}</div>
);

export const ScopeScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const divider = interpolate(frame, [40, 80], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const specialItems: Array<[string, number]> = [
    ['承认请求', 34], ['放弃请求', 50], ['变更请求', 66], ['和解', 82], ['反诉', 98], ['上诉', 114],
  ];
  const banItems: Array<[string, number]> = [
    ['承认请求', 34], ['放弃请求', 50], ['变更请求', 66], ['和解', 82], ['反诉', 98], ['上诉', 114],
  ];
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <ContractHeading index="01" eyebrow="clause · 授权范围" title="写在授权书上的，才算数" accent="red" />
      <SoftReveal delay={10} style={{position: 'absolute', left: 106, top: 226}}>
        <div style={{...baseTextStyle, fontSize: 24, color: PALETTE.muted}}>委托代理人的权限范围，取决于被代理人的<Keyword accent="red">授权</Keyword>。</div>
      </SoftReveal>
      <Sheet left={240} top={316} width={1440} height={78}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, height: '100%', padding: '0 26px'}}>
          <Stamp size={28} strokeWidth={1.9} color={PALETTE.ink} />
          <div style={{...baseTextStyle, fontSize: 26, fontWeight: 800}}>授权委托书 — 代理权限范围</div>
          <div style={{marginLeft: 'auto', color: PALETTE.muted, fontFamily: 'Consolas, monospace', fontSize: 16}}>CLAUSE SPLIT</div>
        </div>
      </Sheet>
      <div style={{position: 'absolute', left: 962, top: 394, width: 3, height: 420, backgroundColor: PALETTE.line, scale: `${divider} 1`, transformOrigin: 'top center'}} />
      <ClausePanel icon={ListChecks} header="一般授权" headerAccent="mint" style={{left: 280, top: 394, width: 682, height: 420}}>
        <div style={{...baseTextStyle, fontSize: 24, fontWeight: 800, color: PALETTE.mint}}>只能行使程序性诉讼权利</div>
        <div style={{marginTop: 12, color: PALETTE.muted, fontSize: 20}}>不得代为处分实体权利：</div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16}}>
          {banItems.map(([text, delay]) => <BanItem key={text} delay={delay}>{text}</BanItem>)}
        </div>
      </ClausePanel>
      <ClausePanel icon={Stamp} header="特别授权" headerAccent="red" style={{left: 998, top: 394, width: 682, height: 420}}>
        <div style={{...baseTextStyle, fontSize: 24, fontWeight: 800, color: PALETTE.red}}>可代为处分实体权利</div>
        <div style={{marginTop: 12, color: PALETTE.muted, fontSize: 20}}>须逐项明确写入授权书：</div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16}}>
          {specialItems.map(([text, delay]) => <ClauseChip key={text} accent="red" delay={delay}>{text}</ClauseChip>)}
        </div>
      </ClausePanel>
      <VerdictBar delay={132} style={{left: 340, right: 340, top: 884}}>程序性权利人人有 · 实体处分须特别授权</VerdictBar>
    </div>
  );
};

export const FullPowerTrapScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const clause = interpolate(frame, [20, 62], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <ContractHeading index="02" eyebrow="trap · 全权二字" title="写了'全权'，反而只是一般" accent="seal" />
      <Sheet left={260} top={320} width={1100} height={420}>
        <div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: 56, display: 'flex', alignItems: 'center', padding: '0 26px', backgroundColor: PALETTE.ink, color: PALETTE.paper, fontSize: 22, fontWeight: 800}}>授权委托书 · 授权范围栏</div>
        <div style={{position: 'absolute', left: 46, top: 108, color: PALETTE.muted, fontFamily: 'Consolas, monospace', fontSize: 18, letterSpacing: 1}}>授权范围：</div>
        <InkReveal delay={26} duration={30} style={{position: 'absolute', left: 230, top: 78}}>
          <div style={{...baseTextStyle, fontSize: 52, fontWeight: 900, color: PALETTE.ink}}>全权代理</div>
        </InkReveal>
        <div style={{position: 'absolute', left: 46, top: 200, width: 640, height: 2, backgroundColor: PALETTE.line, scale: `${clause} 1`, transformOrigin: 'left center'}} />
        <div style={{position: 'absolute', left: 46, top: 250, color: PALETTE.muted, fontSize: 19, opacity: clause}}>—— 但没有写明任何一项具体授权内容</div>
        <SealStamp delay={86} left={490} top={130} size={212} rotateTo={-10}>
          视为<br />一般授权
        </SealStamp>
      </Sheet>
      <SoftReveal delay={140} style={{position: 'absolute', left: 1380, top: 340, width: 420}}>
        <div style={{padding: '24px 26px', backgroundColor: PALETTE.mintSoft, border: `2px solid ${PALETTE.mint}`}}>
          <div style={{...baseTextStyle, fontSize: 22, fontWeight: 800, color: PALETTE.mint}}>特别授权的每一项</div>
          <div style={{marginTop: 10, color: PALETTE.ink, fontSize: 20, lineHeight: 1.5}}>都必须由当事人在授权委托书中<Keyword accent="mint">明确、具体</Keyword>地写明。</div>
        </div>
      </SoftReveal>
      <ImpactReveal delay={120} style={{position: 'absolute', left: 1380, top: 560}}>
        <div style={{...baseTextStyle, fontSize: 21, color: PALETTE.muted}}>只写"全权代理"，不算特别授权。</div>
      </ImpactReveal>
      <VerdictBar delay={168} style={{left: 340, right: 340, top: 884}}>"全权代理"无具体内容 → 视为一般授权</VerdictBar>
    </div>
  );
};

export const ExecutionStageScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const move = interpolate(frame, [30, 84], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const gate = interpolate(frame, [110, 156], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  const note = interpolate(frame, [160, 200], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <ContractHeading index="03" eyebrow="stage · 代理阶段" title="授权到哪，代理到哪" accent="mint" />
      <DocBadge icon={Files} label="一审 · 二审" note="代理权限止步于此" accent="mint" style={{left: 220, top: 420, width: 500, translate: `${(1 - move) * -40}px 0px`}} />
      <ContractArrow left={740} top={470} width={150} progress={move} accent="mint" label="未另行授权" />
      <GateBar left={930} top={340} height={280} progress={gate} label="执行程序·无代理权" />
      <DocBadge icon={Briefcase} label="执行程序" note="需要另行明确授权" accent="red" style={{left: 1070, top: 420, width: 500, opacity: gate}} />
      <div style={{position: 'absolute', left: 220, top: 680, width: 1400, ...baseTextStyle, color: PALETTE.muted, fontSize: 21, opacity: note}}>
        当事人未明确授予执行程序中的代理权限 → 代理权限仅限于<Keyword accent="mint">一审、二审</Keyword>，在执行程序中<Keyword accent="red">没有代理权</Keyword>。
      </div>
      <VerdictBar delay={196} style={{left: 340, right: 340, top: 884}}>执行程序，须另行明确授权</VerdictBar>
    </div>
  );
};

export const DivorceDutyScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const link = interpolate(frame, [24, 62], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ENTER_EASING});
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <ContractHeading index="04" eyebrow="duty · 出庭义务" title="离婚案件 · 本人仍应出庭" accent="red" />
      <SoftReveal delay={10} style={{position: 'absolute', left: 106, top: 226}}>
        <div style={{...baseTextStyle, fontSize: 24, color: PALETTE.muted}}>有代理人，本人原则上仍应出庭。</div>
      </SoftReveal>
      <DocBadge icon={HeartHandshake} label="离婚案件" note="有诉讼代理人" accent="seal" style={{left: 300, top: 390, width: 470}} />
      <ContractArrow left={790} top={440} width={118} progress={link} accent="red" label="本人" />
      <DocBadge icon={UserRound} label="本人" note="原则上仍应出庭" accent="red" style={{left: 920, top: 390, width: 480}} />
      <div style={{position: 'absolute', left: 340, top: 640, width: 560, height: 170, backgroundColor: PALETTE.mintSoft, border: `2px solid ${PALETTE.mint}`}}>
        <div style={{position: 'absolute', left: 24, top: 22, display: 'flex', alignItems: 'center', gap: 12}}>
          <UserX size={32} strokeWidth={1.9} color={PALETTE.mint} />
          <div style={{...baseTextStyle, fontSize: 23, fontWeight: 800, color: PALETTE.mint}}>例外一：本人不能表达意思</div>
        </div>
        <div style={{position: 'absolute', left: 24, top: 96, color: PALETTE.ink, fontSize: 22}}>→ 可以不出庭</div>
      </div>
      <div style={{position: 'absolute', left: 980, top: 640, width: 600, height: 170, backgroundColor: PALETTE.mintSoft, border: `2px solid ${PALETTE.mint}`}}>
        <div style={{position: 'absolute', left: 24, top: 22, display: 'flex', alignItems: 'center', gap: 12}}>
          <FileText size={32} strokeWidth={1.9} color={PALETTE.mint} />
          <div style={{...baseTextStyle, fontSize: 23, fontWeight: 800, color: PALETTE.mint}}>例外二：特殊情况无法出庭</div>
        </div>
        <div style={{position: 'absolute', left: 24, top: 96, color: PALETTE.ink, fontSize: 22}}>→ 必须提交<Keyword accent="mint">书面意见</Keyword></div>
      </div>
      <VerdictBar delay={196} style={{left: 360, right: 360, top: 884}}>有代理人 ≠ 本人可不出庭（离婚案件）</VerdictBar>
    </div>
  );
};
