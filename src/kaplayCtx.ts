import kaplay from "kaplay";

export default function makeKaplayCtx() {
  return kaplay({
    global: false,
    pixelDensity: 2,
    touchToMouse: true,
    debug: true,
    debugKey: "f1",
    canvas: document.getElementById("game") as HTMLCanvasElement,
    buttons: {
        up: {
            keyboard: ["w, up"]
        },
        down: {
            keyboard: ["s, down"]
        },
        left: {
            keyboard: ["a, left"]
        },
        right: {
            keyboard: ["d, right"]
        },
     },
  });
}
