import {Building2, Eye, FileText, Hand, Scale, Target, Users} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const EmbezzlementElementsScene = () => {
  /* data-final-knowledge="formula-strip" data-final-knowledge="subject-panel" data-final-knowledge="conduct-panel" */
  return (
    <Shell code="01" kicker="第一节 · 贪污罪" title="贪污罪·构成要件">
      <div
        data-layout="embezzlement-elements-atlas"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="formula-strip,subject-panel,conduct-panel"
        data-focal-rule="embezzlement-equals-property-act-plus-official-identity-public-property-and-duty-advantage"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="formula-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 132}}>
          <Panel tone={C.gold} watermark={<Scale size={100} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 18px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.gold} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>贪污罪＝A＋B</TabChip>
            <div style={{display: 'flex', gap: 14, flexWrap: 'wrap', fontSize: 20, fontWeight: 850}}>
              <SoftHi style={{fontSize: 19 }}>A＝实行行为（侵占罪、盗窃罪、诈骗罪）</SoftHi>
              <SoftHi style={{fontSize: 19 }}>B1＝行为主体：国家工作人员</SoftHi>
              <SoftHi style={{fontSize: 19 }}>B2＝行为对象：公共财物</SoftHi>
              <SoftHi style={{fontSize: 19 }}>B3＝行为方式：利用职务便利</SoftHi>
            </div>
          </Panel>
        </Enter>
        <Enter delay={18} marker="subject-panel" style={{position: 'absolute', left: 0, top: 156, width: 1020, height: 552}}>
          <Panel tone={C.indigo} watermark={<Users size={170} color={C.indigo} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.indigo} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>行为主体＝国家工作人员（依法从事公务）·公司企业中四类人</TabChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="一类：">
              国有企业中从事公务的人员
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="二类：">
              国有企业委派到非国有单位从事公务的人员
            </IconChip>
            <IconChip icon={<Building2 size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="三类：">
              国有控股、参股公司中，经国有公司提名或批准，代表国有公司从事管理工作的人员
            </IconChip>
            <IconChip icon={<FileText size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="四类：">
              受国家单位委托管理、经营国有资产的人员（拟制为国家工作人员；挪用公款罪无此拟制，不适用）
            </IconChip>
            <Enter delay={56}><ThinU>伪造国家机关公文证件担任国家工作人员，可以成为贪污贿赂犯罪主体</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="conduct-panel" style={{position: 'absolute', left: 1044, right: 0, top: 156, bottom: 0}}>
          <Panel tone={C.rouge} watermark={<Hand size={160} color={C.rouge} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.rouge} icon={<Hand size={24} color={C.white} strokeWidth={2.2} />}>行为方式与实行行为</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.indigo} title="利用职务便利：">
              实质利用（职权发挥实质影响力）；形式利用（熟悉环境、接近目标、进入场所）不是
            </IconChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.rouge} title="侵吞：">
              将单位所有、自己依职权占有的财物变成自己所有
            </IconChip>
            <IconChip icon={<Eye size={26} color={C.white} strokeWidth={2.2} />} tone={C.patina} title="窃取、骗取：">
              利用职务便利窃取、骗取公共财物
            </IconChip>
            <IconChip icon={<Target size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="主观＝故意＋非法占有目的：">
              包括为自己占有，也包括为第三人占有；将公家财物送人也构成贪污罪
            </IconChip>
            <Enter delay={64}><Neg size={19}>职务不包括纯粹的体力劳动</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
