import {Compass, Crosshair, GraduationCap, LockOpen, Users, Zap} from 'lucide-react';
import {Chip, C, Dash, Enter, LabelBlock, Neg, PatrolTitle, Shell, SoftHi, ThinU} from './kit';

export const ActFeaturesTriTestScene = () => (
  <Shell code="01" title="危害行为·三特征与判别">
    <div data-layout="tri-feature-judgement-berm" data-visual-anchor="typographic-sequence" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="feature-trio-review,danger-grade-slope" data-focal-rule="only-conduct-creating-danger-to-interests-counts-as-harmful-conduct" data-focal-channels="icon,contrast,enclosure,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 218, display: 'flex', gap: 24}}>
        <div data-final-knowledge="feature-body" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={6} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <PatrolTitle>① 有体性</PatrolTitle>
          </Enter>
          <Enter delay={16} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>身体活动：<Chip tone="wood" style={{fontSize: 20}}>积极举动</Chip><Chip tone="wood" style={{fontSize: 20}}>消极静止</Chip></Enter>
          <Enter delay={26} style={{marginTop: 10}}><Neg size={21}>单纯邪恶思想未付诸行动——没有罪</Neg></Enter>
        </div>
        <div data-final-knowledge="feature-intent" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.ink}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={20} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <PatrolTitle>② 有意性</PatrolTitle>
          </Enter>
          <Enter delay={30} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>有意识实施——行为的主观特征</Enter>
          <Enter delay={40} style={{marginTop: 10}}><Neg size={21}>梦游·癫痫·无意识反射举动不是行为</Neg></Enter>
        </div>
        <div data-final-knowledge="feature-harm" style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.warn}`, borderRadius: 10, padding: '14px 18px'}}>
          <Enter delay={34} style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <PatrolTitle>③ 有害性</PatrolTitle>
          </Enter>
          <Enter delay={44} style={{marginTop: 8, fontSize: 22, fontWeight: 700, color: C.inkSoft}}>实质特征＝<Crosshair size={22} color={C.warn} style={{flexShrink: 0, verticalAlign: '-3px'}} /><ThinU>法益侵害</ThinU>性</Enter>
          <Enter delay={54} style={{marginTop: 10}}><Neg size={21}>同性恋无法益侵害——不是危害行为</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="danger-slope" style={{position: 'absolute', left: 0, top: 242, width: 1050, height: 252, backgroundColor: C.white, border: `3px solid ${C.water}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={62}><LabelBlock size={26} color={C.water}>危害行为 vs 生活行为 · 客观危险分水岭</LabelBlock></Enter>
        <Enter delay={74} style={{marginTop: 12, display: 'flex', gap: 14, alignItems: 'center'}}>
          <Chip tone="warn" style={{fontSize: 22}}><Zap size={20} color={C.white} style={{flexShrink: 0}} /> 危害行为：客观上对法益制造危险</Chip>
          <Chip style={{fontSize: 22}}>生活行为：客观上没有危险</Chip>
        </Enter>
        <div data-final-knowledge="danger-trap-note" style={{marginTop: 14, backgroundColor: C.warnSoft, border: `3px dashed ${C.warn}`, borderRadius: 8, padding: '10px 14px'}}>
          <Enter delay={88} style={{fontSize: 22, fontWeight: 900}}>考试陷阱：主观恶意诱导（「希望乙被大枣噎死」）</Enter>
          <Enter delay={100} style={{marginTop: 6}}><Neg size={22}>先看客观行为是否创设危险——犯意≠危害行为</Neg></Enter>
        </div>
      </div>

      <div data-final-knowledge="danger-replace-pair" style={{position: 'absolute', left: 1074, top: 242, width: 702, height: 252, backgroundColor: C.white, border: `3px solid ${C.sand}`, borderRadius: 10, padding: '14px 18px'}}>
        <Enter delay={68}><LabelBlock ink size={25}>降低危险 vs 替代危险</LabelBlock></Enter>
        <div style={{marginTop: 10, border: `3px solid ${C.permit}`, borderRadius: 8, padding: '8px 12px'}}>
          <Enter delay={82} style={{fontSize: 21, fontWeight: 900, color: C.permit}}>降低危险（减轻原有危险）→ 不是危害行为</Enter>
          <Enter delay={92} style={{marginTop: 4, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>推开将砸头者致肩膀被砸·移伤者至路边</Enter>
        </div>
        <div style={{marginTop: 10, border: `3px solid ${C.warn}`, borderRadius: 8, padding: '8px 12px'}}>
          <Enter delay={104} style={{fontSize: 21, fontWeight: 900, color: C.warn}}>替代危险（开创新的较低危险）→ 是危害行为</Enter>
          <Enter delay={114} style={{marginTop: 4, fontSize: 20, fontWeight: 700, color: C.inkSoft}}>火场扔婴儿下楼致重伤 → 紧急避险·推定承诺排除违法→无罪</Enter>
        </div>
      </div>

      <div data-final-knowledge="risk-case-floor" style={{position: 'absolute', left: 0, right: 0, top: 518, bottom: 0, backgroundColor: C.sandSoft, border: `3px solid ${C.sand}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 16, padding: '0 22px'}}>
        <Enter delay={126} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <GraduationCap size={26} color={C.warn} />
          <LabelBlock ink size={24}>求仁得仁案</LabelBlock>
        </Enter>
        <Enter delay={138} style={{fontSize: 21, fontWeight: 700, color: C.inkSoft}}>狗剩明知小美有严重性病仍飞蛾扑火·感染轻伤 →</Enter>
        <Enter delay={148}><Chip tone="permit" style={{fontSize: 21}}>小美不对轻伤负责（不构成故意伤害罪·但构成传播性病罪）</Chip></Enter>
        <Enter delay={158}><SoftHi style={{fontSize: 21}}>狗剩自陷风险·自己负责</SoftHi></Enter>
      </div>
    </div>
  </Shell>
);

export const VictimSelfRiskForkScene = () => (
  <Shell code="02" title="被害人自陷风险·谁支配谁负责">
    <div data-layout="dominator-fork-board" data-visual-anchor="document-fork" data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp" data-visual-grammar="dominator-responsibility-fork,dual-capacity-test" data-focal-rule="the-result-belongs-to-who-dominates-the-danger-with-capacity" data-focal-channels="icon,connector,contrast,spatial" style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 92, display: 'flex', alignItems: 'center', gap: 14}}>
        <Enter delay={6}><LabelBlock size={26} color={C.rescue}>五星级考点 · 第一步：谁是危险的实行者·支配者？</LabelBlock></Enter>
        <Enter delay={16} style={{fontSize: 22, fontWeight: 800, color: C.inkSoft}}>两把尺：<Chip tone="rescue" style={{fontSize: 20}}><Compass size={20} color={C.ink} /> 认识能力</Chip><Chip tone="rescue" style={{fontSize: 20}}><LockOpen size={20} color={C.ink} /> 控制能力（意志自由）</Chip></Enter>
      </div>

      <div data-final-knowledge="fork-victim-dominates" style={{position: 'absolute', left: 0, top: 116, width: 876, height: 356, backgroundColor: C.white, border: `4px solid ${C.water}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={24} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Users size={28} color={C.water} />
          <LabelBlock size={25} color={C.water}>被害人支配 → 结果被害人自负责</LabelBlock>
        </Enter>
        <Enter delay={36} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>行为人只是教唆·帮助被害人自陷风险；未成年·精神病患者＝无能力</Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="fork-victim-self-row"><Enter delay={50} style={{display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap'}}><Chip tone="permit" style={{fontSize: 20, whiteSpace: 'normal'}}>乙清醒时吸食过量死亡 → 乙自负责</Chip><Chip tone="permit" style={{fontSize: 20, whiteSpace: 'normal'}}>送旱冰鞋盼摔伤·乙摔重伤 → 乙自负责</Chip></Enter></div>
          <div data-final-knowledge="fork-victim-actor-row"><Enter delay={64} style={{display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap'}}><Chip tone="warn" style={{fontSize: 20, whiteSpace: 'normal'}}>毒瘾发作无控制能力吸食死亡 → 甲故意杀人</Chip><Chip tone="warn" style={{fontSize: 20, whiteSpace: 'normal'}}>乙是未成年人 → 甲对死亡负责</Chip></Enter></div>
          <div data-final-knowledge="fork-victim-scare-row"><Enter delay={78}><Chip style={{fontSize: 20, whiteSpace: 'normal'}}>乙喝农药吓唬警察身亡 → 乙自陷风险·乙无罪</Chip></Enter></div>
        </div>
      </div>

      <div data-final-knowledge="fork-actor-dominates" style={{position: 'absolute', left: 900, top: 116, width: 876, height: 356, backgroundColor: C.white, border: `4px solid ${C.rescue}`, borderRadius: 10, padding: '14px 20px'}}>
        <Enter delay={30} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <Zap size={28} color={C.rescue} />
          <LabelBlock size={25} color={C.rescue}>行为人支配 → 结果行为人负责</LabelBlock>
        </Enter>
        <Enter delay={42} style={{marginTop: 10, fontSize: 21, fontWeight: 700, color: C.inkSoft}}>被害人同意行为人的危险行为；但<Neg size={20}>同意危险≠同意结果·对死亡重伤的承诺无效</Neg></Enter>
        <div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8}}>
          <div data-final-knowledge="fork-actor-drunk-row"><Enter delay={56} style={{display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap'}}><Chip tone="warn" style={{fontSize: 20, whiteSpace: 'normal'}}>醉驾男友车祸·女友死 → 乙负责·危险驾驶共犯＋交通肇事</Chip></Enter></div>
          <div data-final-knowledge="fork-actor-ferry-row"><Enter delay={70}><Chip tone="warn" style={{fontSize: 20, whiteSpace: 'normal'}}>暴风雨执意摆渡·船翻溺死 → 摆渡工过失致人死亡</Chip></Enter></div>
          <div data-final-knowledge="fork-actor-police-row"><Enter delay={84}><Chip tone="permit" style={{fontSize: 20, whiteSpace: 'normal'}}>醉驾者失去意志自由·警察令其驾车殉职 → 警察自负责</Chip></Enter></div>
        </div>
      </div>

      <div data-final-knowledge="fork-fire-rescue-rule" style={{position: 'absolute', left: 0, right: 0, top: 496, bottom: 0, backgroundColor: C.sandSoft, border: `3px solid ${C.sand}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px'}}>
        <Enter delay={98}><LabelBlock ink size={24}>救火案归责（多数说）· 看被救对象</LabelBlock></Enter>
        <Enter delay={110} style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <Chip tone="warn" style={{fontSize: 20, whiteSpace: 'normal'}}>救人·贵重物品 → 放火者负责</Chip>
          <Chip tone="wood" style={{fontSize: 20, whiteSpace: 'normal'}}>救普通物品 → 救援者自负责</Chip>
        </Enter>
      </div>
    </div>
  </Shell>
);
