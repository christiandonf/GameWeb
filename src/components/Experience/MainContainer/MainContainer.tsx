import { extend } from "@pixi/react";
import { Assets, Container, Texture, Sprite } from "pixi.js";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
interface IMainContainerProps {
  canvasSize: { width: number; height: number };
}

export const MainContainer = ({
  canvasSize,
  children,
}: PropsWithChildren<IMainContainerProps>) => {
  extend({
    Container,
    Texture,
    Sprite,
  });
  const spriteRef = useRef(null);
  const [texture, setTexture] = useState(Texture.EMPTY);
  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load("/src/assets/Tilemap.jpg").then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  return (
    <pixiContainer>
      <pixiSprite
        ref={spriteRef}
        width={canvasSize.width}
        height={canvasSize.height}
        texture={texture}
      />
      {children}
    </pixiContainer>
  );
};
