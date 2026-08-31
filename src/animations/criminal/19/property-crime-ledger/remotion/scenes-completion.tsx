import {EyeOff, Package, Scale, ShoppingBag, Users} from 'lucide-react';
import {interpolate, useCurrentFrame} from 'remotion';
import {C, Enter, Mark, Neg, Panel, Shell, TabChip, ThinU, LedgerStamp} from './kit';
import {CLAMP} from '../../../../shared/remotion-runtime';

export const CompletionControlLatticeScene = () => {
  /* data-final-knowledge="control-zones-board" data-final-knowledge="ring-case-board" data-final-knowledge="bigitem-path-board" */
  const frame = useCurrentFrame();
  const bagX = interpolate(frame, [64, 104], [700, 330], CLAMP);
  const bagY = interpolate(frame, [64, 104], [430, 250], CLAMP);
  const bagIn = interpolate(frame, [58, 68], [0, 1], CLAMP);
  const boxX = interpolate(frame, [110, 150], [760, 210], CLAMP);
  const boxY = interpolate(frame, [110, 150], [60, 40], CLAMP);
  const boxIn = interpolate(frame, [104, 114], [0, 1], CLAMP);
  return (
    <Shell code="14" kicker="第十节 · 财产犯罪的既遂" title="既遂标准：取得控制·三层控制圈">
      <div
        data-layout="completion-control-zones"
        data-visual-anchor="boundary"
        data-text-treatments="chip,label-block,soft-highlight,thin-underline,external-negation,stamp"
        data-visual-grammar="control-zones-board,bigitem-path-board"
        data-focal-rule="completion-means-property-inside-the-actual-control-zone"
        data-focal-channels="icon,enclosure,contrast,spatial"
        style={{position: 'absolute', inset: 0}}
      >
        <Enter delay={3} marker="control-zones-board" style={{position: 'absolute', left: 0, top: 0, width: 880, height: 744}}>
          <Panel tone={C.lock} watermark={<Scale size={160} color={C.lock} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.lock} icon={<Scale size={22} color={C.white} strokeWidth={2.2} />}>取得控制说 · 财物进入哪一圈？</TabChip>
            <div style={{position: 'relative', height: 640, marginTop: 8}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 848, height: 500, borderRadius: 20, border: `4px dashed ${C.slate}`, backgroundColor: C.slateSoft}}>
                <div style={{position: 'absolute', left: 14, top: 8, fontSize: 20, fontWeight: 930, color: C.slate}}>外圈 · 隐蔽点延伸（可保持相当距离）</div>
              </div>
              <div style={{position: 'absolute', left: 60, top: 66, width: 728, height: 400, borderRadius: 16, border: `4px dashed ${C.yellow}`, backgroundColor: C.yellowSoft}}>
                <div style={{position: 'absolute', left: 14, top: 8, fontSize: 20, fontWeight: 930, color: C.yellow}}>中圈 · 场所控制边界</div>
              </div>
              <div style={{position: 'absolute', left: 140, top: 140, width: 568, height: 290, borderRadius: 14, border: `5px solid ${C.lock}`, backgroundColor: C.lockSoft, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8}}>
                <ShoppingBag size={34} color={C.lock} strokeWidth={2.2} />
                <div style={{fontSize: 23, fontWeight: 950, color: C.lock}}>内圈 · 贴身专属领域</div>
                <div style={{fontSize: 19, fontWeight: 870, color: C.inkSoft}}>装进口袋＝置于实际控制范围</div>
              </div>
              <div style={{position: 'absolute', left: bagX, top: bagY, width: 120, height: 44, borderRadius: 22, backgroundColor: C.lock, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: bagIn, boxShadow: '0 3px 9px rgba(28,38,32,0.4)'}}>
                <ShoppingBag size={22} color={C.white} strokeWidth={2.4} />
                <span style={{fontSize: 17, fontWeight: 900, color: C.white}}>装进口袋</span>
              </div>
              <div style={{position: 'absolute', left: boxX, top: boxY, width: 150, height: 44, borderRadius: 22, backgroundColor: C.slate, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: boxIn, boxShadow: '0 3px 9px rgba(28,38,32,0.4)'}}>
                <Package size={22} color={C.white} strokeWidth={2.4} />
                <span style={{fontSize: 17, fontWeight: 900, color: C.white}}>扔到草丛</span>
              </div>
              <div style={{position: 'absolute', left: 30, top: 520, width: 820, fontSize: 20, fontWeight: 880, color: C.ink, lineHeight: 1.5}}>
                财物落入任一圈内＝<Mark color={C.lock}>建立自己的占有＝既遂</Mark>；圈外＝<Neg size={19}>未遂</Neg>。既遂后被人捡走<Neg size={19}>不能变回</Neg>未遂（<ThinU color={C.lock}>既遂排斥未遂</ThinU>）
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={40} marker="ring-case-board" style={{position: 'absolute', left: 904, top: 0, width: 872, height: 380}}>
          <Panel tone={C.brass} watermark={<Users size={140} color={C.brass} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.brass} icon={<Users size={22} color={C.white} strokeWidth={2.2} />}>小件物品 · 落圈判定看“谁有搜身权”</TabChip>
            <div style={{position: 'relative', height: 280, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 830, border: `3px solid ${C.lock}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>大街·公交·商场：</b>装进口袋＝<Mark color={C.lock}>落入内圈·既遂</Mark>（普通公民<Neg size={18}>无</Neg>搜身权）
              </div>
              <div style={{position: 'absolute', left: 0, top: 88, width: 830, border: `3px solid ${C.seal}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.seal}}>入户盗窃：</b>主人对小偷<Mark color={C.seal}>有搜身·控制权</Mark> → 装口袋<Neg size={18}>仍在主人圈内</Neg>·<Neg size={18}>不算</Neg>既遂
              </div>
              <div style={{position: 'absolute', left: 0, top: 176, width: 830, border: `3px solid ${C.yellow}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.yellow}}>保姆·客人在主人家：</b>主人<Neg size={18}>不能</Neg>搜身 → 装口袋＝既遂；藏在卫生间夹缝＝<Mark color={C.yellow}>隐蔽点·既遂</Mark>
              </div>
            </div>
          </Panel>
        </Enter>

        <Enter delay={90} marker="bigitem-path-board" style={{position: 'absolute', left: 904, top: 404, width: 872, height: 340}}>
          <Panel tone={C.slate} watermark={<Package size={140} color={C.slate} strokeWidth={1.6} />} style={{height: '100%', padding: '12px 16px'}}>
            <TabChip tone={C.slate} icon={<Package size={22} color={C.white} strokeWidth={2.2} />}>大件物品 · 突破哪道边界才落圈</TabChip>
            <div style={{position: 'relative', height: 240, marginTop: 10}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: 400, border: `3px solid ${C.slate}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.slate}}>商场偷冰箱：</b>拖出专柜<Neg size={18}>∉</Neg> → <Mark color={C.slate}>拖出商场大门＝既遂</Mark>
              </div>
              <div style={{position: 'absolute', left: 432, top: 0, width: 400, border: `3px solid ${C.brass}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.brass}}>工厂仓库看门禁：</b>严格→出大门；形同虚设→<Mark color={C.brass}>出仓库门</Mark>即既遂
              </div>
              <div style={{position: 'absolute', left: 0, top: 106, width: 400, border: `3px solid ${C.lock}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.lock}}>汽车：</b><Mark color={C.lock}>开走（移动）</Mark>才既遂；被制止＝未遂
              </div>
              <div style={{position: 'absolute', left: 432, top: 106, width: 400, border: `3px solid ${C.yellow}`, padding: '8px 12px', fontSize: 20, fontWeight: 880, lineHeight: 1.45}}>
                <b style={{color: C.yellow}}>行李箱扔出车厢：</b>村头草丛＝<Mark color={C.yellow}>隐蔽点·既遂</Mark>；扔进长江＝<Neg size={18}>未遂</Neg>
              </div>
              <div style={{position: 'absolute', left: 0, top: 202, display: 'flex', alignItems: 'center', gap: 12}}>
                <EyeOff size={24} color={C.slate} strokeWidth={2.2} />
                <span style={{fontSize: 20, fontWeight: 900, color: C.inkSoft}}>深夜院墙外僻静处＝多数说认为已入外圈 →</span>
                <LedgerStamp delay={150} tone="lock">既遂</LedgerStamp>
              </div>
            </div>
          </Panel>
        </Enter>
      </div>
    </Shell>
  );
};
