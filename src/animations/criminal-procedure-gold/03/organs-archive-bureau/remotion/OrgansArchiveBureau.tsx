import {AbsoluteFill} from 'remotion';
import {Contact, Crown, Factory, FileCheck, GraduationCap, Landmark, LifeBuoy, SearchCheck, Siren, UserRound, Users} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const OrganHierarchyScene = () => (
  <Shell code="01" title="专门机关：两样上下级，一张职权单">
    <div data-layout="organ-hierarchy-lattice" data-visual-anchor="role-pair" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="hierarchy-contrast-pair,duty-chip-cluster" data-focal-rule="courts-supervise-their-lower-levels-while-procuratorates-lead-theirs-and-police-powers-are-all-statutory" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Landmark size={230} color={C.cream} strokeWidth={1.1} /></div>
      <div data-final-knowledge="organ-court-procuratorate-contrast" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 380, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Landmark size={30} color={C.steel} style={{flexShrink: 0}} />
          <LabelBlock color={C.steel} size={28}>法院 · 检察院 上下级</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>两样关系分开记</Chip>
        </Enter>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 12, flex: 1}}>
            <Landmark size={26} color={C.steel} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.cream}}>法院上下级</span>
            <SearchCheck size={24} color={C.steel} style={{flexShrink: 0}} />
            <Chip tone="steel" style={{fontSize: 23}}>监督关系</Chip>
          </Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12, flex: 1}}>
            <FileCheck size={26} color={C.oxblood} style={{flexShrink: 0}} />
            <span style={{fontSize: 24, fontWeight: 900, color: C.cream}}>检察院上下级</span>
            <Crown size={24} color={C.brass} style={{flexShrink: 0}} />
            <Chip tone="brass" style={{fontSize: 23}}>领导关系</Chip>
            <Neg size={22}>说成监督即错</Neg>
          </Enter>
        </div>
        <Enter delay={62} style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>2018年题 · 一字之差分两院</Enter>
      </div>
      <div data-final-knowledge="organ-procuratorate-internal" style={{position: 'absolute', left: 890, top: 0, width: 886, height: 380, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <FileCheck size={30} color={C.oxblood} style={{flexShrink: 0}} />
          <LabelBlock color={C.oxblood} size={28}>检察院内部权责</LabelBlock>
        </Enter>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={48} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="panel" style={{fontSize: 22}}>检察长统一领导</Chip>
            <Chip tone="panel" style={{fontSize: 22}}>检察官各司其职</Chip>
          </Enter>
          <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ThinU color={C.brass}>上级检察院</ThinU>
            <span style={{fontSize: 23, fontWeight: 850, color: C.cream}}>可撤销错误的</span>
            <Chip tone="oxblood" style={{fontSize: 22}}>不起诉决定</Chip>
          </Enter>
          <Enter delay={76} style={{fontSize: 22, fontWeight: 750, color: C.creamDim}}>检察一体：对上级的决定，下级照办</Enter>
        </div>
        <Enter delay={90} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>2019年题 · 内部关系两条</span>
        </Enter>
      </div>
      <div data-final-knowledge="organ-police-powers" style={{position: 'absolute', left: 0, top: 404, width: 1180, height: 340, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Siren size={30} color={C.moss} style={{flexShrink: 0}} />
          <LabelBlock color={C.moss} size={28}>公安机关的法定职权</LabelBlock>
          <span style={{flex: 1}} />
          <Stamp delay={116} tone="moss">ABCD 均正确</Stamp>
        </Enter>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
          <Enter delay={126} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="moss" style={{fontSize: 22}}>提意见</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>认为处分不当提出意见书</span>
          </Enter>
          <Enter delay={138} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="moss" style={{fontSize: 22}}>执行刑罚</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>余刑三个月以下由看守所代执行</span>
          </Enter>
          <Enter delay={150} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="moss" style={{fontSize: 22}}>协助监察</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>对监察机关的配合义务</span>
          </Enter>
          <Enter delay={162} style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="moss" style={{fontSize: 22}}>勘验延请</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>指派或聘请有专门知识的人</span>
          </Enter>
        </div>
        <Enter delay={176} style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>职权法定——出现即对号，勿挑刺</Enter>
      </div>
      <div data-final-knowledge="organ-memory-note" style={{position: 'absolute', left: 1204, top: 404, width: 572, height: 340, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={120} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LabelBlock color={C.brass} size={26}>记忆抓手</LabelBlock>
        </Enter>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Landmark size={22} color={C.steel} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 850, color: C.cream}}>法院——<SoftHi tone="steel" style={{fontSize: 22}}>监督</SoftHi></span>
          </Enter>
          <Enter delay={146} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <FileCheck size={22} color={C.oxblood} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 850, color: C.cream}}>检院——<SoftHi tone="brass" style={{fontSize: 22}}>领导</SoftHi></span>
          </Enter>
          <Enter delay={158} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Siren size={22} color={C.moss} style={{flexShrink: 0}} />
            <span style={{fontSize: 23, fontWeight: 850, color: C.cream}}>公安——<ThinU color={C.moss}>职权皆法定</ThinU></span>
          </Enter>
        </div>
        <Enter delay={170}><Chip tone="manila" style={{fontSize: 22}}>一句话：上监下领，公安全对</Chip></Enter>
      </div>
    </div>
  </Shell>
);

export const ParticipantSortingScene = () => (
  <Shell code="02" title="诉讼参与人：进围栏，再看交集">
    <div data-layout="participant-sorting-desk" data-visual-anchor="boundary" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="in-out-sorting-fence,role-intersection-pair" data-focal-rule="participants-are-the-enumerated-roles-and-only-the-prosecutorial-function-inside-participants-is-the-agent-ad-litem" data-focal-channels="icon,enclosure,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Users size={230} color={C.cream} strokeWidth={1.1} /></div>
      <div data-final-knowledge="participant-range-fence" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Users size={30} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock size={28}>诉讼参与人范围</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>清单式围栏</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.moss}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LabelBlock color={C.moss} size={24}>栏内 · 属于参与人</LabelBlock>
          </Enter>
          <Enter delay={42} style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
            <Chip tone="moss" style={{fontSize: 22}}>当事人</Chip>
            <Chip tone="moss" style={{fontSize: 22}}>法定代理人</Chip>
            <Chip tone="moss" style={{fontSize: 22}}>诉讼代理人</Chip>
            <Chip tone="moss" style={{fontSize: 22}}>辩护人</Chip>
            <Chip tone="moss" style={{fontSize: 22}}>证人</Chip>
            <Chip tone="moss" style={{fontSize: 22}}>鉴定人</Chip>
            <Chip tone="moss" style={{fontSize: 22}}>翻译人</Chip>
          </Enter>
        </div>
        <div style={{border: `3px dashed ${C.oxblood}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={60} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LabelBlock color={C.oxblood} size={24}>栏外 · 不属于</LabelBlock>
          </Enter>
          <Enter delay={72}><Neg size={22}>侦查人员（就取证瑕疵）说明情况</Neg></Enter>
          <Enter delay={82}><Neg size={22}>有专门知识的人（非鉴定人）出具意见</Neg></Enter>
        </div>
        <div style={{border: `3px solid ${C.brass}`, borderRadius: 10, padding: '12px 16px', backgroundColor: C.brassSoft}}>
          <Enter delay={98} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="manila" style={{fontSize: 22}}>有控诉职能</Chip>
            <span style={{fontSize: 25, fontWeight: 950, color: C.brass}}>∩</span>
            <Chip tone="manila" style={{fontSize: 22}}>属诉讼参与人</Chip>
            <Dash delay={110} style={{width: 44, borderTop: `4px solid ${C.brass}`}} />
            <Contact size={26} color={C.brass} style={{flexShrink: 0}} />
            <span style={{fontSize: 25, fontWeight: 950, color: C.brass}}>＝ 诉讼代理人</span>
          </Enter>
          <Enter delay={120} style={{marginTop: 8, fontSize: 22, fontWeight: 800, color: C.cream}}>双条件同时满足——单选直取诉讼代理人</Enter>
        </div>
        <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.brass} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>2016-2017年题 · 范围与交集各一题</span>
        </Enter>
      </div>
      <div data-final-knowledge="victim-rights-card" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 360, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <UserRound size={30} color={C.oxblood} style={{flexShrink: 0}} />
          <LabelBlock color={C.oxblood} size={28}>被害人的权利清单</LabelBlock>
          <span style={{flex: 1}} />
          <Chip tone="panel" style={{fontSize: 22}}>有无可分两列</Chip>
        </Enter>
        <div style={{display: 'flex', gap: 14}}>
          <div style={{flex: 1, border: `2px solid ${C.moss}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={56}><LabelBlock color={C.moss} size={22}>有权</LabelBlock></Enter>
            <Enter delay={66} style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              <Chip tone="moss" style={{fontSize: 22}}>申请抗诉</Chip>
              <Chip tone="moss" style={{fontSize: 22}}>申诉</Chip>
              <Chip tone="moss" style={{fontSize: 22}}>启动自诉</Chip>
            </Enter>
          </div>
          <div style={{flex: 1, border: `2px dashed ${C.oxblood}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={78}><LabelBlock color={C.oxblood} size={22}>无权</LabelBlock></Enter>
            <Enter delay={88} style={{display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start'}}>
              <Neg size={22}>撤回公诉</Neg>
              <Neg size={22}>提起上诉</Neg>
            </Enter>
          </div>
        </div>
        <Enter delay={100} style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>公诉未诉可转自诉；判决不服只能申请抗诉</Enter>
      </div>
      <div data-final-knowledge="suspect-rights-track" style={{position: 'absolute', left: 904, top: 384, width: 872, height: 360, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Enter delay={110} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <LifeBuoy size={30} color={C.steel} style={{flexShrink: 0}} />
          <LabelBlock color={C.steel} size={28}>嫌疑人的权利双轨</LabelBlock>
          <span style={{flex: 1}} />
          <ThinU color={C.brass}>看行为是否合法</ThinU>
        </Enter>
        <div style={{display: 'flex', gap: 14}}>
          <Enter delay={126} style={{flex: 1, border: `2px solid ${C.steel}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <Chip tone="steel" style={{fontSize: 23}}>针对合法行为</Chip>
            <span style={{fontSize: 24, fontWeight: 900, color: C.cream}}>防御性权利</span>
            <span style={{fontSize: 22, fontWeight: 750, color: C.creamDim}}>如辩护 · 拒证…正当对抗</span>
          </Enter>
          <Enter delay={140} style={{flex: 1, border: `2px solid ${C.brass}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <Chip tone="brass" style={{fontSize: 23}}>针对不合法行为</Chip>
            <span style={{fontSize: 24, fontWeight: 900, color: C.cream}}>救济性权利</span>
            <span style={{fontSize: 22, fontWeight: 750, color: C.creamDim}}>如申诉 · 控告…纠错救济</span>
          </Enter>
        </div>
        <Enter delay={154} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.steel} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>2020年题 · 归类看对象行为的合法性</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const UnitDefendantScene = () => (
  <Shell code="03" title="单位被告人：人格照自然人，代表人有讲究">
    <div data-layout="unit-defendant-ledger" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="rule-row-stack,representation-fork" data-focal-rule="the-unit-defendant-enjoys-natural-person-rights-and-its-representative-is-designated-by-the-procuratorate-never-a-directly-responsible-person" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.07, pointerEvents: 'none'}}><Contact size={230} color={C.cream} strokeWidth={1.1} /></div>
      <div data-final-knowledge="unit-personality-card" style={{position: 'absolute', left: 0, top: 0, width: 900, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Factory size={30} color={C.steel} style={{flexShrink: 0}} />
            <LabelBlock color={C.steel} size={28}>单位被告人的诉讼人格</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>四条硬规矩</Chip></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <LifeBuoy size={22} color={C.steel} style={{flexShrink: 0}} />
            <Chip tone="steel" style={{fontSize: 22}}>权利同自然人</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>辩护权 · 上诉权一项不少</span>
          </Enter>
          <Enter delay={42}><Neg size={22}>送达程序违法 ≠ 可以拒绝出庭辩护</Neg></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="brass" style={{fontSize: 22}}>破产未注销</Chip>
            <Dash delay={66} style={{width: 40, borderTop: `4px solid ${C.brass}`}} />
            <span style={{fontSize: 23, fontWeight: 850, color: C.cream}}><ThinU color={C.brass}>继续审理</ThinU></span>
          </Enter>
          <Enter delay={74}><Neg size={22}>宣告破产注销 ≠ 当然终止诉讼</Neg></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="oxblood" style={{fontSize: 22}}>缺席审判</Chip>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>仅限三类罪：贪污贿赂 · 危害国家安全 · 恐怖活动</span>
          </Enter>
          <Enter delay={100} style={{fontSize: 22, fontWeight: 750, color: C.creamDim}}>罪名单封闭——出圈即错</Enter>
        </div>
        <Enter delay={114} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.steel} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.creamDim}}>2021-2022年题 · 单位程序两题</span>
        </Enter>
      </div>
      <div data-final-knowledge="representative-fork-card" style={{position: 'absolute', left: 924, top: 0, width: 852, height: 744, backgroundColor: C.panel, border: `3px solid ${C.brass}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Contact size={30} color={C.brass} style={{flexShrink: 0}} />
            <LabelBlock color={C.brass} size={28}>诉讼代表人怎么定</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={40}><Chip tone="panel" style={{fontSize: 22}}>三分叉</Chip></Enter>
        </div>
        <div style={{border: `2px solid ${C.moss}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={54} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="moss" style={{fontSize: 22}}>法定代表人 / 负责人缺席</Chip>
            <Dash delay={64} style={{width: 36, borderTop: `4px solid ${C.moss}`}} />
            <span style={{fontSize: 23, fontWeight: 900, color: C.cream}}><ThinU color={C.moss}>检察院另行确定</ThinU></span>
          </Enter>
        </div>
        <div style={{border: `3px dashed ${C.oxblood}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={78}><Neg size={23}>直接责任人员不得担任诉讼代表人</Neg></Enter>
          <Enter delay={88} style={{fontSize: 22, fontWeight: 750, color: C.creamDim}}>又当运动员又当记录员——程序角色冲突</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={102} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Chip tone="steel" style={{fontSize: 22}}>代表人代表单位应诉</Chip>
            <Stamp delay={112} tone="steel">可以辩护</Stamp>
          </Enter>
          <Enter delay={120}><Neg size={22}>律师任代表人时 · 不得再兼任辩护人</Neg></Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
          <Enter delay={134} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <SoftHi tone="brass" style={{fontSize: 22}}>一句话</SoftHi>
            <span style={{fontSize: 22, fontWeight: 800, color: C.cream}}>检院确定 · 责任人回避 · 辩护不兼任</span>
          </Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const OrgansArchiveBureau = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-organ-hierarchy-lattice" {...SCENES.organHierarchyLattice}><OrganHierarchyScene /></TimelineSequence>
    <TimelineSequence name="02-participant-sorting-desk" {...SCENES.participantSortingDesk}><ParticipantSortingScene /></TimelineSequence>
    <TimelineSequence name="03-unit-defendant-ledger" {...SCENES.unitDefendantLedger}><UnitDefendantScene /></TimelineSequence>
  </AbsoluteFill>
);
