import {GraduationCap} from 'lucide-react';
import {Chip, C, Enter, LabelBlock, Neg, Shell, SoftHi, ThinU} from './kit';

export const TimingIntentCasesScene = () => (
  <Shell code="02" title="时间与意思·偶然防卫">
    <div data-layout="timing-casual-duel-boards" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="timing-device-rules,casual-vs-imagined-pair" data-focal-rule="defense-must-be-timely-and-cognizant-or-it-flips-into-crime" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div data-final-knowledge="timing-board" style={{position: 'absolute', left: 0, top: 0, width: 700, height: 340, backgroundColor: C.white, border: `4px solid ${C.celadon}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={6}><LabelBlock size={24} color={C.celadon}>时间 · 正在进行</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={20}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>防卫装置：相当性＋不害他法益（电网✗危害公共安全·碎玻璃✓）→ 来临时才发作＝适时</Chip></Enter>
          <Enter delay={32}><Chip style={{fontSize: 19, whiteSpace: 'normal'}}>结束：行为时·一般人视角（龙哥案）——反扑可能消除才算结束</Chip></Enter>
          <Enter delay={44}><Chip tone="gold" style={{fontSize: 19, whiteSpace: 'normal'}}>财产犯罪：当场还来得及挽回→尚未结束（追上重伤劫匪夺财∈防卫）</Chip></Enter>
          <Enter delay={56}><Neg size={19}>不适时：故意→故意犯罪·过失→过失·无→意外；事后故意不享受过当从宽</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="casual-defense-board" style={{position: 'absolute', left: 724, top: 0, width: 1052, height: 340, backgroundColor: C.white, border: `4px solid ${C.vermilion}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={12}><LabelBlock size={24} color={C.vermilion}>偶然防卫（五星级）· 坏心办好事</LabelBlock></Enter>
        <Enter delay={24} style={{marginTop: 8, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>客观制止了不法侵害·主观没认识到（故意型·过失型）</Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 12}}>
          <div style={{flex: 1, border: `3px solid ${C.celadon}`, borderRadius: 8, padding: '8px 12px'}}>
            <Enter delay={38} style={{fontSize: 19, fontWeight: 900, color: C.celadon}}>防卫认识不要说</Enter>
            <Enter delay={48} style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>只看客观制止 → 一切偶然防卫＝正当防卫</Enter>
          </div>
          <div style={{flex: 1, border: `3px solid ${C.vermilion}`, borderRadius: 8, padding: '8px 12px'}}>
            <Enter delay={52} style={{fontSize: 19, fontWeight: 900, color: C.vermilion}}>防卫认识必要说</Enter>
            <Enter delay={62} style={{marginTop: 4, fontSize: 18, fontWeight: 700, color: C.inkSoft}}>主客观统一 → 都不成立：故意型＝杀人未遂（无实害结果）·过失型＝无罪</Enter>
          </div>
        </div>
      </div>

      <div data-final-knowledge="duel-pickprov-board" style={{position: 'absolute', left: 0, top: 364, width: 1052, height: 380, backgroundColor: C.white, border: `3px solid ${C.night}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={68}><LabelBlock size={24} color={C.night}>缺乏防卫意思的两种情形</LabelBlock></Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 14}}>
          <div style={{flex: 1, border: `3px dashed ${C.vermilion}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={82} style={{fontSize: 20, fontWeight: 900}}>防卫挑拨</Enter>
            <Enter delay={92} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>挑拨方＝故意犯罪·其行为属不法侵害 → 被挑拨方反击＝<SoftHi style={{fontSize: 18}}>正当防卫</SoftHi> → 对防卫不能再防卫</Enter>
          </div>
          <div style={{flex: 1, border: `3px dashed ${C.night}`, borderRadius: 8, padding: '10px 14px'}}>
            <Enter delay={104} style={{fontSize: 20, fontWeight: 900}}>相互斗殴（不正对不正）</Enter>
            <Enter delay={114} style={{marginTop: 6, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>斗殴无防卫；轻伤承诺有效·重伤生命承诺无效；<SoftHi style={{fontSize: 18}}>例外</SoftHi>：一方求饶逃跑后继续侵害∈·突然升高级别∈</Enter>
          </div>
        </div>
        <Enter delay={128} style={{marginTop: 12, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>区分：谁先动手·发生地点（上门打人反击属防卫）；预先防卫准备≠不法侵害意图</Enter>
      </div>

      <div data-final-knowledge="pig-teammate-case" style={{position: 'absolute', left: 1076, top: 364, width: 700, height: 380, backgroundColor: C.goldSoft, border: `3px double ${C.gold}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={74} style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <GraduationCap size={22} color={C.vermilion} />
          <span style={{fontSize: 20, fontWeight: 900}}>猪队友案：甲乙共击丙·甲误杀乙·若不杀乙乙必杀丙</span>
        </Enter>
        <Enter delay={88} style={{marginTop: 10, fontSize: 19, fontWeight: 700, color: C.inkSoft}}>顺序：先打击错误（主观）→ 后偶然防卫（违法）</Enter>
        <Enter delay={100} style={{marginTop: 8}}><Chip tone="vermilion" style={{fontSize: 19, whiteSpace: 'normal'}}>对丙 → 两说均故意杀人未遂</Chip></Enter>
        <Enter delay={112} style={{marginTop: 8}}><Chip tone="celadon" style={{fontSize: 19, whiteSpace: 'normal'}}>对乙 → 打击错误角度∈犯罪·偶然防卫角度∉ → 先立后破＝不构成犯罪</Chip></Enter>
      </div>
    </div>
  </Shell>
);
