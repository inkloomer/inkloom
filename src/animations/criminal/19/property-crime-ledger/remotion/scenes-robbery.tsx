import {Ban, Gavel, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, Neg, Panel, Shell, SoftHi, TabChip} from './kit';

export const RobberyCoercionStepsScene = () => {
  /* data-final-knowledge="coercion-panel" data-final-knowledge="othermeans-panel" data-final-knowledge="transform-panel" data-final-knowledge="onthespot-panel" */
  return (
    <Shell code="04" kicker="第六节 · 抢劫罪" title="抢劫罪：强制手段·事后转化·当场性">
      <div
        data-layout="robbery-coercion-tri-vault"
        data-visual-anchor="document-fork"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="coercion-panel,transform-panel"
        data-focal-rule="robbery-coercion-suppresses-resistance-and-transforms-after-theft-with-on-spot-violence"
        data-focal-channels="icon,contrast,enclosure,connector"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="coercion-panel" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 330}}>
          <Panel tone={C.seal} watermark={<Zap size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>第一步 · 强制手段（压制反抗）</TabChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="暴力：">
              足以压制对方反抗
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="胁迫：">
              必须以暴力相胁迫（当场实现恶害）；揭发隐私→敲诈勒索罪；假炸弹也属暴力胁迫∈
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="其他方法：">
              昏醉型抢劫（麻醉后取财）；拘禁型抢劫（反锁阳台取财）——自己昏醉被利用→仅盗窃
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={18} marker="transform-panel" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 330}}>
          <Panel tone={C.lock} watermark={<Ban size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.lock} icon={<Ban size={24} color={C.white} strokeWidth={2.2} />}>🌟事后转化抢劫（第269条）</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="三轻罪：">
              犯盗窃 · 诈骗 · 抢夺罪
            </IconChip>
            <IconChip icon={<Zap size={26} color={C.white} strokeWidth={2.2} />} tone={C.amber} title="三目的：">
              窝藏赃物 · 抗拒抓捕 · 毁灭罪证
            </IconChip>
            <IconChip icon={<Gavel size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="实行行为：">
              当场使用暴力或以暴力相威胁（三个当场）
            </IconChip>
          </Panel>
        </Enter>
        <Enter delay={30} marker="onthespot-panel" style={{position: 'absolute', left: 0, right: 0, top: 354, bottom: 0}}>
          <Panel tone={C.brass} style={{height: '100%', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 9}}>
            <TabChip tone={C.brass} icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />}>与敲诈勒索罪的区分 · 意志自由剥夺程度</TabChip>
            <div style={{display: 'flex', gap: 14}}>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 6}}>
                <Enter delay={44}><IconChip icon={<Ban size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="抢劫＝完全剥夺：">
                  压制反抗·没得选只好给——暴力胁迫与取财具有当场性
                </IconChip></Enter>
                <Enter delay={54}><IconChip icon={<Scale size={24} color={C.white} strokeWidth={2.2} />} tone={C.chart2} title="敲诈勒索＝部分剥夺：">
                  没压制反抗·有的选最好给——可当场也可事后交付
                </IconChip></Enter>
              </div>
              <div style={{width: 460, display: 'flex', flexDirection: 'column', gap: 6}}>
                <Enter delay={64} style={{fontSize: 19, fontWeight: 800, color: C.inkSoft}}>三个当场：当场施加暴力·当场取财·时间紧密</Enter>
                <Enter delay={74}><Neg size={18}>以揭发隐私相胁 → 敲诈勒索罪（难达不敢反抗程度）</Neg></Enter>
                <Enter delay={84}><SoftHi style={{fontSize: 18 }}>昏醉利用（被害人自陷）→ 盗窃罪·非抢劫</SoftHi></Enter>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
