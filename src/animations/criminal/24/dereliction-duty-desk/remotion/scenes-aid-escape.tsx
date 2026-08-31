import type {ReactNode} from 'react';
import {Building2, Footprints, Gavel, Landmark, Layers, Megaphone, ShieldCheck, Siren, Users} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, OfficialStamp, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const AidEscapeClassificationScene = () => {
  const Row = ({icon, tone, title, children}: {icon: ReactNode; tone: string; title: string; children: ReactNode}) => (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, backgroundColor: C.deskDeep, borderLeft: `6px solid ${tone}`, padding: '4px 12px'}}>
      <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
      <span style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
        <span style={{fontWeight: 950, color: tone, whiteSpace: 'nowrap'}}>{title}</span>
        {children}
      </span>
    </div>
  );
  const LedgerRow = ({delay, icon, tone, identity, action, verdict}: {delay: number; icon: ReactNode; tone: string; identity: string; action: string; verdict: ReactNode}) => (
    <Enter delay={delay}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.deskDeep, borderLeft: `6px solid ${tone}`, padding: '4px 12px'}}>
        <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
        <span style={{fontSize: 22, fontWeight: 950, color: tone, whiteSpace: 'nowrap'}}>{identity}</span>
        <span style={{fontSize: 22, fontWeight: 800, color: C.inkSoft, whiteSpace: 'nowrap'}}>{action}</span>
        <span style={{flex: 1}} />
        {verdict}
      </div>
    </Enter>
  );
  /* data-final-knowledge="aid-escape-panel" data-final-knowledge="subject-scope-panel" data-final-knowledge="classification-ledger" */
  return (
    <Shell code="04" kicker="第二节 · 帮助犯罪分子逃避处罚罪 · 主体分类" title="帮助犯罪分子逃避处罚罪·主体分类">
      <div
        data-layout="aid-escape-classification-board"
        data-visual-anchor="role-pair"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="aid-escape-panel,subject-scope-panel,classification-ledger"
        data-focal-rule="identity-of-the-state-agent-decides-which-crime-applies-between-aiding-escape-and-perversion-of-law"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 20}}
      >
        <div style={{display: 'flex', gap: 24, alignItems: 'stretch'}}>
        <Enter delay={6} marker="aid-escape-panel" style={{width: 880, flexShrink: 0}}>
          <Panel tone={C.seal} watermark={<Megaphone size={170} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.seal} icon={<Siren size={24} color={C.white} strokeWidth={2.2} />}>帮助犯罪分子逃避处罚罪（第417条）</TabChip>
            <Row icon={<Siren size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="主体＝">
              有查禁犯罪活动职责的国家机关工作人员
            </Row>
            <Row icon={<Megaphone size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="行为＝">
              向犯罪分子通风报信、提供便利
            </Row>
            <Row icon={<Footprints size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="帮助逃避＝">
              <Chip tone="steel">侦查</Chip>
              <Chip tone="steel">追诉</Chip>
              <Chip tone="steel">定罪</Chip>
              <Chip tone="steel">重罪重刑处罚</Chip>
              <Chip tone="steel">刑罚执行</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.steel}}>也即，帮助逃避受到刑事处罚</span>
            </Row>
            <Row icon={<Layers size={26} color={C.white} strokeWidth={2.2} />} tone={C.bronze} title="罪数＝想象竞合：">
              <Chip tone="white">窝藏罪</Chip>
              <Chip tone="white">帮助毁灭、伪造证据罪</Chip>
              <Chip tone="white">妨害作证罪</Chip>
              <Chip tone="white">掩饰、隐瞒犯罪所得罪（2017）</Chip>
            </Row>
          </Panel>
        </Enter>
        <Enter delay={18} marker="subject-scope-panel" style={{flex: 1, minWidth: 0}}>
          <Panel tone={C.steel} watermark={<Landmark size={170} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.steel} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>渎职罪主体范围</TabChip>
            <Row icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="徇私枉法罪主体＝">
              参与案件追诉、审理的司法工作人员
            </Row>
            <Row icon={<ShieldCheck size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="范围扩张：">
              <span style={{display: 'flex', flexDirection: 'column', gap: 4, fontWeight: 800}}>
                <span>监察机关中负责调查职务犯罪的人员，属于本罪主体</span>
                <span>海关中负责侦查走私犯罪的人员，属于本罪主体</span>
              </span>
            </Row>
            <Row icon={<Building2 size={26} color={C.white} strokeWidth={2.2} />} tone={C.bronze} title="主体身份不同，罪名不同：">
              <span style={{display: 'flex', flexDirection: 'column', gap: 4, fontWeight: 800}}>
                <span>国有公司、企业、事业单位人员失职罪</span>
                <span>国有公司、企业、事业单位人员滥用职权罪<span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>（第168条）</span></span>
              </span>
            </Row>
            <Enter delay={76}><SoftHi style={{fontSize: 22}}>以"集体研究"形式实施的渎职犯罪，追究负有责任的人员</SoftHi></Enter>
          </Panel>
        </Enter>
        </div>
        <Enter delay={44} marker="classification-ledger" style={{flex: 1, minHeight: 0}}>
          <Panel tone={C.bronze} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <TabChip tone={C.bronze} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>主体分类（高频考点）</TabChip>
              <Enter delay={64}><ThinU>两罪是交叉重合关系</ThinU></Enter>
              <span style={{flex: 1}} />
              <Enter delay={72}><OfficialStamp delay={72} tone="bronze">高频考点</OfficialStamp></Enter>
            </div>
            <LedgerRow
              delay={56}
              icon={<Users size={26} color={C.white} strokeWidth={2.2} />}
              tone={C.seal}
              identity="承办案件的司法工作人员"
              action="利用办案信息向犯罪人通风报信"
              verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><LabelBlock size={30} color={C.seal}>帮助犯罪分子逃避处罚罪＋徇私枉法罪</LabelBlock><Chip tone="bronze">想象竞合，择一重罪论处</Chip></span>}
            />
            <LedgerRow
              delay={66}
              icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />}
              tone={C.ward}
              identity="承办案件的司法工作人员"
              action="法官故意把有罪判成无罪"
              verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><LabelBlock size={30} color={C.steel}>仅徇私枉法罪</LabelBlock><Neg size={22}>不成立帮助犯罪分子逃避处罚罪</Neg></span>}
            />
            <LedgerRow
              delay={76}
              icon={<Siren size={26} color={C.white} strokeWidth={2.2} />}
              tone={C.pulse}
              identity="不承办案件，但负有查禁职责的司法工作人员"
              action="利用职权获取案件信息并通风报信"
              verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><LabelBlock size={30} color={C.pulse}>仅帮助犯罪分子逃避处罚罪</LabelBlock><Neg size={22}>不成立徇私枉法罪</Neg></span>}
            />
            <LedgerRow
              delay={86}
              icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />}
              tone={C.bronze}
              identity="其他负有查禁职责的国家机关工作人员"
              action="利用职权帮助犯罪人逃避处罚"
              verdict={<LabelBlock size={30} color={C.bronze}>帮助犯罪分子逃避处罚罪</LabelBlock>}
            />
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
