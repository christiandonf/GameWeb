import { Application } from '@pixi/react';
import { useCallback, useState, useEffect } from 'react';
import { calculateCanvasSize } from '../../helpers/commoon';
import { Player } from '../Player/Player';
import { MainContainer } from './MainContainer/MainContainer';

export const Experience = () => {
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize);

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
