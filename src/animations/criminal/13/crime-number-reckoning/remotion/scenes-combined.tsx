import {ArrowLeftRight, BrickWall, GraduationCap, Milestone, Zap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU, Ticket} from './kit';

export const CombinedSerialYardScene = () => (
  <Shell code="03" title="两个行为·结合犯·连续犯">
    <div data-layout="combined-serial-two-act-yard" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="combined-formula-strip,serial-three-rules" data-focal-rule="two-acts-combine-only-when-statute-says-so-otherwise-charge-separately" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <BrickWall size={130} color={C.ink} style={{position: 'absolute', left: 24, bottom: 330, opacity: 0.08}} />
      <div data-final-knowledge="stolen-car-banner" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 100, backgroundColor: C.coneSoft, border: `3px solid ${C.cone}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.cone} />
          <LabelBlock size={24} color={C.cone}>卖赃车案</LabelBlock>
        </Enter>
        <Enter delay={18} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>盗窃后谎称合法车正常价卖给乙 → 盗窃罪＋诈骗罪（乙花冤枉钱·新法益）→ <Ticket delay={24} tone="cone">数罪并罚</Ticket></Enter>
      </div>

      <div data-final-knowledge="combined-board" style={{position: 'absolute', left: 0, top: 124, width: 1050, height: 620, backgroundColor: C.white, border: `4px solid ${C.screen}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <BrickWall size={26} color={C.screen} />
          <LabelBlock size={24} color={C.screen}>结合犯 · 甲罪＋乙罪＝甲罪（乙罪被吞并·法定）</LabelBlock>
        </Enter>
        <Enter delay={40} style={{marginTop: 8, fontSize: 19, fontWeight: 700, color: C.inkSoft }}>拐卖小芳·控制并强奸后卖掉 → 只定拐卖妇女罪·强奸＝升格条件</Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={54}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>拐卖罪＋强奸罪 → 拐卖罪加重</Chip></Enter>
          <Enter delay={66}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>绑架罪＋故意杀人罪 / ＋故意伤害致重伤死亡 → 绑架罪加重</Chip></Enter>
          <Enter delay={78}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>组织运送偷越国边境·毒品犯罪＋妨害公务罪 → 前罪加重（其他罪＋妨害公务＝并罚）</Chip></Enter>
          <Enter delay={90}><Chip tone="screen" style={{fontSize: 19, whiteSpace: 'normal'}}>交通肇事罪＋因逃逸致人死亡 → 交通肇事罪加重</Chip></Enter>
        </div>
        <div data-final-knowledge="combined-vs-aggravate" style={{marginTop: 12, border: `3px dashed ${C.booth}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={102} style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><ArrowLeftRight size={20} color={C.booth} style={{flexShrink: 0}} />vs 加重犯：都是法定升格条件</Enter>
          <Enter delay={112} style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>加重犯＝一个行为（还原→想象竞合）；结合犯＝两个独立行为（还原→数罪并罚）</Enter>
        </div>
      </div>

      <div data-final-knowledge="serial-board" style={{position: 'absolute', left: 1074, top: 124, width: 702, height: 620, backgroundColor: C.white, border: `4px solid ${C.scaleYellow}`, borderRadius: 8, padding: '14px 20px'}}>
        <Enter delay={32} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={26} color={C.booth} />
          <LabelBlock size={24} color={C.booth}>连续犯 · 同一犯意·同性质数行为·同罪名</LabelBlock>
        </Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={48} style={{border: `3px solid ${C.screen}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.screen}}>法益可替代（财产·贪贿）→ 一罪·数额累计</div>
          </Enter>
          <Enter delay={62} style={{border: `3px solid ${C.cone}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, color: C.cone}}>法益人身专属（生命）→ 多数说数罪并罚</div>
          </Enter>
          <Enter delay={76} style={{border: `3px solid ${C.booth}`, borderRadius: 8, padding: '8px 12px'}}>
            <div style={{fontSize: 19, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8}}><Milestone size={20} color={C.booth} style={{flexShrink: 0}} />法条「多次」定一罪·两种身份</div>
            <div style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft }}>多次盗窃·抢夺·敲诈＝成立条件；多次抢劫＝法定刑升格条件</div>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);
