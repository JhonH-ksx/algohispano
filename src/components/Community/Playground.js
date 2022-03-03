import { useEffect, useRef, useState } from "react";
import ArrowPlayground from "./ArrowPlayground";

const MAX_GAME = 3;

function Playground () {
  const arrowLeftRef = useRef();
  const arrowRightRef = useRef();
  const [currentGame, setCurrentGame] = useState(0);
  const [dirMove, setDirMove] = useState('disabled');

  useEffect(() => {
    if (dirMove === 'left' && currentGame > 0) {
      setCurrentGame(prev => prev - 1);
      arrowRightRef.current.disabled = false;
    }
    
    if (dirMove === 'right' && currentGame < MAX_GAME) {
      setCurrentGame(prev => prev + 1);
      arrowLeftRef.current.disabled = false;
    }
    
    setDirMove('disabled');
  }, [dirMove, currentGame]);

  useEffect(() => {
    if (!currentGame) arrowLeftRef.current.disabled = true;
    if (currentGame === MAX_GAME) arrowRightRef.current.disabled = true;
  }, [currentGame]);

  return (
    <div className="community__content__playground">
      <ArrowPlayground
        ref={arrowLeftRef}
        move="left"
        setDirMove={setDirMove}
      />

      <div className="community__content__playground__game">
        <p><span>Play ({currentGame + 1})</span></p>
      </div>

      <ArrowPlayground
        ref={arrowRightRef}
        move="right"
        setDirMove={setDirMove}
      />
    </div>
  )
}

export default Playground;
