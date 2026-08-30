import {Ban, CheckCircle2, CircleX, GraduationCap, Repeat, Stamp, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, TabChip} from './kit';

export const NoticeFictionForkScene = () => {
  /* data-final-knowledge="test-strip" data-final-knowledge="notice-board" data-final-knowledge="notice-computer" data-final-knowledge="notice-embezzle" data-final-knowledge="notice-accomplice" data-final-knowledge="notice-harbor" data-final-knowledge="fiction-sample-board" data-final-knowledge="fiction-injury-intent" data-final-knowledge="fiction-injury-negligent" data-final-knowledge="fiction-property" data-final-knowledge="motto-floor" */
  return (
    <Shell code="03" kicker="第二节 · 注意规定与法律拟制" title="注意规定与法律拟制">
      <div
        data-layout="notice-fiction-cancel-test"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="cancel-test-fork,four-notice-examples"
        data-focal-rule="cancel-the-clause-unchanged-verdict-means-notice-changed-means-fiction"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="test-strip" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 122}}>
          <Panel tone={C.cinnabar} style={{height: '100%', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
            <TabChip tone={C.cinnabar} icon={<Stamp size={26} color={C.white} strokeWidth={2.2} />}>判断方法 · 假设取消该条文</TabChip>
            <div style={{display: 'flex', flexDirection: 'column', gap: 6, fontSize: 21, fontWeight: 880, color: C.ink}}>
              <span>结论<Mark color={C.qingtian}>仍应如此</Mark> → 只具提示意义 → 注意规定</span>
              <span>结论<Mark color={C.cinnabar}>不再如此</Mark> → 特殊规定 → 法律拟制</span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={20} marker="notice-board" style={{position: 'absolute', left: 0, top: 146, width: 1050, height: 400}}>
          <Panel tone={C.qingtian} watermark={<Repeat size={170} color={C.qingtian} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.qingtian} icon={<Repeat size={24} color={C.white} strokeWidth={2.2} />}>注意规定 · 四个常客</TabChip>
            <IconChip icon={<Zap size={28} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="第287条 利用计算机犯罪：">
              定金融诈骗 · 盗窃等具体之罪——取消仍如此
            </IconChip>
            <IconChip icon={<Repeat size={28} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="携挪用公款潜逃 → 贪污：">
              挪用罪成立的，与贪污罪<Mark color={C.cinnabar}>并罚</Mark>
            </IconChip>
            <IconChip icon={<CheckCircle2 size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="第382条第3款 伙同贪污以共犯论：">
              受贿罪无此条 · 伙同受贿也按共犯——同理提示
            </IconChip>
            <IconChip icon={<GraduationCap size={28} color={C.white} strokeWidth={2.2} />} tone={C.night} title="第310条第2款 事前通谋以共犯论：">
              掩饰隐瞒犯罪所得罪事前通谋 · 同理按共犯
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={34} marker="fiction-sample-board" style={{position: 'absolute', left: 1074, top: 146, width: 702, height: 400}}>
          <Panel tone={C.cinnabar} watermark={<Ban size={170} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.cinnabar} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>拟制样本 · 聚众「打砸抢」（第289条）</TabChip>
            <IconChip icon={<CircleX size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="毁坏 · 抢走财物 → 抢劫罪：">
              取消此条只能定故意毁坏财物罪——结论变了＝<Mark color={C.cinnabar}>拟制</Mark>
            </IconChip>
            <IconChip icon={<CheckCircle2 size={28} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="致人伤残 · 死亡之故意所为：">
              注意规定
            </IconChip>
            <IconChip icon={<CircleX size={28} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="致人伤残 · 死亡之过失所为：">
              法律拟制（过失拟制为故意）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={48} marker="motto-floor" style={{position: 'absolute', left: 0, right: 0, top: 570, bottom: 0}}>
          <Panel tone={C.brass} style={{height: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20}}>
            <TabChip tone={C.brass} icon={<Stamp size={26} color={C.white} strokeWidth={2.2} />}>口诀（源笔记）</TabChip>
            <div style={{fontSize: 23, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>
              注意规定属于<Mark color={C.qingtian}>重复强调</Mark>，无特殊之处
              <br />
              法律拟制属于<Mark color={C.cinnabar}>特殊规定</Mark>，不能推而广之
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
