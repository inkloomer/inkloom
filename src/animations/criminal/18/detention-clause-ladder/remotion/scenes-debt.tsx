import {Ban, BookmarkCheck, Coins, Link2, Lock, ScrollText, Users, Wallet} from 'lucide-react';
import {C, Chip, Enter, LabelBlock, Mark, Neg, Panel, RowChip, Shell, SoftHi, Stamp, ThinU} from './kit';

export const DebtDetentionNoticeScene = () => (
  <Shell code="05" title="第238条第3款·索债型扣押与注意规定">
    <div
      data-layout="debt-purpose-fork"
      data-visual-anchor="document-fork"
      data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
      data-visual-grammar="notice-versus-fiction-distinction,debt-scope-boundary"
      data-focal-rule="debt-claim-lacks-illegal-appropriation-purpose-so-no-kidnapping"
      data-focal-channels="icon,contrast,enclosure,annotation"
      style={{position: 'absolute', inset: 0}}
    >
      {/* data-final-knowledge="debt-clause-strip" data-final-knowledge="notice-board" data-final-knowledge="conduct-mode-board" data-final-knowledge="debt-scope-board" */}
      <Panel
        watermark={<ScrollText size={190} color={C.warp} strokeWidth={1.5} />}
        style={{position: 'absolute', left: 0, top: 0, width: 1776, height: 96, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 18}}
        marker="debt-clause-strip"
      >
        <Enter delay={3} style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <ScrollText size={26} color={C.warp} />
          <LabelBlock size={24} color={C.warp}>第238条第3款</LabelBlock>
        </Enter>
        <Enter delay={18} style={{fontSize: 22, fontWeight: 800}}>
          为<ThinU color={C.warp}>索取债务</ThinU>非法扣押、拘禁他人的，依照前两款的规定处罚
        </Enter>
        <Enter delay={36}><SoftHi tone="warp" size={22}>结论＝以非法拘禁罪论处</SoftHi></Enter>
      </Panel>

      <Panel
        watermark={<BookmarkCheck size={180} color={C.warp} strokeWidth={1.5} />}
        tone={C.warp}
        style={{position: 'absolute', left: 0, top: 108, width: 1776, height: 168, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8}}
        marker="notice-board"
      >
        <Enter delay={45} style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <BookmarkCheck size={24} color={C.warp} />
          <LabelBlock size={22} color={C.warp}>条文属性 · 注意规定，而非法律拟制</LabelBlock>
          <Stamp delay={66} tone="warp">注意规定</Stamp>
        </Enter>
        <div style={{display: 'flex', gap: 16}}>
          <Enter delay={78} style={{flex: 1}}>
            <RowChip icon={<BookmarkCheck size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="理由：">
              索取债务是<Mark color={C.warp}>主张自己的债权</Mark>，欠缺非法占有目的，也欠缺目的二
            </RowChip>
          </Enter>
          <Enter delay={99} style={{flex: 1}}>
            <RowChip icon={<Lock size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="对比绑架罪：">
              绑架罪要求<Mark color={C.moss}>目的二</Mark>（向第三人勒索财物），索债型扣押不具备
            </RowChip>
          </Enter>
        </div>
      </Panel>

      <Panel
        watermark={<Users size={180} color={C.moss} strokeWidth={1.5} />}
        tone={C.moss}
        style={{position: 'absolute', left: 0, top: 288, width: 1000, height: 456, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}
        marker="conduct-mode-board"
      >
        <Enter delay={117}><LabelBlock size={22} color={C.moss}>行为方式 · 三种索债情形</LabelBlock></Enter>
        <Enter delay={135}>
          <RowChip icon={<Coins size={26} color={C.silk} strokeWidth={2.2} />} tone={C.moss} title="① 拘禁债务人亲属，向债务人索债：">
            定<Mark color={C.moss}>非法拘禁罪</Mark>
          </RowChip>
        </Enter>
        <Enter delay={153}>
          <RowChip icon={<Users size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="② 拘禁债务人，向其亲属索债：">
            定非法拘禁罪；但亲属<ThinU color={C.warp}>仅限有共同财产关系者</ThinU>
          </RowChip>
        </Enter>
        <Enter delay={174}>
          <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="　 向其他亲友索债：">
            <Neg size={21}>不是非法拘禁罪</Neg>——表明具有非法占有目的，定绑架罪
          </RowChip>
        </Enter>
        <Enter delay={195}>
          <RowChip icon={<Wallet size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="③ 拘禁债务人，向债务人本人索债：">
            类似抢劫，但<Mark color={C.heddle}>无非法占有目的</Mark>，定非法拘禁罪
          </RowChip>
        </Enter>
        <Enter delay={219} style={{fontSize: 22, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 10, marginTop: 2}}>
          <Chip tone="heddle" size={19}>分水岭</Chip>
          有无<SoftHi tone="heddle" size={21}>非法占有目的</SoftHi>
        </Enter>
      </Panel>

      <Panel
        watermark={<Coins size={180} color={C.heddle} strokeWidth={1.5} />}
        tone={C.heddle}
        style={{position: 'absolute', left: 1012, top: 288, width: 764, height: 456, padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 9}}
        marker="debt-scope-board"
      >
        <Enter delay={123}><LabelBlock size={22} color={C.heddle}>「债务」的认定</LabelBlock></Enter>
        <Enter delay={141}>
          <RowChip icon={<Coins size={26} color={C.silk} strokeWidth={2.2} />} tone={C.heddle} title="扩大解释：">
            包括<Mark color={C.heddle}>赌债、高利贷</Mark>等非法债务
          </RowChip>
        </Enter>
        <Enter delay={162}>
          <RowChip icon={<Ban size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="无任何事实根据的「债务」：">
            伪造借条索债、欠10万却索100万 → 有非法占有目的，定绑架罪
          </RowChip>
        </Enter>
        <Enter delay={183}>
          <RowChip icon={<Wallet size={26} color={C.silk} strokeWidth={2.2} />} tone={C.alert} title="虚构债务的两例：">
            <ThinU color={C.alert}>甲伪造借条</ThinU>拘禁乙的妻子索债 → 绑架罪
          </RowChip>
        </Enter>
        <Enter delay={204}>
          <RowChip icon={<Link2 size={26} color={C.silk} strokeWidth={2.2} />} tone={C.warp} title="共同财产关系：">
            向有共同财产关系的亲属索债 → 非法拘禁罪；向表弟索债 → 绑架罪
          </RowChip>
        </Enter>
      </Panel>
    </div>
  </Shell>
);
