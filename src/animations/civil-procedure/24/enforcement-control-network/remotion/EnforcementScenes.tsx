import {Ban,BadgeCheck,Bell,Building2,Check,CircleDollarSign,Clock,Coins,Eye,FileText,FileX2,Flag,Gavel,Handshake,Home,Landmark,Lock,Mail,MapPin,Megaphone,Merge,MessageSquareWarning,Package,PauseCircle,Percent,RotateCcw,Scale,ScrollText,ShieldCheck,Split,Unlock,UserCheck,UserCog,UserRound,UserRoundX,UserX,Users} from 'lucide-react';
import {useCurrentFrame} from 'remotion';
import {C,Chip,Enter,IconChip,Mover,Panel,PanelTab,Rail,Seal,Shell,Soft,Under,prog} from './enforcement-shared';

const frameOf=()=>useCurrentFrame();

export const SettlementFormsConsequencesScene=()=> {
  const frame=frameOf();
  return <Shell code="24.6" title="执行和解：形式、后果与择一救济"><div
    data-layout="settlement-forms-consequences-panel-fork"
    data-visual-anchor="document-fork"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="three-forms-submit-court-counterparty-approval-recorded-in-notes,agreement-effects-suspension-and-release-of-seizure,fulfilled-means-execution-terminal-plus-separate-suit,breach-means-restore-original-execution-or-sue-on-agreement-but-choose-one"
    data-focal-rule="breach-fork-token-chooses-restore-or-sue-never-both"
    data-focal-channels="connector,contrast,enclosure,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="settlement-forms-effect" style={{position:'absolute',left:0,top:0,width:620,height:754}}>
      <Panel tone={C.red} watermark={<Handshake size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<Handshake size={24} color={C.paper} strokeWidth={2.2}/>}>执行和解 · 形式与法律效果</PanelTab>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',opacity:prog(frame,40,14)}}>
          <Chip tone={C.red}><Check size={18} color={C.red} strokeWidth={2.6}/>提交法院</Chip>
          <Chip tone={C.red}><Check size={18} color={C.red} strokeWidth={2.6}/>对方认可</Chip>
          <Chip tone={C.red}><Check size={18} color={C.red} strokeWidth={2.6}/>记入笔录</Chip>
          <span style={{fontSize:17,fontWeight:900,color:C.inkSoft,alignSelf:'center'}}>三种形式 · 具备其一</span>
        </div>
        <IconChip icon={<PauseCircle size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}><Soft color={C.gold}>裁定中止执行</Soft>，权利人可申请解除<Under color={C.gold} delay={120}>查封、扣押、冻结</Under></IconChip>
        <div style={{flex:'1 1 0',display:'grid',gap:10,opacity:prog(frame,110,14),alignContent:'stretch'}}>
          <span style={{fontSize:20,fontWeight:950,color:C.ink}}>执行中的三条禁线：</span>
          <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>执行中可以<Soft color={C.teal}>和解</Soft>，不允许<Soft color={C.teal}>调解</Soft></IconChip>
          <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>不得根据和解协议<Soft color={C.teal}>制作调解书</Soft></IconChip>
          <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>达成<Soft color={C.teal}>以物抵债</Soft>协议后，法院不得据此下达<Soft color={C.teal}>以物抵债裁定</Soft></IconChip>
        </div>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={260} tone={C.teal}>和解协议不是执行依据·不能申请执行和解协议</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={40} from="right" marker="settlement-fulfilled-terminal" style={{position:'absolute',left:644,top:0,width:1132,height:348}}>
      <Panel tone={C.gold} watermark={<Flag size={120} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.gold} icon={<Flag size={24} color={C.paper} strokeWidth={2.2}/>}>后果① 和解协议履行完毕</PanelTab>
        <IconChip icon={<Flag size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>法院裁定<Soft color={C.gold}>终结执行</Soft>——权利义务已经实现</IconChip>
        <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>因<Soft color={C.red}>迟延履行、瑕疵履行</Soft>遭受损害的，申请人可以向执行法院<Under color={C.red} delay={160}>另行提起诉讼</Under></IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={240} tone={C.red}>履行完毕→终结执行·损害另行起诉</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={80} from="right" marker="settlement-breach-election" style={{position:'absolute',left:644,top:372,width:1132,height:382}}>
      <Panel tone={C.ink} watermark={<RotateCcw size={120} color={C.ink} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.ink} icon={<MessageSquareWarning size={24} color={C.paper} strokeWidth={2.2}/>}>后果② 义务人拒不履行和解协议 · 二者择一</PanelTab>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,flex:1,opacity:prog(frame,150,16)}}>
          <div style={{border:`3px solid ${C.red}`,backgroundColor:C.paperDim,padding:'10px 14px',display:'flex',flexDirection:'column',gap:7}}>
            <span style={{display:'flex',alignItems:'center',gap:8,fontSize:20,fontWeight:950,color:C.red}}><RotateCcw size={20} color={C.red} strokeWidth={2.4}/>路① 申请恢复执行</span>
            <span style={{fontSize:18,fontWeight:850,lineHeight:1.5,color:C.ink}}>恢复对<Soft color={C.red}>原生效法律文书</Soft>的执行</span>
            <span style={{display:'flex',alignItems:'center',gap:7,fontSize:17,fontWeight:850,color:C.ink}}><Clock size={17} color={C.gold} strokeWidth={2.4}/>执行时效 <Soft color={C.gold}>2 年</Soft>·自和解协议约定履行期间<Soft color={C.gold}>最后一日</Soft>起算</span>
            <span style={{display:'flex',alignItems:'center',gap:7,fontSize:17,fontWeight:850,color:C.ink}}><Ban size={17} color={C.teal} strokeWidth={2.4}/>恢复执行后就和解协议起诉的，法院<Soft color={C.teal}>不予受理</Soft></span>
          </div>
          <div style={{border:`3px solid ${C.gold}`,backgroundColor:C.paperDim,padding:'10px 14px',display:'flex',flexDirection:'column',gap:7}}>
            <span style={{display:'flex',alignItems:'center',gap:8,fontSize:20,fontWeight:950,color:C.gold}}><Gavel size={20} color={C.gold} strokeWidth={2.4}/>路② 就和解协议起诉</span>
            <span style={{fontSize:18,fontWeight:850,lineHeight:1.5,color:C.ink}}>和解协议=普通民事合同·具有<Soft color={C.gold}>可诉性</Soft></span>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              <Chip tone={C.gold}>要求履行</Chip>
              <Chip tone={C.gold}>确认无效</Chip>
              <Chip tone={C.gold}>请求撤销</Chip>
            </div>
            <span style={{display:'flex',alignItems:'center',gap:7,fontSize:17,fontWeight:850,color:C.ink}}><MapPin size={17} color={C.red} strokeWidth={2.4}/>三种诉讼均由<Soft color={C.red}>执行法院</Soft>管辖</span>
          </div>
        </div>
        <div style={{marginTop:10,display:'flex',justifyContent:'center'}}><Seal delay={300} tone={C.red}>恢复执行 与 就协议起诉 · 二者只能择一</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const OutsideSettlementObjectionScene=()=> {
  const frame=frameOf();
  return <Shell code="24.7" title="执行外的和解与执行行为异议"><div
    data-layout="outside-settlement-objection-rail"
    data-visual-anchor="flow-path"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="agreement-without-court-submission-or-unapproved-keeps-execution-running,debtor-raises-conduct-objection,court-reviews-into-terminal-suspension-or-rejection"
    data-focal-rule="settlement-token-travels-into-conduct-objection-splitting-three-rulings"
    data-focal-channels="connector,motion,contrast,enclosure"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="outside-settlement-forms" style={{position:'absolute',left:0,top:0,width:1776,height:210}}>
      <Panel tone={C.gold} watermark={<FileText size={110} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',flexDirection:'column',gap:8}}>
        <PanelTab tone={C.gold} icon={<FileText size={24} color={C.paper} strokeWidth={2.2}/>}>执行外的和解 · 法院不知情</PanelTab>
        <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <Chip tone={C.gold}>当事人自行达成和解协议 · 未向法院提交</Chip>
          <Chip tone={C.gold}>一方向法院提交 · 对方当事人不予认可</Chip>
          <span style={{fontSize:18,fontWeight:950,color:C.ink}}>→ 法院不知道和解协议的存在，</span>
          <Seal delay={140} tone={C.red} size={19}>法院继续执行</Seal>
        </div>
      </Panel>
    </Enter>
    <Enter delay={50} from="up" marker="outside-settlement-objection-rulings" style={{position:'absolute',left:0,top:234,width:1776,height:520}}>
      <Panel tone={C.red} watermark={<MessageSquareWarning size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<MessageSquareWarning size={24} color={C.paper} strokeWidth={2.2}/>}>被执行人以达成和解协议为由 · 提出执行行为异议</PanelTab>
        <div style={{border:`2px dashed ${C.inkSoft}`,backgroundColor:C.paperDim,position:'relative',height:104,overflow:'hidden',opacity:prog(frame,90,14)}}>
          <Rail color={C.gold} delay={100} span={60} style={{position:'absolute',left:24,right:24,top:82,height:5}}/>
          <Mover delay={110} span={64} fromX={20} toX={1480} style={{position:'absolute',top:28,left:0}}>
            <Chip tone={C.red}><UserRound size={18} color={C.red} strokeWidth={2.4}/>和解协议已达成</Chip>
          </Mover>
          <span style={{position:'absolute',right:26,top:24,fontSize:18,fontWeight:950,color:C.ink}}>→ 对<Soft color={C.red}>法院的执行</Soft>提出异议 = <Under color={C.red} delay={200}>执行行为异议</Under></span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14,flex:1}}>
          {[
            {t:'① 已履行完毕',d:<span>权利义务已经实现 → 法院裁定<Soft color={C.gold}>执行终结</Soft></span>,tone:C.gold,op:170,icon:<Flag size={22} color={C.gold} strokeWidth={2.4}/>},
            {t:'② 需要等待',d:<span>履行期限尚未届满·条件尚未成就·正在履行 → 裁定<Soft color={C.gold}>中止执行</Soft></span>,tone:C.gold,op:220,icon:<PauseCircle size={22} color={C.gold} strokeWidth={2.4}/>},
            {t:'③ 有纠纷',d:<span>协议不成立·未生效·无效·拒不履行 → 裁定<Soft color={C.red}>驳回异议</Soft>·继续执行</span>,tone:C.red,op:270,icon:<Ban size={22} color={C.red} strokeWidth={2.4}/>},
          ].map((row)=> (
            <div key={row.t} style={{border:`3px solid ${row.tone}`,backgroundColor:C.paperDim,padding:'12px 16px',display:'flex',flexDirection:'column',gap:8,opacity:prog(frame,row.op,16)}}>
              <span style={{display:'flex',alignItems:'center',gap:9,fontSize:20,fontWeight:950,color:row.tone}}>{row.icon}{row.t}</span>
              <span style={{fontSize:18,fontWeight:850,lineHeight:1.55,color:C.ink}}>{row.d}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={330} tone={C.ink}>法院对执行行为异议的审查 · 只看履行情况</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const PartyChangeAndAdditionScene=()=> {
  const frame=frameOf();
  return <Shell code="24.8" title="变更、追加被执行人与两种救济"><div
    data-layout="party-change-two-lane-remedy-split"
    data-visual-anchor="comparison-axis"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="identity-lanes-only-need-status-so-review-by-higher-court,entity-lanes-need-substantive-conditions-so-separate-lawsuit,five-identity-cases-versus-four-entity-cases"
    data-focal-rule="two-lanes-split-by-whether-a-substantive-condition-must-be-judged"
    data-focal-channels="contrast,enclosure,icon,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="party-change-identity-lane" style={{position:'absolute',left:0,top:0,width:866,height:646}}>
      <Panel tone={C.red} watermark={<UserCheck size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.red} icon={<UserCheck size={24} color={C.paper} strokeWidth={2.2}/>}>身份型 · 只判断身份</PanelTab>
        <IconChip icon={<UserX size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>自然人<Soft color={C.red}>死亡·宣告死亡</Soft> → 遗产管理人·继承人·受遗赠人（在<Soft color={C.red}>遗产范围内</Soft>担责）</IconChip>
        <IconChip icon={<Merge size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>法人·非法人组织<Soft color={C.red}>合并</Soft> → 合并后存续或新设的组织</IconChip>
        <IconChip icon={<Split size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>法人·非法人组织<Soft color={C.red}>分立</Soft> → 分立后新设的组织</IconChip>
        <IconChip icon={<UserCog size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}><Soft color={C.red}>个人独资企业</Soft>不能清偿 → 出资人；个体工商户字号被执行的，直接执行经营者财产</IconChip>
        <IconChip icon={<Users size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}><Soft color={C.red}>普通合伙人</Soft>（合伙企业不能清偿）</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={300} tone={C.red}>对裁定不服 → 向上一级法院复议</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={40} from="right" marker="party-change-entity-lane" style={{position:'absolute',left:910,top:0,width:866,height:646}}>
      <Panel tone={C.gold} watermark={<Coins size={130} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.gold} icon={<Coins size={24} color={C.paper} strokeWidth={2.2}/>}>实体型 · 还要判断实体条件</PanelTab>
        <IconChip icon={<Coins size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}><Soft color={C.gold}>未足额出资</Soft>的有限合伙人（合伙企业不能清偿）</IconChip>
        <IconChip icon={<CircleDollarSign size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>营利法人不能清偿 → <Soft color={C.gold}>未缴纳·未足额出资·抽逃出资</Soft>的股东·出资人（在该范围内担责）</IconChip>
        <IconChip icon={<Building2 size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>一人公司不能清偿 → 股东<Soft color={C.gold}>不能证明公司财产独立</Soft>于自己的财产</IconChip>
        <IconChip icon={<FileX2 size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>公司<Soft color={C.gold}>未经清算即注销</Soft> → 有限公司股东·股份公司董事·控股股东</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={300} tone={C.gold}>实体纠纷 → 另行起诉解决</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={90} from="up" marker="party-change-remedy-fork" style={{position:'absolute',left:0,top:670,width:1776,height:84}}>
      <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:18,backgroundColor:C.paper,border:`3px solid ${C.ink}`,boxShadow:'6px 6px 0 #d89b2140,-6px -6px 0 #0a7a7320',clipPath:'polygon(0 0,94% 0,100% 12%,100% 100%,6% 100%,0 88%)',opacity:prog(frame,120,16)}}>
        <RefreshSealText/>
      </div>
    </Enter>
  </div></Shell>;
};

const RefreshSealText=()=> <span style={{display:'flex',alignItems:'center',gap:16,fontSize:24,fontWeight:950,color:C.ink}}>
  <span style={{display:'flex',alignItems:'center',gap:8,color:C.red}}><RefreshCwIcon/>只需判断身份 → 上级复议</span>
  <span style={{fontSize:21,color:C.inkSoft}}>｜</span>
  <span style={{display:'flex',alignItems:'center',gap:8,color:C.gold}}><GavelIcon/>身份 + 实体条件 → 另行起诉</span>
</span>;
const RefreshCwIcon=()=> <span style={{width:34,height:34,display:'grid',placeItems:'center',backgroundColor:C.red,color:C.paper,borderRadius:4}}><RotateCcw size={20} color={C.paper} strokeWidth={2.4}/></span>;
const GavelIcon=()=> <span style={{width:34,height:34,display:'grid',placeItems:'center',backgroundColor:C.gold,color:C.paper,borderRadius:4}}><Gavel size={20} color={C.paper} strokeWidth={2.4}/></span>;

export const ParticipationDistributionGateScene=()=> {
  const frame=frameOf();
  return <Shell code="24.9" title="参与分配的对象、条件与清偿"><div
    data-layout="participation-distribution-subject-condition-boundary"
    data-visual-anchor="boundary"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="citizens-and-organizations-only-legal-persons-excluded,four-conditions-money-claims-insufficient-assets-execution-window,priority-holders-claim-first-others-share-by-claim-ratio"
    data-focal-rule="distribution-gate-admits-citizens-with-money-claims-and-splits-by-ratio"
    data-focal-channels="enclosure,contrast,icon,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="distribution-subject-and-priority" style={{position:'absolute',left:0,top:0,width:620,height:754}}>
      <Panel tone={C.red} watermark={<Users size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<Users size={24} color={C.paper} strokeWidth={2.2}/>}>参与分配 · 适用对象</PanelTab>
        <IconChip icon={<Users size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}><Soft color={C.red}>公民</Soft>和<Soft color={C.red}>其他组织</Soft></IconChip>
        <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>对<Soft color={C.teal}>法人</Soft>不能参与分配</IconChip>
        <IconChip icon={<ShieldCheck size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>享有<Soft color={C.gold}>优先权·担保物权</Soft>的主体 → 可直接申请参与分配·主张<Under color={C.gold} delay={160}>优先受偿权</Under></IconChip>
        <IconChip icon={<Percent size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>清偿原则：各债权人按<Soft color={C.gold}>债权比例</Soft>受偿</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={280} tone={C.red}>公民·其他组织才适用参与分配</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={40} from="right" marker="distribution-four-conditions" style={{position:'absolute',left:644,top:0,width:1132,height:754}}>
      <Panel tone={C.gold} watermark={<FileText size={130} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',gap:9}}>
        <PanelTab tone={C.gold} icon={<FileText size={24} color={C.paper} strokeWidth={2.2}/>}>适用情形 · 同时满足四个条件</PanelTab>
        <IconChip icon={<FileText size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>① 多个债权人对<Soft color={C.gold}>被执行人</Soft>享有到期债权，且已取得<Soft color={C.gold}>执行依据</Soft></IconChip>
        <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>② 被执行人的财产<Soft color={C.gold}>不足以清偿</Soft>所有债权</IconChip>
        <IconChip icon={<CircleDollarSign size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>③ 债权为<Soft color={C.gold}>金钱债权</Soft>，或已转化为金钱请求权的债权</IconChip>
        <IconChip icon={<Clock size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>④ 在<Soft color={C.gold}>执行程序开始后</Soft>、被执行人的财产<Soft color={C.gold}>被执行完毕前</Soft>提出</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center',gap:14,opacity:prog(frame,240,16)}}>
          <Chip tone={C.red}>多债权人</Chip>
          <Chip tone={C.red}>资不抵债</Chip>
          <Chip tone={C.red}>金钱债权</Chip>
          <Chip tone={C.red}>执行完毕前</Chip>
        </div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const DistributionPlanObjectionSuitScene=()=> {
  const frame=frameOf();
  return <Shell code="24.10" title="分配方案异议与分配方案异议之诉"><div
    data-layout="distribution-plan-objection-correction-rail"
    data-visual-anchor="flow-path"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="court-drafts-plan-and-delivers-to-creditors-and-debtor,no-objection-means-distribute-as-planned,objection-means-corrected-plan-then-opposition-spawns-distribution-objection-suit"
    data-focal-rule="plan-token-runs-the-delivery-rail-and-forks-into-objection-correction-cycle"
    data-focal-channels="connector,motion,contrast,enclosure"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="distribution-plan-delivery" style={{position:'absolute',left:0,top:0,width:1776,height:224}}>
      <Panel tone={C.gold} watermark={<ScrollText size={110} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',flexDirection:'column',gap:8}}>
        <PanelTab tone={C.gold} icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2}/>}>分配程序 · 第一步</PanelTab>
        <div style={{border:`2px dashed ${C.inkSoft}`,backgroundColor:C.paperDim,position:'relative',height:96,overflow:'hidden'}}>
          <Rail color={C.gold} delay={80} span={60} style={{position:'absolute',left:24,right:24,top:76,height:5}}/>
          <Mover delay={90} span={62} fromX={20} toX={1420} style={{position:'absolute',top:22,left:0}}>
            <Chip tone={C.gold}><ScrollText size={18} color={C.gold} strokeWidth={2.4}/>法院制作分配方案</Chip>
          </Mover>
          <span style={{position:'absolute',right:26,top:20,fontSize:18,fontWeight:950,color:C.ink}}>→ 送达<Soft color={C.gold}>债权人、被执行人</Soft></span>
        </div>
      </Panel>
    </Enter>
    <Enter delay={50} from="left" marker="distribution-no-objection-path" style={{position:'absolute',left:0,top:248,width:866,height:506}}>
      <Panel tone={C.red} watermark={<BadgeCheck size={120} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2}/>}>无人提出异议</PanelTab>
        <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>债权人、被执行人<Soft color={C.red}>未提出异议</Soft></IconChip>
        <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>按<Under color={C.red} delay={160}>该方案</Under>进行分配</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={260} tone={C.red}>无异议 → 照方案分钱</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={80} from="right" marker="distribution-objection-suit-path" style={{position:'absolute',left:910,top:248,width:866,height:506}}>
      <Panel tone={C.ink} watermark={<Gavel size={120} color={C.ink} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.ink} icon={<MessageSquareWarning size={24} color={C.paper} strokeWidth={2.2}/>}>有人提出异议 · 修正与诉讼</PanelTab>
        <IconChip icon={<Mail size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>根据异议<Soft color={C.gold}>修正方案</Soft>，送达<Soft color={C.gold}>其他未提出异议</Soft>的当事人</IconChip>
        <IconChip icon={<BadgeCheck size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>未对修正后的方案提出异议 → 按<Soft color={C.red}>修正后的方案</Soft>分配</IconChip>
        <IconChip icon={<Gavel size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>提出<Soft color={C.gold}>反对意见</Soft> → 提起<Under color={C.gold} delay={220}>分配方案异议之诉</Under>：<Soft color={C.gold}>异议人</Soft>为原告·<Soft color={C.gold}>反对人</Soft>为被告</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={300} tone={C.ink}>执行不解决纠纷 · 有人反对即诉讼</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const MatureClaimNoticeForkScene=()=> {
  const frame=frameOf();
  return <Shell code="24.11" title="对到期债权的执行（代位申请执行）"><div
    data-layout="mature-claim-notice-three-outcome-fork"
    data-visual-anchor="document-fork"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="conditions-no-assets-plus-mature-claim-plus-application,third-party-fifteen-days-into-perform-object-or-face-enforcement,two-non-objections-and-one-shot-only"
    data-focal-rule="notice-token-forks-third-party-into-perform-object-or-enforcement"
    data-focal-channels="connector,motion,contrast,enclosure"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="up" marker="mature-claim-conditions" style={{position:'absolute',left:0,top:0,width:1776,height:150}}>
      <Panel tone={C.gold} watermark={<Bell size={100} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',flexDirection:'row',alignItems:'center',gap:16}}>
        <PanelTab tone={C.gold} icon={<Bell size={24} color={C.paper} strokeWidth={2.2}/>}>条件</PanelTab>
        <Chip tone={C.gold}>被执行人不能清偿债务</Chip>
        <Chip tone={C.gold}>但对第三人享有<Soft color={C.gold}>到期债权</Soft></Chip>
        <Chip tone={C.gold}>经<Soft color={C.gold}>申请执行人</Soft>或被执行人申请</Chip>
        <span style={{fontSize:18,fontWeight:950,color:C.ink,marginLeft:'auto'}}>→ 法院向第三人发出<Under color={C.gold} delay={120}>履行到期债务的通知</Under></span>
      </Panel>
    </Enter>
    <Enter delay={40} from="left" marker="mature-claim-three-outcomes" style={{position:'absolute',left:0,top:174,width:1132,height:400}}>
      <Panel tone={C.red} watermark={<MessageSquareWarning size={120} color={C.red} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.red} icon={<Clock size={24} color={C.paper} strokeWidth={2.2}/>}>第三人收到通知后 15 日内 · 三种情形</PanelTab>
        <IconChip icon={<Check size={22} color={C.paper} strokeWidth={2.6}/>} tone={C.gold}>① 向<Soft color={C.gold}>申请执行人</Soft>履行债务·并不得向被执行人清偿</IconChip>
        <IconChip icon={<Gavel size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>② 既不履行<Soft color={C.red}>又不提出异议</Soft> → 15日后法院裁定<Under color={C.red} delay={200}>强制执行</Under>该第三人</IconChip>
        <IconChip icon={<MessageSquareWarning size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>③ 提出<Soft color={C.gold}>异议</Soft>（书面·口头均可）→ 法院<Soft color={C.gold}>不能</Soft>对第三人强制执行，对该异议<Soft color={C.gold}>不审查</Soft></IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={280} tone={C.red}>提出异议即停 · 法院不审查</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={70} from="right" marker="mature-claim-non-objections" style={{position:'absolute',left:1156,top:174,width:620,height:400}}>
      <Panel tone={C.teal} watermark={<Ban size={120} color={C.teal} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.teal} icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>}>两种主张不构成异议</PanelTab>
        <IconChip icon={<Ban size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>自己<Soft color={C.teal}>没有履行能力</Soft></IconChip>
        <IconChip icon={<Ban size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>自己与申请人<Soft color={C.teal}>没有直接债权债务关系</Soft></IconChip>
        <IconChip icon={<Landmark size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}><Soft color={C.teal}>否认生效法律文书</Soft>确定的到期债权 → 法院不予支持</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={260} tone={C.teal}>不是有效异议 → 照样强制执行</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={100} from="up" marker="mature-claim-boundaries" style={{position:'absolute',left:0,top:598,width:1776,height:156}}>
      <div style={{height:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
        <Panel tone={C.gold} watermark={<AlertIcon/>} style={{height:'100%',flexDirection:'row',alignItems:'center',gap:14,padding:'12px 20px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:5}}>
            <span style={{fontSize:20,fontWeight:950,color:C.gold}}>擅自向被执行人履行</span>
            <span style={{fontSize:17,fontWeight:850,lineHeight:1.45,color:C.ink}}>造成已履行的财产不能追回的，第三人应在<Soft color={C.gold}>已履行财产范围内</Soft>与被执行人承担<Soft color={C.gold}>连带责任</Soft>，并可追究其<Soft color={C.gold}>妨碍执行</Soft>的责任</span>
          </div>
        </Panel>
        <Panel tone={C.teal} watermark={<OnceIcon/>} style={{height:'100%',flexDirection:'row',alignItems:'center',gap:14,padding:'12px 20px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:5}}>
            <span style={{fontSize:20,fontWeight:950,color:C.teal}}>第三人确无可供执行的财产</span>
            <span style={{fontSize:17,fontWeight:850,lineHeight:1.45,color:C.ink}}><Soft color={C.teal}>不得再代位执行</Soft>——对第三人的代位执行<Under color={C.teal} delay={260}>仅此一次</Under></span>
          </div>
        </Panel>
      </div>
    </Enter>
  </div></Shell>;
};

const AlertIcon=()=> <span style={{width:72,height:72,display:'grid',placeItems:'center',backgroundColor:C.gold,color:C.paper,borderRadius:4}}><MessageSquareWarning size={44} color={C.paper} strokeWidth={2}/></span>;
const OnceIcon=()=> <span style={{width:72,height:72,display:'grid',placeItems:'center',backgroundColor:C.teal,color:C.paper,borderRadius:4}}><Ban size={44} color={C.paper} strokeWidth={2}/></span>;

export const CoOwnedPropertyPartitionScene=()=> {
  const frame=frameOf();
  return <Shell code="24.12" title="对共有物的执行与析产"><div
    data-layout="co-owned-partition-agreement-lawsuit-branches"
    data-visual-anchor="flow-target"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="co-owned-property-first-seizable-then-partitioned,agreement-partition-needs-creditor-approval-and-releases-others-shares,partition-lawsuit-suspends-execution-and-never-sells-before-partition,real-property-exclusive-jurisdiction"
    data-focal-rule="seizure-token-splits-into-agreement-or-lawsuit-partition-before-any-auction"
    data-focal-channels="connector,contrast,enclosure,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="up" marker="co-owned-seizable-first" style={{position:'absolute',left:0,top:0,width:1776,height:164}}>
      <Panel tone={C.gold} watermark={<Lock size={100} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',flexDirection:'row',alignItems:'center',gap:16}}>
        <PanelTab tone={C.gold} icon={<Lock size={24} color={C.paper} strokeWidth={2.2}/>}>第一步 · 先查扣</PanelTab>
        <span style={{fontSize:21,fontWeight:900,color:C.ink}}>对<Soft color={C.gold}>被执行人与他人共有</Soft>的财产，法院可以<Under color={C.gold} delay={120}>查封、扣押、冻结</Under></span>
        <span style={{fontSize:18,fontWeight:950,color:C.inkSoft,marginLeft:'auto'}}>共有不妨碍查扣 · 分割另行解决</span>
      </Panel>
    </Enter>
    <Enter delay={40} from="left" marker="co-owned-agreement-partition" style={{position:'absolute',left:0,top:188,width:866,height:396}}>
      <Panel tone={C.red} watermark={<Handshake size={120} color={C.red} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.red} icon={<Handshake size={24} color={C.paper} strokeWidth={2.2}/>}>路① 协议分割</PanelTab>
        <IconChip icon={<UserCheck size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>共有人协议分割共有财产，并经<Soft color={C.red}>债权人认可</Soft> → 法院可以认定<Soft color={C.red}>有效</Soft></IconChip>
        <IconChip icon={<UserX size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>查扣冻的效力及于协议分割后<Soft color={C.gold}>被执行人份额内</Soft>的财产</IconChip>
        <IconChip icon={<Unlock size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>其他共有人份额内的查扣冻 → 法院裁定<Soft color={C.teal}>予以解除</Soft></IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={260} tone={C.red}>协议分割 · 债权人认可才有效</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={70} from="right" marker="co-owned-partition-lawsuit" style={{position:'absolute',left:910,top:188,width:866,height:396}}>
      <Panel tone={C.ink} watermark={<Gavel size={120} color={C.ink} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.ink} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2}/>}>路② 析产诉讼</PanelTab>
        <IconChip icon={<Gavel size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>共有人提起<Soft color={C.gold}>析产诉讼</Soft>，或<Soft color={C.gold}>申请执行人代位提起</Soft> → 法院应当<Soft color={C.gold}>准许</Soft></IconChip>
        <IconChip icon={<PauseCircle size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>诉讼期间<Soft color={C.gold}>中止</Soft>对该财产的执行</IconChip>
        <IconChip icon={<Ban size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>未析产前<Soft color={C.teal}>不能直接拍卖、变卖</Soft></IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={260} tone={C.ink}>析产是实体纠纷 · 执行不解决纠纷</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={100} from="up" marker="co-owned-partition-jurisdiction" style={{position:'absolute',left:0,top:608,width:1776,height:146}}>
      <Panel tone={C.teal} watermark={<MapPin size={100} color={C.teal} strokeWidth={1.6}/>} style={{height:'100%',flexDirection:'row',alignItems:'center',gap:16}}>
        <PanelTab tone={C.teal} icon={<MapPin size={24} color={C.paper} strokeWidth={2.2}/>}>析产诉讼的管辖</PanelTab>
        <IconChip icon={<Home size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>涉及<Soft color={C.gold}>不动产</Soft> → 不动产所在地法院<Soft color={C.gold}>专属管辖</Soft></IconChip>
        <IconChip icon={<MapPin size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>仅涉及<Soft color={C.red}>动产</Soft> → <Soft color={C.red}>被告住所地</Soft>一般地域管辖</IconChip>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const SpecificThingSubstituteScene=()=> {
  const frame=frameOf();
  return <Shell code="24.13" title="对特定物的执行与折价赔偿"><div
    data-layout="specific-thing-original-substitute-timeline"
    data-visual-anchor="timeline-gate"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="specific-thing-executes-the-original-thing-only,damage-or-loss-creates-substantive-compensation-dispute,agreement-or-lawsuit-then-execution-terminal-not-suspension"
    data-focal-rule="original-thing-gate-blocks-substitute-assets-until-agreement-or-lawsuit"
    data-focal-channels="connector,motion,contrast,enclosure"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="specific-thing-original-rule" style={{position:'absolute',left:0,top:0,width:620,height:754}}>
      <Panel tone={C.red} watermark={<Package size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<Package size={24} color={C.paper} strokeWidth={2.2}/>}>特定物 · 执行原物</PanelTab>
        <IconChip icon={<Package size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>执行标的物为<Soft color={C.red}>特定物</Soft> → 应当执行<Under color={C.red} delay={120}>原物</Under></IconChip>
        <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}><Soft color={C.teal}>不准</Soft>执行别的财产</IconChip>
        <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>原物<Soft color={C.gold}>毁损·灭失</Soft> → 涉及<Soft color={C.gold}>折价赔偿</Soft>问题</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={280} tone={C.red}>特定物 → 只执行原物</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={40} from="right" marker="specific-thing-compensation-dispute" style={{position:'absolute',left:644,top:0,width:1132,height:348}}>
      <Panel tone={C.gold} watermark={<Scale size={120} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.gold} icon={<Scale size={24} color={C.paper} strokeWidth={2.2}/>}>折价赔偿 · 实体纠纷</PanelTab>
        <IconChip icon={<Scale size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>折价赔偿属于<Soft color={C.gold}>实体权利义务纠纷</Soft>，执行<Soft color={C.gold}>不解决纠纷</Soft></IconChip>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,flex:1,opacity:prog(frame,150,16)}}>
          <div style={{border:`3px solid ${C.red}`,backgroundColor:C.paperDim,padding:'10px 14px',display:'flex',flexDirection:'column',gap:6}}>
            <span style={{display:'flex',alignItems:'center',gap:8,fontSize:20,fontWeight:950,color:C.red}}><Handshake size={20} color={C.red} strokeWidth={2.4}/>协议</span>
            <span style={{fontSize:17,fontWeight:850,lineHeight:1.5,color:C.ink}}>经<Soft color={C.red}>双方当事人同意</Soft>，可以<Soft color={C.red}>折价赔偿</Soft></span>
          </div>
          <div style={{border:`3px solid ${C.gold}`,backgroundColor:C.paperDim,padding:'10px 14px',display:'flex',flexDirection:'column',gap:6}}>
            <span style={{display:'flex',alignItems:'center',gap:8,fontSize:20,fontWeight:950,color:C.gold}}><Gavel size={20} color={C.gold} strokeWidth={2.4}/>诉讼</span>
            <span style={{fontSize:17,fontWeight:850,lineHeight:1.5,color:C.ink}}>不能协商一致的，申请人可以<Soft color={C.gold}>另行起诉</Soft></span>
          </div>
        </div>
      </Panel>
    </Enter>
    <Enter delay={80} from="right" marker="specific-thing-terminal-then-sue" style={{position:'absolute',left:644,top:372,width:1132,height:382}}>
      <Panel tone={C.ink} watermark={<Flag size={120} color={C.ink} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.ink} icon={<Flag size={24} color={C.paper} strokeWidth={2.2}/>}>选择诉讼后的执行处理</PanelTab>
        <IconChip icon={<Flag size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>法院应当裁定<Soft color={C.gold}>终结执行程序</Soft></IconChip>
        <IconChip icon={<Ban size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>是<Soft color={C.teal}>终结执行</Soft>，<Soft color={C.teal}>不是中止执行</Soft></IconChip>
        <IconChip icon={<MessageSquareWarning size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>执行<Soft color={C.red}>不能调解</Soft>——赔偿问题只能协议或诉讼解决</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={280} tone={C.ink}>起诉折价赔偿 → 终结执行 + 另行起诉</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const RetainedTitleExecutionScene=()=> {
  const frame=frameOf();
  return <Shell code="24.14" title="对保留所有权买卖标的物的执行"><div
    data-layout="retained-title-two-scenario-split"
    data-visual-anchor="comparison-axis"
    data-text-treatments="label-block,chip,stamp,external-negation"
    data-visual-grammar="debtor-sells-then-third-party-pays-court-full-balance-to-release-seizure,debtor-buys-then-registered-retention-gets-priority-and-takeback-uses-outsider-objection"
    data-focal-rule="retention-token-splits-seller-side-and-buyer-side-remedies"
    data-focal-channels="contrast,enclosure,icon,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="retained-title-sold-to-third-party" style={{position:'absolute',left:0,top:0,width:866,height:754}}>
      <Panel tone={C.red} watermark={<Coins size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.red} icon={<UserX size={24} color={C.paper} strokeWidth={2.2}/>}>情形一 被执行人将财产出卖给第三人</PanelTab>
        <IconChip icon={<Coins size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>第三人已支付<Soft color={C.red}>部分价款</Soft>并<Soft color={C.red}>实际占有</Soft>该财产，被执行人依约定<Soft color={C.red}>保留所有权</Soft></IconChip>
        <IconChip icon={<Lock size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>法院可以<Soft color={C.gold}>查封、扣押、冻结</Soft></IconChip>
        <IconChip icon={<Unlock size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>第三人要求继续履行合同 → 向<Soft color={C.gold}>法院</Soft>交付<Under color={C.gold} delay={200}>全部余款</Under>后，裁定解除查扣冻</IconChip>
        <IconChip icon={<Ban size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}><Soft color={C.teal}>不能向被执行人</Soft>交付余款——防止被执行人转移财产</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={300} tone={C.red}>余款交给法院 · 不给被执行人</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={40} from="right" marker="retained-title-bought-from-third-party" style={{position:'absolute',left:910,top:0,width:866,height:754}}>
      <Panel tone={C.gold} watermark={<ShieldCheck size={130} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.gold} icon={<Package size={24} color={C.paper} strokeWidth={2.2}/>}>情形二 被执行人购买第三人财产</PanelTab>
        <IconChip icon={<Coins size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>已支付<Soft color={C.gold}>部分价款</Soft>并实际占有，第三人依合同约定<Soft color={C.gold}>保留所有权</Soft></IconChip>
        <IconChip icon={<Lock size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>法院可以<Soft color={C.gold}>查封、扣押、冻结</Soft></IconChip>
        <IconChip icon={<Percent size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>保留所有权<Soft color={C.red}>已办理登记</Soft> → 第三人的剩余价款从该财产变价款中<Under color={C.red} delay={200}>优先支付</Under>；未登记则<Soft color={C.red}>不能优先</Soft></IconChip>
        <IconChip icon={<UserRoundX size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}><Soft color={C.teal}>案外人</Soft>主张<Soft color={C.teal}>取回该财产</Soft> → 对执行标的的主张 → 提出<Under color={C.teal} delay={260}>案外人对执行标的的异议</Under></IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={300} tone={C.gold}>登记才优先 · 取回走案外人异议</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const ApologyPublicationExecutionScene=()=> {
  const frame=frameOf();
  return <Shell code="24.15" title="赔礼道歉等判决的公告执行"><div
    data-layout="apology-publication-announcement-board"
    data-visual-anchor="concept-icon"
    data-text-treatments="label-block,chip,stamp,soft-highlight"
    data-visual-grammar="behavioral-duties-impact-reputation-apology,refusal-triggers-media-publication-or-judgment-disclosure-at-actor-expense"
    data-focal-rule="apology-token-publishes-on-media-and-charges-the-actor"
    data-focal-channels="icon,enclosure,contrast,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="left" marker="apology-behavioral-duties" style={{position:'absolute',left:0,top:0,width:866,height:754}}>
      <Panel tone={C.red} watermark={<Megaphone size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<MessageSquareWarning size={24} color={C.paper} strokeWidth={2.2}/>}>行为义务 · 拒不履行</PanelTab>
        <div style={{flex:'1 1 0',display:'flex',flexDirection:'column',gap:10,opacity:prog(frame,60,16)}}>
          <IconChip icon={<Eye size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}><Soft color={C.gold}>消除影响</Soft></IconChip>
          <IconChip icon={<BadgeCheck size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}><Soft color={C.gold}>恢复名誉</Soft></IconChip>
          <IconChip icon={<MessageSquareWarning size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}><Soft color={C.gold}>赔礼道歉</Soft></IconChip>
        </div>
        <IconChip icon={<Ban size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.teal}>行为人<Soft color={C.teal}>拒不履行</Soft>生效判决确定的上述义务</IconChip>
        <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>拒不履行的，法院可以<Soft color={C.red}>罚款、拘留</Soft>；构成犯罪的追究刑事责任</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={240} tone={C.red}>人身义务不直接强制 · 替代公告</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={40} from="right" marker="apology-publication-and-cost" style={{position:'absolute',left:910,top:0,width:866,height:754}}>
      <Panel tone={C.gold} watermark={<ScrollText size={130} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.gold} icon={<Megaphone size={24} color={C.paper} strokeWidth={2.2}/>}>法院的执行方式</PanelTab>
        <IconChip icon={<Megaphone size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>在媒体上<Under color={C.gold} delay={140}>发布公告</Under></IconChip>
        <IconChip icon={<ScrollText size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>公布<Soft color={C.gold}>生效裁判文书</Soft>主要内容</IconChip>
        <IconChip icon={<Coins size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>产生的费用由<Soft color={C.red}>行为人</Soft>负担；拒不承担的<Soft color={C.red}>强制执行</Soft></IconChip>
        <IconChip icon={<CircleDollarSign size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>赔礼道歉是<Soft color={C.gold}>非金钱义务</Soft> → 迟延履行时支付<Soft color={C.gold}>迟延履行金</Soft>，不是加倍债务利息</IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={280} tone={C.gold}>公告执行 · 费用行为人买单</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};

export const DelayedPerformanceMoneyScene=()=> {
  const frame=frameOf();
  return <Shell code="24.16" title="迟延履行利息与迟延履行金"><div
    data-layout="delayed-performance-money-other-fork"
    data-visual-anchor="document-fork"
    data-text-treatments="label-block,chip,stamp,soft-highlight"
    data-visual-grammar="money-duty-pays-double-delay-interest,other-duty-pays-delay-fine-double-loss-or-court-discretion"
    data-focal-rule="delay-token-forks-money-duty-and-other-duty-remedies"
    data-focal-channels="connector,contrast,icon,motion"
    style={{position:'absolute',inset:0}}>
    <Enter delay={4} from="up" marker="delayed-performance-premise" style={{position:'absolute',left:0,top:0,width:1776,height:140}}>
      <Panel tone={C.gold} watermark={<Clock size={100} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',flexDirection:'row',alignItems:'center',gap:16}}>
        <PanelTab tone={C.gold} icon={<Clock size={24} color={C.paper} strokeWidth={2.2}/>}>适用前提</PanelTab>
        <span style={{fontSize:22,fontWeight:900,color:C.ink}}>都针对<Under color={C.gold} delay={110}>迟延履行</Under>——<Soft color={C.gold}>逾期</Soft>才适用</span>
        <span style={{fontSize:18,fontWeight:950,color:C.inkSoft,marginLeft:'auto'}}>履行期内不产生</span>
      </Panel>
    </Enter>
    <Enter delay={40} from="left" marker="delayed-money-double-interest" style={{position:'absolute',left:0,top:164,width:866,height:590}}>
      <Panel tone={C.red} watermark={<CircleDollarSign size={130} color={C.red} strokeWidth={1.6}/>} style={{height:'100%'}}>
        <PanelTab tone={C.red} icon={<CircleDollarSign size={24} color={C.paper} strokeWidth={2.2}/>}>迟延履行金钱义务</PanelTab>
        <IconChip icon={<CircleDollarSign size={26} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>应当<Soft color={C.red}>加倍支付</Soft>迟延履行期间的<Under color={C.red} delay={160}>债务利息</Under></IconChip>
        <div style={{flex:'1 1 0',display:'grid',placeItems:'center',border:`4px solid ${C.red}`,backgroundColor:C.paperDim,clipPath:'polygon(0 0,94% 0,100% 12%,100% 100%,6% 100%,0 88%)',opacity:prog(frame,150,16)}}>
          <span style={{display:'flex',alignItems:'baseline',gap:14,fontWeight:900,color:C.red}}>
            <span style={{fontSize:66,letterSpacing:4}}>利息 ×2</span>
            <span style={{fontSize:24,color:C.ink}}>加倍支付迟延履行期间债务利息</span>
          </span>
        </div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',opacity:prog(frame,140,14)}}>
          <Chip tone={C.red}>金钱义务</Chip>
          <Chip tone={C.red}>加倍</Chip>
          <Chip tone={C.red}>迟延履行期间债务利息</Chip>
        </div>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={260} tone={C.red}>给钱迟了 → 利息加倍</Seal></div>
      </Panel>
    </Enter>
    <Enter delay={70} from="right" marker="delayed-other-duty-fine" style={{position:'absolute',left:910,top:164,width:866,height:590}}>
      <Panel tone={C.gold} watermark={<Gavel size={130} color={C.gold} strokeWidth={1.6}/>} style={{height:'100%',gap:8}}>
        <PanelTab tone={C.gold} icon={<Gavel size={24} color={C.paper} strokeWidth={2.2}/>}>迟延履行其他义务</PanelTab>
        <IconChip icon={<Gavel size={24} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}>应当支付<Soft color={C.gold}>迟延履行金</Soft></IconChip>
        <IconChip icon={<Percent size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.red}>给权利人<Soft color={C.red}>造成损失</Soft>的 → <Under color={C.red} delay={200}>双倍补偿</Under>损失</IconChip>
        <IconChip icon={<Scale size={22} color={C.paper} strokeWidth={2.2}/>} tone={C.gold}><Soft color={C.gold}>没有造成损失</Soft>的 → 由法院<Soft color={C.gold}>酌情确定</Soft></IconChip>
        <div style={{marginTop:'auto',display:'flex',justifyContent:'center'}}><Seal delay={280} tone={C.gold}>非金钱义务迟了 → 迟延履行金</Seal></div>
      </Panel>
    </Enter>
  </div></Shell>;
};
