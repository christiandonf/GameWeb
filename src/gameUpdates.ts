import { type GameObj, type KAPLAYCtx } from "kaplay";

export default async function gameUpdates(k: KAPLAYCtx, player: GameObj) {
  const diagonalFactor = 1 / Math.sqrt(2);
  k.onUpdate("player", (player) => {
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

    if (k.isKeyDown("left") || k.isKeyDown("a")) player.direction.x = -1;

    if (k.isKeyDown("right") || k.isKeyDown("d")) player.direction.x = 1;

    if (k.isKeyDown("up") || k.isKeyDown("w")) player.direction.y = -1;

    if (k.isKeyDown("down") || k.isKeyDown("s")) player.direction.y = 1;

    if (
      player.direction.eq(k.vec2(0, 0)) &&
      !player.getCurAnim()?.name.includes("idle")
    ) {
      player.play(`${player.directionName}-idle`);
      return;
    }

    if (player.direction.x == 1) player.directionName = "walk-right";

    if (player.direction.x == -1) player.directionName = "walk-left";

    if (player.direction.y == -1) player.directionName = "walk-up";

    if (player.direction.y == 1) player.directionName = "walk-down";

    if (player.direction.x == -1 && player.direction.y == -1)
      player.directionName = "walk-left-up";

    if (player.direction.x == -1 && player.direction.y == 1)
      player.directionName = "walk-left-down";

    if (player.direction.x == 1 && player.direction.y == -1)
      player.directionName = "walk-right-up";

    if (player.direction.x == 1 && player.direction.y == 1)
      player.directionName = "walk-right-down";

    if (player.getCurAnim().name !== player.directionName)
      player.play(player.directionName);

    if (player.direction.x && player.direction.y) {
      player.move(player.direction.scale(diagonalFactor * player.playerSpeed));
      return;
    }

    player.move(player.direction.scale(player.playerSpeed));
  });

  k.onUpdate("enemy", (enemy) => {
    enemy.direction = k.vec2(0, 0);
    // if (enemy.pos.x > 100 && enemy.pos.y > 100)
    enemy.direction = player.pos.sub(enemy.pos).unit();

    if (
      enemy.direction.eq(k.vec2(0, 0)) &&
      !enemy.getCurAnim()?.name.includes("idle")
    ) {
      enemy.play(`${enemy.directionName}-idle`);
      return;
    }

    if (enemy.direction.x == 1) enemy.directionName = "walk-right";

    if (enemy.direction.x == -1) enemy.directionName = "walk-left";

    if (enemy.direction.y == -1) enemy.directionName = "walk-up";

    if (enemy.direction.y == 1) enemy.directionName = "walk-down";

    if (enemy.direction.x == -1 && enemy.direction.y == -1)
      enemy.directionName = "walk-left-up";

    if (enemy.direction.x == -1 && enemy.direction.y == 1)
      enemy.directionName = "walk-left-down";

    if (enemy.direction.x == 1 && enemy.direction.y == -1)
      enemy.directionName = "walk-right-up";

    if (enemy.direction.x == 1 && enemy.direction.y == 1)
      enemy.directionName = "walk-right-down";

    if (enemy.getCurAnim().name !== enemy.directionName)
      enemy.play(enemy.directionName);

    if (enemy.direction.x && enemy.direction.y) {
      enemy.move(enemy.direction.scale(diagonalFactor * enemy.enemySpeed));
      return;
    }

    enemy.move(enemy.direction.scale(enemy.enemySpeed));
  });
}
