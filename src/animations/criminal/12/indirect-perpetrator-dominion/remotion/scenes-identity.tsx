import type {ReactNode} from 'react';
import {BadgeCheck, BookOpen, Gavel, Hand, Link, Split, Users} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const StatutoryIdentityCaseScene = () => (
  <Shell code="05" title="法定身份·虐囚案">
    <div data-layout="dual-lens-identity-case" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="dual-lens-role-analysis,imagination-concurrent-verdict" data-focal-rule="office-holder-dominates-through-statute-not-fact" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><BadgeCheck size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="identity-model-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 104, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BadgeCheck size={24} color={C.kiteJade} />
          <LabelBlock size={23} color={C.kiteJade}>法定身份模型</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}><SoftHi style={{fontSize: 19}}>有身份者</SoftHi>利用无身份者 → 有身份者构成间接正犯</Enter>
        <Enter delay={26} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>支配力来源＝<ThinU color={C.kiteJade}>法律规定</ThinU></Enter>
      </div>

      <div data-final-knowledge="case-lens-board" style={{position: 'absolute', left: 0, top: 120, width: 1776, height: 320, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Enter delay={36} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BookOpen size={22} color={C.lineIndigo} />
          <LabelBlock size={22} color={C.lineIndigo}>虐囚案 · 监管人员甲教唆被监管人员乙殴打丙</LabelBlock>
        </Enter>
        <div style={{display: 'flex', gap: 16, flex: 1}}>
          <div style={{flex: 1, backgroundColor: C.kiteJadeSoft, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={48} style={{fontSize: 19, fontWeight: 900, color: C.kiteJade}}>乙的视角（无身份者）</Enter>
            <Enter delay={58} style={{marginTop: 6, fontSize: 17, fontWeight: 700}}>故意伤害罪：乙＝<Chip tone="jade" style={{fontSize: 15}}>实行犯</Chip>，甲＝教唆犯</Enter>
            <Enter delay={68} style={{marginTop: 6, fontSize: 17, fontWeight: 700}}>虐待被监管人罪：乙无身份不能实行，但可构成<Chip tone="paper" style={{fontSize: 15}}>帮助犯</Chip></Enter>
          </div>
          <div style={{flex: 1, backgroundColor: C.lineIndigoSoft, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={54} style={{fontSize: 19, fontWeight: 900, color: C.lineIndigo}}>甲的视角（有身份者）</Enter>
            <Enter delay={64} style={{marginTop: 6, fontSize: 17, fontWeight: 700}}>对乙无事实支配，本应定教唆犯</Enter>
            <Enter delay={74} style={{marginTop: 6, fontSize: 17, fontWeight: 700}}>但乙无身份无法实行 → 甲＝虐待被监管人罪<Chip tone="line" style={{fontSize: 15}}>间接正犯</Chip></Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="final-disposition-row" style={{position: 'absolute', left: 0, top: 456, width: 1776, height: 118, backgroundColor: C.paper, border: `3px solid ${C.apricot}`, borderRadius: 8, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={86} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Split size={24} color={C.apricot} />
          <LabelBlock size={22} color={C.apricot}>最终处理</LabelBlock>
        </Enter>
        <Enter delay={98} style={{fontSize: 20, fontWeight: 800}}>甲乙同时触犯两个罪 → <ThinU color={C.apricot}>想象竞合</ThinU>，<Stamp delay={106} tone="line">择一重罪论处</Stamp></Enter>
      </div>

      <div data-final-knowledge="modern-view-strip" style={{position: 'absolute', left: 0, top: 590, bottom: 0, right: 0, backgroundColor: C.kiteJadeSoft, border: `3px dashed ${C.kiteJade}`, borderRadius: 8, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={116} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Link size={22} color={C.kiteJade} />
          <LabelBlock size={21} color={C.kiteJade}>现代观点</LabelBlock>
        </Enter>
        <Enter delay={126} style={{fontSize: 18, fontWeight: 700}}>间接正犯也是正犯 → 有资格给自己配备<SoftHi style={{fontSize: 17}}>共犯</SoftHi></Enter>
        <Enter delay={136} style={{fontSize: 18, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={18} color={C.kiteJade} />间接正犯与被利用人<Stamp delay={142} tone="jade">可以构成共同犯罪</Stamp><Neg size={17}>早期"单独犯罪"说已被摈弃</Neg></Enter>
      </div>
    </div>
  </Shell>
);

export const AccessoryDependenceScene = () => (
  <Shell code="06" title="共犯从属性·两说">
    <div data-layout="two-theory-contrast" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="two-theory-contrast,no-result-acquittals" data-focal-rule="accessories-stand-on-the-perpetrator-shoulders" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Link size={250} color={C.lineIndigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="relation-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, backgroundColor: C.paper, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Hand size={24} color={C.lineIndigo} />
          <LabelBlock size={23} color={C.lineIndigo}>正犯与共犯的关系 · 共犯＝狭义＝教唆犯＋帮助犯</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>官方立场＝<SoftHi style={{fontSize: 19}}>共犯从属性说</SoftHi></Enter>
      </div>

      <div style={{position: 'absolute', left: 0, top: 112, width: 1776, height: 300, display: 'flex', gap: 18}}>
        <div data-final-knowledge="independence-card" style={{flex: 1, backgroundColor: C.paper, border: `3px dashed ${C.ghost}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={24}><LabelBlock size={22} color={C.inkSoft}>共犯独立性说</LabelBlock></Enter>
          <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Enter delay={36} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>定罪<ThinU>独立判断</ThinU>，不考虑实行者是否构成犯罪</Enter>
            <Enter delay={46} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>只要实施教唆·帮助行为 → 独立构成教唆犯·帮助犯（犯罪未遂）</Enter>
          </div>
        </div>
        <div data-final-knowledge="dependence-card" style={{flex: 1.25, backgroundColor: C.paper, border: `3px solid ${C.kiteJade}`, borderRadius: 8, padding: '12px 16px'}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Link size={22} color={C.kiteJade} />
            <LabelBlock size={22} color={C.kiteJade}>共犯从属性说（多数说）</LabelBlock>
          </Enter>
          <div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
            <Enter delay={42} style={{fontSize: 17, fontWeight: 700}}>实行者侵害法益有<SoftHi style={{fontSize: 16}}>直接性</SoftHi>；教唆·帮助只有<SoftHi style={{fontSize: 16}}>间接性</SoftHi></Enter>
            <Enter delay={52} style={{fontSize: 17, fontWeight: 700}}>教唆·帮助需借助实行者才能侵害法益</Enter>
            <Enter delay={62} style={{fontSize: 17, fontWeight: 800}}>实行行为缺位 → 无法益侵害危险 → <Neg size={17}>不构成犯罪</Neg></Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="no-result-cases-strip" style={{position: 'absolute', left: 0, right: 0, top: 428, bottom: 0, backgroundColor: C.lineIndigoSoft, border: `3px solid ${C.lineIndigo}`, borderRadius: 8, padding: '12px 22px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
          <Enter delay={76}><LabelBlock ink size={22}>从属性说的案例推演</LabelBlock></Enter>
          <Enter delay={86} style={{fontSize: 18, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8}}><Gavel size={18} color={C.lineIndigo} />教唆无果：乙假意应允实未去，骗甲说偷了 → 甲<Neg size={18}>不构成犯罪</Neg></Enter>
          <Enter delay={98} style={{fontSize: 18, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8}}><Gavel size={18} color={C.lineIndigo} />帮助无果：甲望风，乙回家睡觉 → 甲<Neg size={18}>不构成犯罪</Neg></Enter>
        </div>
        <Enter delay={110} style={{marginTop: 10, fontSize: 19, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 10}}>核心结论：实行者<Stamp delay={116} tone="jade">构成犯罪</Stamp>是教唆者·帮助者构成犯罪的前提（正犯主导 · 共犯从属）</Enter>
      </div>
    </div>
  </Shell>
);
