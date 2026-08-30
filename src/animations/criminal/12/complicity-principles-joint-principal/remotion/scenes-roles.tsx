import type {ReactNode} from 'react';
import {ArrowLeftRight, Ban, BookOpen, Coins, Crown, Hand, Handshake, Megaphone, Route, ShieldAlert, Target, User, UserCog, Users, Weight} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -38, bottom: -58, opacity: 0.08, display: 'inline-flex', pointerEvents: 'none'}}>{children}</span>;

export const RoleTaxonomyScene = () => (
  <Shell code="01" title="共同犯罪·四大角色总览">
    <div data-layout="four-role-quadrant-board" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="role-pair-quadrant,direct-indirect-contrast" data-focal-rule="perpetrator-centred-review-with-four-complicity-roles" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><Users size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 158}}>
        <div style={{position: 'absolute', left: 0, top: 0, width: 888, height: 26, display: 'flex', alignItems: 'center', gap: 10}}>
          <Enter delay={0}><Chip tone="azurite" style={{fontSize: 17}}>正犯两家</Chip></Enter>
          <Enter delay={0} style={{flex: 1, height: 2, backgroundColor: C.azurite, opacity: 0.4}} />
        </div>
        <div style={{position: 'absolute', left: 900, top: 0, width: 876, height: 26, display: 'flex', alignItems: 'center', gap: 10}}>
          <Enter delay={4}><Chip tone="curtain" style={{fontSize: 17}}>共犯两家</Chip></Enter>
          <Enter delay={4} style={{flex: 1, height: 2, backgroundColor: C.curtain, opacity: 0.6}} />
        </div>
        <div style={{position: 'absolute', left: 0, top: 34, width: 888, height: 124, display: 'flex', gap: 14}}>
          <div data-final-knowledge="roles-quadrant" style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={8} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <Users size={24} color={C.azurite} />
              <LabelBlock size={22} color={C.azurite}>共同正犯</LabelBlock>
            </Enter>
            <Enter delay={18} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>共谋并一起实行</Enter>
          </div>
          <div style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={14} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <UserCog size={24} color={C.azurite} />
              <LabelBlock size={22} color={C.azurite}>间接正犯</LabelBlock>
            </Enter>
            <Enter delay={24} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>利用他人·有支配力</Enter>
          </div>
        </div>
        <div style={{position: 'absolute', left: 900, top: 34, width: 876, height: 124, display: 'flex', gap: 14}}>
          <div style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <Megaphone size={24} color={C.azurite} />
              <LabelBlock size={22} color={C.azurite}>教唆犯</LabelBlock>
            </Enter>
            <Enter delay={30} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft}}>引起他人犯意</Enter>
          </div>
          <div style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <Handshake size={24} color={C.azurite} />
              <LabelBlock size={22} color={C.azurite}>帮助犯</LabelBlock>
            </Enter>
            <Enter delay={36} style={{marginTop: 6, fontSize: 17, fontWeight: 700, color: C.inkSoft }}>促进他人违法</Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="division-standard" style={{position: 'absolute', left: 0, top: 178, width: 876, height: 368, backgroundColor: C.paper, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={40}><LabelBlock size={23} color={C.indigo}>分工分类 · 区分标准＝对法益的侵害方式</LabelBlock></Enter>
        <Enter delay={52} style={{marginTop: 10, fontSize: 19, fontWeight: 800}}>狭义共犯＝<Chip tone="curtain" style={{fontSize: 18}}>教唆犯</Chip><Chip tone="curtain" style={{fontSize: 18}}>帮助犯</Chip>；正犯＝<ThinU>实行犯</ThinU>的简称</Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={64} style={{backgroundColor: C.azuriteSoft, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '8px 14px', fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <User size={20} color={C.azurite} />实行犯：
            <Chip tone="azurite" style={{fontSize: 18}}><Target size={16} color={C.paper} />直接性</Chip>
            <Chip tone="azurite" style={{fontSize: 18}}><Weight size={16} color={C.paper} />支配性</Chip>
          </Enter>
          <Enter delay={78} style={{backgroundColor: C.curtainSoft, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '8px 14px', fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
            <Megaphone size={20} color={C.azurite} />教唆·帮助犯：
            <Chip tone="paper" style={{fontSize: 18}}><Route size={16} color={C.azurite} />间接性（凭借实行犯起作用）</Chip>
            <Neg size={18}>缺乏支配性</Neg>
          </Enter>
        </div>
        <Enter delay={92} style={{marginTop: 12, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>广义共犯＝涵盖所有参与犯罪的人（含正犯）</Enter>
      </div>

      <div data-final-knowledge="review-order" style={{position: 'absolute', left: 900, top: 178, width: 876, height: 368, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 18px', display: 'flex', flexDirection: 'column'}}>
        <Enter delay={46}><LabelBlock size={23} color={C.azurite}>正确分析顺序 · 以正犯为中心</LabelBlock></Enter>
        <div style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 0}}>
          <Enter delay={58}><Chip tone="azurite" style={{fontSize: 20}}>① 先分析正犯</Chip></Enter>
          <Enter delay={66} style={{display: 'flex', alignItems: 'center'}}><span style={{display: 'block', width: 34, height: 0, borderTop: `5px solid ${C.indigo}`}} /><span style={{width: 0, height: 0, borderLeft: '11px solid ' + C.indigo, borderTop: '8px solid transparent', borderBottom: '8px solid transparent'}} /></Enter>
          <Enter delay={72}><Chip tone="curtain" style={{fontSize: 20}}>② 后分析共犯</Chip></Enter>
        </div>
        <Enter delay={86} style={{marginTop: 16, fontSize: 19, fontWeight: 800}}>树立<SoftHi style={{fontSize: 18}}>以正犯为中心</SoftHi>的观念：共犯的成立与量刑都挂靠正犯</Enter>
        <Enter delay={98} style={{marginTop: 10}}><Stamp delay={98} tone="azurite">先正犯 · 后共犯</Stamp></Enter>
      </div>

      <div data-final-knowledge="simplicity-strip" style={{position: 'absolute', left: 0, right: 0, top: 566, bottom: 0, backgroundColor: C.indigoSoft, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 16}}>
        <Enter delay={110}><LabelBlock ink size={23}>从共犯的有无看</LabelBlock></Enter>
        <Enter delay={120} style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.indigo} />简单共同犯罪＝只有共同正犯、缺少共犯</Enter>
        <Enter delay={130} style={{fontSize: 20, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><Handshake size={20} color={C.indigo} />复杂共同犯罪＝存在共犯（教唆犯·帮助犯）</Enter>
      </div>
    </div>
  </Shell>
);

export const PerpetratorVariantsScene = () => (
  <Shell code="02" title="正犯的两个维度·三类分类">
    <div data-layout="perpetrator-variant-columns" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,external-negation,stamp" data-visual-grammar="count-versus-mode-axes,facing-pair-exception-rows" data-focal-rule="indirect-perpetrator-dominates-without-directness" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <Totem><UserCog size={250} color={C.indigo} strokeWidth={1.3} /></Totem>
      <div data-final-knowledge="count-mode-strip" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 150, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '10px 18px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
          <Enter delay={2}><LabelBlock size={22} color={C.azurite}>从数量看</LabelBlock></Enter>
          <Enter delay={10} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><User size={20} color={C.indigo} /><Chip tone="paper" style={{fontSize: 19}}>单独正犯（一人单独抢劫）</Chip></Enter>
          <Enter delay={18} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Users size={20} color={C.indigo} /><Chip tone="azurite" style={{fontSize: 19}}>共同正犯（共谋一起暴力抢劫）</Chip></Enter>
        </div>
        <div style={{marginTop: 10, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
          <Enter delay={28}><LabelBlock size={22} color={C.azurite}>从方式看</LabelBlock></Enter>
          <Enter delay={36} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><Hand size={20} color={C.indigo} /><Chip tone="paper" style={{fontSize: 19}}>直接正犯（亲自实施实行行为）</Chip></Enter>
          <Enter delay={44} style={{display: 'inline-flex', alignItems: 'center', gap: 8}}><UserCog size={20} color={C.poleRed} /><Chip tone="poleRed" style={{fontSize: 19}}>间接正犯（利用他人·有支配力：指使7岁小孩盗窃）</Chip></Enter>
        </div>
      </div>

      <div data-final-knowledge="indirect-analysis" style={{position: 'absolute', left: 0, top: 166, width: 876, height: 270, backgroundColor: C.paper, border: `3px solid ${C.poleRed}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={54}><LabelBlock size={23} color={C.poleRed}>间接正犯辨析</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={66} style={{fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}>侵害属性：<Neg size={19}>无直接性</Neg> 但 <Chip tone="poleRed" style={{fontSize: 18}}><Weight size={15} color={C.paper} />有支配性</Chip></Enter>
          <Enter delay={78} style={{fontSize: 19, fontWeight: 700}}>对应概念＝<ThinU color={C.poleRed}>直接正犯</ThinU></Enter>
          <Enter delay={90}><Neg size={19}>说"间接正犯的对应概念是单独正犯"＝错误</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="role-effect-strip" style={{position: 'absolute', left: 900, top: 166, width: 876, height: 270, backgroundColor: C.paper, border: `3px solid ${C.indigo}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={60}><LabelBlock size={23} color={C.indigo}>作用分类 · 按作用大小</LabelBlock></Enter>
        <div style={{marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={72} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}><Crown size={22} color={C.curtain} />主犯（起主要作用）</Enter>
          <Enter delay={82} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}><User size={22} color={C.indigo} />从犯（起次要作用）</Enter>
          <Enter delay={92} style={{fontSize: 20, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 10}}><ShieldAlert size={22} color={C.poleRed} />胁从犯（被胁迫参加犯罪）</Enter>
        </div>
      </div>

      <div data-final-knowledge="structure-board" style={{position: 'absolute', left: 0, top: 452, width: 876, height: 292, backgroundColor: C.paper, border: `3px solid ${C.azurite}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={100}><LabelBlock size={23} color={C.azurite}>结构分类</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={112} style={{fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><User size={19} color={C.indigo} />任意共犯：一人能<SoftHi style={{fontSize: 18}}>单独实施</SoftHi>的罪由二人共同实施（故意杀人·盗窃）</Enter>
          <Enter delay={124} style={{fontSize: 19, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Users size={19} color={C.indigo} />必要共犯：<Chip tone="azurite" style={{fontSize: 17}}>必须二人以上共同实施</Chip>（聚众斗殴罪）</Enter>
          <Enter delay={136} style={{fontSize: 18, fontWeight: 700, color: C.inkSoft}}>范围：聚众共同犯罪 · 集团共同犯罪 · 一部分对向犯</Enter>
        </div>
      </div>

      <div data-final-knowledge="facing-pair-board" style={{position: 'absolute', left: 900, top: 452, width: 876, height: 292, backgroundColor: C.paper, border: `3px solid ${C.curtain}`, borderRadius: 8, padding: '12px 18px'}}>
        <Enter delay={106} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <ArrowLeftRight size={22} color={C.azurite} />
          <LabelBlock size={22} color={C.azurite}>对向犯认定（与必要共犯交叉重合）</LabelBlock>
        </Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={118} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Handshake size={18} color={C.azurite} />构成必要共犯：各有配偶而结婚＝<Chip tone="azurite" style={{fontSize: 16}}>重婚罪</Chip>；约定替考＝<Chip tone="azurite" style={{fontSize: 16}}>代替考试罪</Chip></Enter>
          <Enter delay={130} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Neg size={18}>片面对向犯只罚一方</Neg>：贩卖淫秽物品罪只罚卖者不罚买者</Enter>
          <Enter delay={142} style={{fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap'}}><Ban size={18} color={C.poleRed} />不知情不构成：银行卡塞入不知情官员家→甲=<Chip tone="poleRed" style={{fontSize: 16}}>行贿罪</Chip>，乙不构成受贿</Enter>
        </div>
      </div>
    </div>
  </Shell>
);
