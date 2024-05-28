import { LuRat } from 'react-icons/lu';
import { FaCheese } from 'react-icons/fa';



const colorDict = {
  path: 'bg-lime-50',         // Normal path
  wall: 'bg-green-800',         // Wall
  visited: 'bg-amber-200',   // Visited cell
  start: 'bg-green-500',    // Start cell
  end: 'bg-lime-50',     // End cell
  backtrack: 'bg-red-500',  // Backtracked cell
};

export default function DisplayMaze({ maze, ratPos, end }) {
  return (
    <div className="grid w-min h-min m-4" style={{ gridTemplateColumns: `repeat(${maze[0].length}, 1fr)` }}>
      {maze.flat().map((cell, idx) => {
        const row = Math.floor(idx / maze[0].length);
        const col = idx % maze[0].length;
        const isRat = ratPos[0] === row && ratPos[1] === col;
        const isCheese = end[0] === row && end[1] === col;

        return (
          <div className={`${colorDict[cell]} w-10 h-10 flex justify-center items-center`} key={idx}>
            {isRat ? <LuRat className="text-neutral-500" /> : null}
            {!isRat && isCheese ? <FaCheese className="text-amber-400" /> : null}
          </div>
        );
      })}
    </div>
  );
}
