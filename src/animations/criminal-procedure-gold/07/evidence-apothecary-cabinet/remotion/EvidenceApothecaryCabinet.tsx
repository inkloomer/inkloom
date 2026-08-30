import {AbsoluteFill} from 'remotion';
import {Anchor, Boxes, Columns3, Copy, Fingerprint, GraduationCap, HardDrive, MessageSquareQuote, ScanSearch} from 'lucide-react';
import {TimelineSequence} from '../../../../shared/remotion-runtime';
import {SCENES} from './storyboard';
import {C, Chip, Dash, Enter, LabelBlock, Neg, Shell, SoftHi, Stamp, ThinU} from './theme';

export const AttributeTwinScene = () => (
  <Shell code="01" title="证据两把尺：有关联，且来得合法">
    <div data-layout="attribute-twin-scales" data-visual-anchor="comparison-axis" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="twin-rule-columns,counter-example-row" data-focal-rule="evidence-needs-objective-relevance-to-case-facts-and-lawful-collection-procedure" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Anchor size={230} color={C.angelica} strokeWidth={1.1} /></div>
      <div data-final-knowledge="relevance-column" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Anchor size={30} color={C.angelica} style={{flexShrink: 0}} />
            <LabelBlock color={C.angelica} size={28}>关联性</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>第一把尺</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.angelica}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(168,68,47,0.06)'}}>
          <Enter delay={30} style={{fontSize: 25, fontWeight: 900, color: C.ink }}>与案件事实存在<SoftHi tone="angelica" style={{fontSize: 24}}>客观联系</SoftHi></Enter>
          <Enter delay={40} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.mist }}>能证明案件某一方面事实即可，不要求证明全部</Enter>
        </div>
        <div style={{border: `3px dashed ${C.angelica}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 9}}>
          <Enter delay={56} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="angelica" style={{fontSize: 22}}>肇事案 · 被害人医疗费被垫付</Chip>
            <Neg size={22}>垫付事实与肇事无关联</Neg>
          </Enter>
          <Enter delay={68} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>动机 · 习惯等可证关联性——但必须指向待证事实</Enter>
        </div>
        <Enter delay={84} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.angelica} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2015-2022年题 · 关联性两考</span>
        </Enter>
      </div>
      <div data-final-knowledge="legality-column" style={{position: 'absolute', left: 890, top: 0, width: 886, height: 744, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ScanSearch size={30} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={28}>合法性</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>第二把尺</Chip></Enter>
        </div>
        <div style={{border: `3px solid ${C.mint}`, borderRadius: 10, padding: '14px 18px', backgroundColor: 'rgba(78,138,106,0.06)'}}>
          <Enter delay={64} style={{fontSize: 25, fontWeight: 900, color: C.ink }}>主体 · 形式 · 收集程序均合<SoftHi tone="mint" style={{fontSize: 24}}>法定要求</SoftHi></Enter>
          <Enter delay={74} style={{marginTop: 8, fontSize: 22, fontWeight: 750, color: C.mist }}>题干强调「法定调查程序」＝考合法性原则</Enter>
        </div>
        <div style={{border: `2px solid ${C.panelLine}`, borderRadius: 10, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
          <Enter delay={88} style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
            <Chip tone="mint" style={{fontSize: 22}}>勘验程序违法</Chip>
            <Dash delay={96} style={{width: 36, borderTop: `4px solid ${C.mint}`}} />
            <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>可作合理解释弥补</span>
          </Enter>
          <Enter delay={98} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>全程录像并注明原因——瑕疵证据的正当化路径</Enter>
        </div>
        <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={24} color={C.mint} style={{flexShrink: 0}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>2023-2025年题 · 瑕疵可补正线</span>
        </Enter>
      </div>
    </div>
  </Shell>
);

export const KindSortScene = () => (
  <Shell code="02" title="种类八格柜：按取证时的形态入格">
    <div data-layout="kind-sort-bench" data-visual-anchor="concept-icon" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="drawer-cabinet-sort,shape-contrast-pairs" data-focal-rule="classify-evidence-by-its-form-at-collection-time-not-by-where-it-later-ends-up" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Boxes size={230} color={C.angelica} strokeWidth={1.1} /></div>
      <div data-final-knowledge="sort-rule-banner" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 100, backgroundColor: C.paper, border: `3px solid ${C.angelica}`, borderRadius: 14, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: `0 8px 22px ${C.shadow}`}}>
        <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Boxes size={30} color={C.angelica} style={{flexShrink: 0}} />
          <LabelBlock size={29}>入格总则</LabelBlock>
          <span style={{fontSize: 25, fontWeight: 900, color: C.ink }}>判断种类看</span>
          <SoftHi tone="angelica" style={{fontSize: 25 }}>取证时的证据形态</SoftHi>
          <span style={{flex: 1}} />
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>不看来往哪个机关、进了哪本卷</span>
        </Enter>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 124, height: 620, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, alignContent: 'stretch'}}>
        <div data-final-knowledge="kind-physical-cell" style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={26} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Fingerprint size={26} color={C.angelica} style={{flexShrink: 0}} />
            <LabelBlock color={C.angelica} size={25}>物证格</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="angelica" style={{fontSize: 22}}>假警服</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>靠外形证明冒充警察 → 物证</span>
            </Enter>
            <Enter delay={50} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="angelica" style={{fontSize: 22}}>现场照片</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>仍是物证的固定方式</span>
            </Enter>
          </div>
          <Enter delay={60} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>外形 · 痕迹 · 存在状态说话，就是物证</Enter>
        </div>
        <div data-final-knowledge="kind-electronic-cell" style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={44} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <HardDrive size={26} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={25}>电子数据格</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={58} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="mint" style={{fontSize: 22}}>网络聊天记录</Chip>
              <Stamp delay={66} tone="mint">典型电子数据</Stamp>
            </Enter>
            <Enter delay={70} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>数字化存储与传输是它的骨相</Enter>
          </div>
          <Enter delay={80} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>提取须笔录＋清单护航（详见下篇）</Enter>
        </div>
        <div data-final-knowledge="kind-statement-cell" style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={62} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <MessageSquareQuote size={26} color={C.tangerine} style={{flexShrink: 0}} />
            <LabelBlock color={C.tangerine} size={25}>供述格</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={76} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="tangerine" style={{fontSize: 22}}>供述与辩解</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>仅指就</span>
              <ThinU color={C.tangerine}>实施犯罪</ThinU>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>所作陈述</span>
            </Enter>
            <Enter delay={86} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>揭发他人犯罪 → 另立违法所得线索，不算供述</Enter>
          </div>
          <Enter delay={94} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>供述范围的边界即考题</Enter>
        </div>
        <div data-final-knowledge="kind-appraiser-cell" style={{backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 12, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={80} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ScanSearch size={26} color={C.licorice} style={{flexShrink: 0}} />
            <LabelBlock color={C.licorice} size={25}>身份破题格</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={94} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="licorice" style={{fontSize: 22}}>检验人员出具的报告</Chip>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink }}>看其</span>
              <ThinU color={C.steel}>身份与授权</ThinU>
            </Enter>
            <Enter delay={102} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>有专门知识的人 ≠ 鉴定人——报告性质随之不同</Enter>
          </div>
          <Enter delay={110} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>破解核心永远是「先定人，再定格」</Enter>
        </div>
      </div>
    </div>
  </Shell>
);

export const ClassPairScene = () => (
  <Shell code="03" title="分类双棱镜：来源分原始，独证分直接">
    <div data-layout="class-pair-loom" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="twin-axis-prism,hearsay-opinion-rails" data-focal-rule="original-versus-transmitted-turns-on-source-and-direct-versus-circumstantial-on-standalone-proof" data-focal-channels="icon,contrast,connector,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', right: 30, bottom: 16, opacity: 0.06, pointerEvents: 'none'}}><Columns3 size={230} color={C.angelica} strokeWidth={1.1} /></div>
      <div data-final-knowledge="origin-axis-card" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 358, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Copy size={30} color={C.angelica} style={{flexShrink: 0}} />
            <LabelBlock color={C.angelica} size={28}>原始 vs 传来</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={16}><Chip tone="panel" style={{fontSize: 22}}>只看来源</Chip></Enter>
        </div>
        <div style={{display: 'flex', gap: 12}}>
          <Enter delay={30} style={{flex: 1, border: `3px solid ${C.mint}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="mint" style={{fontSize: 22}}>原始证据</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>直接来自案件事实的第一手材料</span>
          </Enter>
          <Enter delay={42} style={{flex: 1, border: `3px solid ${C.tangerine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="tangerine" style={{fontSize: 22}}>传来证据</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>经过复制 · 转述的第二手以下材料</span>
          </Enter>
        </div>
        <Enter delay={56} style={{fontSize: 22, fontWeight: 800, color: C.mist }}>复印件 · 转印照片 · 他人转述——统统传来</Enter>
      </div>
      <div data-final-knowledge="direct-axis-card" style={{position: 'absolute', left: 896, top: 0, width: 880, height: 358, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <Enter delay={40} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <Columns3 size={30} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={28}>直接 vs 间接</LabelBlock>
          </Enter>
          <span style={{flex: 1}} />
          <Enter delay={50}><Chip tone="panel" style={{fontSize: 22}}>看能否单独证明</Chip></Enter>
        </div>
        <div style={{display: 'flex', gap: 12}}>
          <Enter delay={64} style={{flex: 1, border: `3px solid ${C.mint}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="mint" style={{fontSize: 22}}>直接证据</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>能单独指出人＋事的完整事实</span>
          </Enter>
          <Enter delay={76} style={{flex: 1, border: `3px solid ${C.tangerine}`, borderRadius: 10, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <Chip tone="tangerine" style={{fontSize: 22}}>间接证据</Chip>
            <span style={{fontSize: 22, fontWeight: 750, color: C.mist }}>须结合其他证据才能锁定</span>
          </Enter>
        </div>
        <Enter delay={90} style={{display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
          <span style={{fontSize: 22, fontWeight: 800, color: C.mist }}>典型间接：</span>
          <Chip tone="tangerine" style={{fontSize: 22}}>指纹</Chip>
          <Chip tone="tangerine" style={{fontSize: 22}}>毒品实物</Chip>
          <Chip tone="tangerine" style={{fontSize: 22}}>通话记录</Chip>
          <Chip tone="tangerine" style={{fontSize: 22}}>影碟</Chip>
        </Enter>
      </div>
      <div data-final-knowledge="hearsay-opinion-rails" style={{position: 'absolute', left: 0, right: 0, top: 382, height: 362, backgroundColor: C.panel, border: `3px solid ${C.panelLine}`, borderRadius: 14, padding: '16px 24px', display: 'flex', gap: 24}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={104} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <MessageSquareQuote size={26} color={C.angelica} style={{flexShrink: 0}} />
            <LabelBlock color={C.angelica} size={25}>传闻证据规则</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={118} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="angelica" style={{fontSize: 22}}>只规制证人证言</Chip>
              <Neg size={22}>不管物证 · 书证</Neg>
            </Enter>
            <Enter delay={128} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>丙当庭转述甲亲历呼救——原始感知，非传闻</Enter>
          </div>
        </div>
        <div style={{width: 3, backgroundColor: C.panelLine}} />
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Enter delay={112} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <ScanSearch size={26} color={C.mint} style={{flexShrink: 0}} />
            <LabelBlock color={C.mint} size={25}>意见证据规则</LabelBlock>
          </Enter>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="mint" style={{fontSize: 22}}>「我估计时速一百二」</Chip>
              <Stamp delay={136} tone="angelica">臆测排除</Stamp>
            </Enter>
            <Enter delay={140} style={{fontSize: 22, fontWeight: 750, color: C.mist }}>证人只能陈述感知的事实，不能给专业判断</Enter>
          </div>
        </div>
      </div>
    </div>
  </Shell>
);

export const EvidenceApothecaryCabinet = () => (
  <AbsoluteFill>
    <TimelineSequence name="01-attribute-twin-scales" {...SCENES.attributeTwinScales}><AttributeTwinScene /></TimelineSequence>
    <TimelineSequence name="02-kind-sort-bench" {...SCENES.kindSortBench}><KindSortScene /></TimelineSequence>
    <TimelineSequence name="03-class-pair-loom" {...SCENES.classPairLoom}><ClassPairScene /></TimelineSequence>
  </AbsoluteFill>
);
