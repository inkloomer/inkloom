import {CircleSlash, Flame, GraduationCap, Target, Wand2} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const ImpossibilityForkScene = () => (
  <Shell code="08" title="不能犯：对象与手段的落空">
    <div data-layout="impossibility-double-fork" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="object-means-fork,danger-verdict" data-focal-rule="impossibility-is-no-crime-when-the-act-creates-no-danger-to-interests" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, backgroundColor: C.ink, borderRadius: 12, padding: '10px 20px', display: 'flex', gap: 14, alignItems: 'center', fontSize: 22, color: C.chalk, fontWeight: 800}}>
        <span style={{color: C.flash, fontWeight: 950}}>核心概念</span>
        主观有犯意 ＋ 客观行为<Stamp delay={12} tone="chalk">无任何危险</Stamp> → <SoftHi style={{fontSize: 23}}>无罪（不能犯）</SoftHi>
        <span style={{marginLeft: 8, fontSize: 21, color: C.chalkDim, fontWeight: 700}}>稻草人案：沙漠里误把稻草人当仇人开枪</span>
      </Enter>
      <div style={{position: 'absolute', left: 0, top: 96, width: 300, display: 'flex', flexDirection: 'column', gap: 24}}>
        <div style={{height: 300, borderRadius: 16, backgroundColor: C.track, display: 'grid', placeItems: 'center', padding: 20}}>
          <Enter delay={24} style={{textAlign: 'center'}}>
            <Target size={40} color={C.chalk} />
            <div style={{fontSize: 26, fontWeight: 900, color: C.white, marginTop: 10}}>对象不能犯</div>
            <div style={{fontSize: 22, color: C.chalk, marginTop: 8, lineHeight: 1.4}}>犯罪对象不存在<br />客观上不可能既遂</div>
          </Enter>
        </div>
        <div style={{height: 300, borderRadius: 16, backgroundColor: C.track, display: 'grid', placeItems: 'center', padding: 20}}>
          <Enter delay={140} style={{textAlign: 'center'}}>
            <Wand2 size={40} color={C.chalk} />
            <div style={{fontSize: 26, fontWeight: 900, color: C.white, marginTop: 10}}>手段不能犯</div>
            <div style={{fontSize: 22, color: C.chalk, marginTop: 8, lineHeight: 1.4}}>手段不可能产生危险<br />（迷信犯＝其中一种）</div>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="impossibility-object-pair" style={{position: 'absolute', left: 330, top: 96, width: 1446}}>
        <Enter delay={40} style={{fontSize: 24, fontWeight: 900, color: C.ink}}>都有「对象认识错误」，差别在行为有没有危险：</Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 16}}>
          <Enter delay={50} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.cool}`, borderRadius: 12, padding: '12px 16px'}}>
            <div style={{fontSize: 23, fontWeight: 900}}>对象错误（王五当李四，开枪未中）</div>
            <div style={{marginTop: 6, fontSize: 22, color: C.prep, fontWeight: 700}}>行为本身<ThinU>有危险</ThinU>＝危害行为</div>
            <div style={{marginTop: 8}}><Stamp delay={62} tone="flash">故意杀人未遂</Stamp></div>
          </Enter>
          <Enter delay={64} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.prep}`, borderRadius: 12, padding: '12px 16px'}}>
            <div style={{fontSize: 23, fontWeight: 900}}>对象不能犯（沙漠射稻草人）</div>
            <div style={{marginTop: 6, fontSize: 22, color: C.prep, fontWeight: 700}}>行为本身<ThinU>无危险</ThinU>＝非危害行为</div>
            <div style={{marginTop: 8}}><Stamp delay={76} tone="prep">无罪</Stamp></div>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="impossibility-means-pair" style={{position: 'absolute', left: 330, top: 420, width: 1446}}>
        <Enter delay={150} style={{fontSize: 24, fontWeight: 900, color: C.ink}}>都有「方法错误」，差别同样在危险：</Enter>
        <div style={{marginTop: 10, display: 'flex', gap: 16}}>
          <Enter delay={160} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.cool}`, borderRadius: 12, padding: '12px 16px'}}>
            <div style={{fontSize: 23, fontWeight: 900}}>打击错误（没瞄准打死旁人）</div>
            <div style={{marginTop: 6, fontSize: 22, color: C.prep, fontWeight: 700}}>手段<ThinU>有危险</ThinU>＝危害行为</div>
            <div style={{marginTop: 8}}><Stamp delay={172} tone="flash">故意杀人未遂</Stamp></div>
          </Enter>
          <Enter delay={174} style={{flex: 1, backgroundColor: C.paper, border: `3px solid ${C.prep}`, borderRadius: 12, padding: '12px 16px'}}>
            <div style={{fontSize: 23, fontWeight: 900}}>手段不能犯（生锈坏枪无法射击）</div>
            <div style={{marginTop: 6, fontSize: 22, color: C.prep, fontWeight: 700}}>手段<ThinU>无危险</ThinU>＋迷信犯（扎小人诅咒）</div>
            <div style={{marginTop: 8}}><Stamp delay={186} tone="prep">无罪</Stamp></div>
          </Enter>
        </div>
      </div>
      <Enter delay={200} style={{position: 'absolute', left: 0, right: 0, top: 700, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        一把尺子量到底：<SoftHi dark style={{fontSize: 23}}>行为对法益有无危险</SoftHi>
      </Enter>
    </div>
  </Shell>
);

export const DangerTheoriesScene = () => (
  <Shell code="09" title="危险判断：四种学说">
    <div data-layout="danger-theory-quadrant" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="theory-quadrant,case-application" data-focal-rule="danger-is-judged-objectively-at-the-time-of-act-by-an-ordinary-person" data-focal-channels="icon,contrast,annotation,spatial" style={{position: 'absolute', inset: 0}}>
      <Enter delay={6} style={{position: 'absolute', left: 0, right: 0, top: 0, display: 'flex', gap: 14, alignItems: 'center', fontSize: 23, fontWeight: 900}}>
        <span>判断标尺：行为对法益</span>
        <Chip tone="warm"><Flame size={20} color={C.white} style={{flexShrink: 0}} />有危险 → 未遂犯</Chip>
        <Chip tone="prep"><CircleSlash size={20} color={C.white} style={{flexShrink: 0}} />无危险 → 不能犯（无罪）</Chip>
      </Enter>
      <div style={{position: 'absolute', left: 0, right: 0, top: 76, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
        <div data-final-knowledge="theory-subjective" style={{backgroundColor: C.track, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={22}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <LabelBlock size={25} color={C.prep}>主观说</LabelBlock>
              <Chip tone="prep" style={{fontSize: 20}}>少数说</Chip>
            </div>
            <div style={{marginTop: 8, fontSize: 22, color: C.chalk, fontWeight: 700, lineHeight: 1.4}}>以行为人的主观认识为准——自认为有危险就有危险</div>
            <div style={{marginTop: 8, fontSize: 22, color: C.white, fontWeight: 800}}><GraduationCap size={20} color={C.flash} style={{display: 'inline', verticalAlign: -3, marginRight: 6}} />面粉充毒品案：按乙的认识有危险 → <Stamp delay={34} tone="flash">运输毒品未遂</Stamp></div>
          </Enter>
        </div>
        <div data-final-knowledge="theory-objective" style={{backgroundColor: C.track, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={38}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <LabelBlock size={25}>客观说</LabelBlock>
              <Chip tone="green" style={{fontSize: 20}}>多数说</Chip>
            </div>
            <div style={{marginTop: 8, fontSize: 22, color: C.chalk, fontWeight: 700, lineHeight: 1.4}}>危险是客观判断——以客观现实情况为准</div>
            <div style={{marginTop: 8, fontSize: 22, color: C.white, fontWeight: 800}}><GraduationCap size={20} color={C.flash} style={{display: 'inline', verticalAlign: -3, marginRight: 6}} />面粉案：根本运不到毒品 → <Stamp delay={50} tone="prep">对象不能犯·无罪</Stamp></div>
          </Enter>
        </div>
        <div data-final-knowledge="theory-objective-danger" style={{backgroundColor: C.paper, border: `3px solid ${C.prep}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={96}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <LabelBlock ink size={25} color={C.prep}>客观危险说</LabelBlock>
              <Chip tone="prep" style={{fontSize: 20, backgroundColor: C.prep}}>少数说</Chip>
            </div>
            <div style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 700, lineHeight: 1.4}}>从事后＋科学专家角度判断（「事后诸葛亮」）</div>
            <div style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 800}}><GraduationCap size={20} color={C.warm} style={{display: 'inline', verticalAlign: -3, marginRight: 6}} />1毫克毒药案：鉴定证明不致死 → <Stamp delay={108} tone="prep">手段不能犯·无罪</Stamp></div>
          </Enter>
        </div>
        <div data-final-knowledge="theory-concrete-danger" style={{backgroundColor: C.paper, border: `3px solid ${C.flash}`, borderRadius: 14, padding: '14px 18px'}}>
          <Enter delay={112}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <LabelBlock ink size={25} color={C.warm}>具体危险说</LabelBlock>
              <Chip tone="flash" style={{fontSize: 20}}>多数说</Chip>
            </div>
            <div style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 700, lineHeight: 1.4}}>从<ThinU>行为时一般人</ThinU>角度、辩证发展地看——偶然没发生≠没有可能性</div>
            <div style={{marginTop: 8, fontSize: 22, color: C.ink, fontWeight: 800}}><GraduationCap size={20} color={C.warm} style={{display: 'inline', verticalAlign: -3, marginRight: 6}} />1毫克案：万一剂量大即致命 → <Stamp delay={124} tone="flash">故意杀人未遂</Stamp></div>
          </Enter>
        </div>
      </div>
      <div data-final-knowledge="theory-three-cases" style={{position: 'absolute', left: 0, right: 0, top: 520, height: 150, backgroundColor: C.ink, borderRadius: 14, padding: '14px 24px'}}>
        <Enter delay={150} style={{fontSize: 22, fontWeight: 900, color: C.chalk}}>具体危险说三连判——偶然因素不消灭可能性：</Enter>
        <Enter delay={162} style={{marginTop: 10, display: 'flex', gap: 14, flexWrap: 'wrap'}}>
          <Chip style={{fontSize: 22}}>抢劫时身无分文 → <Stamp delay={170} tone="flash">未遂</Stamp></Chip>
          <Chip style={{fontSize: 22}}>深夜向床开枪而床上无人 → <Stamp delay={176} tone="flash">未遂</Stamp></Chip>
          <Chip style={{fontSize: 22}}>身穿防弹衣毫发未损 → <Stamp delay={182} tone="flash">未遂</Stamp></Chip>
        </Enter>
      </div>
      <Enter delay={198} style={{position: 'absolute', left: 0, right: 0, top: 690, fontSize: 23, fontWeight: 900, color: C.ink, textAlign: 'center'}}>
        考试口径：客观说（多数说）→ 再细分为<SoftHi dark style={{fontSize: 23}}>具体危险说（多数）</SoftHi>
      </Enter>
    </div>
  </Shell>
);
