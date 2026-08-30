import {DefenseHeraldicHall} from '@/animations/criminal-procedure-gold/06/defense-heraldic-hall/remotion/DefenseHeraldicHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/06/defense-heraldic-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'duty-counsel-lantern', number: '01', title: '值班律师：提灯引路，但不持盾上阵', ...SCENES.dutyCounselLantern},
  {id: 'defender-roster-wall', number: '02', title: '辩护人名册：看指控定身份，近亲属可破例', ...SCENES.defenderRosterWall},
  {id: 'rights-duties-desk', number: '03', title: '权利义务台：会见·阅卷·告知·拒辩', ...SCENES.rightsDutiesDesk},
];

export const DefenseHeraldicHallPlayer = () => <RemotionDeck animationId="defense-heraldic-hall" component={DefenseHeraldicHall} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="辩护与代理——值班律师身份线、辩护人名册与权利义务台" />;
export default DefenseHeraldicHallPlayer;
