import { Assets, Texture, } from 'pixi.js';
import { useEffect, useRef, useState } from 'react';
import { useTick } from '@pixi/react';

export function Player() {
  const spriteRef = useRef(null);
  
  const [texture, setTexture] = useState(Texture.EMPTY);
  const [isHovered, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets
            .load('./player_idle-01.png')
            .then((result) => {
              setTexture(result);
            });
        }
    }, [texture]);

    return (
        <pixiSprite
            ref={spriteRef}
            anchor={0.5}
            eventMode={'static'}
            onClick={() => setIsActive(!isActive)}
            onPointerOver={() => setIsHover(true)}
            onPointerOut={() => setIsHover(false)}
            scale={isActive ? 1 : 1.5}
            texture={texture}
            x={100}
            y={100}
        />
    );
}