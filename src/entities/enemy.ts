import { Vec2, type KAPLAYCtx } from "kaplay";

export default function makeEnemy(k: KAPLAYCtx, posVec2: Vec2, speed: number) {
  const enemy = k.add([
    k.sprite("player", { anim: "walk-down-idle" }),
    k.scale(8),
    k.anchor("center"),
    k.area({ shape: new k.Rect(k.vec2(0), 5, 10) }),
    k.body(),
    k.pos(posVec2),
    "enemy",
    {
      direction: k.vec2(0, 0),
      directionName: "walk-down",
      enemySpeed: speed,
    },
  ]);

  return enemy;
}
