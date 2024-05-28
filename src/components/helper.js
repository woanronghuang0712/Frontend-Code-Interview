function find_start_end(raw_maze){
  let start = null;
  let end = null;
  for(let i = 0;i<raw_maze[0].length;i++){
    for(let j = 0;j<raw_maze.length;j++){
      if(raw_maze[j][i]==='start') start= [j,i]
      if(raw_maze[j][i]==='end') end= [j,i]
    }
  }
  return {start:start,end:end}
}



// Helper function to find start and end points
function findStartEnd(maze) {
  let start = null;
  let end = null;

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 'start') start = [i, j];
      if (maze[i][j] === 'end') end = [i, j];
    }
  }

  return { start, end };
}

// Function to process the maze
function processMaze(maze) {
  return maze.map(row => row.map(cell => (cell === 'wall' ? 1 : 0)));
}

function findPath(start, end, maze) {
  let path = [];
  let forwardPath = [];
  let currMaze = processMaze(maze);

  const directions = [
    [1, 0],  // down
    [0, 1],  // right
    [-1, 0], // up
    [0, -1]  // left
  ];

  function dfs(i, j) {
    if (i === end[0] && j === end[1]) {
      path.push([i, j]);
      forwardPath.push(true)
      return true;
    }

    if (i < 0 || j < 0 || i >= currMaze.length || j >= currMaze[0].length || currMaze[i][j] === 1) {
      return false; // This cell is a wall or already visited
    }

    currMaze[i][j] = 1; // Mark as visited
    path.push([i, j]);
    forwardPath.push(true)

    for (let [di, dj] of directions) {
      if (dfs(i + di, j + dj)) {
        return true;
      }
    }

    // If no direction worked, backtrack
    path.pop();
    forwardPath.pop()
    return false;
  }

  dfs(start[0], start[1]);
  return [path,forwardPath];
}


function findPath2(start, end, maze) {
  let path = [];
  let forwardPath = [];
  let stack = [[start[0], start[1], null]]; // Stack elements are [i, j, direction]
  let currMaze = processMaze(maze);

  const directions = {
    down: [1, 0],
    right: [0, 1],
    up: [-1, 0],
    left: [0, -1]
  };

  while (stack.length > 0) {
    let [i, j, direction] = stack.pop();

    // Check if we have reached the end
    if (i === end[0] && j === end[1]) {
      path.push([i, j]);
      forwardPath.push(true);
      break;
    }

    if (currMaze[i][j] !== 1) {
      path.push([i, j]);
      currMaze[i][j] = 1; // Mark as visited

      const neighbors = [];
      // Add neighbors in the order: down, right, up, left
      if (i + 1 < currMaze.length && currMaze[i + 1][j] === 0) neighbors.push([i + 1, j, 'down']);
      if (j + 1 < currMaze[0].length && currMaze[i][j + 1] === 0) neighbors.push([i, j + 1, 'right']);
      if (i - 1 >= 0 && currMaze[i - 1][j] === 0) neighbors.push([i - 1, j, 'up']);
      if (j - 1 >= 0 && currMaze[i][j - 1] === 0) neighbors.push([i, j - 1, 'left']);

      if (neighbors.length === 0) {
        // Dead end: no neighbors to visit
        forwardPath.push(false);

        // If we have more than one position in the path, we need to backtrack
        if (path.length > 1) {
          let lastPos = path[path.length - 2];
          let lastDir = direction ? directions[direction] : null;
          if (lastDir) {
            // Handle backtracking to ensure continuous path
            backtrackPath([i, j], lastPos, path, forwardPath, lastDir);
          }
        }
      } else {
        forwardPath.push(true); // Decision point
        for (const neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    } else {
      // Already visited: this means we are backtracking
      path.push([i, j]);
      forwardPath.push(false);
    }
  }

  return [path, forwardPath];
}

function backtrackPath(deadendPos, turningPos, path, forwardPath, lastDir) {
  let [i, j] = deadendPos;
  let [ti, tj] = turningPos;

  // Move back to the turning point
  while (i !== ti || j !== tj) {
    i -= lastDir[0];  // Reverse direction
    j -= lastDir[1];  // Reverse direction
    path.push([i, j]);
    forwardPath.push(false); // Indicate backtracking
  }
}

export {findStartEnd,findPath};


