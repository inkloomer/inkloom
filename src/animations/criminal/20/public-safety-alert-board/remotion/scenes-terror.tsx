import {Bomb, Coins, Radio, ShieldCheck, Siren, Swords, Users} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, SirenStamp, TabChip, ThinU} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const TerrorAlertWardScene = () => {
  /* data-final-knowledge="timeline-rail-board" data-final-knowledge="stage-org-board" data-final-knowledge="stage-aid-board" data-final-knowledge="stage-prepare-board" */
  const frame = useCurrentFrame();
  const dotX = interpolate(frame, [44, 130], [10, 1316], CLAMP);
  const dotIn = interpolate(frame, [38, 48], [0, 1], CLAMP);
  const stageGlows = [0, 1, 2].map((i) => interpolate(frame, [56 + i * 26, 72 + i * 26], [0, 1], CLAMP));
  const stages = [
    {left: 0, tone: C.siren, icon: <Siren size={26} color={C.white} strokeWidth={2.2} />, title: '组织·领导·参加', sub: '恐怖组织罪（第120条）'},
    {left: 456, tone: C.yellow, icon: <Swords size={26} color={C.white} strokeWidth={2.2} />, title: '资助·帮助', sub: '帮助恐怖活动罪（第120条之一）'},
    {left: 912, tone: C.night, icon: <Bomb size={26} color={C.white} strokeWidth={2.2} />, title: '策划·准备', sub: '准备实施恐怖活动罪（第120条之二）'},
  ];
  return (
    <Shell code="05" kicker="第四节 · 恐怖型犯罪" title="恐怖型犯罪：从组队到动手的递进线">
      <div
        data-layout="terror-progress-rail"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="timeline-rail-board,stage-org-board"
        data-focal-rule="law-strikes-each-earlier-stage-before-any-attack-occurs"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="timeline-rail-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 246}}>
          <Panel tone={C.siren} watermark={<Siren size={140} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.siren} icon={<Siren size={22} color={C.white} strokeWidth={2.2} />}>递进线 · 不必等到实施，刑法逐段前置打击</TabChip>
            <div style={{position: 'relative', height: 168, marginTop: 8}}>
              {stages.map((stage, index) => (
                <div key={index} style={{position: 'absolute', left: stage.left, top: 0, width: 380}}>
                  <span style={{display: 'inline-flex', width: 50, height: 50, borderRadius: 12, backgroundColor: stage.tone, alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 ${stageGlows[index] * 24}px ${stage.tone}${stageGlows[index] > 0.5 ? '66' : '00'}`}}>{stage.icon}</span>
                  <div style={{fontSize: 22, fontWeight: 950, color: stage.tone, marginTop: 2}}>{stage.title}</div>
                  <div style={{fontSize: 19, fontWeight: 850, color: C.inkSoft}}>{stage.sub}</div>
                  <div style={{width: 4, height: 16, backgroundColor: stage.tone, marginLeft: 22, marginTop: 2}} />
                </div>
              ))}
              <div style={{position: 'absolute', left: 10, top: 138, width: 1300, height: 5, backgroundColor: C.siren, opacity: 0.55}} />
              <div style={{position: 'absolute', left: 1316, top: 128, width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: `20px solid ${C.siren}`}} />
              <div style={{position: 'absolute', left: dotX, top: 120, width: 40, height: 40, borderRadius: 20, backgroundColor: C.siren, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: dotIn, boxShadow: '0 3px 9px rgba(37,35,28,0.4)'}}>
                <Siren size={22} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 1372, top: 24, width: 360, fontSize: 21, fontWeight: 950, color: C.seal, lineHeight: 1.4}}>
                实施恐怖活动<br /><span style={{fontSize: 19, fontWeight: 850, color: C.inkSoft}}>组织罪又犯他罪 → <Mark color={C.seal}>数罪并罚</Mark></span>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={40} marker="stage-org-board" style={{position: 'absolute', left: 0, top: 270, width: 566, height: 474}}>
          <Panel tone={C.siren} watermark={<Users size={150} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.siren} icon={<Users size={22} color={C.white} strokeWidth={2.2} />}>站1 · 入组即入罪</TabChip>
            <div style={{position: 'relative', height: 372, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 520, border: `3px solid ${C.slate}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.slate}}>与黑社会性质组织的区别：</b>恐怖组织有<Mark color={C.siren}>政治目的</Mark>；黑社会<Neg size={18}>没有</Neg>
              </div>
              <div style={{position: 'absolute', left: 0, top: 108, width: 520, border: `3px solid ${C.siren}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.siren}}>成立门槛：</b>只要求组织·领导·参加，<ThinU color={C.siren}>不要求</ThinU>实施恐怖活动
              </div>
              <div style={{position: 'absolute', left: 0, top: 216, width: 520, border: `3px solid ${C.night}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.night}}>出口规则：</b>又实施其他犯罪（爆炸·杀人）→ <Mark color={C.night}>数罪并罚</Mark>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={84} marker="stage-aid-board" style={{position: 'absolute', left: 590, top: 234, width: 566, height: 510}}>
          <Panel tone={C.yellow} watermark={<ShieldCheck size={150} color={C.yellow} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.yellow} icon={<Coins size={22} color={C.white} strokeWidth={2.2} />}>站2 · 帮助行为正犯化</TabChip>
            <div style={{position: 'relative', height: 372, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 520, border: `3px solid ${C.yellow}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.yellow}}>资助＝仅物质性</b>（<ThinU color={C.yellow}>不含</ThinU>精神性资助）
              </div>
              <div style={{position: 'absolute', left: 0, top: 96, width: 520, border: `3px solid ${C.siren}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.siren}}>正犯化两后果：</b>定罪<Neg size={18}>不需</Neg>共犯从属性；教唆资助→本罪<Mark color={C.siren}>教唆犯</Mark>（甲教唆乙资助·乙照办：乙∈本罪·甲∈教唆犯）
              </div>
              <div style={{position: 'absolute', left: 0, top: 228, width: 520, border: `3px solid ${C.lock}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>既遂＝资助被接收：</b>招募的人员被恐怖组织接收→<Mark color={C.lock}>既遂</Mark>（不要求实施恐袭）
              </div>
              <div style={{position: 'absolute', left: 0, top: 320, width: 520, border: `3px solid ${C.slate}`, backgroundColor: C.vaultDeep, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.slate}}>2016年第53题：</b>丁资助林某从事危害国家安全犯罪，林某尚未实施便被抓 → 丁构成资助危害国家安全犯罪活动罪（第107条）的<Mark color={C.slate}>既遂</Mark>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={128} marker="stage-prepare-board" style={{position: 'absolute', left: 1180, top: 270, width: 596, height: 474}}>
          <Panel tone={C.night} watermark={<Radio size={150} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.night} icon={<Bomb size={22} color={C.white} strokeWidth={2.2} />}>站3 · 预备行为正犯化</TabChip>
            <div style={{position: 'relative', height: 372, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 550, border: `3px solid ${C.night}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.night}}>四种预备＝实行：</b>备凶器危险物品·组织参加培训·与境外联络·策划
              </div>
              <div style={{position: 'absolute', left: 0, top: 96, width: 550, border: `3px solid ${C.lock}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>预备犯门槛＝现实危险：</b>只要求<Mark color={C.lock}>抽象缓和</Mark>——已联系讲师·备好场地∈
              </div>
              <div style={{position: 'absolute', left: 0, top: 192, width: 550, border: `3px solid ${C.seal}`, padding: '9px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>无现实危险<Neg size={18}>∉</Neg>：</b>查阅资料<Neg size={18}>∉</Neg>；为买凶器打工挣钱<Neg size={18}>∉预备犯</Neg>
              </div>
              <div style={{position: 'absolute', left: 40, top: 300}}><SirenStamp delay={170} tone="green">同时构成其他犯罪 → 择一重</SirenStamp></div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
