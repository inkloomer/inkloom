import {Ban, Coins, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const PossessionPurposeWardScene = () => {
  /* data-final-knowledge="purpose-panel" data-final-knowledge="exclude-panel" data-final-knowledge="use-panel" data-final-knowledge="object-panel" */
  return (
    <Shell code="02" kicker="第一节 · 非法占有目的·行为对象" title="非法占有目的＝排除意思＋利用意思">
      <div
        data-layout="possession-purpose-quad-vault"
        data-visual-anchor="typographic-sequence"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="purpose-panel,exclude-panel"
        data-focal-rule="possession-purpose-needs-both-exclusion-and-use-intentions"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="purpose-panel" style={{position: 'absolute', left: 0, right: 0, top: 0, height: 120}}>
          <Panel tone={C.lock} style={{height: '100%', padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 18}}>
            <TabChip tone={C.lock} icon={<Coins size={24} color={C.white} strokeWidth={2.2} />}>非法占有目的</TabChip>
            <div style={{fontSize: 23, fontWeight: 900, color: C.ink}}>
              <Mark color={C.lock}>排除意思</Mark>（永久排除占有人）＋ <Mark color={C.seal}>利用意思</Mark>（对财物利用）——缺一不可
              <br />
              有＝取得型（盗窃）· 无＝毁弃型（故意毁坏财物罪）
            </div>
          </Panel>
        </Enter>
        <Enter delay={18} marker="exclude-panel" style={{position: 'absolute', left: 0, top: 144, width: 876, height: 260}}>
          <Panel tone={C.brass} watermark={<Ban size={160} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.brass} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>排除意思 · 缺少＝有返还意思</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="盗用自行车买酱油后放回：">
              无排除意思 → <Mark color={C.brass}>不构成盗窃罪</Mark>
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="use-panel" style={{position: 'absolute', left: 900, top: 144, width: 876, height: 260}}>
          <Panel tone={C.seal} watermark={<Zap size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>利用意思 · 缺少→毁坏财物罪</TabChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="以毁坏意思取财：">
              隐匿·抛弃·毁损 → 故意毁坏财物罪
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={42} marker="object-panel" style={{position: 'absolute', left: 0, right: 0, top: 428, bottom: 0}}>
          <Panel tone={C.chart2} watermark={<Scale size={160} color={C.chart2} strokeWidth={1.6} />} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.chart2} icon={<Coins size={24} color={C.white} strokeWidth={2.2} />}>行为对象 · 财物的范围</TabChip>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <Enter delay={54}><SoftHi style={{fontSize: 20 }}>无体物（电·网络信号）</SoftHi></Enter>
              <Enter delay={62}><SoftHi style={{fontSize: 20 }}>虚拟财产（Q币·游戏点卡）</SoftHi></Enter>
              <Enter delay={70}><SoftHi style={{fontSize: 20 }}>违禁品（毒品·假币可成抢夺对象）</SoftHi></Enter>
              <Enter delay={78}><SoftHi style={{fontSize: 20 }}>债权凭证（存折·银行卡）</SoftHi></Enter>
              <Enter delay={86}><SoftHi style={{fontSize: 20 }}>不动产（房屋）</SoftHi></Enter>
            </div>
            <Enter delay={96}><Neg size={20}>不包括人的身体——但分离出的器官·血液属于财物</Neg></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
