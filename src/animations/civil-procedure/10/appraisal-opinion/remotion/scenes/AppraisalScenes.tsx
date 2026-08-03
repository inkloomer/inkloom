import type {CSSProperties, ReactNode} from 'react';
import {
  BadgeCheck,
  BadgeDollarSign,
  Ban,
  CalendarClock,
  CircleDollarSign,
  FileCheck2,
  FileClock,
  FileQuestion,
  FileX2,
  Gavel,
  Landmark,
  MessagesSquare,
  Microscope,
  RotateCcw,
  ShieldAlert,
  Stamp,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP, createMotionPrimitives} from '../../../../../shared/remotion-runtime';
import {toSourceFrame} from '../storyboard';

const P = {
  paper: '#F3F6F4',
  white: '#FFFFFF',
  ink: '#172126',
  steel: '#52636A',
  mist: '#D7E0DD',
  green: '#168567',
  blue: '#2A62C9',
  orange: '#E85D32',
  yellow: '#F0BF3F',
  red: '#C83F3F',
};

const {Enter, ImpactReveal, MaskedReveal, StaggerEnter} = createMotionPrimitives(toSourceFrame);

const SceneShell = ({
  code,
  title,
  object,
  children,
}: {
  code: string;
  title: string;
  object: string;
  children: ReactNode;
}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      backgroundColor: P.paper,
      color: P.ink,
      fontFamily: 'var(--inkloom-animation-body)',
    }}
  >
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 26, backgroundColor: P.ink}} />
    <div style={{position: 'absolute', left: 64, top: 54, color: P.orange, fontSize: 19, fontWeight: 900}}>
      APPRAISAL WORKBENCH / {code}
    </div>
    <h1
      style={{
        position: 'absolute',
        left: 64,
        top: 88,
        margin: 0,
        fontFamily: 'var(--inkloom-animation-title)',
        fontSize: 54,
        fontWeight: 950,
      }}
    >
      {title}
    </h1>
    <div
      style={{
        position: 'absolute',
        right: 64,
        top: 72,
        width: 300,
        height: 72,
        border: `3px solid ${P.ink}`,
        backgroundColor: P.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        fontSize: 24,
        fontWeight: 900,
      }}
    >
      <FileQuestion size={34} color={P.orange} />
      {object}
    </div>
    <div style={{position: 'absolute', left: 64, right: 64, top: 174, height: 5, backgroundColor: P.steel}} />
    <div style={{position: 'absolute', left: 64, right: 64, top: 202, bottom: 72}}>{children}</div>
    <div style={{position: 'absolute', left: 64, bottom: 30, color: P.steel, fontSize: 18, fontWeight: 800}}>
      鉴定意见 · 证据关系工位
    </div>
  </div>
);

const Label = ({children, color = P.ink, style}: {children: ReactNode; color?: string; style?: CSSProperties}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: 42,
      padding: '7px 14px',
      backgroundColor: color,
      color: P.white,
      fontSize: 22,
      fontWeight: 900,
      ...style,
    }}
  >
    {children}
  </div>
);

const FactToken = ({
  label,
  color,
  style,
}: {
  label: string;
  color: string;
  style?: CSSProperties;
}) => (
  <div
    style={{
      width: 190,
      height: 112,
      backgroundColor: P.white,
      border: `4px solid ${color}`,
      boxShadow: `12px 12px 0 ${P.ink}`,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 18px',
      fontSize: 24,
      fontWeight: 950,
      ...style,
    }}
  >
    <FileQuestion size={46} color={color} />
    {label}
  </div>
);

const ProcessChamber = ({active}: {active: number}) => (
  <div
    style={{
      position: 'absolute',
      left: 748,
      top: 192,
      width: 300,
      height: 300,
      backgroundColor: P.ink,
      color: P.white,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      boxShadow: `0 0 0 ${12 + active * 8}px rgba(240, 191, 63, ${0.12 + active * 0.2})`,
    }}
  >
    <div>
      <Microscope size={92} color={P.yellow} />
      <div style={{marginTop: 22, fontSize: 38, fontWeight: 950}}>鉴定程序</div>
      <div style={{marginTop: 12, color: P.mist, fontSize: 22, fontWeight: 750}}>专业判断工位</div>
    </div>
  </div>
);

