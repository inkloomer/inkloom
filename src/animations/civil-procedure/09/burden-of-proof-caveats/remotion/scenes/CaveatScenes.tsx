import {ArrowRight, Check, CircleHelp, Gavel, ShieldX, UserRound, X} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CLAMP} from '../../../../../shared/remotion-runtime';
import {CutIn, DRAFT, ErrataCanvas, GREEN, Highlight, INK, PAPER, PLATE, RED, Slam, Sweep, Tag, TINT, WRONG} from '../visual-system';

const CAVEATS = [
  {number: '01', wrong: '事实清楚也适用证明责任', right: '只有真伪不明，风险才落下', key: '真伪不明'},
  {number: '02', wrong: '法院依职权取证＝承担证明责任', right: '主体只有当事人，法院不承担', key: '当事人'},
  {number: '03', wrong: '双方当事人都要承担', right: '单一事实只由一方承担', key: '一方'},
  {number: '04', wrong: '证明责任在原被告间转移', right: '由法律预先确定，不转移', key: '不转移'},
  {number: '05', wrong: '不承担证明责任就不能举证', right: '可以积极举证，此时是反证', key: '反证'},
  {number: '06', wrong: '裁判结论就是客观事实', right: '只是拟制，可能与事实不符', key: '拟制'},
] as const;

export const CaveatsBoardScene = () => {
  return (
    <ErrataCanvas code="01" eyebrow="BURDEN OF PROOF · SIX CAVEATS" title="理解证明责任的六个注意点">
      <div data-layout="caveat-correction-board" data-visual-anchor="typographic-sequence" data-text-treatments="label-block,thin-underline,external-negation,stamp" data-visual-grammar="rejection,correction,sequence" data-focal-rule="caveat-correction-pairs" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: 0}}>
        {CAVEATS.map((item, index) => {
          const delay = 30 + index * 34;
          const top = index * 108;
          return (
            <div key={item.number} style={{position: 'absolute', left: 0, right: 0, top, height: 96}}>
              <Slam delay={delay + 6} style={{position: 'absolute', left: 0, top: 16, width: 64, height: 64, backgroundColor: RED, color: PAPER, rotate: '-2deg', display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 950}}>{item.number}</Slam>
              <CutIn delay={delay} style={{position: 'absolute', left: 82, top: 0, width: 640, height: 96, backgroundColor: PLATE, border: `4px dashed ${DRAFT}`, rotate: '-0.4deg', padding: '0 20px 0 24px', display: 'flex', alignItems: 'center', gap: 18}}>
                <Slam delay={delay + 14}><span style={{display: 'grid', placeItems: 'center', width: 52, height: 52, border: `5px solid ${RED}`, borderRadius: '50%', color: RED}}><X size={34} strokeWidth={4} /></span></Slam>
                <span style={{fontSize: 29, fontWeight: 850, color: WRONG, whiteSpace: 'nowrap'}}>{item.wrong}</span>
                <span style={{position: 'absolute', right: 18, top: '50%', translate: '0 -50%'}}><Tag color={DRAFT} tone="ink">误区</Tag></span>
              </CutIn>
              <div style={{position: 'absolute', left: 738, top: 22, width: 70, height: 52, display: 'grid', placeItems: 'center'}}>
                <ArrowRightSweep delay={delay + 18} />
              </div>
              <CutIn delay={delay + 22} direction="right" style={{position: 'absolute', left: 822, right: 0, top: 0, height: 96, backgroundColor: TINT, border: `5px solid ${GREEN}`, padding: '0 20px 0 24px', display: 'flex', alignItems: 'center', gap: 20}}>
                <Slam delay={delay + 28}><span style={{display: 'grid', placeItems: 'center', width: 52, height: 52, border: `5px solid ${GREEN}`, borderRadius: '50%', color: GREEN}}><Check size={34} strokeWidth={4} /></span></Slam>
                <span style={{fontSize: 31, fontWeight: 950, color: INK, whiteSpace: 'nowrap'}}>
                  {item.right.split(item.key).map((part, partIndex, parts) => (
                    <span key={partIndex}>{part}{partIndex < parts.length - 1 ? <Sweep color={GREEN} delay={delay + 34}>{item.key}</Sweep> : null}</span>
                  ))}
                </span>
                <span style={{position: 'absolute', right: 18, top: '50%', translate: '0 -50%'}}><Tag color={GREEN}>正解</Tag></span>
              </CutIn>
            </div>
          );
        })}
      </div>
    </ErrataCanvas>
  );
};

