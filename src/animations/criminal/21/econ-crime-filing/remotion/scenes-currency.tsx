import type {ReactNode} from 'react';
import {Banknote, CreditCard, Factory, Truck, UserCheck, Wallet} from 'lucide-react';
import {C, Chip, Enter, GateFlash, LabelBlock, Mover, Neg, Panel, Path, Shell, SoftHi, TabChip, ThinU} from './kit';

export const CurrencyNotesScene = () => {
  const Stop = ({x, w, tone, delay, icon, title, sub, marker}: {delay: number; icon: ReactNode; marker?: string; sub?: ReactNode; title: string; tone: string; w: number; x: number}) => (
    <div data-stateful-terminal={marker} style={{position: 'absolute', left: x, top: 8, width: w, height: 132}}>
      <GateFlash delay={delay} tone={tone} style={{height: '100%', boxSizing: 'border-box', backgroundColor: C.white, border: `3px solid ${tone}`, padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: 3}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 7}}>
          <span style={{flexShrink: 0, width: 36, height: 36, borderRadius: 9, backgroundColor: tone, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</span>
          <span style={{fontSize: 22, fontWeight: 950, color: tone, whiteSpace: 'nowrap'}}>{title}</span>
        </div>
        {sub ? <div style={{fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.32}}>{sub}</div> : null}
      </GateFlash>
    </div>
  );
  /* data-final-knowledge="forge-alter-gate" data-final-knowledge="fake-money-chain" data-final-knowledge="note-forgery-link" data-final-knowledge="card-management-fork" */
  return (
    <Shell code="06" kicker="第四节" title="货币犯罪·金融票证·妨害信用卡管理">
      <div
        data-layout="currency-notes-chain"
        data-visual-anchor="flow-path"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="forge-alter-gate,fake-money-chain,note-forgery-link,card-management-fork"
        data-focal-rule="fake-money-token-travels-forge-gate-then-along-the-sell-buy-transport-hold-use-chain-stopping-where-the-law-stops-it"
        data-focal-channels="icon,connector,contrast,motion"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={6} marker="forge-alter-gate" style={{position: 'absolute', left: 0, top: 0, width: 866, height: 252}}>
          <Panel tone={C.econ} watermark={<Banknote size={150} color={C.econ} strokeWidth={1.6} />} style={{height: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.econ} icon={<Banknote size={24} color={C.white} strokeWidth={2.2} />}>伪造货币罪（第170条）vs 变造货币罪（第173条）</TabChip>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', fontSize: 21, fontWeight: 800, color: C.ink}}>
              <Chip tone="night"><Factory size={20} color={C.white} strokeWidth={2.2} />制作假币的材料</Chip>
              <Path color={C.econ} delay={40} span={16} style={{position: 'relative', width: 60, height: 4}} />
              <GateFlash delay={54} tone={C.econ} style={{border: `3px solid ${C.econ}`, backgroundColor: C.econSoft, padding: '3px 10px', fontSize: 22, fontWeight: 950, color: C.econ}}>是否保留原真币基础？</GateFlash>
            </div>
            <div style={{display: 'flex', gap: 10}}>
              <div style={{flex: 1, border: `3px solid ${C.stamp}`, backgroundColor: C.white, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
                <b style={{color: C.stamp}}>不保留（假材料制作 · 真币材料完全翻新如碎片拼凑、金属熔化重铸）→ 伪造货币罪</b>；限于正在流通的货币（含境外货币）；伪造停止流通货币并使用 → 诈骗罪（2011）
              </div>
              <div style={{flex: 1, border: `3px solid ${C.econ}`, backgroundColor: C.white, padding: '5px 10px', fontSize: 20, fontWeight: 800, color: C.ink, lineHeight: 1.4}}>
                <b style={{color: C.econ}}>保留基础（刮硬币周边 · 100元涂改为50元，2013）→ 变造货币罪</b>；同时采用伪造变造手段拼凑 → 以<SoftHi>伪造货币</SoftHi>论
              </div>
            </div>
          </Panel>
        </Enter>
        <Enter delay={30} marker="card-management-fork" style={{position: 'absolute', left: 890, top: 0, width: 886, height: 252}}>
          <Panel tone={C.ledger} watermark={<CreditCard size={150} color={C.ledger} strokeWidth={1.6} />} style={{height: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center'}}>
            <TabChip tone={C.ledger} icon={<CreditCard size={24} color={C.white} strokeWidth={2.2} />}>妨害信用卡管理罪（第177条之一）· 四情形</TabChip>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5, fontSize: 20, fontWeight: 800, color: C.ink}}>
              <div style={{display: 'flex', gap: 7}}><Chip tone="ledger" style={{fontSize: 20}}>①明知是伪造的信用卡而持有、运输（空白卡数量较大）</Chip><Chip tone="ledger" style={{fontSize: 20}}>②非法持有他人信用卡，数量较大</Chip></div>
              <div style={{display: 'flex', gap: 7}}><Chip tone="ledger" style={{fontSize: 20}}>③使用虚假的身份证明骗领信用卡</Chip><Chip tone="ledger" style={{fontSize: 20}}>④出售、购买、为他人提供伪造的或骗领的信用卡</Chip></div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, fontSize: 21, fontWeight: 800, color: C.ink}}>
              <ThinU color={C.ledger}>窃取、收买、非法提供他人信用卡信息资料 → 依照前款规定处罚</ThinU>
              <span>银行或其他金融机构工作人员利用职务便利犯第二款罪 → <b style={{color: C.stamp}}>从重处罚</b></span>
            </div>
          </Panel>
        </Enter>
        <Enter delay={50} marker="fake-money-chain" style={{position: 'absolute', left: 0, top: 264, width: 1776, height: 288}}>
          <Panel tone={C.stamp} style={{height: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 4}}>
            <TabChip tone={C.stamp} icon={<Banknote size={24} color={C.white} strokeWidth={2.2} />}>假币流转链（第171、172条）· 假币一站一站往下走</TabChip>
            <div style={{position: 'relative', height: 148}}>
              <Path color={C.stamp} delay={70} span={34} style={{position: 'absolute', left: 30, top: 56, width: 1716, height: 5}} />
              <Stop x={10} w={266} tone={C.econ} delay={62} icon={<Factory size={20} color={C.white} strokeWidth={2.2} />} title="① 伪造货币" sub={<span>链的源头（上格已述）</span>} />
              <Stop x={306} w={286} tone={C.ledger} delay={96} icon={<Truck size={20} color={C.white} strokeWidth={2.2} />} title="② 运输（171）" sub={<span>为出售而运；限于国内，出入国境 → 走私假币罪；自用携回 → 持有</span>} />
              <Stop x={622} w={300} tone={C.brass} delay={130} icon={<Wallet size={20} color={C.white} strokeWidth={2.2} />} title="③ 出售 / 购买（171）" sub={<span>对方须知情，否则 → 使用假币罪；冥币白纸冒充出卖 → 诈骗罪（买方不能犯）</span>} />
              <Stop x={952} w={280} tone={C.econ} delay={164} icon={<Banknote size={20} color={C.white} strokeWidth={2.2} />} title="④ 持有（172）" sub={<span>链上静止状态</span>} />
              <div data-stateful-terminal="fake-money-token" style={{position: 'absolute', left: 1262, top: 8, width: 330, height: 96}}><Stop x={0} w={330} tone={C.stamp} delay={198} icon={<UserCheck size={20} color={C.white} strokeWidth={2.2} />} title="⑤ 使用（172）· 终点" sub={<span>作为真币投入流通：交易·单向交付（缴税缴罚款）；对人使用要求对方不知情；只显示不算</span>} /></div>
              <Mover delay={76} span={38} fromX={0} toX={1210} fadeAt={112} style={{position: 'absolute', left: 16, top: 30, zIndex: 3}}>
                <Chip tone="stamp"><Banknote size={22} color={C.white} strokeWidth={2.2} />假币（伪造的货币）</Chip>
              </Mover>
              <div data-stateful-source="fake-money-token" style={{position: 'absolute', left: 16, top: 0, fontSize: 17, fontWeight: 800, color: C.inkSoft}}>假币 token 自伪造出发</div>
            </div>
            <div style={{marginTop: 2}}><ThinU color={C.stamp}>出售购买运输·持有使用中的"假币"均指伪造的货币，不包括变造的货币（2016）</ThinU></div>
          </Panel>
        </Enter>
        <Enter delay={80} marker="note-forgery-link" style={{position: 'absolute', left: 0, top: 564, width: 1776, height: 198}}>
          <Panel tone={C.brass} watermark={<Banknote size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center'}}>
            <TabChip tone={C.brass} icon={<Banknote size={24} color={C.white} strokeWidth={2.2} />}>伪造、变造金融票证罪（第177条）→ 四个金融诈骗罪的上下游</TabChip>
            <div style={{display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'}}>
              <Chip tone="brass">伪造、变造金融票证</Chip>
              <Path color={C.brass} delay={140} span={18} style={{position: 'relative', width: 70, height: 4}} />
              <LabelBlock size={23} color={C.brass}>牵连关系 · 择一重罪论处</LabelBlock>
              <span style={{fontSize: 21, fontWeight: 800, color: C.ink}}>（票据诈骗罪、金融凭证诈骗罪、信用证诈骗罪、信用卡诈骗罪等上游伪造 → 下游使用）</span>
            </div>
            <div style={{fontSize: 21, fontWeight: 800, color: C.ink, lineHeight: 1.5}}>
              案例锚：甲将自己的9万元存入乙单位账户，把10万元现金支票改为40万元取出 → 认定为<SoftHi>变造金融票证罪</SoftHi>和<SoftHi>票据诈骗罪</SoftHi>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
