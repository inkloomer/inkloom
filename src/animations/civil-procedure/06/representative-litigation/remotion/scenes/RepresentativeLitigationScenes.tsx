import {
  BadgeCheck,
  Clock3,
  FileCheck2,
  Gavel,
  Handshake,
  Landmark,
  ListChecks,
  Megaphone,
  RadioTower,
  Route,
  ShieldCheck,
  Split,
  TicketCheck,
  UserMinus,
  UserPlus,
  UserRound,
  Users,
} from 'lucide-react';
import {PALETTE} from '../storyboard';
import {
  Callsign,
  ConsentSeal,
  ConsoleHeader,
  Enter,
  FrequencyUnderline,
  Module,
  SignalCable,
  SignalHighlight,
  StaggerEnter,
  TickRail,
} from '../visual-system';

const frameStyle = {position: 'absolute' as const, inset: 0};

const terminal = (label: string, color = PALETTE.signal) => (
  <div style={{width: 76, height: 76, display: 'grid', placeItems: 'center', background: PALETTE.surface, border: `3px solid ${color}`, fontSize: 22, fontWeight: 900}}>{label}</div>
);

export const ConceptScene = () => (
  <section
    data-layout="crowd-to-representative-exchange"
    data-visual-anchor="flow-path"
    data-text-treatments="soft-highlight,label-block,thin-underline"
    data-visual-grammar="selection,delegation,representation"
    data-focal-channels="icon,connector,enclosure,motion"
    data-focal-rule="人数众多的一方或双方推举二至五名代表人进行诉讼"
    style={frameStyle}
  >
    <ConsoleHeader index="01" topic="CROWD → 2–5 → COURT" title={<>把<SignalHighlight>10 人以上</SignalHighlight>接入少数代表席</>} />

    <Enter delay={18} from="left" style={{position: 'absolute', left: 100, top: 276, width: 570}}>
      <Module accent={PALETTE.signal} style={{height: 500}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Users size={48} color={PALETTE.signal} /><Callsign>人数众多</Callsign></div>
        <StaggerEnter baseDelay={30} duration={26} step={5} gap={16} style={{flexWrap: 'wrap', marginTop: 46}}>
          {terminal('01')}{terminal('02')}{terminal('03')}{terminal('04')}{terminal('05')}{terminal('06')}{terminal('07')}{terminal('08')}{terminal('09')}{terminal('10+')}
        </StaggerEnter>
        <div style={{fontSize: 23, fontWeight: 800, color: PALETTE.muted, marginTop: 34}}>当事人一方或双方</div>
      </Module>
    </Enter>

    <SignalCable left={710} top={495} width={180} label="推举" />

    <Enter delay={54} style={{position: 'absolute', left: 930, top: 330, width: 330}}>
      <Module accent={PALETTE.amber} style={{height: 390, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
        <RadioTower size={82} color={PALETTE.amber} strokeWidth={1.8} />
        <div style={{fontSize: 42, fontWeight: 900}}>2–5 名</div>
        <FrequencyUnderline color={PALETTE.amber}>代表人</FrequencyUnderline>
      </Module>
    </Enter>

    <SignalCable left={1300} top={495} width={150} color={PALETTE.magenta} label="进行诉讼" />

    <Enter delay={86} from="right" style={{position: 'absolute', left: 1490, top: 382, width: 300}}>
      <div style={{height: 280, display: 'grid', placeItems: 'center', textAlign: 'center', background: PALETTE.ink, color: PALETTE.surface}}>
        <Landmark size={74} color={PALETTE.amber} />
        <div style={{fontSize: 34, fontWeight: 900}}>人民法院</div>
      </div>
    </Enter>
  </section>
);

export const AuthorityScene = () => (
  <section
    data-layout="authority-dual-channel-gate"
    data-visual-anchor="boundary"
    data-text-treatments="label-block,stamp,soft-highlight"
    data-visual-grammar="permission,gate,effect"
    data-focal-channels="icon,connector,contrast,annotation"
    data-focal-rule="程序行为直接生效，处分实体权利必须取得被代表当事人同意"
    style={frameStyle}
  >
    <ConsoleHeader index="02" topic="AUTHORITY GATE" title={<>代表人的权限，分成<SignalHighlight color={PALETTE.amberSoft}>两条频道</SignalHighlight></>} />

    <Enter delay={16} style={{position: 'absolute', left: 130, top: 382, width: 330}}>
      <Module accent={PALETTE.amber} style={{height: 300, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
        <RadioTower size={70} color={PALETTE.amber} />
        <div style={{fontSize: 34, fontWeight: 900}}>代表人</div>
      </Module>
    </Enter>

    <SignalCable left={500} top={340} width={230} color={PALETTE.green} label="直接生效" />
    <SignalCable left={500} top={625} width={230} color={PALETTE.magenta} label="先取同意" />

    <Enter delay={48} from="right" style={{position: 'absolute', left: 770, top: 246, width: 920}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 34}}>
        <Module accent={PALETTE.green} style={{height: 215}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 24}}><FileCheck2 size={56} color={PALETTE.green} /><Callsign color={PALETTE.green}>一般程序行为</Callsign><div style={{fontSize: 27, fontWeight: 900}}>在线开庭等</div></div>
          <div style={{fontSize: 26, fontWeight: 800, marginTop: 28}}>代表人作出 → 对被代表当事人<SignalHighlight color={PALETTE.greenSoft}>直接生效</SignalHighlight></div>
        </Module>
        <Module accent={PALETTE.magenta} style={{height: 265}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 22}}><Handshake size={54} color={PALETTE.magenta} /><Callsign color={PALETTE.magenta}>实体权利处分</Callsign><ConsentSeal>须同意</ConsentSeal></div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 26}}>
            {['放弃请求', '变更请求', '承认请求', '和解', '调解'].map((item) => <span key={item} style={{fontSize: 23, fontWeight: 900, padding: '8px 12px', background: PALETTE.magentaSoft, borderBottom: `3px solid ${PALETTE.magenta}`}}>{item}</span>)}
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginTop: 22, fontSize: 23, fontWeight: 800}}><ShieldCheck size={30} color={PALETTE.magenta} />调解书对不同意者不生效，继续审理并判决</div>
        </Module>
      </div>
    </Enter>
  </section>
);

