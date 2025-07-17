import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import initGame from "./initGame";

const ui = document.getElementById("ui") as HTMLCanvasElement;
const root = createRoot(ui);
root.render(
  <StrictMode>
    <h1>Hello World!</h1>
  </StrictMode>
);

initGame();
