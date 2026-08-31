import {Ban, Coins, EyeOff, Gavel, Handshake, Megaphone, Scale, Zap} from 'lucide-react';
import {C, Enter, IconChip, LedgerStamp, Mark, Neg, Panel, Shell, SoftHi, TabChip, ThinU} from './kit';

export const ExtortionWillFreedomScene = () => {
  /* data-final-knowledge="extortion-model-board" data-final-knowledge="completion-causation-board" data-final-knowledge="will-freedom-board" data-final-knowledge="exercise-right-board" */
  return (
    <Shell code="09" kicker="第六节 · 敲诈勒索罪" title="敲诈勒索：恐惧心理·意志自由">
      <div
        data-layout="extortion-will-freedom-split"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="extortion-model-board,will-freedom-board"
        data-focal-rule="extortion-requires-fear-and-keeps-part-will-freedom"
        data-focal-channels="icon,contrast,enclosure,annotation"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="extortion-model-board" style={{position: 'absolute', left: 0, top: 0, width: 876, height: 380}}>
          <Panel tone={C.seal} watermark={<Megaphone size={160} color={C.seal} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.seal} icon={<Megaphone size={24} color={C.white} strokeWidth={2.2} />}>实行行为 · 恐吓行为模型</TabChip>
            <IconChip icon={<Megaphone size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="以恶害相通告：">
              鬼面具吓人<Neg size={20}>∉通告</Neg>→盗窃罪；内容<Mark color={C.seal}>合法也可</Mark>（告发受贿索5万∈敲诈）
            </IconChip>
            <IconChip icon={<EyeOff size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="使对方产生恐惧心理：">
              前提＝对方<ThinU color={C.slate}>相信</ThinU>恶害（“让雷劈你”没人信<Neg size={20}>∉恐吓</Neg>）
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="须为重大恶害：">
              不还手机身份证索3000元——非重大恶害<Neg size={20}>∉恐惧</Neg>→不构成
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={40} marker="completion-causation-board" style={{position: 'absolute', left: 900, top: 0, width: 876, height: 380}}>
          <Panel tone={C.lock} watermark={<Scale size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8}}>
            <TabChip tone={C.lock} icon={<Scale size={24} color={C.white} strokeWidth={2.2} />}>既遂 · 基于恐惧交付＋因果关系</TabChip>
            <IconChip icon={<Coins size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="第三步＋第四步：">
              对方<Mark color={C.lock}>基于恐惧</Mark>交付财物 → 行为人取得财物
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="黑老大欣赏案：">
              未恐惧·欣赏而给 → 因果关系<Neg size={20}>不成立</Neg>，敲诈勒索罪<Neg size={20}>未遂</Neg>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="警方诱捕放钱案：">
              配合侦查放钱非基于恐惧 → <Neg size={20}>未遂</Neg>（拿到手也是未遂）
            </IconChip>
          </Panel>
        </Enter>

        <Enter delay={104} marker="will-freedom-board" style={{position: 'absolute', left: 0, top: 404, width: 1130, height: 340}}>
          <Panel tone={C.brass} watermark={<Zap size={150} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6}}>
            <TabChip tone={C.brass} icon={<Zap size={24} color={C.white} strokeWidth={2.2} />}>与抢劫罪的区分 · 意志自由剥夺程度（收保护费五情形）</TabChip>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
              <IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="扇耳光警告给钱：">
                暴力<Neg size={19}>不足以</Neg>压制反抗，有得选 → <Mark color={C.brass}>敲诈勒索罪</Mark>
              </IconChip>
              <IconChip icon={<Gavel size={24} color={C.white} strokeWidth={2.2} />} tone={C.brass} title="“后天不给钱就放血”：">
                日后暴力·有得选 → <Mark color={C.brass}>敲诈勒索罪</Mark>（可当场也可日后取财）
              </IconChip>
              <IconChip icon={<Zap size={24} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="“现在不给现在放血”：">
                没得选只好给 → <Mark color={C.seal}>抢劫罪</Mark>；两个“当场”都满足＝抢劫
              </IconChip>
            </div>
            <Enter delay={196}><LedgerStamp delay={196} tone="lock">口诀：任意一个“当场”不满足 → 有得选 → 敲诈勒索</LedgerStamp></Enter>
          </Panel>
        </Enter>

        <Enter delay={150} marker="exercise-right-board" style={{position: 'absolute', left: 1154, top: 404, width: 622, height: 340}}>
          <Panel tone={C.lock} watermark={<Handshake size={150} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 7}}>
            <TabChip tone={C.lock} icon={<Handshake size={24} color={C.white} strokeWidth={2.2} />}>与行使权利 · 判断两步走</TabChip>
            <IconChip icon={<Scale size={26} color={C.white} strokeWidth={2.2} />} tone={C.lock} title="① 非法占有目的：">
              有<b>请求权基础</b>（事实＋法律依据）＝行使权利<Neg size={20}>∉本罪</Neg>；摩托车被偷恐吓要回<Neg size={20}>∉</Neg>
            </IconChip>
            <IconChip icon={<Ban size={26} color={C.white} strokeWidth={2.2} />} tone={C.seal} title="青春损失费3000万：">
              <Neg size={20}>无法律依据</Neg>→非法占有目的＋恐吓 → 构成敲诈勒索罪
            </IconChip>
            <IconChip icon={<Megaphone size={26} color={C.white} strokeWidth={2.2} />} tone={C.slate} title="② 恐吓行为：">
              检举揭发权<Mark color={C.slate}>不能</Mark>作为勒索财物手段（嫖娼事实索1万∈）
            </IconChip>
            <Enter delay={230}><SoftHi style={{fontSize: 20 }}>数额有争议：多数说→没有非法占有目的（苍蝇案索3000元∉）</SoftHi></Enter>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