export const DeterminedScene = () => (
  <section
    data-layout="fixed-roster-no-representative-fork"
    data-visual-anchor="document-fork"
    data-text-treatments="soft-highlight,label-block,thin-underline"
    data-visual-grammar="fixed-roster,classification,remedy-branch"
    data-focal-channels="icon,connector,enclosure,spatial"
    data-focal-rule="人数确定时选不出代表人，必要共同诉讼自己参加，普通共同诉讼另行起诉"
    style={frameStyle}
  >
    <ConsoleHeader index="03" topic="FIXED ROSTER" title={<>起诉时人数<SignalHighlight color={PALETTE.greenSoft}>已经确定</SignalHighlight></>} />

    <Enter delay={16} style={{position: 'absolute', left: 110, top: 300, width: 510}}>
      <Module accent={PALETTE.green} style={{height: 470}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 15}}>
          <div style={{width: 66, height: 66, display: 'grid', placeItems: 'center', borderRadius: '50%', color: PALETTE.surface, background: PALETTE.green, border: `3px solid ${PALETTE.ink}`}}><ListChecks size={36} strokeWidth={2.2} /></div>
          <div><div style={{fontSize: 29, fontWeight: 900}}>固定名单</div><div style={{fontSize: 22, color: PALETTE.muted, marginTop: 4}}>可属于必要，也可属于普通</div></div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 44}}>{['甲', '乙', '丙', '丁', '戊', '己'].map((name) => terminal(name, PALETTE.green))}</div>
        <div style={{marginTop: 38, fontSize: 26, fontWeight: 900}}><FrequencyUnderline color={PALETTE.magenta}>如果选不出代表人</FrequencyUnderline></div>
      </Module>
    </Enter>

    <SignalCable left={660} top={490} width={205} color={PALETTE.magenta} label="分类型处理" />

    <Enter delay={54} from="right" style={{position: 'absolute', left: 910, top: 278, width: 800}}>
      <Split size={58} color={PALETTE.magenta} style={{position: 'absolute', left: -82, top: 200}} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
        <Module accent={PALETTE.amber} style={{height: 215}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 24}}><UserRound size={52} color={PALETTE.amber} /><Callsign color={PALETTE.amber}>必要共同诉讼</Callsign></div>
          <div style={{fontSize: 33, fontWeight: 900, marginTop: 30}}>自己参加诉讼</div>
        </Module>
        <Module accent={PALETTE.signal} style={{height: 215}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 24}}><Route size={52} color={PALETTE.signal} /><Callsign color={PALETTE.signal}>普通共同诉讼</Callsign></div>
          <div style={{fontSize: 33, fontWeight: 900, marginTop: 30}}>另行起诉</div>
        </Module>
      </div>
    </Enter>
  </section>
);

