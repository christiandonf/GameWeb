import type { KAPLAYCtx, Vec2 } from "kaplay";

export default function makePlayer(k: KAPLAYCtx, posVec2: Vec2, speed) {
  const player = k.add([
    k.sprite("player", { anim: "walk-down-idle" }),
    k.scale(8),
    k.anchor("center"),
    k.area({ shape: new k.Rect(k.vec2(0), 5, 10) }),
    k.body(),
    k.pos(posVec2),
    "player",
    {
      direction: k.vec2(0, 0),
      directionName: "walk-down",
    },
  ]);
  let isMouseDown = false;
  const game = document.getElementById("game") as HTMLCanvasElement;
  game.addEventListener("focusout", () => {
    isMouseDown = false;
  });
  game.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  game.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  game.addEventListener("touchstart", () => {
    isMouseDown = true;
  });
  game.addEventListener("touchend", () => {
    isMouseDown = false;
  });

  player.onUpdate(() => {
    if (!k.camPos().eq(player.pos)) {
      k.tween(
        k.camPos(),
        player.pos,
        0.2,
        (newpos) => k.camPos(newpos),
        k.easings.linear
      );
    }
    player.direction = k.vec2(0, 0);
    const worldMousePos = k.toWorld(k.mousePos());
    if (isMouseDown) {
      player.direction = worldMousePos.sub(player.pos).unit();
    }

    player.move(player.direction.scale(speed));
  });

  return player;
}
