import {GraduationCap, Landmark, Repeat, Scissors, Swords, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, TabChip} from './kit';

export const FictionNineAtlasScene = () => {
  /* data-final-knowledge="fiction-wall" data-final-knowledge="wall-238" data-final-knowledge="wall-247" data-final-knowledge="wall-248" data-final-knowledge="wall-292" data-final-knowledge="wall-267" data-final-knowledge="wall-269" data-final-knowledge="wall-196" data-final-knowledge="wall-362" data-final-knowledge="murmur-murder-count" data-final-knowledge="murmur-robbery-count" data-final-knowledge="exam-2011-floor" */
  return (
    <Shell code="04" kicker="第二节 · 常考法律拟制" title="刑法分则中常考的法律拟制">
      <div
        data-layout="fiction-nine-atlas-wall"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="fiction-wall-nine,exam-verdict-quads"
        data-focal-rule="nine-clauses-transform-negligence-or-other-acts-into-heavier-names"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="fiction-wall" style={{position: 'absolute', left: 0, top: 0, width: 1120, height: 744}}>
          <Panel tone={C.cinnabar} watermark={<Landmark size={190} color={C.cinnabar} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.cinnabar} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>九条常考法律拟制</TabChip>
            <Enter delay={16} marker="wall-238"><IconChip icon={<Scissors size={26} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="第238条 非法拘禁：">
              使用暴力·过失致伤残死亡 → 故意伤害罪 · 故意杀人罪
            </IconChip></Enter>
            <Enter delay={24} marker="wall-247"><IconChip icon={<Scissors size={26} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="第247条 刑讯逼供 · 暴力取证：">
              过失致伤残死亡 → 故意伤害罪 · 故意杀人罪（2010·58）
            </IconChip></Enter>
            <Enter delay={32} marker="wall-248"><IconChip icon={<Scissors size={26} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="第248条 虐待被监管人：">
              过失致伤残死亡 → 同上（2012·16）
            </IconChip></Enter>
            <Enter delay={40} marker="wall-292"><IconChip icon={<Scissors size={26} color={C.white} strokeWidth={2.2} />} tone={C.cinnabar} title="第292条 聚众斗殴：">
              过失致重伤死亡 → 故意伤害罪 · 故意杀人罪——聚众斗殴案：狗蛋定故意杀人罪
            </IconChip></Enter>
            <Enter delay={48} marker="wall-267"><IconChip icon={<Swords size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="第267条第2款：">
              携带凶器抢夺 → 抢劫罪
            </IconChip></Enter>
            <Enter delay={56} marker="wall-269"><IconChip icon={<Swords size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="第269条：">
              盗窃 · 诈骗 · 抢夺＋当场暴力抗捕 → 事后转化抢劫
            </IconChip></Enter>
            <Enter delay={64} marker="wall-196"><IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="第196条第3款 盗窃信用卡并使用：">
              机器上用＝注意规定（本就盗窃）· 对自然人用＝拟制
            </IconChip></Enter>
            <Enter delay={72} marker="wall-362"><IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.qingtian} title="第362条 通风报信：">
              报给卖淫嫖娼者＝拟制窝藏 · 报给犯罪分子＝注意规定
            </IconChip></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="murmur-murder-count" style={{position: 'absolute', left: 1144, top: 0, width: 632, height: 190}}>
          <Panel tone={C.cinnabar} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.cinnabar} icon={<Repeat size={24} color={C.white} strokeWidth={2.2} />}>拟制来的故意杀人罪 · 5个来源</TabChip>
            <div style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              非法拘禁罪 · 刑讯逼供罪 · 暴力取证罪 · 虐待被监管人罪 · 聚众斗殴罪
            </div>
          </Panel>
        </Enter>
        <Enter delay={44} marker="murmur-robbery-count" style={{position: 'absolute', left: 1144, top: 214, width: 632, height: 210}}>
          <Panel tone={C.brass} watermark={<Swords size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Repeat size={24} color={C.white} strokeWidth={2.2} />}>拟制来的抢劫罪 · 3个来源</TabChip>
            <div style={{fontSize: 21, fontWeight: 880, color: C.ink, lineHeight: 1.6}}>
              携带凶器抢夺（267条2款）
              <br />
              事后转化抢劫（269条）
              <br />
              打砸抢中毁坏 · 抢夺财物（289条）
            </div>
          </Panel>
        </Enter>
        <Enter delay={58} marker="exam-2011-floor" style={{position: 'absolute', left: 1144, top: 448, width: 632, height: 296}}>
          <Panel tone={C.qingtian} watermark={<GraduationCap size={150} color={C.qingtian} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.qingtian} icon={<GraduationCap size={24} color={C.white} strokeWidth={2.2} />}>典型真题（2011·卷二·58）</TabChip>
            <IconChip icon={<Neg size={24} />} tone={C.cinnabar} title="A 错：">
              269条是拟制——取消只能并罚·不能定抢劫
            </IconChip>
            <IconChip icon={<Neg size={24} />} tone={C.cinnabar} title="B 错：">
              267条2款是拟制——取消只定抢夺罪
            </IconChip>
            <IconChip icon={<CheckMark />} tone={C.qingtian} title="C 对 D 对：">
              ATM取款＝注意规定仍盗窃 · 保险鉴定人供假证明＝注意规定本就共犯
            </IconChip>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

const CheckMark = () => (
  <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 999, border: `3px solid ${C.qingtian}`, color: C.qingtian, fontSize: 16, fontWeight: 950}}>✓</span>
);