export const UndeterminedScene = () => (
  <section
    data-layout="announcement-registration-effect-route"
    data-visual-anchor="timeline-gate"
    data-text-treatments="label-block,thin-underline,soft-highlight"
    data-visual-grammar="timeline,registration,effect-scope"
    data-focal-channels="icon,connector,locator,annotation"
    data-focal-rule="人数不确定只能是普通共同诉讼，公告登记后区分直接生效与裁定适用"
    style={frameStyle}
  >
    <ConsoleHeader index="04" topic="OPEN REGISTRATION" title={<>人数不确定：先<FrequencyUnderline>公告登记</FrequencyUnderline>，再分效力</>} />
    <TickRail left={160} top={360} width={1540} />

    <Enter delay={14} style={{position: 'absolute', left: 130, top: 410, width: 350}}>
      <Module accent={PALETTE.signal} style={{height: 270}}><div style={{display: 'flex', alignItems: 'center', gap: 15}}><div style={{width: 66, height: 66, display: 'grid', placeItems: 'center', borderRadius: '50%', color: PALETTE.surface, background: PALETTE.signal, border: `3px solid ${PALETTE.ink}`}}><Megaphone size={36} strokeWidth={2.2} /></div><div><div style={{fontSize: 29, fontWeight: 900}}>公告</div><div style={{fontSize: 22, color: PALETTE.muted, marginTop: 4}}>起诉时人数不确定</div></div></div><div style={{fontSize: 28, fontWeight: 900, marginTop: 32}}>只能是<SignalHighlight>普通共同诉讼</SignalHighlight></div></Module>
    </Enter>
    <SignalCable left={505} top={494} width={140} color={PALETTE.amber} />
    <Enter delay={42} style={{position: 'absolute', left: 680, top: 410, width: 320}}>
      <Module accent={PALETTE.amber} style={{height: 270, textAlign: 'center'}}><Clock3 size={64} color={PALETTE.amber} /><div style={{fontSize: 42, fontWeight: 900, marginTop: 18}}>不少于 30 日</div><Callsign color={PALETTE.amber}>登记期</Callsign></Module>
    </Enter>
    <SignalCable left={1024} top={494} width={110} color={PALETTE.magenta} />
    <Enter delay={72} from="right" style={{position: 'absolute', left: 1170, top: 330, width: 600}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        <Module accent={PALETTE.green} style={{height: 190}}><div style={{display: 'flex', alignItems: 'center', gap: 20}}><TicketCheck size={48} color={PALETTE.green} /><Callsign color={PALETTE.green}>已登记</Callsign><div style={{fontSize: 28, fontWeight: 900}}>判决直接生效</div></div></Module>
        <Module accent={PALETTE.magenta} style={{height: 245}}><div style={{display: 'flex', alignItems: 'center', gap: 20}}><Gavel size={48} color={PALETTE.magenta} /><Callsign color={PALETTE.magenta}>未登记</Callsign></div><div style={{fontSize: 25, lineHeight: 1.5, fontWeight: 900, marginTop: 22}}>时效期间内另行起诉 → 法院<SignalHighlight color={PALETTE.magentaSoft}>裁定适用</SignalHighlight>原判决</div><div style={{fontSize: 22, color: PALETTE.muted, marginTop: 12}}>预决效力，不是直接拘束</div></Module>
      </div>
    </Enter>
  </section>
);

export const SecuritiesScene = () => (
  <section
    data-layout="entrust-opt-out-signal-chain"
    data-visual-anchor="flow-target"
    data-text-treatments="soft-highlight,stamp,label-block"
    data-visual-grammar="entrustment,opt-out,judgment-scope"
    data-focal-channels="icon,connector,enclosure,contrast"
    data-focal-rule="五十名以上投资者委托投保机构，不声明退出即默示加入并受判决效力覆盖"
    style={frameStyle}
  >
    <ConsoleHeader index="05" topic="SECURITIES / OPT-OUT" title={<>证券特别代表人诉讼：<SignalHighlight color={PALETTE.magentaSoft}>不退出 = 参加</SignalHighlight></>} />

    <Enter delay={12} style={{position: 'absolute', left: 110, top: 342, width: 390}}>
      <Module accent={PALETTE.signal} style={{height: 370}}><Users size={62} color={PALETTE.signal} /><div style={{fontSize: 42, fontWeight: 900, marginTop: 24}}>50 名以上</div><div style={{fontSize: 27, fontWeight: 800, marginTop: 10}}>投资者委托</div></Module>
    </Enter>
    <SignalCable left={520} top={486} width={160} label="委托" />
    <Enter delay={44} style={{position: 'absolute', left: 720, top: 318, width: 410}}>
      <Module accent={PALETTE.amber} style={{height: 420, display: 'grid', placeItems: 'center', textAlign: 'center'}}><ShieldCheck size={76} color={PALETTE.amber} /><div style={{fontSize: 33, lineHeight: 1.3, fontWeight: 900}}>投资者保护机构<br />担任代表人</div><Callsign color={PALETTE.amber}>REP</Callsign></Module>
    </Enter>
    <SignalCable left={1160} top={486} width={130} color={PALETTE.magenta} label="公告后 15 日" />
    <Enter delay={78} from="right" style={{position: 'absolute', left: 1330, top: 292, width: 470}}>
      <Module accent={PALETTE.magenta} style={{height: 470}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><UserMinus size={54} color={PALETTE.magenta} /><ConsentSeal>明示退出</ConsentSeal></div>
        <div style={{height: 2, background: PALETTE.line, margin: '28px 0'}} />
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}><BadgeCheck size={54} color={PALETTE.green} /><div style={{fontSize: 30, fontWeight: 900}}>未声明退出</div></div>
        <div style={{fontSize: 34, fontWeight: 900, marginTop: 28}}><SignalHighlight color={PALETTE.greenSoft}>默示加入</SignalHighlight></div>
        <div style={{fontSize: 24, lineHeight: 1.45, fontWeight: 800, marginTop: 28}}>判决对所有未退出权利人生效</div>
      </Module>
    </Enter>
  </section>
);

export const RecapScene = () => (
  <section
    data-layout="opt-in-versus-opt-out-switchboard"
    data-visual-anchor="comparison-axis"
    data-text-treatments="label-block,thin-underline,soft-highlight"
    data-visual-grammar="comparison,participation-mode,effect-scope"
    data-focal-channels="icon,contrast,connector,spatial"
    data-focal-rule="普通代表人诉讼采用登记加入，证券特别代表人诉讼采用不声明退出即加入"
    style={frameStyle}
  >
    <ConsoleHeader index="06" topic="MODE SELECT" title={<>参诉方式决定<FrequencyUnderline color={PALETTE.amber}>判决覆盖范围</FrequencyUnderline></>} />
    <div style={{position: 'absolute', left: 120, right: 120, top: 270, height: 510, display: 'flex', gap: 80}}>
      <Enter delay={16} from="left" style={{flex: 1}}>
        <Module accent={PALETTE.signal} style={{height: 500}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}><Callsign color={PALETTE.signal}>普通代表人诉讼</Callsign><UserPlus size={58} color={PALETTE.signal} /></div>
          <div style={{fontSize: 40, fontWeight: 900, marginTop: 48}}>登记 = <SignalHighlight>明示加入</SignalHighlight></div>
          <div style={{marginTop: 42, fontSize: 27, lineHeight: 1.55, fontWeight: 800}}>代表人：权利人中推举 2–5 人</div>
          <SignalCable left={40} top={310} width={520} color={PALETTE.signal} label="参加登记者" />
          <div style={{position: 'absolute', left: 40, bottom: 28, display: 'flex', alignItems: 'center', gap: 18}}><Gavel size={42} color={PALETTE.signal} /><div style={{fontSize: 27, fontWeight: 900}}>判决对登记权利人生效</div></div>
        </Module>
      </Enter>

      <Enter delay={46} from="right" style={{flex: 1}}>
        <Module accent={PALETTE.magenta} style={{height: 500}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}><Callsign color={PALETTE.magenta}>证券特别代表人诉讼</Callsign><UserMinus size={58} color={PALETTE.magenta} /></div>
          <div style={{fontSize: 40, fontWeight: 900, marginTop: 48}}>未退出 = <SignalHighlight color={PALETTE.magentaSoft}>默示加入</SignalHighlight></div>
          <div style={{marginTop: 42, fontSize: 27, lineHeight: 1.55, fontWeight: 800}}>代表人：受 50 人以上委托的投保机构</div>
          <SignalCable left={40} top={310} width={520} color={PALETTE.magenta} label="未声明退出者" />
          <div style={{position: 'absolute', left: 40, bottom: 28, display: 'flex', alignItems: 'center', gap: 18}}><Gavel size={42} color={PALETTE.magenta} /><div style={{fontSize: 27, fontWeight: 900}}>判决对所有未退出权利人生效</div></div>
        </Module>
      </Enter>
    </div>
  </section>
);
