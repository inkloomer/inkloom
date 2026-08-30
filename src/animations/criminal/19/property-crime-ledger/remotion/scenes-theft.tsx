import {Ban, Gavel, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const TheftTransferPeaceScene = () => {
  /* data-final-knowledge="transfer-panel" data-final-knowledge="peace-panel" data-final-knowledge="views-panel" */
  return (
    <Shell code="03" kicker="第三节 · 盗窃罪" title="盗窃罪：转移占有·平和手段">
      <div
        data-layout="theft-transfer-peace-vault"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="transfer-panel,peace-panel"
        data-focal-rule="theft-is-transfer-of-others-possession-by-peaceful-means"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="transfer-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 320}}>
          <Panel tone={C.lock} watermark={<Scale size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.lock} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>转移占有 · 两个环节</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.pulse} title="环节一 破坏他人占有：">
              有该行为 → <Mark color={C.lock}>成立</Mark>盗窃罪
            </IconChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="环节二 建立自己占有：">
              有该行为 → <Mark color={C.lock}>既遂</Mark>
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="与侵占罪的区分：">
              盗窃＝破坏他人占有 · 侵占＝事先已在占有·无破坏
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="peace-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 320}}>
          <Panel tone={C.chart2} watermark={<Zap size={160} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.chart2} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>平和手段 · 暴力程度三阶</TabChip>
            <IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="盗窃罪：">
              对物平和手段·对人没有危险
            </IconChip>
            <IconChip icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="抢夺罪：">
              对物暴力·夺取财物·对人有危险
            </IconChip>
            <IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="抢劫罪：">
              对人暴力·压制人的反抗
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="views-panel" style={{position: 'absolute', left: 0, right: 0, top: 344, bottom: 0}}>
          <Panel tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.brass} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>秘密性 · 观点展示（抢劫乌龙案）</TabChip>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6}}>
                <Enter delay={44}><IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="个别公开说（多数）：">
                  个别情形公开也属盗窃——三罪是A与A+B位阶关系·抢劫可包容评价为盗窃
                </IconChip></Enter>
                <Enter delay={54}><IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="全部秘密说：">
                  所有情形秘密（自认为秘密）——A与非A对立排斥·乌龙案出现处罚漏洞
                </IconChip></Enter>
              </div>
              <div style={{width: 420, display: 'flex', flexDirection: 'column', gap: 6}}>
                <Enter delay={64} style={{fontSize: 19, fontWeight: 800, color: C.inkSoft}}>乌龙案：甲以为乙是车主·打倒乙（轻伤）骑走丙的摩托</Enter>
                <Enter delay={74}><Neg size={18}>不构成抢劫（暴力对象须是占有人）·不构成抢夺（对物无暴力）</Neg></Enter>
                <Enter delay={84}><SoftHi style={{fontSize: 18 }}>个别公开说→构成盗窃罪；全部秘密说→处罚漏洞</SoftHi></Enter>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
