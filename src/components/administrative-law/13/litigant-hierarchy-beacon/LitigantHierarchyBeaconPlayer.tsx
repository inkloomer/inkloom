import { LitigantHierarchyBeacon } from "@/animations/administrative-law/13/litigant-hierarchy-beacon/remotion/LitigantHierarchyBeacon";
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from "@/animations/administrative-law/13/litigant-hierarchy-beacon/remotion/storyboard";
import {
  RemotionDeck,
  type RemotionScene,
} from "../../../remotion/RemotionDeck";

const scenes: readonly RemotionScene[] = [
  {id: 'defendant-general-board', number: '01', title: '直接起诉九宫格', ...SCENES['defendant-general-board']},
  {id: 'defendant-special-routes', number: '02', title: '特别主体被告', ...SCENES['defendant-special-routes']},
  {id: 'defendant-gov-rules', number: '03', title: '政府被告规则', ...SCENES['defendant-gov-rules']},
  {id: 'defendant-after-review', number: '04', title: '复议后被告', ...SCENES['defendant-after-review']},
  {id: 'plaintiff-concept-lantern', number: '05', title: '原告五要素', ...SCENES['plaintiff-concept-lantern']},
  {id: 'related-party-five-ties', number: '06', title: '相关人五关系', ...SCENES['related-party-five-ties']},
  {id: 'organization-plaintiffs', number: '07', title: '组织原告', ...SCENES['organization-plaintiffs']},
  {id: 'third-party-seat', number: '08', title: '第三人', ...SCENES['third-party-seat']},
  {id: 'jurisdiction-floors', number: '09', title: '级别管辖', ...SCENES['jurisdiction-floors']},
  {id: 'territorial-steps', number: '10', title: '地域管辖', ...SCENES['territorial-steps']},
  {id: 'representative-desk', number: '11', title: '代表人与代理人', ...SCENES['representative-desk']},
];

export const LitigantHierarchyBeaconPlayer = () => (
  <RemotionDeck
    animationId="litigant-hierarchy-beacon"
    title="行政诉讼参加人及法院"
    component={LitigantHierarchyBeacon}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);
export default LitigantHierarchyBeaconPlayer;
