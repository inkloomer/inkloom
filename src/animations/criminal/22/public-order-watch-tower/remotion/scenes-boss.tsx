import {Crown, Dice5, Landmark, Megaphone, Monitor, PenTool, Users} from 'lucide-react';
import {C, Enter, IconChip, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const BossDenCounterScene = () => {
  /* data-final-knowledge="mafia-panel" data-final-knowledge="gambling-panel" data-final-knowledge="info-cheat-panel" */
  return (
    <Shell code="04" kicker="第一节 · “大哥”型与信息类犯罪" title="黑社会·赌博·虚假信息·作弊·计算机">
      <div
        data-layout="boss-den-counter"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="mafia-panel,gambling-panel,info-cheat-panel"
        data-focal-rule="organized-crime-punishes-all-commanded-crimes-network-gambling-needs-reverse-cash-out"
        data-focal-channels="icon,contrast,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="mafia-panel" style={{position: 'absolute', left: 0, top: 0, width: 640, height: 744}}>
          <Panel tone={C.crimson} watermark={<Crown size={160} color={C.crimson} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.crimson} icon={<Crown size={24} color={C.white} strokeWidth={2.2} />}>组织、领导、参加黑社会性质组织罪（第294条）</TabChip>
            <IconChip icon={<Crown size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="认定四标准：">
              稳定组织、经济实力、手段非法性破坏性、形成非法控制
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="责任界定：">
              组织者、领导者按其所组织、发动、指挥的全部罪行处罚；成员个人罪行不算
            </IconChip>
            <IconChip icon={<Megaphone size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="罪数：">
              组织后又实施其他犯罪（赌博、组织卖淫、贩毒等）→数罪并罚
            </IconChip>
            <Enter delay={64}><ThinU>不要求有“政治保护伞”；认识到是从事非法活动的组织即可</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={18} marker="gambling-panel" style={{position: 'absolute', left: 664, top: 0, width: 592, height: 744}}>
          <Panel tone={C.gold} watermark={<Dice5 size={160} color={C.gold} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.gold} icon={<Dice5 size={24} color={C.white} strokeWidth={2.2} />}>赌博犯罪（第303条）</TabChip>
            <IconChip icon={<Dice5 size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="赌博罪：">
              以营利为目的，聚众赌博或者以赌博为业；赌博＝以偶然因素定输赢
            </IconChip>
            <IconChip icon={<Landmark size={26} color={C.white} strokeWidth={2.2} />} tone={C.navy} title="开设赌场罪：">
              网络游戏与网络赌博之分＝单向消费还是反向变现（积分筹码可兑换现金→开设赌场罪，2025）
            </IconChip>
            <IconChip icon={<Users size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="组织参与国（境）外赌博罪：">
              组织中国公民赴境外赌博、境内参境外网络赌博等，数额巨大或有其他严重情节
            </IconChip>
            <Enter delay={70}><ThinU>微信群抢红包持续组织赌博→开设赌场罪（第106号指导案例）</ThinU></Enter>
          </Panel>
        </Enter>
        <Enter delay={30} marker="info-cheat-panel" style={{position: 'absolute', left: 1280, right: 0, top: 0, bottom: 0}}>
          <Panel tone={C.navy} watermark={<Monitor size={160} color={C.navy} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.navy} icon={<Megaphone size={24} color={C.white} strokeWidth={2.2} />}>虚假信息·考试作弊·计算机犯罪</TabChip>
            <IconChip icon={<Megaphone size={26} color={C.white} strokeWidth={2.2} />} tone={C.crimson} title="虚假信息类：">
              投放虚假危险物质罪；编造、故意传播虚假恐怖信息罪（实害犯）；编造、故意传播虚假信息罪（险情、疫情、灾情、警情）
            </IconChip>
            <IconChip icon={<PenTool size={26} color={C.white} strokeWidth={2.2} />} tone={C.gold} title="考试作弊类（第284条之一）：">
              组织考试作弊罪（限法律规定的国家考试）；非法出售、提供试题、答案罪（部分真实即可）；代替考试罪（对向犯）
            </IconChip>
            <IconChip icon={<Monitor size={26} color={C.white} strokeWidth={2.2} />} tone={C.pine} title="计算机犯罪：">
              非法侵入（仅限国家事务、国防建设、尖端科技领域）；非法控制、非法获取数据（一切系统）；破坏＝实质性破坏或不能正常运行；帮信罪须守共犯从属性
            </IconChip>
            <Enter delay={76}><SoftHi style={{fontSize: 18 }}>修改数据但未影响系统运行→不构成破坏计算机信息系统罪</SoftHi></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