const ArrowRightSweep = ({delay}: {delay: number}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 10], [0, 1], CLAMP);
  return <ArrowRight size={58} strokeWidth={3.5} color={RED} style={{scale: `${progress} 1`, transformOrigin: 'left center'}} />;
};

export const FictionVerdictScene = () => {
  const frame = useCurrentFrame();
  const hinge = interpolate(frame, [92, 106], [0, 1], CLAMP);
  return (
    <ErrataCanvas code="02" eyebrow="BURDEN OF PROOF · FICTION" title="李四案：裁判结论与客观事实">
      <div data-layout="fiction-verdict-hinge" data-visual-anchor="role-pair" data-text-treatments="label-block,soft-highlight,thin-underline,stamp" data-visual-grammar="comparison,presumption,consequence" data-focal-rule="fiction-verdict-divergence" data-focal-channels="icon,connector,contrast,annotation" style={{position: 'absolute', inset: 0}}>
        <CutIn delay={10} style={{position: 'absolute', left: 0, top: 0, width: 520, height: 84, backgroundColor: PLATE, border: `5px solid ${INK}`, padding: '0 22px', display: 'flex', alignItems: 'center', gap: 16}}>
          <UserRound size={46} strokeWidth={3} color={RED} />
          <div>
            <div style={{fontSize: 26, fontWeight: 950, color: INK}}>张三起诉李四</div>
            <div style={{marginTop: 4, fontSize: 22, fontWeight: 850, color: WRONG}}>索赔医疗费 1 万</div>
          </div>
        </CutIn>
        <div style={{position: 'absolute', left: 536, top: 16, width: 64, height: 52, display: 'grid', placeItems: 'center'}}>
          <ArrowRightSweep delay={18} />
        </div>
        <CutIn delay={26} style={{position: 'absolute', left: 616, top: 0, width: 520, height: 84, backgroundColor: PLATE, border: `5px solid ${INK}`, padding: '0 22px', display: 'flex', alignItems: 'center', gap: 16}}>
          <CircleHelp size={46} strokeWidth={3} color={RED} />
          <div>
            <div style={{fontSize: 26, fontWeight: 950, color: INK}}>张三举证不足</div>
            <div style={{marginTop: 4, fontSize: 22, fontWeight: 850, color: WRONG}}><Highlight color={TINT} delay={50}>侵权事实真伪不明</Highlight></div>
          </div>
        </CutIn>
        <div style={{position: 'absolute', left: 1152, top: 16, width: 64, height: 52, display: 'grid', placeItems: 'center'}}>
          <ArrowRightSweep delay={34} />
        </div>
        <CutIn delay={42} style={{position: 'absolute', left: 1232, right: 0, top: 0, height: 84, backgroundColor: PLATE, border: `5px solid ${INK}`, padding: '0 22px', display: 'flex', alignItems: 'center', gap: 16}}>
          <Gavel size={46} strokeWidth={3} color={RED} />
          <div>
            <div style={{fontSize: 26, fontWeight: 950, color: INK}}>法院适用证明责任</div>
            <div style={{marginTop: 4, fontSize: 22, fontWeight: 850, color: WRONG}}>推定主张不成立</div>
          </div>
        </CutIn>
        <CutIn delay={64} style={{position: 'absolute', left: 0, top: 120, width: 830, height: 310, backgroundColor: TINT, border: `6px solid ${GREEN}`, padding: '28px 34px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Tag color={GREEN}>客观事实</Tag><span style={{display: 'grid', placeItems: 'center', width: 58, height: 58, border: `5px solid ${GREEN}`, borderRadius: '50%', color: GREEN}}><Check size={38} strokeWidth={4} /></span></div>
          <div style={{marginTop: 30, fontSize: 42, fontWeight: 950, color: INK}}>李四确实殴打了张三</div>
          <div style={{marginTop: 22, fontSize: 24, fontWeight: 850, color: WRONG}}>事实为真，却无法被证明</div>
        </CutIn>
        <div style={{position: 'absolute', left: 830, top: 140, width: 100, textAlign: 'center', opacity: hinge, scale: `${hinge} 1`, transformOrigin: 'center'}}>
          <div style={{fontSize: 92, fontWeight: 950, color: RED, lineHeight: 1}}>≠</div>
          <Tag color={RED} tone="paper">证明责任是拟制</Tag>
        </div>
        <CutIn delay={78} direction="right" style={{position: 'absolute', left: 930, right: 0, top: 120, height: 310, backgroundColor: PLATE, border: `6px solid ${RED}`, padding: '28px 34px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Tag color={RED}>裁判结论</Tag><span style={{display: 'grid', placeItems: 'center', width: 58, height: 58, border: `5px solid ${RED}`, borderRadius: '50%', color: RED}}><X size={38} strokeWidth={4} /></span></div>
          <div style={{marginTop: 30, fontSize: 42, fontWeight: 950, color: INK}}>推定侵权事实不成立</div>
          <div style={{marginTop: 22, fontSize: 24, fontWeight: 850, color: WRONG}}>判决驳回张三的诉讼请求</div>
        </CutIn>
        <CutIn delay={108} direction="up" style={{position: 'absolute', left: 0, right: 0, top: 470, height: 160, backgroundColor: PLATE, border: `6px solid ${INK}`, display: 'flex', alignItems: 'center', gap: 26, padding: '0 34px'}}>
          <Slam delay={118}><span style={{display: 'inline-block', border: `5px solid ${RED}`, padding: '10px 18px 11px', color: RED, fontWeight: 950, rotate: '-2deg', fontSize: 26}}>拟制结论</span></Slam>
          <span style={{fontSize: 34, fontWeight: 950, color: INK}}>证明责任的结论只是<Sweep color={GREEN} delay={132}>拟制</Sweep>，可能与客观事实不相符合</span>
        </CutIn>
      </div>
    </ErrataCanvas>
  );
};

export const CourtOutsiderGateScene = () => {
  const frame = useCurrentFrame();
  const boundary = interpolate(frame, [54, 66], [0, 1], CLAMP);
  return (
    <ErrataCanvas code="03" eyebrow="BURDEN OF PROOF · SUBJECTS" title="法院为什么不是证明责任主体">
      <div data-layout="court-outsider-gate" data-visual-anchor="boundary" data-text-treatments="label-block,thin-underline,external-negation,stamp" data-visual-grammar="exclusion,authority-limit,contrast" data-focal-rule="court-burden-exclusion" data-focal-channels="icon,enclosure,connector,annotation" style={{position: 'absolute', inset: 0}}>
        <CutIn delay={8} style={{position: 'absolute', left: 0, top: 0, width: 920, height: 560, backgroundColor: PLATE, border: `7px solid ${INK}`, padding: '20px 24px'}}>
          <Tag color={INK} tone="paper">证明责任场</Tag>
          <CutIn delay={18} style={{position: 'absolute', left: 60, top: 150, width: 350, height: 182, backgroundColor: INK, color: PAPER, padding: '24px 26px'}}>
            <UserRound size={52} strokeWidth={3} color={PAPER} />
            <div style={{marginTop: 16, fontSize: 30, fontWeight: 950}}>原告 · 主张者</div>
            <div style={{marginTop: 10, fontSize: 23, fontWeight: 850, color: '#cfc9ba'}}>承受真伪不明的风险</div>
          </CutIn>
          <CutIn delay={30} style={{position: 'absolute', left: 510, top: 150, width: 350, height: 182, backgroundColor: PLATE, border: `5px solid ${INK}`, padding: '24px 26px'}}>
            <UserRound size={52} strokeWidth={3} color={INK} />
            <div style={{marginTop: 16, fontSize: 30, fontWeight: 950}}>被告 · 反驳者</div>
            <div style={{marginTop: 10, fontSize: 23, fontWeight: 850, color: WRONG}}>也可能承担不利后果</div>
          </CutIn>
          <CutIn delay={44} style={{position: 'absolute', left: 60, right: 60, top: 470, textAlign: 'center', fontSize: 25, fontWeight: 900, color: INK}}>
            真伪不明时，由负有责任的一方承受不利后果
          </CutIn>
        </CutIn>
        <div style={{position: 'absolute', left: 948, top: 0, width: 6, height: 560, backgroundColor: RED, scale: `1 ${boundary}`, transformOrigin: 'center top'}} />
        <Slam delay={70} style={{position: 'absolute', left: 906, top: 236, zIndex: 2}}>
          <span style={{display: 'grid', placeItems: 'center', width: 84, height: 84, border: `6px solid ${RED}`, borderRadius: '50%', backgroundColor: PAPER, color: RED}}>
            <X size={54} strokeWidth={4.5} />
          </span>
        </Slam>
        <CutIn delay={60} direction="right" style={{position: 'absolute', left: 1010, right: 0, top: 0, width: 774, height: 560, backgroundColor: PLATE, border: `7px solid ${RED}`, padding: '26px 30px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}><Gavel size={56} strokeWidth={3} color={RED} /><span style={{fontSize: 36, fontWeight: 950}}>法院</span><Tag color={RED}>依职权调查收集证据</Tag></div>
          <div style={{marginTop: 34, paddingLeft: 6}}>
            {['涉及国家、社会、第三人利益的事实', '身份关系', '程序性事实'].map((item, index) => (
              <CutIn key={item} delay={74 + index * 8} style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: index ? 16 : 0, fontSize: 26, fontWeight: 850, color: INK}}>
                <span style={{width: 14, height: 14, backgroundColor: RED, display: 'inline-block', rotate: '45deg'}} />
                {item}
              </CutIn>
            ))}
          </div>
          <CutIn delay={98} style={{position: 'absolute', left: 30, right: 30, bottom: 34, display: 'flex', alignItems: 'center', gap: 18, paddingTop: 22, borderTop: `4px solid ${RED}`}}>
            <ShieldX size={50} strokeWidth={3} color={RED} />
            <div style={{fontSize: 27, lineHeight: 1.35, fontWeight: 900}}>
              与证明责任无关 · 法院不可能承担<Sweep color={GREEN} delay={112}>败诉风险</Sweep>
            </div>
          </CutIn>
        </CutIn>
        <CutIn delay={108} direction="up" style={{position: 'absolute', left: 0, right: 0, top: 590, height: 94, backgroundColor: PLATE, border: `6px solid ${INK}`, display: 'flex', alignItems: 'center', gap: 26, padding: '0 34px'}}>
          <Slam delay={118}><span style={{display: 'inline-block', border: `5px solid ${GREEN}`, padding: '8px 16px 9px', color: GREEN, fontWeight: 950, rotate: '-2deg', fontSize: 26}}>职权取证 ≠ 证明责任</span></Slam>
          <span style={{fontSize: 32, fontWeight: 950, color: INK}}>法院是裁判者，不承担败诉风险</span>
        </CutIn>
      </div>
    </ErrataCanvas>
  );
};
