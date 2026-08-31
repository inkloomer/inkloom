import type {ReactNode} from 'react';
import {Building2, Footprints, Gavel, Landmark, Layers, Megaphone, Siren, Users} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, OfficialStamp, Panel, Path, Shell, TabChip, ThinU} from './kit';

export const AidEscapeClassificationScene = () => {
  const FactNode = ({icon, tone, title, children}: {icon: ReactNode; tone: string; title: string; children: ReactNode}) => (
    <span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
      <span style={{flexShrink: 0, width: 42, height: 42, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
      <span style={{fontSize: 22, fontWeight: 800, color: C.ink, display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: 8}}>
        <span style={{fontWeight: 950, color: tone}}>{title}</span>
        {children}
      </span>
    </span>
  );
  const ActionSlot = ({delay, fromX, width, tone, children}: {delay: number; fromX: number; width: number; tone: string; children: ReactNode}) => (
    <div style={{position: 'relative', height: 50, flexShrink: 0}}>
      <div style={{position: 'absolute', inset: 0, border: `2px dashed ${C.ghost}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 800, color: C.inkSoft, letterSpacing: 3}}>行为流入</div>
      <Mover delay={delay} span={26} fromX={fromX} toX={0} style={{position: 'absolute', left: 6, top: 3, zIndex: 3}}>
        <span style={{display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: `${tone}26`, border: `3px solid ${tone}`, padding: '3px 10px', fontSize: 21, fontWeight: 900, color: C.ink, whiteSpace: 'nowrap', width}}>{children}</span>
      </Mover>
    </div>
  );
  const MatrixCell = ({actionDelay, actionFromX, actionWidth, action, delay, h, icon, identity, marker, terminal, tone, verdict, w, x, y}: {
    action: ReactNode;
    actionDelay: number;
    actionFromX: number;
    actionWidth: number;
    delay: number;
    h: number;
    icon: ReactNode;
    identity: ReactNode;
    marker?: string;
    terminal?: string;
    tone: string;
    verdict: ReactNode;
    w: number;
    x: number;
    y: number;
  }) => (
    <div data-final-knowledge={marker} style={{position: 'absolute', left: x, top: y, width: w, height: h}}>
      <GateFlash delay={delay} tone={tone} style={{height: '100%', boxSizing: 'border-box', backgroundColor: C.white, border: `3px solid ${tone}`, borderLeft: `8px solid ${tone}`, padding: '9px 12px', display: 'flex', flexDirection: 'column', gap: 5}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{flexShrink: 0, width: 42, height: 42, borderRadius: 10, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
          <span style={{fontSize: 22, fontWeight: 900, color: C.ink, lineHeight: 1.3}}>{identity}</span>
        </div>
        <ActionSlot delay={actionDelay} fromX={actionFromX} width={actionWidth} tone={tone}>{action}</ActionSlot>
        <div data-stateful-terminal={terminal} style={{marginTop: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6}}>{verdict}</div>
      </GateFlash>
    </div>
  );
  /* data-final-knowledge="aid-escape-plaque" data-final-knowledge="jurisdiction-matrix" data-final-knowledge="subject-expansion" data-final-knowledge="counterpart-crimes" */
  return (
    <Shell code="04" kicker="第二节 · 帮助犯罪分子逃避处罚罪 · 主体分类" title="帮助犯罪分子逃避处罚罪·主体分类">
      <div
        data-layout="aid-escape-jurisdiction-matrix"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="aid-escape-plaque,jurisdiction-matrix,subject-expansion,counterpart-crimes"
        data-focal-rule="case-info-tokens-flow-from-the-aid-plaque-down-the-identity-rail-into-matrix-cells-identity-position-decides-which-crime-or-both-apply"
        data-focal-channels="icon,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="aid-escape-plaque" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 190}}>
          <Panel tone={C.seal} watermark={<Megaphone size={170} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '8px 18px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center'}}>
            <TabChip tone={C.seal} icon={<Siren size={24} color={C.white} strokeWidth={2.2} />}>帮助犯罪分子逃避处罚罪（第417条）</TabChip>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24}}>
              <span data-stateful-source="identity-token" style={{display: 'inline-flex'}}>
                <FactNode icon={<Siren size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="主体＝">有查禁犯罪活动职责的国家机关工作人员</FactNode>
              </span>
              <span data-stateful-source="tipoff-token" style={{display: 'inline-flex'}}>
                <FactNode icon={<Megaphone size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="行为＝">向犯罪分子通风报信、提供便利</FactNode>
              </span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20}}>
              <FactNode icon={<Footprints size={24} color={C.white} strokeWidth={2.2} />} tone={C.steel} title="帮助逃避＝">
                <Chip tone="steel">侦查</Chip>
                <Chip tone="steel">追诉</Chip>
                <Chip tone="steel">定罪</Chip>
                <Chip tone="steel">重罪重刑处罚</Chip>
                <Chip tone="steel">刑罚执行</Chip>
                <ThinU>也即，帮助逃避受到刑事处罚</ThinU>
              </FactNode>
              <FactNode icon={<Layers size={24} color={C.white} strokeWidth={2.2} />} tone={C.bronze} title="罪数＝想象竞合：">
                <Chip tone="white">窝藏罪</Chip>
                <Chip tone="white">帮助毁灭、伪造证据罪</Chip>
                <Chip tone="white">妨害作证罪</Chip>
                <Chip tone="white">掩饰、隐瞒犯罪所得罪（2017）</Chip>
              </FactNode>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="jurisdiction-matrix" style={{position: 'absolute', left: 0, right: 0, top: 206, bottom: 0}}>
          <span style={{position: 'absolute', right: 210, top: 300, opacity: 0.08, pointerEvents: 'none'}}><Landmark size={170} color={C.night} strokeWidth={1.6} /></span>
          <div style={{position: 'absolute', left: 0, top: 0, width: 150, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: C.deskDeep, border: `3px solid ${C.ink}`, fontSize: 20, fontWeight: 950, color: C.ink}}>主体 ╲ 定性</div>
          <div style={{position: 'absolute', left: 162, top: 0, width: 538, height: 46}}>
            <div style={{height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.night, color: C.white, fontSize: 22, fontWeight: 950, padding: '6px 12px', justifyContent: 'center'}}><Gavel size={22} color={C.white} strokeWidth={2.2} />徇私枉法罪 · 成立</div>
          </div>
          <div style={{position: 'absolute', left: 712, top: 0, width: 538, height: 46}}>
            <div style={{height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.deskDeep, border: `3px solid ${C.ink}`, color: C.ink, fontSize: 22, fontWeight: 950, padding: '6px 12px', justifyContent: 'center'}}><Gavel size={22} color={C.ink} strokeWidth={2.2} />徇私枉法罪 · 不成立</div>
          </div>
          <div style={{position: 'absolute', left: 1262, top: 0, width: 514, height: 46}}>
            <div style={{height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: C.deskDeep, border: `3px dashed ${C.ink}`, color: C.ink, fontSize: 22, fontWeight: 950, padding: '6px 12px', justifyContent: 'center'}}><Building2 size={22} color={C.ink} strokeWidth={2.2} />主体身份不同 · 罪名不同</div>
          </div>
          <GateFlash delay={84} tone={C.seal} style={{position: 'absolute', left: 0, top: 52, width: 150, height: 200, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, backgroundColor: C.seal, border: `3px solid ${C.seal}`, color: C.white, fontSize: 22, fontWeight: 950, padding: 10, textAlign: 'center'}}>
            <Siren size={26} color={C.white} strokeWidth={2.2} />
            <span>帮助犯罪分子逃避处罚罪 · 成立</span>
          </GateFlash>
          <GateFlash delay={178} tone={C.steel} style={{position: 'absolute', left: 0, top: 258, width: 150, height: 232, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, backgroundColor: C.steel, border: `3px solid ${C.steel}`, color: C.white, fontSize: 22, fontWeight: 950, padding: 10, textAlign: 'center'}}>
            <Siren size={26} color={C.white} strokeWidth={2.2} />
            <span>帮助犯罪分子逃避处罚罪 · 不成立</span>
          </GateFlash>
          <Path color={C.seal} delay={54} span={26} vertical thickness={5} style={{position: 'absolute', left: 73, top: 46, height: 206}} />
          <Path color={C.steel} delay={148} span={26} vertical thickness={5} style={{position: 'absolute', left: 73, top: 252, height: 238}} />
          <Mover delay={56} span={30} fromY={-58} toY={126} style={{position: 'absolute', left: 6, top: 126, zIndex: 4}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: C.pulse, border: `3px solid ${C.white}`, padding: '5px 7px', fontSize: 20, fontWeight: 950, color: C.white}}><Megaphone size={20} color={C.white} strokeWidth={2.2} />通风报信</span>
          </Mover>
          <Mover delay={150} span={30} fromY={-58} toY={352} style={{position: 'absolute', left: 6, top: 352, zIndex: 4}}>
            <span style={{display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: C.ward, border: `3px solid ${C.white}`, padding: '5px 7px', fontSize: 20, fontWeight: 950, color: C.white}}><Siren size={20} color={C.white} strokeWidth={2.2} />身份分流</span>
          </Mover>
          <MatrixCell
            delay={128}
            tone={C.seal}
            x={162}
            y={52}
            w={538}
            h={200}
            icon={<Users size={24} color={C.white} strokeWidth={2.2} />}
            identity="承办案件的司法工作人员"
            action={<><Megaphone size={20} color={C.seal} strokeWidth={2.4} />利用办案信息向犯罪人通风报信</>}
            actionDelay={104}
            actionFromX={-105}
            actionWidth={484}
            terminal="tipoff-token"
            verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap'}}><LabelBlock size={22} color={C.seal}>帮助犯罪分子逃避处罚罪＋徇私枉法罪</LabelBlock><Chip tone="bronze">想象竞合，择一重罪论处</Chip></span>}
          />
          <MatrixCell
            delay={148}
            tone={C.pulse}
            x={712}
            y={52}
            w={538}
            h={200}
            icon={<Siren size={24} color={C.white} strokeWidth={2.2} />}
            identity="不承办案件，但负有查禁职责的司法工作人员"
            action={<><Megaphone size={20} color={C.pulse} strokeWidth={2.4} />利用职权获取案件信息并通风报信</>}
            actionDelay={124}
            actionFromX={-655}
            actionWidth={484}
            verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap'}}><LabelBlock size={22} color={C.pulse}>仅帮助犯罪分子逃避处罚罪</LabelBlock><Neg size={21}>不成立徇私枉法罪</Neg></span>}
          />
          <MatrixCell
            delay={168}
            tone={C.bronze}
            x={1262}
            y={52}
            w={514}
            h={200}
            marker="subject-expansion"
            icon={<Landmark size={24} color={C.white} strokeWidth={2.2} />}
            identity={<>监察机关中负责调查职务犯罪的人员<br />海关中负责侦查走私犯罪的人员</>}
            action={<><Landmark size={20} color={C.bronze} strokeWidth={2.4} />利用职权帮助犯罪人逃避处罚</>}
            actionDelay={144}
            actionFromX={-1205}
            actionWidth={456}
            verdict={<LabelBlock size={24} color={C.bronze}>属于徇私枉法罪的主体</LabelBlock>}
          />
          <MatrixCell
            delay={214}
            tone={C.steel}
            x={162}
            y={258}
            w={538}
            h={232}
            marker="counterpart-crimes"
            icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}
            identity="承办案件的司法工作人员"
            action={<><Gavel size={20} color={C.steel} strokeWidth={2.4} />法官故意把有罪判成无罪</>}
            actionDelay={190}
            actionFromX={-105}
            actionWidth={484}
            verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap'}}><LabelBlock size={22} color={C.steel}>仅徇私枉法罪</LabelBlock><Neg size={21}>不成立帮助犯罪分子逃避处罚罪</Neg></span>}
          />
          <MatrixCell
            delay={230}
            tone={C.ward}
            x={712}
            y={258}
            w={538}
            h={232}
            icon={<Users size={24} color={C.white} strokeWidth={2.2} />}
            identity="档案室管理员丁 · 不负有查禁犯罪活动的职责"
            action={<><Megaphone size={20} color={C.ward} strokeWidth={2.4} />偶尔听到侦查动向，向犯罪人通风报信</>}
            actionDelay={206}
            actionFromX={-655}
            actionWidth={484}
            verdict={<span style={{display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap'}}><Neg size={21}>不构成本罪</Neg><LabelBlock size={22} color={C.seal}>构成窝藏罪</LabelBlock></span>}
          />
          <MatrixCell
            delay={246}
            tone={C.bronze}
            x={1262}
            y={258}
            w={514}
            h={232}
            icon={<Building2 size={24} color={C.white} strokeWidth={2.2} />}
            identity="国有公司、企业、事业单位人员"
            action={<><Building2 size={20} color={C.bronze} strokeWidth={2.4} />严重不负责任或者滥用职权</>}
            actionDelay={222}
            actionFromX={-1205}
            actionWidth={456}
            terminal="identity-token"
            verdict={<LabelBlock size={22} color={C.bronze}>国有公司、企业、事业单位人员失职罪 / 滥用职权罪（第168条）</LabelBlock>}
          />
          <div style={{position: 'absolute', left: 0, top: 498, right: 0, height: 44, display: 'flex', alignItems: 'center', gap: 14, backgroundColor: C.deskDeep, border: `3px solid ${C.ink}`, padding: '0 14px', whiteSpace: 'nowrap'}}>
            <ThinU color={C.seal}>两罪是交叉重合关系</ThinU>
            <span style={{fontSize: 22, fontWeight: 900, color: C.ink}}>主体身份决定罪名归属，想象竞合择一重罪论处</span>
            <ThinU>以"集体研究"形式实施的渎职犯罪，追究负有责任的人员</ThinU>
            <span style={{flex: 1}} />
            <Enter delay={244}><OfficialStamp delay={248} tone="bronze">主体分类 · 高频考点</OfficialStamp></Enter>
          </div>
        </Enter>
      </div>
    </Shell>
  );
};
