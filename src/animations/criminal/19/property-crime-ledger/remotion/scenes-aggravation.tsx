import {Ban, Crosshair, Home, Landmark, Repeat, Scale, ShieldAlert, ShieldQuestion, Skull, Train, Users, Zap} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, TabChip, ThinU, LedgerStamp} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const RobberyAggravationBoardScene = () => {
  /* data-final-knowledge="ladder-base" data-final-knowledge="ladder-rungs" data-final-knowledge="ladder-top" */
  const frame = useCurrentFrame();
  const climbLeft = interpolate(frame, [40, 110], [650, 326], CLAMP);
  const climbTop = interpolate(frame, [40, 110], [652, 300], CLAMP);
  const climbIn = interpolate(frame, [34, 44], [0, 1], CLAMP);
  const flagIn = interpolate(frame, [116, 134], [0.6, 1], CLAMP);
  const RUNGS: Array<{icon: React.ReactNode; name: string; core: React.ReactNode}> = [
    {icon: <Home size={24} color={C.white} strokeWidth={2.2} />, name: '① 入户抢劫', core: <>户＝<Mark color={C.lock}>家庭生活</Mark>功能＋<Mark color={C.lock}>相对隔离</Mark>场所（集体宿舍·旅店房间·临时工棚<Neg size={18}>∉</Neg>）；合法入户后户内抢＝“在户内抢劫”<Neg size={18}>∉入户</Neg>；暴力须在户内＋主客观一致</>},
    {icon: <Train size={24} color={C.white} strokeWidth={2.2} />, name: '② 公共交通工具', core: <><Neg size={18}>不含</Neg>小型出租车；单位班车·校车等大中型<Mark color={C.slate}>∈</Mark>；须处<Mark color={C.slate}>运营状态</Mark>，进入内抢或拦截不进入均可</>},
    {icon: <Landmark size={24} color={C.white} strokeWidth={2.2} />, name: '③ 银行等金融机构', core: <>对象＝<Mark color={C.brass}>经营资金</Mark>（办公用品<Neg size={18}>∉</Neg>·大厅储户现金<Neg size={18}>∉</Neg>）；抢劫正在使用中的<Mark color={C.brass}>运钞车∈</Mark></>},
    {icon: <Repeat size={24} color={C.white} strokeWidth={2.2} />, name: '④ 多次抢劫', core: <>抢劫<Mark color={C.slate}>3次以上</Mark>且每次均构成犯罪；同一犯意同一地点连续抢多名乘客＝<ThinU color={C.slate}>一次</ThinU></>},
    {icon: <Skull size={24} color={C.white} strokeWidth={2.2} />, name: '⑤ 致人重伤、死亡', core: <>限<Mark color={C.seal}>实行行为</Mark>所致（同时存在原则）；既遂后逃跑伤主→抢劫＋故意伤害<Neg size={18}>并罚</Neg>；“人”含阻止者·打击错误第三人</>},
    {icon: <ShieldAlert size={24} color={C.white} strokeWidth={2.2} />, name: '⑥ 冒充军警人员', core: <>须<Mark color={C.lock}>足以使一般人相信</Mark>（制服·枪支·证件综合判断）；军警用<ThinU color={C.lock}>真实身份</ThinU>抢劫<Neg size={18}>∉</Neg></>},
    {icon: <Crosshair size={24} color={C.white} strokeWidth={2.2} />, name: '⑦ 持枪抢劫', core: <><Mark color={C.brass}>真枪</Mark>（仿真枪<Neg size={18}>∉</Neg>·空枪∈）＋<Mark color={C.brass}>使用或显示</Mark>；携带枪支抢夺定抢劫后<Neg size={18}>不得再评价</Neg>（禁止重复评价）</>},
    {icon: <Scale size={24} color={C.white} strokeWidth={2.2} />, name: '⑧ 军用·抢险救灾救济物资', core: <>对象认识错误（欲抢救灾物资实得军用物资）属<Mark color={C.lock}>同一构成要件内</Mark>，<ThinU color={C.lock}>不影响</ThinU>升格</>},
  ];
  return (
    <Shell code="08" kicker="第五节 · 抢劫罪" title="八个升格条件：通往加重法定刑的阶梯">
      <div
        data-layout="robbery-aggravation-ladder"
        data-visual-anchor="timeline-gate"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="ladder-base,ladder-rungs"
        data-focal-rule="each-rung-lifts-penalty-only-when-its-own-elements-match"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="ladder-base" style={{position: 'absolute', left: 0, bottom: 0, width: 560, height: 96}}>
          <Panel tone={C.slate} style={{height: '100%', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <Zap size={28} color={C.slate} strokeWidth={2.4} />
            <div style={{fontSize: 21, fontWeight: 900, lineHeight: 1.35}}>基本刑 3～10 年<br /><span style={{fontSize: 19, color: C.inkSoft, fontWeight: 850}}>强制手段＋压制反抗＋取财</span></div>
          </Panel>
        </Enter>

        <Enter delay={26} marker="ladder-rungs" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 744}}>
          <Panel watermark={<Zap size={260} color={C.seal} strokeWidth={1.4} />} style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, border: 'none', backgroundColor: 'transparent', borderTop: 'none'}}>
            <div style={{position: 'relative', height: '100%'}}>
            {RUNGS.map((rung, index) => {
              const delay = 20 + index * 22;
              const bottom = 112 + index * 70;
              const left = 596 - index * 68;
              return (
                <div key={index} style={{position: 'absolute', left, bottom, width: 1174 + index * 68}}>
                  <Enter delay={delay}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 14, border: `3px solid ${C.night}`, borderLeft: `10px solid ${C.seal}`, backgroundColor: C.white, padding: '8px 16px', minHeight: 62}}>
                      <span style={{flexShrink: 0, width: 46, height: 46, borderRadius: 9, backgroundColor: C.seal, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{rung.icon}</span>
                      <span style={{flexShrink: 0, fontSize: 22, fontWeight: 950, color: C.seal, width: 250}}>{rung.name}</span>
                      <span style={{fontSize: 20, fontWeight: 830, color: C.ink, lineHeight: 1.4}}>{rung.core}</span>
                    </div>
                  </Enter>
                  {index < RUNGS.length - 1 ? (
                    <div style={{position: 'absolute', left: 40, bottom: -14, width: 3, height: 14, backgroundColor: C.ghost}} />
                  ) : null}
                </div>
              );
            })}
            <div style={{position: 'absolute', left: climbLeft, top: climbTop, width: 54, height: 54, borderRadius: 27, backgroundColor: C.seal, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: climbIn, boxShadow: '0 3px 10px rgba(28,38,32,0.4)'}}>
              <Skull size={26} color={C.white} strokeWidth={2.4} />
            </div>
            <div style={{position: 'absolute', left: climbLeft + 62, top: climbTop + 12, fontSize: 17, fontWeight: 900, color: C.seal, opacity: climbIn}}>抢劫致人死亡·爬档</div>
          </div>
          </Panel>
        </Enter>

        <Enter delay={210} marker="ladder-top" style={{position: 'absolute', right: 0, top: 0, width: 470, height: 96}}>
          <Panel tone={C.seal} style={{height: '100%', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
            <ShieldQuestion size={28} color={C.seal} strokeWidth={2.4} />
            <div style={{fontSize: 22, fontWeight: 950, lineHeight: 1.3}}>登上任一横档 →<br /><span style={{display: 'inline-block', scale: `${flagIn}`}}><LedgerStamp delay={116} tone="seal">十年有期徒刑～死刑</LedgerStamp></span></div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