export const InitiationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const partyTravel = interpolate(frame, [28, 78], [0, 1], CLAMP);
  const courtTravel = interpolate(frame, [114, 164], [0, 1], CLAMP);
  const chamberActive = interpolate(frame, [70, 92, 160, 178], [0, 1, 1, 0.65], CLAMP);
  const consequenceProgress = interpolate(frame, [76, 116], [0, 1], CLAMP);

  return (
    <SceneShell code="01" title="先看事实归谁调查，再决定谁来启动" object="待鉴定事实">
      <div
        data-layout="dual-entry-fact-handoff"
        data-visual-anchor="role-pair"
        data-text-treatments="label-block,thin-underline,stamp,external-negation"
        data-visual-grammar="default,exception,authorization,consequence"
        data-focal-rule="parties-apply-unless-the-fact-belongs-to-ex-officio-investigation"
        data-focal-channels="icon,motion,enclosure,contrast"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={2} style={{position: 'absolute', left: 18, top: 18, width: 630, height: 118}}>
          <Label color={P.green}>原则入口</Label>
          <div style={{marginTop: 14, fontSize: 32, fontWeight: 950}}>负举证责任的当事人</div>
          <div style={{marginTop: 6, fontSize: 24, color: P.steel}}>必须在法院指定期间内申请</div>
        </Enter>

        <Enter delay={10} style={{position: 'absolute', left: 32, top: 198}}>
          <UsersRound size={78} color={P.green} />
        </Enter>
        <FactToken
          label="待鉴定事实"
          color={P.green}
          style={{
            position: 'absolute',
            left: 130,
            top: 198,
            translate: `${partyTravel * 592}px 0px`,
            scale: 1 - partyTravel * 0.12,
            opacity: interpolate(partyTravel, [0.9, 1], [1, 0], CLAMP),
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 132,
            top: 346,
            width: 586,
            height: 8,
            backgroundColor: P.green,
            scale: `${partyTravel} 1`,
            transformOrigin: 'left center',
          }}
        />
        <Enter delay={34} from="none" style={{position: 'absolute', left: 354, top: 306}}>
          <Label color={P.green} style={{gap: 10}}>
            <CalendarClock size={27} /> 指定期间内申请
          </Label>
        </Enter>

        <ProcessChamber active={chamberActive} />
        <ImpactReveal delay={76} style={{position: 'absolute', left: 812, top: 508}}>
          <Label color={P.green}>申请到位 → 进入鉴定</Label>
        </ImpactReveal>

        <Enter delay={82} style={{position: 'absolute', left: 30, bottom: 44, width: 650, height: 180}}>
          <div style={{position: 'absolute', left: 0, top: 0, color: P.red, opacity: consequenceProgress}}>
            <Ban size={58} />
          </div>
          <div
            style={{
              position: 'absolute',
              left: 82,
              top: 0,
              width: 250,
              height: 76,
              border: `3px solid ${P.red}`,
              backgroundColor: P.white,
              display: 'grid',
              placeItems: 'center',
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            未在期间内申请
          </div>
          <div
            style={{
              position: 'absolute',
              left: 352,
              top: 0,
              width: 250,
              height: 76,
              backgroundColor: P.red,
              color: P.white,
              display: 'grid',
              placeItems: 'center',
              fontSize: 25,
              fontWeight: 950,
              opacity: consequenceProgress,
              translate: interpolate(consequenceProgress, [0, 1], ['-34px 0px', '0px 0px'], CLAMP),
            }}
          >
            事实不明
          </div>
          <div style={{position: 'absolute', left: 82, top: 104, fontSize: 29, fontWeight: 950, color: P.red}}>
            后果由举证责任人承担
            <div style={{marginTop: 5, height: 4, width: 360 * consequenceProgress, backgroundColor: P.red}} />
          </div>
        </Enter>

        <Enter delay={88} from="right" style={{position: 'absolute', right: 18, top: 18, width: 618, height: 120, textAlign: 'right'}}>
          <Label color={P.orange}>例外入口</Label>
          <div style={{marginTop: 14, fontSize: 32, fontWeight: 950}}>法院依职权决定</div>
          <div style={{marginTop: 6, fontSize: 24, color: P.steel}}>仅限本来就应依职权调查的事实</div>
        </Enter>
        <StaggerEnter
          baseDelay={94}
          step={12}
          direction="column"
          gap={12}
          from="right"
          style={{position: 'absolute', right: 22, top: 178, width: 360}}
        >
          <div style={{padding: '13px 18px', backgroundColor: P.orange, color: P.white, fontSize: 24, fontWeight: 900}}>国家 / 社会 / 第三人利益</div>
          <div style={{padding: '13px 18px', border: `3px solid ${P.orange}`, backgroundColor: P.white, fontSize: 24, fontWeight: 900}}>身份关系</div>
          <div style={{padding: '13px 18px', border: `3px solid ${P.orange}`, backgroundColor: P.white, fontSize: 24, fontWeight: 900}}>程序性事实</div>
        </StaggerEnter>
        <Enter delay={92} style={{position: 'absolute', right: 430, top: 218}}>
          <Landmark size={78} color={P.orange} />
        </Enter>
        <FactToken
          label="职权调查事实"
          color={P.orange}
          style={{
            position: 'absolute',
            right: 132,
            top: 468,
            translate: `${courtTravel * -604}px 0px`,
            scale: 1 - courtTravel * 0.12,
            opacity: interpolate(courtTravel, [0.9, 1], [1, 0], CLAMP),
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 132,
            top: 602,
            width: 590,
            height: 8,
            backgroundColor: P.orange,
            scale: `${courtTravel} 1`,
            transformOrigin: 'right center',
          }}
        />
        <ImpactReveal delay={164} style={{position: 'absolute', left: 1056, top: 508}}>
          <Label color={P.orange}>范围命中 → 法院决定</Label>
        </ImpactReveal>
      </div>
    </SceneShell>
  );
};

const SelectionRoute = ({
  top,
  color,
  icon,
  source,
  first,
  condition,
  delay,
}: {
  top: number;
  color: string;
  icon: ReactNode;
  source: string;
  first: string;
  condition: string;
  delay: number;
}) => {
  const frame = toSourceFrame(useCurrentFrame());
  const firstTravel = interpolate(frame, [delay + 12, delay + 44], [0, 1], CLAMP);
  const secondTravel = interpolate(frame, [delay + 48, delay + 78], [0, 1], CLAMP);

  return (
    <div style={{position: 'absolute', left: 24, top, width: 810, height: 180}}>
      <Enter delay={delay} style={{position: 'absolute', left: 0, top: 26, width: 220, height: 126, backgroundColor: P.white, border: `4px solid ${color}`, padding: '18px 20px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>{icon}<span style={{fontSize: 28, fontWeight: 950}}>{source}</span></div>
      </Enter>
      <div style={{position: 'absolute', left: 222, top: 88, width: 190, height: 7, backgroundColor: color, scale: `${firstTravel} 1`, transformOrigin: 'left center'}} />
      <Enter delay={delay + 30} style={{position: 'absolute', left: 412, top: 40, width: 180, height: 104, backgroundColor: color, color: P.white, display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 27, fontWeight: 950}}>
        {first}
      </Enter>
      <div style={{position: 'absolute', left: 592, top: 88, width: 148, height: 7, backgroundColor: color, scale: `${secondTravel} 1`, transformOrigin: 'left center'}} />
      <div style={{position: 'absolute', left: 592, top: 106, width: 148, textAlign: 'center', color, fontSize: 20, fontWeight: 850, opacity: secondTravel}}>{condition}</div>
    </div>
  );
};

const MaterialDocument = ({
  label,
  color,
  icon,
  style,
}: {
  label: string;
  color: string;
  icon: ReactNode;
  style?: CSSProperties;
}) => (
  <div style={{width: 210, height: 112, backgroundColor: P.white, border: `4px solid ${color}`, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 16, fontSize: 25, fontWeight: 950, ...style}}>
    {icon}
    {label}
  </div>
);

export const PreparationScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const badgeDrop = interpolate(frame, [84, 116], [0, 1], CLAMP);
  const testedTravel = interpolate(frame, [116, 164], [0, 1], CLAMP);
  const rejectedTravel = interpolate(frame, [142, 190], [0, 1], CLAMP);
  const gateOpen = interpolate(frame, [128, 146], [0, 1], CLAMP);

  return (
    <SceneShell code="02" title="启动方式决定鉴定人，质证决定材料资格" object="鉴定材料">
      <div
        data-layout="selection-dock-and-cross-examination-gate"
        data-visual-anchor="flow-path"
        data-text-treatments="soft-highlight,label-block,stamp,external-negation"
        data-visual-grammar="selection,escalation,verification,exclusion"
        data-focal-rule="selection-path-depends-on-initiation-and-materials-require-cross-examination"
        data-focal-channels="icon,motion,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={2} style={{position: 'absolute', left: 24, top: 2}}>
          <Label color={P.blue}>第一站：确定鉴定人</Label>
        </Enter>
        <SelectionRoute
          top={62}
          color={P.green}
          icon={<UsersRound size={45} color={P.green} />}
          source="当事人申请"
          first="先协商"
          condition="协商不成"
          delay={8}
        />
        <SelectionRoute
          top={270}
          color={P.orange}
          icon={<Landmark size={45} color={P.orange} />}
          source="法院职权"
          first="询问意见"
          condition="听取后"
          delay={30}
        />
        <ImpactReveal delay={84} style={{position: 'absolute', left: 748, top: 206}}>
          <div style={{width: 160, height: 210, backgroundColor: P.ink, color: P.white, display: 'grid', placeItems: 'center', textAlign: 'center', translate: `0 ${-36 + badgeDrop * 36}px`}}>
            <div>
              <BadgeCheck size={62} color={P.yellow} />
              <div style={{fontSize: 29, fontWeight: 950, marginTop: 12}}>法院指定</div>
              <div style={{fontSize: 22, color: P.mist, marginTop: 8}}>鉴定人</div>
            </div>
          </div>
        </ImpactReveal>
        <MaskedReveal delay={104} edge="left" style={{position: 'absolute', left: 110, top: 522, width: 700, height: 100, backgroundColor: P.yellow, padding: '24px 32px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
            <Stamp size={48} />
            <div style={{fontSize: 27, fontWeight: 950}}>两条路的差别在“指定前要做什么”</div>
          </div>
        </MaskedReveal>

        <div style={{position: 'absolute', left: 932, top: 0, bottom: 18, width: 7, backgroundColor: P.ink}} />
        <Enter delay={76} from="right" style={{position: 'absolute', left: 984, top: 2}}>
          <Label color={P.orange}>第二站：材料质证闸门</Label>
        </Enter>
        <Enter delay={92} from="right" style={{position: 'absolute', left: 998, top: 110, fontSize: 24, color: P.steel, fontWeight: 800}}>
          材料是否能成为鉴定根据，只看有没有经过质证
        </Enter>

        <MaterialDocument
          label="已经质证"
          color={P.green}
          icon={<FileCheck2 size={50} color={P.green} />}
          style={{position: 'absolute', left: 982, top: 202, translate: `${testedTravel * 446}px 0px`, scale: 1 - testedTravel * 0.08}}
        />
        <MaterialDocument
          label="未经质证"
          color={P.red}
          icon={<FileX2 size={50} color={P.red} />}
          style={{position: 'absolute', left: 982, top: 388, translate: `${rejectedTravel * 230}px ${rejectedTravel * 190}px`, scale: 1 - rejectedTravel * 0.08}}
        />

        <div style={{position: 'absolute', left: 1268, top: 178, width: 122, height: 344, border: `5px solid ${P.ink}`, backgroundColor: P.white}}>
          <div style={{position: 'absolute', left: -5, right: -5, top: 120, height: 92, backgroundColor: P.ink, translate: `0 ${gateOpen * -102}px`}} />
          <MessagesSquare size={60} color={P.blue} style={{position: 'absolute', left: 27, top: 142}} />
          <div style={{position: 'absolute', left: -18, bottom: -48, width: 150, textAlign: 'center', fontSize: 25, fontWeight: 950}}>质证门</div>
        </div>

        <ImpactReveal delay={160} style={{position: 'absolute', right: 18, top: 188}}>
          <div style={{width: 264, height: 148, backgroundColor: P.green, color: P.white, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
            <div><FileCheck2 size={52} /><div style={{fontSize: 30, fontWeight: 950, marginTop: 8}}>可作为鉴定根据</div></div>
          </div>
        </ImpactReveal>
        <ImpactReveal delay={188} style={{position: 'absolute', left: 1218, bottom: 28}}>
          <div style={{width: 470, height: 118, backgroundColor: P.red, color: P.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: 30, fontWeight: 950}}>
            <Ban size={52} /> 不得作为鉴定根据
          </div>
        </ImpactReveal>
      </div>
    </SceneShell>
  );
};

const Consequence = ({
  top,
  color,
  icon,
  title,
  delay,
}: {
  top: number;
  color: string;
  icon: ReactNode;
  title: string;
  delay: number;
}) => (
  <Enter delay={delay} from="right" style={{position: 'absolute', right: 18, top, width: 590, height: 128, backgroundColor: color, color: P.white, display: 'flex', alignItems: 'center', gap: 24, padding: '20px 28px'}}>
    {icon}
    <div style={{fontSize: 29, fontWeight: 950}}>{title}</div>
  </Enter>
);

export const AppearanceConsequencesScene = () => {
  const frame = toSourceFrame(useCurrentFrame());
  const summonsTravel = interpolate(frame, [18, 58], [0, 1], CLAMP);
  const refusalStamp = interpolate(frame, [78, 94], [0, 1], CLAMP);
  const opinionExit = interpolate(frame, [102, 144], [0, 1], CLAMP);
  const refundTravel = interpolate(frame, [146, 184], [0, 1], CLAMP);

  return (
    <SceneShell code="03" title="出庭不是形式：一次拒不到庭会切断证据链" object="鉴定意见">
      <div
        data-layout="summons-cost-split-and-sanction-cascade"
        data-visual-anchor="boundary"
        data-text-treatments="label-block,stamp,external-negation,soft-highlight"
        data-visual-grammar="summons,cost-allocation,exception,sanction-cascade"
        data-focal-rule="defective-opinions-shift-costs-and-refusal-destroys-evidentiary-effect"
        data-focal-channels="icon,motion,enclosure,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={2} style={{position: 'absolute', left: 28, top: 8}}>
          <Label color={P.green}>正常出庭：费用分流</Label>
        </Enter>
        <Enter delay={8} style={{position: 'absolute', left: 32, top: 92, width: 720, height: 120, backgroundColor: P.white, border: `4px solid ${P.green}`, padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 24}}>
          <BadgeDollarSign size={62} color={P.green} />
          <div><div style={{fontSize: 31, fontWeight: 950}}>原则：败诉方负担出庭费用</div><div style={{fontSize: 23, marginTop: 8, color: P.steel}}>费用跟随诉讼结果</div></div>
        </Enter>
        <Enter delay={28} style={{position: 'absolute', left: 32, top: 248, width: 720, height: 160, backgroundColor: P.ink, color: P.white, padding: '26px 30px', display: 'flex', alignItems: 'center', gap: 24}}>
          <FileClock size={64} color={P.yellow} />
          <div><div style={{fontSize: 30, fontWeight: 950}}>意见不明确 / 有瑕疵</div><div style={{fontSize: 28, marginTop: 12, color: P.yellow, fontWeight: 950}}>鉴定人自行负担</div></div>
        </Enter>
        <div style={{position: 'absolute', left: 86, top: 450, width: 612, height: 92, borderBottom: `8px solid ${P.steel}`}}>
          <ScaleBeam progress={summonsTravel} />
        </div>

        <div style={{position: 'absolute', left: 804, top: 0, bottom: 12, width: 7, backgroundColor: P.ink}} />
        <Enter delay={42} style={{position: 'absolute', left: 854, top: 8}}>
          <Label color={P.red}>经法院通知仍拒不出庭</Label>
        </Enter>
        <div style={{position: 'absolute', left: 860, top: 104, width: 270, height: 174, backgroundColor: P.white, border: `4px solid ${P.blue}`, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
          <div><Gavel size={58} color={P.blue} /><div style={{fontSize: 28, fontWeight: 950, marginTop: 12}}>法院通知出庭</div></div>
        </div>
        <div style={{position: 'absolute', left: 1114, top: 182, width: 178, height: 7, backgroundColor: P.blue, scale: `${summonsTravel} 1`, transformOrigin: 'left center'}} />
        <div
          style={{
            position: 'absolute',
            left: 1278,
            top: 112,
            width: 260,
            height: 174,
            backgroundColor: P.white,
            border: `4px solid ${P.red}`,
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          }}
        >
          <div><UserRoundCheck size={58} color={P.red} /><div style={{fontSize: 28, fontWeight: 950, marginTop: 12}}>鉴定人拒不到庭</div></div>
          <div style={{position: 'absolute', inset: -12, border: `8px solid ${P.red}`, opacity: refusalStamp, scale: 0.72 + refusalStamp * 0.28}} />
        </div>

        <div
          style={{
            position: 'absolute',
            left: 902,
            top: 342,
            width: 250,
            height: 158,
            backgroundColor: P.white,
            border: `4px solid ${P.blue}`,
            padding: '22px 24px',
            opacity: 1 - opinionExit * 0.72,
            translate: `${opinionExit * 148}px ${opinionExit * 44}px`,
            rotate: `${opinionExit * -7}deg`,
          }}
        >
          <FileCheck2 size={54} color={P.blue} />
          <div style={{fontSize: 29, fontWeight: 950, marginTop: 12}}>鉴定意见</div>
        </div>
        <ImpactReveal delay={104} style={{position: 'absolute', left: 872, top: 524}}>
          <div style={{width: 370, height: 92, backgroundColor: P.red, color: P.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 28, fontWeight: 950}}>
            <FileX2 size={48} /> 不得作为定案根据
          </div>
        </ImpactReveal>

        <Consequence top={328} color={P.red} icon={<FileX2 size={52} />} title="鉴定意见退出定案链" delay={106} />
        <Consequence top={474} color={P.blue} icon={<RotateCcw size={52} />} title="退还已经收取的鉴定费用" delay={142} />
        <Consequence top={620} color={P.orange} icon={<ShieldAlert size={52} />} title="建议有关部门依法处罚" delay={178} />
        <CircleDollarSign
          size={46}
          color={P.yellow}
          style={{position: 'absolute', left: 1510, top: 522, translate: `${refundTravel * -318}px 0px`, opacity: refundTravel}}
        />
      </div>
    </SceneShell>
  );
};

const ScaleBeam = ({progress}: {progress: number}) => (
  <div style={{position: 'absolute', inset: 0}}>
    <div style={{position: 'absolute', left: 292, top: 18, width: 10, height: 74, backgroundColor: P.steel}} />
    <div style={{position: 'absolute', left: 54, top: 24, width: 500, height: 8, backgroundColor: P.ink, rotate: `${-3 + progress * 6}deg`}} />
    <div style={{position: 'absolute', left: 18, top: 44, display: 'flex', alignItems: 'center', gap: 12, color: P.green, fontSize: 24, fontWeight: 950}}>
      <CircleDollarSign size={42} /> 败诉方
    </div>
    <div style={{position: 'absolute', right: 12, top: 44, display: 'flex', alignItems: 'center', gap: 12, color: P.orange, fontSize: 24, fontWeight: 950}}>
      <CircleDollarSign size={42} /> 鉴定人
    </div>
  </div>
);
