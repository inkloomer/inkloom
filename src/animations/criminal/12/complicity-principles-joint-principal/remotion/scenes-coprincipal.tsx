import type {ReactNode} from 'react';
import {BookOpen, Coins, Flag, Handshake, Link, Unlink, UserX, Users} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const CoPrincipalRequirementsScene = () => (
  <Shell code="05" title="共同正犯·成立条件">
    <div data-layout="requirement-case-pair" data-visual-anchor="flow-path" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation" data-visual-grammar="requirement-formula-strip,linked-versus-unlinked-cases" data-focal-rule="joint-principal-needs-concert-and-executory-conduct" data-focal-channels="icon,connector,contrast,enclosure" style={{position: 'absolute', inset: 0}}>
      <Totem><Users size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="requirement-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '10px 18px'}}>
        <Enter delay={2} style={{fontSize: 21, fontWeight: 900}}>成立条件＝通过<SoftHi style={{fontSize: 20}}>实行行为</SoftHi>，<SoftHi style={{fontSize: 20}}>一起</SoftHi>制造<ThinU color={C.poleRed}>违法事实</ThinU></Enter>
        <div style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Enter delay={16} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Chip tone="azurite" style={{fontSize: 19}}>客观要件：一起实施实行行为</Chip><Chip tone="paper" style={{fontSize: 18}}><Link size={16} color={C.azurite} />意思联络</Chip><Chip tone="paper" style={{fontSize: 18}}>实行行为</Chip></Enter>
          <Enter delay={30} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Chip tone="curtain" style={{fontSize: 19}}>主观要件：故意（多数说）</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="unlinked-case-card" style={{position: 'absolute', left: 0, top: 144, width: 876, height: 300, backgroundColor: C.paper, border: `3px dashed ${C.poleRed}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Unlink size={24} color={C.poleRed} />
          <LabelBlock size={22} color={C.poleRed}>没有意思联络 → 同时犯</LabelBlock>
        </Enter>
        <Enter delay={52} style={{marginTop: 10, fontSize: 19, fontWeight: 700}}><BookOpen size={18} color={C.indigo} style={{marginRight: 6, verticalAlign: -3 }} />甲乙互不知情，同时向丙开枪；甲击中，乙未击中</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={64} style={{fontSize: 19, fontWeight: 800}}>甲：故意杀人罪<Chip tone="azurite" style={{fontSize: 17}}>既遂</Chip></Enter>
          <Enter delay={74} style={{fontSize: 19, fontWeight: 800}}>乙：故意杀人罪<Chip tone="paper" style={{fontSize: 17}}>未遂</Chip></Enter>
          <Enter delay={84} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}><Neg size={18}>不成立共同犯罪，各自认定</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="bank-case-card" style={{position: 'absolute', left: 900, top: 144, width: 876, height: 300, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={46} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Link size={24} color={C.azurite} />
          <LabelBlock size={22} color={C.azurite}>有意思联络 → 共同正犯</LabelBlock>
        </Enter>
        <Enter delay={58} style={{marginTop: 10, fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8}}><Coins size={20} color={C.curtain} />抢银行案：甲乙共谋一起抢劫银行</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6}}>
          <Enter delay={70} style={{fontSize: 19, fontWeight: 700}}>甲持枪压制银行职员（实行行为）</Enter>
          <Enter delay={80} style={{fontSize: 19, fontWeight: 700}}>乙用麻袋装钱（实行行为）</Enter>
          <Enter delay={90} style={{fontSize: 19, fontWeight: 800}}>通过实行行为一起制造违法事实 → <Chip tone="azurite" style={{fontSize: 18}}>共同正犯</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="test-core-strip" style={{position: 'absolute', left: 0, right: 0, top: 460, bottom: 0, backgroundColor: C.curtainSoft, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={100}><LabelBlock ink size={23}>判断核心</LabelBlock></Enter>
        <Enter delay={110} style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Link size={20} color={C.azurite} />有联络＝一起干 → 连带</Enter>
        <Enter delay={120} style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Unlink size={20} color={C.poleRed} />无联络＝各干各的 → 同时犯</Enter>
        <Enter delay={130} style={{fontSize: 19, fontWeight: 700, color: C.inkSoft}}>核心标准＝是否具有意思联络</Enter>
      </div>
    </div>
  </Shell>
);

export const JointLiabilityRuleScene = () => (
  <Shell code="06" title="部分实行·全部负责">
    <div data-layout="liability-ledger-rows" data-visual-anchor="timeline-gate" data-text-treatments="chip,label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="all-liable-tally-rows,completed-two-ways" data-focal-rule="partial-execution-brings-full-liability-through-concert" data-focal-channels="icon,connector,contrast,locator" style={{position: 'absolute', inset: 0}}>
      <Totem><Flag size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="liability-head-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 112, backgroundColor: C.paper, border: `3px solid ${C.poleRed}`, borderRadius: 8, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 18}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={26} color={C.poleRed} />
          <LabelBlock size={24} color={C.poleRed}>法律后果 · 部分实行、全部负责</LabelBlock>
        </Enter>
        <Enter delay={14} style={{fontSize: 20, fontWeight: 800}}>一起性产生<SoftHi style={{fontSize: 19}}>连带性</SoftHi>：即使只有一部分正犯制造结果，全部正犯都要负责</Enter>
        <Enter delay={26} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>理由：意思联络 → 心理上<ThinU color={C.poleRed}>相互加持</ThinU>，形成合力</Enter>
      </div>

      <div data-final-knowledge="unshot-board" style={{position: 'absolute', left: 0, top: 128, width: 876, height: 300, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={36}><LabelBlock size={22} color={C.azurite}>未击中者也要负责</LabelBlock></Enter>
        <Enter delay={48} style={{marginTop: 10, fontSize: 19, fontWeight: 700}}>丙与同伙丁同时向王某开枪，丁击中致死，丙未击中</Enter>
        <Enter delay={60} style={{marginTop: 8, fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>丙对丁制造的<SoftHi style={{fontSize: 18}}>死亡结果</SoftHi>负责 → 也构成故意杀人罪<Chip tone="azurite" style={{fontSize: 18}}><Flag size={15} color={C.paper} />既遂</Chip></Enter>
      </div>

      <div data-final-knowledge="completed-meanings-board" style={{position: 'absolute', left: 900, top: 128, width: 876, height: 300, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={42}><LabelBlock size={22} color={C.azurite}>「既遂」的两种含义</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={54} style={{fontSize: 19, fontWeight: 800}}><Flag size={18} color={C.azurite} style={{marginRight: 6, verticalAlign: -3}} />① 自己亲力亲为制造了既遂结果</Enter>
          <Enter delay={64} style={{fontSize: 19, fontWeight: 800}}><Users size={18} color={C.azurite} style={{marginRight: 6, verticalAlign: -3}} />② 为共同犯罪人的既遂结果负责</Enter>
          <Enter delay={76} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>越狱案：乙逃出甲被抓 → 甲对乙的既遂负责＝既遂</Enter>
          <Enter delay={86} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>强奸案：乙奸淫成功甲未成 → 甲也构成既遂</Enter>
        </div>
      </div>

      <div data-final-knowledge="unlinked-fallback-strip" style={{position: 'absolute', left: 0, right: 0, top: 444, bottom: 0, backgroundColor: C.indigoSoft, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '12px 22px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
          <Enter delay={96}><LabelBlock ink size={23}>无联络时无法查明 → 存疑时有利于被告</LabelBlock></Enter>
          <Enter delay={106} style={{fontSize: 19, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Unlink size={19} color={C.poleRed} />故意的同时犯：只有一枪致命查不清 → 各自<Chip tone="paper" style={{fontSize: 17}}>未遂</Chip></Enter>
          <Enter delay={118} style={{fontSize: 19, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><UserX size={19} color={C.poleRed} />过失的同时犯：查不清 → 都<Neg size={19}>无罪</Neg></Enter>
        </div>
        <Enter delay={130} style={{marginTop: 10, fontSize: 19, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Link size={19} color={C.azurite} />有意思联络的无法查明：无须查明是谁打的 → 全部<Chip tone="azurite" style={{fontSize: 17}}>既遂</Chip></Enter>
      </div>
    </div>
  </Shell>
);
