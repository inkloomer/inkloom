import type {ReactNode} from 'react';
import {Ban, BookOpen, Brain, Car, Coins, Eye, GraduationCap, Handshake, Scale, Store, Users, Wrench} from 'lucide-react';
import {C, Chip, Enter, IconChip, LabelBlock, Mark, Neg, Panel, Shell, SoftHi, Stamp, ThinU} from './kit';

const Totem = ({children}: {children: ReactNode}) => <span style={{position: 'absolute', right: -14, bottom: -18, opacity: 0.09, pointerEvents: 'none'}}>{children}</span>;

export const PsychologicalHelpScene = () => (
  <Shell code="07" title="心理性帮助与主观红线">
    <div data-layout="dual-channel-help-boards" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="physical-versus-psychic-channel,intent-redline-rows" data-focal-rule="help-intent-must-be-deliberate-promotion" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="channel-board" */}
      <Panel watermark={<Handshake size={180} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 876, height: 340, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
        <Enter delay={2}><LabelBlock size={22} color={C.ember}>帮助行为的两种方式</LabelBlock></Enter>
        <IconChip icon={<Wrench size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="物理性帮助：">提供工具等有形促进</IconChip>
        <IconChip icon={<Handshake size={26} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="心理性帮助：">对正犯产生心理上的促进作用</IconChip>
        <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="杀人悬赏案：">"杀丙奖5万" → 心理性帮助 → 故意杀人罪帮助犯<Chip tone="pine" style={{fontSize: 15}}>既遂</Chip></IconChip>
        <IconChip icon={<Eye size={26} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="望风的双重作用：">心理＝让乙安心盗窃；物理＝借故拖延主人进屋</IconChip>
      </Panel>

      <div data-final-knowledge="stakes-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 340}}>
        <Panel tone={C.pine} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={8}><LabelBlock size={22} color={C.pine}>双保险 · 三情形定性</LabelBlock></Enter>
          <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="备而不用：">甲先用自己的钥匙开门窃得 → 乙的物理帮助未用，但有心理性帮助 → <Chip tone="pine" style={{fontSize: 15}}>帮助犯既遂</Chip></IconChip>
          <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="弃而不用：">乙的钥匙打不开，甲用自己的钥匙 → 物理心理皆无 → <Chip tone="alert" style={{fontSize: 15}}>未遂</Chip>（不构成既遂）</IconChip>
          <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="有用：">甲用乙的钥匙开门窃得 → 实际<ThinU color={C.ember}>物理性帮助</ThinU> → <Chip tone="pine" style={{fontSize: 15}}>帮助犯既遂</Chip></IconChip>
        </Panel>
      </div>

      <div data-final-knowledge="redline-board" style={{position: 'absolute', left: 0, top: 356, width: 876, height: 388}}>
        <Panel tone={C.alert} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={16} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Brain size={22} color={C.alert} />
            <LabelBlock size={21} color={C.alert}>主观红线 · 必须帮助故意</LabelBlock>
          </Enter>
          <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="借枪打猎案：">乙谎称打猎借枪杀人，甲疏忽大意出借 → 客观有帮助、主观无故意 → <Neg size={16}>不构成帮助犯</Neg></IconChip>
          <IconChip icon={<GraduationCap size={24} color={C.paper} strokeWidth={2.2} />} tone={C.dusk} title="2017·7 望风杀人案：">乙不知情帮"盗窃"望风 → 不构成杀人帮助犯（无杀人故意）、不构成盗窃帮助犯（无盗窃行为）→ 构成<Chip tone="dusk" style={{fontSize: 14}}>非法侵入住宅罪帮助犯</Chip></IconChip>
          <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="共谋抢劫实际盗窃：">乙只有帮助抢劫的故意，可<ThinU color={C.pine}>包容评价</ThinU>为帮助盗窃的故意 → 盗窃罪帮助犯既遂</IconChip>
          <IconChip icon={<Car size={24} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="借车给醉驾：">对危险驾驶罪（故意）＝帮助犯；对交通肇事罪＝管理过失另构成本罪，<Neg size={15}>不能说交通肇事罪的帮助犯</Neg></IconChip>
        </Panel>
      </div>

      <div data-final-knowledge="quiz-strip" style={{position: 'absolute', left: 900, top: 356, width: 876, height: 388}}>
        <Panel tone={C.dusk} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
          <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <Users size={22} color={C.dusk} />
            <LabelBlock size={21} color={C.dusk}>四大角色的主观要件 · 都要求故意</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={38} style={{fontSize: 18, fontWeight: 800}}>帮助犯 · 教唆犯 · 间接正犯 · 共同正犯 → <SoftHi style={{fontSize: 17}}>一律要求故意</SoftHi></Enter>
            <Enter delay={50} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>教唆他人醉驾轧死人 → 甲＝交通肇事罪，<Neg size={16}>不能称交通肇事罪的教唆犯</Neg></Enter>
            <Enter delay={62} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>医生骗护士打毒针 → 护士＝医疗事故罪；医生＝<Chip tone="ember" style={{fontSize: 14}}>故意杀人罪的间接正犯</Chip></Enter>
            <Enter delay={74} style={{fontSize: 17, fontWeight: 700, color: C.inkSoft}}>共同过失打死人 → 多数说：各自<Chip tone="dusk" style={{fontSize: 14}}>过失致人死亡罪的单独正犯</Chip></Enter>
            <Enter delay={86} style={{fontSize: 18, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8}}><BookOpen size={18} color={C.dusk} />记忆锚：故意犯罪才有"角色"，过失犯罪只有<Stamp delay={92} tone="dusk">单独正犯</Stamp></Enter>
          </div>
        </Panel>
      </div>
    </div>
  </Shell>
);

export const NeutralHelpConductScene = () => (
  <Shell code="08" title="中立的帮助行为">
    <div data-layout="neutrality-two-axis-bay" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="knowing-plus-urgent-axes,trade-exception-rows" data-focal-rule="neutral-conduct-convicts-only-when-knowing-and-urgently-boosting" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      {/* data-final-knowledge="neutrality-gates-board" */}
      <Panel watermark={<Eye size={180} color={C.ember} strokeWidth={1.5} />} style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 128, padding: '10px 20px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
        <Enter delay={2} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <Eye size={24} color={C.ember} />
          <LabelBlock size={22} color={C.ember}>中立的帮助行为 · 构成帮助犯的两个维度</LabelBlock>
          <Chip tone="ember" style={{fontSize: 18}}>主观：是否明知对方在犯罪</Chip>
          <Chip tone="pine" style={{fontSize: 18}}>客观：是否起实质且<ThinU color={C.paper}>紧迫</ThinU>的促进作用</Chip>
        </Enter>
      </Panel>

      <div data-final-knowledge="example-rows-board" style={{position: 'absolute', left: 0, top: 144, width: 1030, height: 600}}>
        <Panel tone={C.dusk} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9, justifyContent: 'center'}}>
          <Enter delay={14}><LabelBlock size={21} color={C.dusk}>三类经典例证</LabelBlock></Enter>
          <IconChip icon={<Car size={26} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="出租车运送抢劫犯：">司机明知仍运送 → 有实质且紧迫的促进 → <Chip tone="alert" style={{fontSize: 15}}>抢劫罪帮助犯</Chip></IconChip>
          <IconChip icon={<Store size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="送盒饭案：">每天给赌场送盒饭 → 无实质性帮助 → <Neg size={17}>不构成</Neg>开设赌场罪帮助犯</IconChip>
          <IconChip icon={<Coins size={26} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="买老鼠药案：">店主猜出毒妻仍出售，两天后才实施 → 无紧迫性 → <Neg size={17}>不构成帮助犯</Neg></IconChip>
          <Enter delay={62} style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>缺"明知"或缺"实质·紧迫"，日常交易行为就保持中立</Enter>
        </Panel>
      </div>

      <div data-final-knowledge="quiz-rows-board" style={{position: 'absolute', left: 1054, top: 144, width: 722, height: 600}}>
        <Panel tone={C.ember} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
          <Enter delay={72} style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <GraduationCap size={20} color={C.ember} />
            <LabelBlock size={20} color={C.ember}>巩固三题</LabelBlock>
          </Enter>
          <IconChip icon={<Wrench size={24} color={C.paper} strokeWidth={2.2} />} tone={C.alert} title="2013·55 羊角锤案：">店员明知互殴仍递锤 → 明知＋实质紧迫 → 故意伤害罪帮助犯</IconChip>
          <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2} />} tone={C.pine} title="还钱贩毒案：">还钱是义务、无紧迫帮助 → 不构成贩卖毒品罪帮助犯（类比：还钱给潜逃者也不构成窝藏罪）</IconChip>
          <IconChip icon={<Wrench size={24} color={C.paper} strokeWidth={2.2} />} tone={C.ember} title="卖窃电设备案：">设备技术上不具中立性、具有<SoftHi style={{fontSize: 15}}>专用性</SoftHi> → 盗窃罪帮助犯</IconChip>
          <Enter delay={116} style={{fontSize: 16, fontWeight: 700, color: C.inkSoft, display: 'inline-flex', alignItems: 'center', gap: 8}}><Ban size={16} color={C.alert} />义务行为与缺乏紧迫性，是中立行为出罪的两大通道</Enter>
        </Panel>
      </div>
    </div>
  </Shell>
);
