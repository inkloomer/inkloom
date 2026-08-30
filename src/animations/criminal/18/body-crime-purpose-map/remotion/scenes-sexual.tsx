import {Ban, HeartPulse, ShieldAlert, Users, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const SexualAutonomyWardScene = () => {
  /* data-final-knowledge="autonomy-panel" data-final-knowledge="means-panel" data-final-knowledge="minors-panel" data-final-knowledge="aggravate-panel" */
  return (
    <Shell code="02" kicker="第二节 · 侵犯性权利的犯罪" title="强奸罪·负有照护职责人员性侵罪·猥亵类犯罪">
      <div
        data-layout="sexual-autonomy-quad-ward"
        data-visual-anchor="main center"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="autonomy-panel,means-panel"
        data-focal-rule="coercion-equals-robbery-plus-blackmail-scope-and-consent-rules-by-age"
        data-focal-channels="panel-headings,age-table"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="autonomy-panel" style={{position: 'absolute', left: 0, top: 0, width: 566, height: 400}}>
          <Panel tone={C.pulse} watermark={<ShieldAlert size={160} color={C.pulse} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.pulse} icon={<ShieldAlert size={24} color={C.white} strokeWidth={2.2} />}>保护法益 · 性自主权</TabChip>
            <IconChip icon={<HeartPulse size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="是否性交的决定权：">
              强行玩3P案 · 安全套案 · 宾馆案 → 均构成强奸
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="行为主体：">
              单独实行犯只能是男子；妇女可当教唆·帮助·间接正犯·共同正犯
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="利诱·假恶害·自害：">
              女一号利诱∉ · 假称外面有歹徒∉ · 以自杀相要挟∉
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="means-panel" style={{position: 'absolute', left: 590, top: 0, width: 1186, height: 400}}>
          <Panel tone={C.chart2} watermark={<Zap size={170} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.chart2} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>强制手段 · 三种反抗压制</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="暴力：">
              有形力 → 使妇女无法反抗
            </IconChip>
            <IconChip icon={<ThinUChip />} tone={C.chart2} title="胁迫（核心结论）：">
              强奸罪的胁迫＝抢劫罪的胁迫（暴力相胁·无法反抗）＋敲诈勒索罪的胁迫（揭发隐私·不敢反抗）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="其他手段：">
              昏醉强奸（自行昏醉趁机∈·实行行为只剩奸淫）· 欺骗型（冒充丈夫·事实错误承诺无效·动机错误不影响）
            </IconChip>
            <IconChip icon={<AgeTableChip />} tone={C.amber} title="奸淫幼女年龄表：">
              12-14周岁要求明知 → 从重；不满12周岁不要求明知；不满10周岁 → 升格法定刑
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="minors-panel" style={{position: 'absolute', left: 0, top: 424, width: 876, height: 320}}>
          <Panel tone={C.ward} watermark={<Users size={160} color={C.ward} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.ward} icon={<Users size={24} color={C.white} strokeWidth={2.2} />}>对象分流的总结表</TabChip>
            <IconChip icon={<HeartPulse size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="强奸妇女 / 幼女：">
              强奸罪（幼女含自愿）
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="强奸已满14周岁男性：">
              强制猥亵罪 · 强奸不满14周岁男童 → 猥亵儿童罪
            </IconChip>
            <IconChip icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.ward} title="照护职责人员性侵罪：">
              14-16周岁少女＋监护收养看护教育医疗等稳定职责 → 承诺无效（补习班老师∉·狱警∈）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="aggravate-panel" style={{position: 'absolute', left: 900, top: 424, width: 876, height: 320}}>
          <Panel tone={C.amber} watermark={<Zap size={160} color={C.amber} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.amber} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>法定刑升格 · 罪数</TabChip>
            <IconChip icon={<Users size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="公共场所当众：">
              众＝不特定人可知晓·不包括共犯人
            </IconChip>
            <IconChip icon={<UsersDualChip />} tone={C.chart2} title="轮奸：">
              对连续两次强奸的违法事实负责；可单方构成；轮奸自身有未遂中止（2024）
            </IconChip>
            <IconChip icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="致人重伤死亡：">
              因＝实行行为（含故意）；被害人只限妇女本人；自杀∉因果
            </IconChip>
            <Enter delay={56}><Neg size={19}>罪数：只有拐卖罪＋强奸罪＝拐卖罪（结合犯）·其他罪中犯强奸罪一律并罚</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};

const ThinUChip = () => <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 999, border: `3px solid ${C.white}`, color: C.white, fontSize: 14, fontWeight: 950}}>胁</span>;
const AgeTableChip = () => <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 4, border: `3px solid ${C.white}`, color: C.white, fontSize: 13, fontWeight: 950}}>岁</span>;
const UsersDualChip = () => <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 999, border: `3px solid ${C.white}`, color: C.white, fontSize: 13, fontWeight: 950}}>2</span>;
