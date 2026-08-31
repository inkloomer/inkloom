import {Ban, Factory, Home, KeyRound, PackageCheck, Pickaxe, Scale, Siren, Target} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, TabChip, ThinU} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const GunFactorySafetyScene = () => {
  /* data-final-knowledge="gun-pipeline-board" data-final-knowledge="pipeline-case-board" data-final-knowledge="factory-lane-board" */
  const frame = useCurrentFrame();
  const chainX = interpolate(frame, [48, 130], [60, 1420], CLAMP);
  const chainIn = interpolate(frame, [42, 52], [0, 1], CLAMP);
  const linkGlows = [0, 1, 2, 3, 4, 5].map((i) => interpolate(frame, [58 + i * 12, 72 + i * 12], [0, 1], CLAMP));
  const laneX = interpolate(frame, [190, 250], [10, 1180], CLAMP);
  const laneIn = interpolate(frame, [184, 194], [0, 1], CLAMP);
  const chain = [
    {label: '制造', crime: '非法制造', icon: <Factory size={30} color={C.white} strokeWidth={2.2} />},
    {label: '买卖', crime: '非法买卖（双向）', icon: <Scale size={30} color={C.white} strokeWidth={2.2} />},
    {label: '运输·邮寄', crime: '非法运输·邮寄', icon: <PackageCheck size={30} color={C.white} strokeWidth={2.2} />},
    {label: '储存', crime: '非法储存＝大量', icon: <Home size={30} color={C.white} strokeWidth={2.2} />},
    {label: '持有·私藏', crime: '非法持有＝少量', icon: <KeyRound size={30} color={C.white} strokeWidth={2.2} />},
    {label: '携带', crime: '携枪进公共场所', icon: <Ban size={30} color={C.white} strokeWidth={2.2} />},
  ];
  return (
    <Shell code="07" kicker="第五节·第六节 · 枪支与安全生产" title="枪支流转链与安全生产时间轴">
      <div
        data-layout="gun-pipeline-factory-lane"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="gun-pipeline-board,factory-lane-board"
        data-focal-rule="each-link-of-the-chain-is-its-own-offence-with-its-own-threshold"
        data-focal-channels="icon,connector,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="gun-pipeline-board" style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 262}}>
          <Panel tone={C.siren} watermark={<Target size={150} color={C.siren} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.siren} icon={<Target size={22} color={C.white} strokeWidth={2.2} />}>枪支流转链 · 每环一罪名（枪＝较大杀伤力·土炮大炮∈·弓弩∉）</TabChip>
            <div style={{position: 'relative', height: 160, marginTop: 8}}>
              <div style={{position: 'absolute', left: 70, top: 74, width: 1350, height: 6, backgroundColor: C.siren, opacity: 0.5}} />
              {chain.map((link, index) => (
                <div key={index} style={{position: 'absolute', left: index * 246, top: 0, width: 226, textAlign: 'center'}}>
                  <span style={{display: 'inline-flex', width: 62, height: 62, borderRadius: 14, backgroundColor: C.siren, alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 ${linkGlows[index] * 22}px ${C.siren}${linkGlows[index] > 0.5 ? '55' : '00'}`}}>{link.icon}</span>
                  <div style={{fontSize: 21, fontWeight: 930, color: C.siren, marginTop: 2}}>{link.label}</div>
                  <div style={{fontSize: 16, fontWeight: 850, color: C.inkSoft}}>{link.crime}</div>
                </div>
              ))}
              <div style={{position: 'absolute', left: chainX, top: 56, width: 52, height: 52, borderRadius: 26, backgroundColor: C.night, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: chainIn, boxShadow: '0 3px 9px rgba(37,35,28,0.45)'}}>
                <Target size={26} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 1456, top: 10, width: 292, border: `3px solid ${C.slate}`, padding: '8px 10px', fontSize: 18, fontWeight: 870, lineHeight: 1.4}}>
                <b style={{color: C.slate}}>盗窃抢夺枪支（127条）：</b>危险犯·既遂＝<Mark color={C.slate}>实际取得</Mark>；骗取→诈骗罪；抢劫→定<Neg size={16}>抢夺</Neg>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={44} marker="pipeline-case-board" style={{position: 'absolute', left: 0, top: 286, width: 1776, height: 250}}>
          <Panel tone={C.night} watermark={<Scale size={150} color={C.night} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 18px'}}>
            <TabChip tone={C.night} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>流转链上的三个考题卡</TabChip>
            <div style={{position: 'relative', height: 140, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 552, border: `4px solid ${C.brass}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.brass}}>买卖双向（125条）：</b>含卖也含买（为卖·为自用均∈）；<Mark color={C.brass}>物物交换∈</Mark>——枪换毒品：非法买卖枪支＋贩卖毒品<Neg size={17}>并罚</Neg>（2019）
              </div>
              <div style={{position: 'absolute', left: 584, top: 0, width: 552, border: `4px solid ${C.seal}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.seal}}>认识错误看客观：</b>想买枪买到子弹 → 定<Mark color={C.seal}>非法买卖弹药罪</Mark>（2020·选择性罪名可分拆）
              </div>
              <div style={{position: 'absolute', left: 1168, top: 0, width: 552, border: `4px solid ${C.slate}`, padding: '10px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.5}}>
                <b style={{color: C.slate}}>普通故意窃得枪支（2007）：</b>盗窃罪<Mark color={C.slate}>既遂</Mark>＋事后持有→非法持有枪支罪，<Neg size={17}>数罪并罚</Neg>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={94} marker="factory-lane-board" style={{position: 'absolute', left: 0, top: 560, width: 1776, height: 184}}>
          <Panel tone={C.lock} watermark={<Pickaxe size={150} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 18px'}}>
            <TabChip tone={C.lock} icon={<Pickaxe size={22} color={C.white} strokeWidth={2.2} />}>安全生产时间轴 · 过失犯罪，都要求实害结果</TabChip>
            <div style={{position: 'relative', height: 96, marginTop: 6}}>
              <div style={{position: 'absolute', left: 0, top: 62, width: 1180, height: 5, backgroundColor: C.lock, opacity: 0.5}} />
              <div style={{position: 'absolute', left: 1186, top: 52, width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: `20px solid ${C.lock}`}} />
              {[
                {left: 0, tone: C.lock, title: '强令·组织违章冒险作业（134条2款）', body: '强令冒险·明知重大隐患不排除仍组织'},
                {left: 420, tone: C.yellow, title: '重大事故发生', body: '重大责任事故·重大劳动安全事故（过失）'},
                {left: 840, tone: C.seal, title: '不报·谎报安全事故（139条之一·2024）', body: '负有报告职责者不报·谎报，贻误抢救，情节严重'},
              ].map((item, index) => (
                <div key={index} style={{position: 'absolute', left: item.left, top: 0, width: 380}}>
                  <div style={{fontSize: 20, fontWeight: 920, color: item.tone, lineHeight: 1.35}}>{item.title}</div>
                  <div style={{width: 4, height: 16, backgroundColor: item.tone, margin: '2px 0 0 22'}} />
                  <div style={{fontSize: 18, fontWeight: 850, color: C.inkSoft, lineHeight: 1.4}}>{item.body}</div>
                </div>
              ))}
              <div style={{position: 'absolute', left: laneX, top: 40, width: 34, height: 34, borderRadius: 17, backgroundColor: C.lock, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: laneIn}}>
                <Siren size={18} color={C.white} strokeWidth={2.4} />
              </div>
              <div style={{position: 'absolute', left: 1220, top: 4, width: 528, fontSize: 19, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                对照：<Mark color={C.yellow}>危险作业罪</Mark>＝故意＋具体危险（此前已讲）；本轴两罪＝<ThinU color={C.lock}>过失＋实害</ThinU>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
