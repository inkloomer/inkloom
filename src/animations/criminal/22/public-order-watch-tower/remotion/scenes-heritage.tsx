import type {ReactNode} from 'react';
import {HardHat, Landmark, Mountain, Ship, Stethoscope, Users} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const HeritageBorderHealthScene = () => {
  /* data-final-knowledge="relic-trade-lane" data-final-knowledge="tomb-dig-rule" data-final-knowledge="border-line-gate" data-final-knowledge="health-care-lane" */
  return (
    <Shell code="10" kicker="第三四五节" title="妨害文物管理·国(边)境管理·危害公共卫生">
      <div
        data-layout="heritage-border-health-lanes"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="relic-trade-lane,tomb-dig-rule,border-line-gate,health-care-lane"
        data-focal-rule="a-relic-token-flows-dig-sell-to-two-crimes-while-migrants-and-doctors-tokens-pass-or-bounce-at-qualification-gates"
        data-focal-channels="icon,connector,contrast,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="relic-trade-lane" style={{position: 'absolute', left: 0, top: 0, width: 1000, height: 424}}>
          <Panel tone={C.gold} watermark={<Landmark size={150} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.gold} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>倒卖文物罪（第326条）· 文物流转</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
              <span data-stateful-source="relic-token"><Chip tone="night"><Mountain size={20} color={C.white} strokeWidth={2.2} />国家禁止经营的文物</Chip></span>
              <GateFlash delay={96} tone={C.gold} style={{backgroundColor: C.white, border: `3px solid ${C.gold}`, padding: '2px 10px', fontSize: 20, fontWeight: 950, color: C.gold, whiteSpace: 'nowrap'}}>出售或为出售而收购、运输、储存</GateFlash>
              <Path color={C.gold} delay={60} span={16} style={{position: 'relative', width: 40, height: 4}} />
              <div data-stateful-terminal="relic-token">
                <GateFlash delay={110} tone={C.gold} style={{backgroundColor: C.white, border: `3px solid ${C.gold}`, padding: '2px 10px', fontSize: 20, fontWeight: 950, color: C.gold, whiteSpace: 'nowrap'}}>倒卖文物罪</GateFlash>
              </div>
            </div>
            <div style={{position: 'relative', height: 56, backgroundColor: C.white, border: `2px dashed ${C.ghost}`}}>
              <Mover delay={40} span={34} fromX={0} toX={560} fadeAt={130} style={{position: 'absolute', left: 14, top: 8, zIndex: 3}}>
                <Chip tone="gold"><Landmark size={20} color={C.white} strokeWidth={2.2} />牟利目的（不要求实现）</Chip>
              </Mover>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>倒卖不要求"买进＋卖出"：出售<b style={{color: C.gold}}>自己收藏</b>的国家禁止经营的文物 → 构成本罪</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>盗窃禁止经营文物又出售 → <b style={{color: C.crimson}}>盗窃罪＋倒卖文物罪，并罚</b></div>
            </div>
            <div data-final-knowledge="tomb-dig-rule" style={{display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42, marginTop: 'auto'}}>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
                <Chip tone="crimson">盗掘古墓葬罪（第328条）：</Chip>
                <span>未经国家文物主管部门批准私自挖掘——集<b style={{color: C.crimson}}>盗窃与损毁于一体</b></span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
                <Chip tone="white">掘中盗窃文物 → <Neg size={19}>不再定盗窃罪</Neg> 作为法定刑升格条件（2010）</Chip>
                <Chip tone="white">掘中损毁文物 → <Neg size={19}>不再定故意损毁文物罪</Neg> 作为升格条件</Chip>
                <Chip tone="crimson">此后出售 → 又构成倒卖文物罪，与盗掘古墓葬罪并罚</Chip>
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="border-line-gate" style={{position: 'absolute', left: 1024, top: 0, width: 752, height: 424}}>
          <Panel tone={C.navy} watermark={<Ship size={150} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.navy} icon={<Ship size={24} color={C.white} strokeWidth={2.2} />}>组织·运送他人偷越国(边)境罪（318/321）</TabChip>
            <div style={{position: 'relative', height: 96}}>
              <div data-stateful-source="migrant-token" style={{position: 'absolute', left: 0, top: 12}}>
                <Chip tone="night"><Users size={20} color={C.white} strokeWidth={2.2} />偷越者队伍</Chip>
              </div>
              <Path color={C.navy} delay={70} span={20} style={{position: 'absolute', left: 170, top: 40, width: 420, height: 4}} />
              <Mover delay={76} span={28} fromX={0} toX={380} fadeAt={150} style={{position: 'absolute', left: 14, top: 12, zIndex: 3}}>
                <Chip tone="navy"><Ship size={20} color={C.white} strokeWidth={2.2} />组织 / 运送</Chip>
              </Mover>
              <GateFlash delay={108} tone={C.pine} style={{position: 'absolute', left: 600, top: 14, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '4px 12px', fontSize: 21, fontWeight: 950, color: C.pine}}>越过国(边)境线 → 既遂（2022）</GateFlash>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>罪数·结合犯：本罪＋<b style={{color: C.navy}}>妨害公务罪</b> ＝ 本罪（加重处罚）</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>本罪＋<b style={{color: C.navy}}>非法拘禁罪</b> ＝ 本罪（加重处罚）</div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>本罪＋其他犯罪 → <b style={{color: C.crimson}}>数罪并罚</b></div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} marker="health-care-lane" style={{position: 'absolute', left: 0, top: 440, right: 0, bottom: 0}}>
          <Panel tone={C.pine} watermark={<Stethoscope size={160} color={C.pine} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.pine} icon={<Stethoscope size={24} color={C.white} strokeWidth={2.2} />}>危害公共卫生 · 医疗事故罪（335）vs 非法行医罪（336）</TabChip>
            <div style={{display: 'flex', gap: 10}}>
              <div style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.pine}`, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
                <b style={{color: C.pine}}>医疗事故罪：</b>医务人员（特殊主体）由于<b style={{color: C.pine}}>严重不负责任</b>，造成就诊人死亡或严重损害身体健康；作为或不作为（睡着未检查病情）；主观是<b style={{color: C.pine}}>过失</b>（业务过失，往往重大过失）；三年以下有期徒刑或者拘役
              </div>
              <div style={{flex: 1, backgroundColor: C.white, border: `3px solid ${C.torch}`, padding: '6px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.42}}>
                <b style={{color: C.torch}}>非法行医罪：</b>主体＝<b style={{color: C.torch}}>未取得医生执业资格的人</b>；典型<b style={{color: C.torch}}>职业犯</b>（要求反复、持续实施的意思）；病人承诺接受治疗不影响定罪；过失致人死亡 → <SoftHi>结果加重犯</SoftHi>，只定非法行医罪加重处罚，不再定过失致人死亡罪（2013）
              </div>
            </div>
            <div data-stateful-terminal="migrant-token" style={{display: 'none'}}>{''}</div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4, marginTop: 'auto'}}>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                <b style={{color: C.pine}}>资格闸门：</b>有医生执业资格的人<Neg size={19}>不可能成为本罪实行犯</Neg>，但可构成<b style={{color: C.pine}}>教唆犯、帮助犯</b>（甲教唆无资格的乙行医并帮助 → 乙构成本罪，甲是教唆犯＋帮助犯）
              </div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                有资格者私人诊所兼职 <Neg size={19}>不构成本罪</Neg> → 致人重伤死亡可构成<b style={{color: C.pine}}>医疗事故罪</b>
              </div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}>
                "颇懂医术案"：乡村教师偶然为人治病 <Neg size={19}>无反复持续意思</Neg> → <Neg size={19}>不成立非法行医罪</Neg>，构成<b style={{color: C.crimson}}>过失致人死亡罪</b>
              </div>
              <div style={{backgroundColor: C.white, border: '2px solid rgba(35,38,31,0.25)', padding: '4px 10px'}}><HardHat size={18} color={C.pine} strokeWidth={2.2} /> 药剂师无资格长期坐堂治病 → 非法行医罪（职业犯）</div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
