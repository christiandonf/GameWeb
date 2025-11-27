import makeEnemy from "./entities/enemy";
import makePlayer from "./entities/player";
import gameUpdates from "./gameUpdates";
import makeKaplayCtx from "./kaplayCtx";

export default async function initGame() {
  const k = makeKaplayCtx();
  k.loadSprite("player", "./sprites/player.png", {
    sliceX: 4,
    sliceY: 8,
    anims: {
      "walk-down": { from: 0, to: 3, loop: true },
      "walk-down-idle": 0,
      "walk-left-down": { from: 4, to: 7, loop: true },
      "walk-left-down-idle": 4,
      "walk-left": { from: 8, to: 11, loop: true },
      "walk-left-idle": 8,
      "walk-left-up": { from: 12, to: 15, loop: true },
      "walk-left-up-idle": 12,
      "walk-up": { from: 16, to: 19, loop: true },
      "walk-up-idle": 16,
      "walk-right-up": { from: 20, to: 23, loop: true },
      "walk-right-up-idle": 20,
      "walk-right": { from: 24, to: 27, loop: true },
      "walk-right-idle": 24,
      "walk-right-down": { from: 28, to: 31, loop: true },
      "walk-right-down-idle": 28,
    },
  });
  k.loadFont("ibm-regular", "./fonts/IBMPlexSans-Regular.ttf");
  k.loadFont("ibm-bold", "./fonts/IBMPlexSans-Bold.ttf");

  if (k.width() < 1000) {
    k.setCamScale(0.5, 0.5);
  } else {
    k.setCamScale(0.8, 0.8);
  }
  const player = makePlayer(k, k.vec2(k.center()), 700);
  makeEnemy(k, k.vec2(1500, 1500), 400);

  gameUpdates(k, player);
}
