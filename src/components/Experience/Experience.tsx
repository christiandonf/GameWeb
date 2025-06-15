import { Application, extend, } from "@pixi/react";
import { Container, Graphics, Sprite } from 'pixi.js';
import { useCallback, useState, useEffect } from "react";
import { calculateCanvasSize } from "../../helpers/commoon";
import { Player } from "../Player/Player";

export default () => {
  extend({
    Container,
    Graphics,
    Sprite
  });
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize);

  return (
    <Application>
      <Player />
    </Application>
  );
};
