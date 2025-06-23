import { Application } from '@pixi/react';
import { useCallback, useState, useEffect } from 'react';
import { calculateCanvasSize } from '../../helpers/commoon';
import { Player } from '../Player/Player';
import { MainContainer } from './MainContainer/MainContainer';
import Matter from 'matter-js';

export const Experience = () => {
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize);
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

  const engine = Engine.create();

  const render = Render.create({
    element: document.body,
    engine: engine,
  });

  const boxA = Bodies.rectangle(400, 200, 80, 80);
  const boxB = Bodies.rectangle(450, 50, 80, 80);
  const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  Composite.add(engine.world, [boxA, boxB, ground]);

  Render.run(render);

  const runner = Runner.create();

  Runner.run(runner, engine);

  const updateCanvasSize = useCallback(() => {
    setCanvasSize(calculateCanvasSize);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [updateCanvasSize]);

  return (
    <Application resizeTo={window}>
      <MainContainer canvasSize={canvasSize}>
        <Player />
      </MainContainer>
    </Application>
  );
};
