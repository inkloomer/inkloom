import {CheckCircle2, Clock, FileWarning, Gavel, GitMerge, Hand, Scale, Trash2} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const JusticeTestimonyHallScene = () => {
  /* data-final-knowledge="perjury-panel" data-final-knowledge="tamper-panel" */
  return (
    <Shell code="05" kicker="第二节 · 妨害司法罪" title="伪证·妨害作证·帮助毁灭伪造证据">
      <div
        data-layout="justice-testimony-hall"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="perjury-panel,tamper-panel"
        data-focal-rule="perjury-limited-to-criminal-procedure-tampering-covers-all-three-procedures"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="perjury-panel" style={{position: 'absolute', left: 0, top: 0, width: 964, height: 744}}>
          <Panel tone={C.navy} watermark={<FileWarning size={170} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<FileWarning size={24} color={C.white} strokeWidth={2.2} />}>伪证罪（第305条）</TabChip>
            <IconChip icon={<FileWarning size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="主体＝刑诉中的证人、鉴定人、记录人、翻译人：">
              “证人”扩大解释，包括被害人；不知道案情的人故意作伪证也构成
            </IconChip>
            <IconChip icon={<Clock size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="领域＝刑事诉讼：">
              从是否立案侦查到诉讼程序终结；内容＝与案件有重要关系的情节（定罪情节＋量刑情节）
            </IconChip>
            <IconChip icon={<CheckCircle2 size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="既遂＝作完伪证：">
              不要求使法官相信、作出错误判决（2023）
            </IconChip>
            <IconChip icon={<GitMerge size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="与诬告陷害罪的关系：">
              诬陷到底→诬告陷害罪与伪证罪并罚；落井下石型→视行为个数分别认定
            </IconChip>
            <Enter delay={72}><ThinU>司法人员要求丙作伪证：丙缺乏期待可能性；司法人员＝伪证罪教唆犯＋徇私枉法罪想象竞合</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="tamper-panel" style={{position: 'absolute', left: 988, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.torch} watermark={<Hand size={170} color={C.torch} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.torch} icon={<Hand size={24} color={C.white} strokeWidth={2.2} />}>妨害作证罪（第307条第1款）·帮助毁灭、伪造证据罪（第2款）</TabChip>
            <IconChip icon={<Hand size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="妨害作证＝阻止证人作证＋指使他人作伪证：">
              “作证”扩大解释：被害人陈述、鉴定意见、勘验检查笔录均算；主体一般，司法工作人员从重
            </IconChip>
            <IconChip icon={<Trash2 size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="帮助毁灭、伪造证据罪：">
              帮助当事人毁灭、伪造证据，情节严重；可诉讼前可诉讼后；领域多数说包括刑事、民事、行政诉讼
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="期待可能性：">
              本犯人以普通教唆手段指使他人帮助自己→不构成妨害作证罪；帮助者构成帮助伪造证据罪、包庇罪
            </IconChip>
            <Enter delay={70} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <SoftHi style={{fontSize: 18 }}>例：甲砸坏乙车后指使丙出具虚假修理费证明→丙＝帮助伪造证据罪＋包庇罪</SoftHi>
              <Neg size={18}>甲＝本犯人，不构成妨害作证罪</Neg>
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
