import type {ReactNode} from 'react';
import {Coins, FileText, Gavel, Landmark, Scale, SearchCheck, Users, Wallet} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, Panel, Shell, TabChip, ThinU, WaxStamp} from './kit';

export const UnexplainedAssetLedgerScene = () => {
  const Link = ({x, y, w, h}: {x: number; y: number; w: number; h: number}) => (
    <div style={{position: 'absolute', left: x, top: y, width: w, height: h || 3, backgroundColor: C.ink, opacity: 0.45}} />
  );
  const FlowNode = ({delay, x, y, w, h, icon, tone, children}: {delay: number; x: number; y: number; w: number; h: number; icon: ReactNode; tone: string; children: ReactNode}) => (
    <Enter delay={delay} style={{position: 'absolute', left: x, top: y, width: w, minHeight: h}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.white, border: `3px solid ${tone}`, padding: '6px 10px', height: '100%', boxSizing: 'border-box'}}>
        <span style={{flexShrink: 0, width: 40, height: 40, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
        <span style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.45, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6}}>{children}</span>
      </div>
    </Enter>
  );
  /* data-final-knowledge="statute-plaque" data-final-knowledge="explanation-fork" data-final-knowledge="postverdict-fork" data-final-knowledge="motto-plaque" */
  return (
    <Shell code="07" kicker="第五节 · 巨额财产来源不明罪" title="巨额财产来源不明罪">
      <div
        data-layout="unexplained-asset-flow"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="statute-plaque,explanation-fork,postverdict-fork,motto-plaque"
        data-focal-rule="money-gap-is-only-precondition-the-crime-completes-when-explanation-fails-and-post-verdict-findings-fork-into-maintain-or-re-convict"
        data-focal-channels="icon,connector,contrast,enclosure"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="statute-plaque" style={{position: 'absolute', left: 0, top: 0, width: 440, height: 762}}>
          <Panel tone={C.rouge} watermark={<Wallet size={150} color={C.rouge} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <TabChip tone={C.rouge} icon={<Wallet size={24} color={C.white} strokeWidth={2.2} />}>第395条第1款 · 条文牌</TabChip>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.scrollDeep, borderLeft: `6px solid ${C.indigo}`, padding: '6px 12px'}}>
              <Users size={28} color={C.white} strokeWidth={2.2} style={{flexShrink: 0, width: 40, height: 40, borderRadius: 10, backgroundColor: C.indigo, padding: 6}} />
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>主体＝国家工作人员</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: C.scrollDeep, borderLeft: `6px solid ${C.ward}`, padding: '8px 12px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Scale size={28} color={C.white} strokeWidth={2.2} style={{flexShrink: 0, width: 40, height: 40, borderRadius: 10, backgroundColor: C.ward, padding: 6}} />
                <span style={{fontSize: 22, fontWeight: 900, color: C.ward}}>法定刑</span>
              </div>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.55}}>差额部分以非法所得论：五年以下有期徒刑或者拘役</span>
              <span style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.55}}>差额特别巨大：五年以上十年以下有期徒刑</span>
            </div>
            <Enter delay={64}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Landmark size={30} color={C.patina} strokeWidth={2} />
                <ThinU color={C.patina}>财产的差额部分予以追缴</ThinU>
              </div>
            </Enter>
          </Panel>
        </Enter>
        <div data-visual-grammar="explanation-fork" style={{position: 'absolute', left: 464, right: 0, top: 0, height: 576}}>
          <FlowNode delay={14} x={516} y={0} w={280} h={50} icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.indigo}>
            <span style={{fontWeight: 950, color: C.indigo}}>国家工作人员</span>
          </FlowNode>
          <Link x={655} y={50} w={3} h={16} />
          <FlowNode delay={26} x={416} y={66} w={480} h={96} icon={<Wallet size={24} color={C.white} strokeWidth={2.2} />} tone={C.gold}>
            <span style={{fontWeight: 900}}>财产、支出明显超过合法收入，差额巨大</span>
            <Neg size={22}>不是实行行为，而是前提条件</Neg>
          </FlowNode>
          <Link x={655} y={162} w={3} h={16} />
          <FlowNode delay={38} x={436} y={178} w={440} h={58} icon={<SearchCheck size={24} color={C.white} strokeWidth={2.2} />} tone={C.patina}>
            <span style={{fontWeight: 900}}>责令说明来源，不能说明来源</span>
            <Chip tone="rouge">真正不作为犯</Chip>
          </FlowNode>
          <Link x={655} y={236} w={3} h={16} />
          <Link x={226} y={252} w={860} h={3} />
          <Link x={226} y={252} w={3} h={16} />
          <Link x={1086} y={252} w={3} h={16} />
          <FlowNode delay={52} x={56} y={268} w={340} h={84} icon={<FileText size={24} color={C.white} strokeWidth={2.2} />} tone={C.patina}>
            <Chip tone="night">一审判决前</Chip>
            <span>本人说明了其合法来源</span>
            <LabelBlock size={26} color={C.patina}>不构成本罪</LabelBlock>
          </FlowNode>
          <FlowNode delay={52} x={916} y={268} w={340} h={84} icon={<Coins size={24} color={C.white} strokeWidth={2.2} />} tone={C.gold}>
            <Chip tone="night">不能说明来源</Chip>
            <span>差额部分以非法所得论</span>
            <LabelBlock size={26} color={C.gold}>认定为本罪</LabelBlock>
          </FlowNode>
          <div data-visual-grammar="postverdict-fork">
            <Link x={1085} y={352} w={3} h={18} />
            <FlowNode delay={70} x={966} y={370} w={240} h={48} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.rouge}>
              <span style={{fontWeight: 950, color: C.rouge}}>判决成立本罪</span>
            </FlowNode>
            <Link x={1085} y={418} w={3} h={16} />
            <Link x={626} y={434} w={425} h={3} />
            <Link x={626} y={434} w={3} h={16} />
            <Link x={1051} y={434} w={3} h={16} />
            <FlowNode delay={86} x={476} y={450} w={300} h={110} icon={<FileText size={24} color={C.white} strokeWidth={2.2} />} tone={C.indigo}>
              <span>后来查清：来源合法</span>
              <LabelBlock size={24} color={C.indigo}>原判决必须维持</LabelBlock>
            </FlowNode>
            <FlowNode delay={86} x={816} y={450} w={470} h={110} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.rouge}>
              <span>后来查清：来源非法</span>
              <LabelBlock size={24} color={C.rouge}>按非法来源的性质再次定罪</LabelBlock>
              <Neg size={22}>不能推翻原判决</Neg>
            </FlowNode>
          </div>
        </div>
        <Enter delay={44} marker="motto-plaque" style={{position: 'absolute', left: 464, right: 0, top: 584, bottom: 0}}>
          <Panel tone={C.gold} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
              <TabChip tone={C.gold} icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}>记忆口诀</TabChip>
              <span style={{flex: 1}} />
              <Enter delay={70}><WaxStamp delay={70} tone="rouge">第395条第1款</WaxStamp></Enter>
            </div>
            <Enter delay={62}>
              <span style={{fontSize: 30, fontWeight: 950, color: C.ink}}>一审前说清不犯，判后查清不改判；合法维持非法加</span>
            </Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
