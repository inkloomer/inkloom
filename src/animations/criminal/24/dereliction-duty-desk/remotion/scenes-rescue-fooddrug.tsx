import type {ReactNode} from 'react';
import {Ban, BookOpen, Gavel, LifeBuoy, Pill, Siren, TriangleAlert, Users, Zap} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Neg, OfficialStamp, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const RescueFooddrugTailScene = () => {
  const Row = ({icon, tone, title, children}: {icon: ReactNode; tone: string; title: string; children: ReactNode}) => (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, backgroundColor: C.deskDeep, borderLeft: `6px solid ${tone}`, padding: '8px 12px'}}>
      <span style={{flexShrink: 0, width: 44, height: 44, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
      <span style={{fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
        <span style={{fontWeight: 950, color: tone, whiteSpace: 'nowrap'}}>{title}</span>
        {children}
      </span>
    </div>
  );
  const RecapRow = ({delay, icon, tone, crime, verdict}: {delay: number; icon: ReactNode; tone: string; crime: string; verdict: ReactNode}) => (
    <Enter delay={delay}>
      <div style={{display: 'flex', alignItems: 'center', gap: 10, backgroundColor: C.deskDeep, borderLeft: `6px solid ${tone}`, padding: '7px 12px'}}>
        <span style={{flexShrink: 0, width: 40, height: 40, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
        <span style={{fontSize: 22, fontWeight: 950, color: C.ink, whiteSpace: 'nowrap'}}>{crime}</span>
        <span style={{flex: 1}} />
        {verdict}
      </div>
    </Enter>
  );
  /* data-final-knowledge="rescue-panel" data-final-knowledge="fooddrug-panel" data-final-knowledge="recap-panel" */
  return (
    <Shell code="05" kicker="第二节 · 普通罪名收尾" title="不解救被拐卖、绑架妇女、儿童罪·食品、药品监管渎职罪">
      <div
        data-layout="rescue-fooddrug-triptych"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="rescue-panel,fooddrug-panel,recap-panel"
        data-focal-rule="rescue-duty-failure-splits-by-intent-while-fooddrug-supervision-covers-both-abuse-and-negligence"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="rescue-panel" style={{position: 'absolute', left: 0, top: 0, width: 600, height: 762}}>
          <Panel tone={C.seal} watermark={<LifeBuoy size={170} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <TabChip tone={C.seal} icon={<LifeBuoy size={24} color={C.white} strokeWidth={2.2} />}>不解救被拐卖、绑架妇女、儿童罪（第416条）</TabChip>
            <Row icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="主体＝">
              <ThinU color={C.seal}>负有解救职责</ThinU>的国家机关工作人员
            </Row>
            <Row icon={<LifeBuoy size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="行为＝">
              接到解救要求或者举报，不进行解救，造成严重后果
            </Row>
            <Row icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="对象＝">
              被拐卖、绑架的妇女、儿童
              <Chip tone="steel">尚未卖掉</Chip>
              <Chip tone="steel">已经卖掉</Chip>
            </Row>
            <Enter delay={52}>
              <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10}}>
                <SoftHi style={{fontSize: 22}}>其中的"绑架"＝绑架型拐卖罪</SoftHi>
                <Neg size={22}>不是指绑架罪</Neg>
              </div>
            </Enter>
            <Enter delay={62}>
              <div style={{fontSize: 22, fontWeight: 950, color: C.ink, lineHeight: 1.5}}>对非法拘禁罪、绑架罪、拐骗儿童罪的被害人，有解救职责：</div>
            </Enter>
            <Row icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="故意不解救 →">
              <LabelBlock size={26} color={C.pulse}>滥用职权罪</LabelBlock>
            </Row>
            <Row icon={<TriangleAlert size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="过失不解救 →">
              <LabelBlock size={26} color={C.steel}>玩忽职守罪</LabelBlock>
              <span style={{fontSize: 18, fontWeight: 800, color: C.inkSoft}}>2023年试题</span>
            </Row>
          </Panel>
        </Enter>
        <Enter delay={18} marker="fooddrug-panel" style={{position: 'absolute', left: 624, top: 0, width: 576, height: 762}}>
          <Panel tone={C.steel} watermark={<Pill size={170} color={C.steel} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12}}>
            <TabChip tone={C.steel} icon={<Pill size={24} color={C.white} strokeWidth={2.2} />}>食品、药品监管渎职罪（第408条之一）</TabChip>
            <Row icon={<Pill size={26} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="主体＝">
              负有食品药品安全监督管理职责的国家机关工作人员
            </Row>
            <Row icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="行为＝">
              <Chip tone="seal">滥用职权</Chip>
              <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>或者</span>
              <Chip tone="steel">玩忽职守</Chip>
            </Row>
            <Enter delay={58}>
              <LabelBlock size={30} color={C.seal}>造成严重后果或者有其他严重情节</LabelBlock>
            </Enter>
            <span style={{flex: 1}} />
            <Enter delay={70}>
              <div style={{backgroundColor: C.bronzeSoft, borderLeft: `6px solid ${C.bronze}`, padding: '10px 14px', fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.6}}>
                负有食品药品安全监督管理职责的国家机关工作人员，滥用职权或者玩忽职守，造成严重后果或者有其他严重情节
              </div>
            </Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="recap-panel" style={{position: 'absolute', left: 1224, top: 0, right: 0, bottom: 0}}>
          <Panel tone={C.bronze} watermark={<Gavel size={160} color={C.bronze} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.bronze} icon={<BookOpen size={24} color={C.white} strokeWidth={2.2} />}>本章核心罪名速记</TabChip>
            <RecapRow delay={44} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} crime="滥用职权罪" verdict={<Chip tone="seal">故意</Chip>} />
            <RecapRow delay={52} icon={<TriangleAlert size={24} color={C.white} strokeWidth={2.2} />} tone={C.steel} crime="玩忽职守罪" verdict={<Chip tone="steel">过失</Chip>} />
            <RecapRow delay={60} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} crime="徇私枉法罪" verdict={<Chip tone="seal">故意＋徇私动机</Chip>} />
            <RecapRow delay={68} icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} crime="私放在押人员罪" verdict={<Chip tone="seal">故意</Chip>} />
            <RecapRow delay={76} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} crime="徇私舞弊不移交刑事案件罪" verdict={<Chip tone="seal">故意＋徇私动机</Chip>} />
            <RecapRow delay={84} icon={<Siren size={24} color={C.white} strokeWidth={2.2} />} tone={C.bronze} crime="帮助犯罪分子逃避处罚罪" verdict={<Chip tone="seal">故意</Chip>} />
            <RecapRow delay={92} icon={<Pill size={24} color={C.white} strokeWidth={2.2} />} tone={C.steel} crime="食品、药品监管渎职罪" verdict={<span style={{fontSize: 22, fontWeight: 900, color: C.steel, whiteSpace: 'nowrap'}}>滥用职权或玩忽职守</span>} />
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 4}}>
              <Enter delay={104}><OfficialStamp delay={104} tone="bronze">主观要件速记</OfficialStamp></Enter>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
