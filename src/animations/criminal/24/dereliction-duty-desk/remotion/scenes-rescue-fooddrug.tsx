import type {ReactNode} from 'react';
import {Baby, Gavel, LifeBuoy, Pill, TriangleAlert, Users, Zap} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Mark, Neg, Panel, Shell, SoftHi, ThinU} from './kit';

export const RescueFooddrugTailScene = () => {
  const Link = ({x, y, w, h}: {x: number; y: number; w: number; h: number}) => (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h || 5, backgroundColor: C.ink, opacity: 0.55}} />
  );
  const FlowNode = ({delay, x, y, w, h, icon, tone, children}: {delay: number; x: number; y: number; w: number; h: number; icon: ReactNode; tone: string; children: ReactNode}) => (
    <Enter delay={delay} style={{position: 'absolute', left: x, top: y, width: w, minHeight: h}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.white, border: `3px solid ${tone}`, padding: '8px 12px', height: '100%', boxSizing: 'border-box'}}>
        <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
        <span style={{fontSize: 24, fontWeight: 830, color: C.ink, lineHeight: 1.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>{children}</span>
      </div>
    </Enter>
  );
  /* data-final-knowledge="rescue-fork" data-final-knowledge="rescue-crime" data-final-knowledge="fooddrug-tail" */
  return (
    <Shell code="05" kicker="第二节 · 不解救被拐卖、绑架妇女、儿童罪" title="不解救被拐卖、绑架妇女、儿童罪">
      <div
        data-layout="rescue-fork-graph"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="rescue-fork,rescue-crime,intent-chain"
        data-focal-rule="one-rescue-duty-forks-by-victim-type-into-the-specific-crime-or-into-intent-based-abuse-or-negligence-crimes"
        data-focal-channels="icon,connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="rescue-fork" style={{position: 'absolute', inset: 0}}>
          <FlowNode delay={14} x={560} y={60} w={660} h={150} icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward}>
            <span style={{fontSize: 26, fontWeight: 950, color: C.ward}}>负有解救职责的国家机关工作人员</span>
            <span>接到被拐卖、绑架的妇女、儿童及其亲属的解救要求，或者接到其他人的举报</span>
            <span style={{fontWeight: 900}}>不进行解救，造成严重后果</span>
          </FlowNode>
          <Link x={886} y={210} w={3} h={22} />
          <Link x={460} y={232} w={858} h={3} />
          <Link x={460} y={232} w={3} h={20} />
          <Link x={1318} y={232} w={3} h={20} />
          <FlowNode delay={30} x={200} y={252} w={520} h={134} icon={<LifeBuoy size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal}>
            <span style={{fontWeight: 950, color: C.seal}}>对象＝被拐卖、绑架的妇女、儿童</span>
            <Chip tone="steel">尚未卖掉</Chip>
            <Chip tone="steel">已经卖掉</Chip>
            <SoftHi style={{fontSize: 22}}>其中的"绑架"＝绑架型拐卖罪</SoftHi>
            <Neg size={22}>不是指绑架罪</Neg>
          </FlowNode>
          <Link x={458} y={386} w={3} h={18} />
          <FlowNode delay={44} x={1060} y={252} w={520} h={104} icon={<Baby size={24} color={C.white} strokeWidth={2.2} />} tone={C.steel}>
            <span style={{fontWeight: 950, color: C.steel}}>对象＝非法拘禁罪、绑架罪、拐骗儿童罪的被害人</span>
            <span>有解救职责</span>
          </FlowNode>
          <div data-visual-grammar="intent-chain">
            <Link x={1318} y={356} w={3} h={18} />
            <FlowNode delay={58} x={1080} y={374} w={480} h={64} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse}>
              <span style={{fontWeight: 900}}>故意不解救 →</span>
              <LabelBlock size={30} color={C.pulse}>滥用职权罪</LabelBlock>
            </FlowNode>
            <Link x={1318} y={438} w={3} h={34} />
            <Enter delay={72} style={{position: 'absolute', left: 1288, top: 440}}>
              <Chip tone="night">或者</Chip>
            </Enter>
            <FlowNode delay={86} x={1080} y={472} w={480} h={64} icon={<TriangleAlert size={24} color={C.white} strokeWidth={2.2} />} tone={C.steel}>
              <span style={{fontWeight: 900}}>过失不解救 →</span>
              <LabelBlock size={30} color={C.steel}>玩忽职守罪</LabelBlock>
              <span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>2023年试题</span>
            </FlowNode>
          </div>
        </Enter>
        <Enter delay={24} style={{position: 'absolute', left: 20, top: 56, width: 480, height: 200}}>
          <Panel tone={C.ward} watermark={<Users size={140} color={C.ward} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: C.ward, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><TriangleAlert size={24} color={C.white} strokeWidth={2.2} /></span>
              <span style={{fontSize: 22, fontWeight: 950, color: C.ward}}>易混辨析 · 对象里的“绑架”</span>
            </div>
            <div style={{fontSize: 20, fontWeight: 850, color: C.ink, lineHeight: 1.5}}>
              <SoftHi style={{fontSize: 20}}>“绑架”＝绑架型拐卖罪</SoftHi>（拐卖妇女、儿童罪的实行行为之一）<br />
              <Neg size={20}>不是指</Neg>第239条的<Mark color={C.ward}>绑架罪</Mark>——对象认准“被拐卖、绑架的妇女、儿童”
            </div>
          </Panel>
        </Enter>
        <Enter delay={36} marker="rescue-crime" style={{position: 'absolute', left: 180, top: 424, width: 560, height: 104}}>
          <Panel tone={C.seal} watermark={<LifeBuoy size={150} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px', display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize: 28, fontWeight: 950, color: C.seal, lineHeight: 1.4, borderLeft: `8px solid ${C.seal}`, paddingLeft: 14}}>不解救被拐卖、绑架妇女、儿童罪（第416条）</span>
          </Panel>
        </Enter>
        <Enter delay={100} style={{position: 'absolute', left: 1256, top: 40, width: 520, height: 240}}>
          <Panel tone={C.seal} watermark={<LifeBuoy size={130} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: C.seal, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><LifeBuoy size={24} color={C.white} strokeWidth={2.2} /></span>
              <span style={{fontSize: 22, fontWeight: 950, color: C.seal}}>第416条 · 条文原文</span>
            </div>
            <div style={{fontSize: 20, fontWeight: 850, color: C.ink, lineHeight: 1.55}}>
              对被拐卖、绑架的妇女、儿童<Mark color={C.seal}>负有解救职责</Mark>的国家机关工作人员，接到<b>解救要求或者举报</b>，而<Mark color={C.seal}>不进行解救</Mark>，造成严重后果的，处<ThinU color={C.seal}>五年以下有期徒刑或者拘役</ThinU>
            </div>
          </Panel>
        </Enter>
        <Enter delay={112} marker="fooddrug-tail" style={{position: 'absolute', left: 180, top: 548, width: 560, height: 172}}>
          <Panel tone={C.bronze} watermark={<Pill size={140} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 11, backgroundColor: C.bronze, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Pill size={26} color={C.white} strokeWidth={2.2} /></span>
              <span style={{fontSize: 24, fontWeight: 950, color: C.bronze}}>食品、药品监管渎职罪（第408条之一）</span>
            </div>
            <div style={{fontSize: 20, fontWeight: 850, color: C.ink, lineHeight: 1.5}}>
              主体＝负有<b style={{color: C.bronze}}>食品药品安全监督管理职责</b>的国家机关工作人员<br />
              行为＝<Chip tone="bronze">滥用职权</Chip>或<Chip tone="bronze">玩忽职守</Chip>，造成严重后果或有其他严重情节
            </div>
          </Panel>
        </Enter>
        <Enter delay={128} style={{position: 'absolute', left: 776, top: 548, width: 1000, height: 172}}>
          <Panel tone={C.steel} watermark={<Gavel size={130} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px'}}>
            <div style={{fontSize: 21, fontWeight: 950, color: C.steel, marginBottom: 6}}>本章核心罪名速记 · 主观对照（笔记章末表）</div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 14px'}}>
              {[
                ['滥用职权罪', '故意', C.seal],
                ['玩忽职守罪', '过失', C.steel],
                ['徇私枉法罪', '故意＋徇私动机', C.pulse],
                ['私放在押人员罪', '故意', C.ward],
                ['徇私舞弊不移交刑事案件罪', '故意＋徇私动机', C.bronze],
                ['帮助犯罪分子逃避处罚罪', '故意', C.seal],
              ].map(([name, intent, tone], index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.white, borderLeft: `6px solid ${tone}`, padding: '4px 10px'}}>
                  <span style={{fontSize: 21, fontWeight: 920, color: C.ink}}>{name}</span>
                  <span style={{fontSize: 18, fontWeight: 900, color: tone}}>{intent}</span>
                </div>
              ))}
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
