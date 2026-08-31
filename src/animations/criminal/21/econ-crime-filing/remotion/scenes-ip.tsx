import type {ReactNode} from 'react';
import {Ban, Film, Globe, MonitorPlay, ShieldCheck, Store} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const IpCrimesScene = () => {
  const Quad = ({x, y, ok, delay, title, note}: {delay: number; note: ReactNode; ok: boolean; title: string; x: number; y: number}) => (
    <GateFlash delay={delay} tone={ok ? C.econ : C.stamp} style={{position: 'absolute', left: x, top: y, width: 300, height: 118, boxSizing: 'border-box', backgroundColor: ok ? C.white : C.stampSoft, border: `3px ${ok ? 'solid' : 'dashed'} ${ok ? C.econ : C.stamp}`, padding: '7px 10px', display: 'flex', flexDirection: 'column', gap: 4}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
        <span style={{fontSize: 22, fontWeight: 950, color: ok ? C.econ : C.stamp}}>{title}</span>
        {ok ? <Chip tone="econ">构成本罪</Chip> : <Neg size={21}>不构成本罪</Neg>}
      </div>
      <span style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.35}}>{note}</span>
    </GateFlash>
  );
  /* data-final-knowledge="copyright-quadrant" data-final-knowledge="copyright-count-floor" data-final-knowledge="trademark-mirror" data-final-knowledge="trade-secret-lane" */
  return (
    <Shell code="08" kicker="第七节" title="侵犯知识产权罪">
      <div
        data-layout="ip-quadrant-matrix"
        data-visual-anchor="comparison-axis"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="copyright-quadrant,copyright-count-floor,trademark-mirror,trade-secret-lane"
        data-focal-rule="a-pirated-copy-token-passes-online-gates-but-bounces-off-the-offline-playback-quadrant-while-count-rules-mirror-across-copyright-and-trademark"
        data-focal-channels="icon,contrast,enclosure,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="copyright-quadrant" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 530}}>
          <Panel tone={C.econ} watermark={<Film size={160} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.econ} icon={<Film size={24} color={C.white} strokeWidth={2.2} />}>侵犯著作权罪（第217条）· 发行/播放 × 线上/线下</TabChip>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: 20, fontWeight: 800, color: C.ink}}>
              <span data-stateful-source="pirated-copy-token"><Chip tone="night"><Film size={20} color={C.white} strokeWidth={2.2} />盗版电影文件（营利目的 · 违法所得数额较大）</Chip></span>
              <ThinU color={C.econ}>行为方式矩阵：关键看载体是否转让</ThinU>
            </div>
            <div style={{position: 'relative', height: 250}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 180, fontSize: 21, fontWeight: 950, color: C.econ}}>发行＝内容＋载体转让</div>
              <div style={{position: 'absolute', left: 0, top: 132, width: 180, fontSize: 21, fontWeight: 950, color: C.brass}}>播放＝展示内容，载体不转让</div>
              <div style={{position: 'absolute', left: 200, top: -6, display: 'flex', alignItems: 'center', gap: 6, fontSize: 21, fontWeight: 950, color: C.ledger}}><Globe size={22} color={C.ledger} strokeWidth={2.2} />线上（网络传播）</div>
              <div style={{position: 'absolute', left: 516, top: -6, display: 'flex', alignItems: 'center', gap: 6, fontSize: 21, fontWeight: 950, color: C.ledger}}><Store size={22} color={C.ledger} strokeWidth={2.2} />线下</div>
              <Quad x={196} y={26} ok delay={80} title="线上发行" note="上传供不特定人下载 → 发行＋网络传播" />
              <Quad x={516} y={26} ok delay={96} title="线下发行" note="卖、租盗版光盘给不特定人" />
              <Quad x={196} y={158} ok delay={112} title="线上播放" note="上传供在线观看、不能下载 → 播放＋网络传播" />
              <Quad x={516} y={158} ok={false} delay={128} title="线下播放" note="KTV 用影碟机播放他人音乐作品（2014）" />
              
              <Mover delay={70} span={30} fromX={0} fromY={0} toX={24} toY={-14} fadeAt={126} style={{position: 'absolute', left: 16, top: 66, zIndex: 3}}>
                <Chip tone="econ"><MonitorPlay size={20} color={C.white} strokeWidth={2.2} />上传 → 过闸 ✓</Chip>
              </Mover>
              <Mover delay={132} span={28} fromX={200} fromY={30} toX={-230} toY={-26} style={{position: 'absolute', left: 306, top: 106, zIndex: 3}}>
                <Chip tone="stamp"><Ban size={20} color={C.white} strokeWidth={2.2} />线下播放 → 弹回 ✗</Chip>
              </Mover>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <Chip tone="brass">破坏技术措施：故意避开或破坏保护技术措施（如擅自解密软件加密）</Chip>
              <ThinU color={C.econ}>线上两种行为均构成本罪；线下只有发行构成本罪</ThinU>
            </div>
          </Panel>
        </Enter>
        <Enter delay={40} marker="trademark-mirror" style={{position: 'absolute', left: 890, top: 0, width: 886, height: 252}}>
          <Panel tone={C.ledger} watermark={<ShieldCheck size={150} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.ledger} icon={<ShieldCheck size={24} color={C.white} strokeWidth={2.2} />}>假冒注册商标罪（第213条）· 罪数三分镜像</TabChip>
            <div style={{fontSize: 21, fontWeight: 800, color: C.ink, lineHeight: 1.45}}>
              未经许可，在<SoftHi>同一种</SoftHi>商品、服务上使用与其注册商标<SoftHi>相同</SoftHi>的商标，情节严重；修十一增加<ThinU color={C.ledger}>服务商标</ThinU>（商品商标＋服务商标）
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <Chip tone="ledger">假冒＋销售同一批 → 只定假冒注册商标罪</Chip>
              <Chip tone="ledger">只销售他人的假冒商品 → 销售假冒注册商标的商品罪</Chip>
              <Chip tone="ledger">假冒＋销售他人的 → 两罪并罚</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={70} marker="trade-secret-lane" style={{position: 'absolute', left: 890, top: 264, width: 886, height: 498}}>
          <Panel tone={C.brass} watermark={<ShieldCheck size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <TabChip tone={C.brass} icon={<ShieldCheck size={24} color={C.white} strokeWidth={2.2} />}>侵犯商业秘密罪（第219条）· 三行为通道</TabChip>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}><Chip tone="brass">①获取</Chip><span>盗窃、贿赂、欺诈、胁迫、电子侵入或其他不正当手段（非法复制属"盗窃"）</span></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}><Chip tone="brass">②流转</Chip><span>披露、使用或允许他人使用以前项手段获取的商业秘密</span></div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}><Chip tone="brass">③违约</Chip><span>违反保密义务披露、使用、允许他人使用所掌握的商业秘密；明知前款所列行为仍获取、披露、使用 → 以侵犯商业秘密论</span></div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <Chip tone="white">修十一："造成重大损失"（结果犯）→ "情节严重"（情节犯）</Chip>
              <Chip tone="white">增设第219条之一：为境外窃取、刺探、收买、非法提供商业秘密罪</Chip>
            </div>
          </Panel>
        </Enter>
        <Enter delay={96} marker="copyright-count-floor" style={{position: 'absolute', left: 0, top: 546, width: 866, height: 216}}>
          <Panel tone={C.stamp} style={{height: '100%', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.stamp} icon={<Film size={24} color={C.white} strokeWidth={2.2} />}>著作权罪数三分（同一批侵权作品）</TabChip>
            <div data-stateful-terminal="pirated-copy-token" style={{display: 'flex', flexWrap: 'wrap', gap: 7, fontSize: 21, fontWeight: 800, color: C.ink}}>
              <Chip tone="econ">侵犯＋销售同一批 → 只定侵犯著作权罪</Chip>
              <Chip tone="brass">不实施侵犯、只销售他人的侵权作品 → 销售侵权复制品罪（2025）</Chip>
              <Chip tone="stamp">侵犯＋销售他人的 → 侵犯著作权罪＋销售侵权复制品罪，并罚</Chip>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
