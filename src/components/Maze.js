import {findStartEnd,findPath} from './helper'
import {useState,useEffect,useMemo} from 'react';
import DisplayMaze from './DisplayMaze'





export default function Maze({ currentMaze }) {
  if (!currentMaze) return null;

  const { start, end } = findStartEnd(currentMaze);
  const [initialPath, forwardPath] = findPath(start, end, currentMaze);

  const [maze, setMaze] = useState(currentMaze);
  const [path, setPath] = useState(initialPath);
  const [ratPos, setRatPos] = useState(start);

  const [go, setGo] = useState(false);

  useEffect(() => {
  if (path && path.length > 0 && go) {
    const timer = setTimeout(() => {
      const nextStep = path.shift();
      if (nextStep) {
        setRatPos(nextStep);
        const updatedMaze = maze.map(row => row.slice());
        updatedMaze[nextStep[0]][nextStep[1]] = forwardPath.shift() ? 'visited' : 'path';
        setMaze(updatedMaze);
        setPath([...path]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }
}, [maze, path, go]);

  const memoizedMaze = useMemo(() => maze, [maze]);


  function onClick(){
    if(go){
    setMaze(currentMaze)
    setRatPos(start)
    setPath(initialPath)
    setGo(false)
  }else{
    setGo(true)
  }
  }

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <DisplayMaze maze={memoizedMaze} ratPos={ratPos} end={end} />
      <button 
        className="bg-amber-400 hover:bg-amber-500 p-1 rounded-md w-full" 
        onClick = {()=>onClick()}
        >
        {go ? "Reset" : "Start"}
      </button>
    </div>
  );
}
