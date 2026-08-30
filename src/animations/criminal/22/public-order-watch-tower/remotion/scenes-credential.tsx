import {Ban, Building2, Drama, FileText, FileX, Fingerprint, Gavel, UserX} from 'lucide-react';
import {C, Enter, IconChip, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const CredentialForgeBenchScene = () => {
  /* data-final-knowledge="credential-panel" data-final-knowledge="imposter-panel" */
  return (
    <Shell code="02" kicker="第一节 · 证件犯罪与招摇撞骗" title="公文证件印章犯罪·招摇撞骗罪">
      <div
        data-layout="credential-forge-bench"
        data-visual-anchor="concept-icon"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="credential-panel,imposter-panel"
        data-focal-rule="document-crimes-split-by-document-type-impersonation-protects-public-trust"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="credential-panel" style={{position: 'absolute', left: 0, top: 0, width: 964, height: 744}}>
          <Panel tone={C.navy} watermark={<FileText size={170} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<FileText size={24} color={C.white} strokeWidth={2.2} />}>关于公文、证件、印章犯罪（第280条）</TabChip>
            <IconChip icon={<FileText size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="伪造、变造、买卖国家机关公文、证件、印章罪">
            </IconChip>
            <IconChip icon={<Building2 size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="伪造公司、企业、事业单位、人民团体印章罪">
            </IconChip>
            <IconChip icon={<Fingerprint size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="伪造、变造、买卖身份证件罪">
            </IconChip>
            <IconChip icon={<FileX size={26} color={C.white} strokeWidth={2.2} />} tone={C.torch} title="盗窃、抢夺、毁灭国家机关公文、证件、印章罪">
            </IconChip>
            <Enter delay={64}><SoftHi style={{fontSize: 18 }}>冒名顶替罪：盗用、冒用他人身份，顶替他人取得的高等学历教育入学资格、公务员录用资格等</SoftHi></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="imposter-panel" style={{position: 'absolute', left: 988, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.torch} watermark={<Drama size={170} color={C.torch} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.torch} icon={<Drama size={24} color={C.white} strokeWidth={2.2} />}>招摇撞骗罪（第279条）</TabChip>
            <IconChip icon={<UserX size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="冒充国家机关工作人员：">
              不包括国企事业单位人员、高干子弟；此种冒充彼种、职务低冒充职务高均可
            </IconChip>
            <IconChip icon={<Drama size={26} color={C.white} strokeWidth={2.2} />} tone={C.torch} title="招摇撞骗＝骗取付出：">
              骗取感情、服务、财物等，不要求骗钱；骗钱时同时构成诈骗罪，想象竞合，择一重罪论处
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="罪数：">
              冒充军警人员抢劫＝抢劫罪加重情节；冒充警察招摇撞骗＝本罪从重；冒充军人＝冒充军人招摇撞骗罪
            </IconChip>
            <Enter delay={64} style={{display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center'}}>
              <Ban size={20} color={C.crimson} />
              <span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>冒充学雷锋做好事不构成（法益＝国家机关工作人员的公众信赖感）</span>
            </Enter>
            <Enter delay={70}><ThinU>2023试题：穿林业部门制服盗伐林木，路人未付出东西→不构成本罪</ThinU></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
