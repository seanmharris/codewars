/*
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given.
If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead.
If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like
maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key
      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
4. If you reach the end point before all your moves have gone, you should return Finish.
5. If you hit any walls or go outside the maze border, you should return Dead.
6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/

// this is ugly and in dire need of refactoring to clean up some of the variables. But I'm not in the mood lol.

function mazeRunner(maze, directions) {
    let findStart = maze.map((subArr, idx) => subArr.indexOf(2))
    let findEnd = maze.map((subArr, idx) => subArr.indexOf(3))
    let startCoords = [], endCoords = []
    for (let i = 0; i < findStart.length; i++) {
      if (findStart[i] !== -1) {
        startCoords = [i, findStart[i]]
      }
    }
    for (let i = 0; i < findEnd.length; i++) {
      if (findEnd[i] !== -1) {
        endCoords = [i, findEnd[i]]
      }
    }
    let currentY = startCoords[0], currentX = startCoords[1]
    while(directions.length) {
      switch(directions[0]) {
          case 'N' : 
            currentY -= 1;
            break;
          case 'S' :
            currentY += 1;
            break;
          case 'W' :
            currentX -= 1;
            break;
          case 'E' :
            currentX += 1;
            break;
      }
      if (currentY >= maze.length || currentX >= maze.length || currentY < 0 || currentX < 0) return 'Dead'
      let location = maze[currentY][currentX]
      directions.shift()
      switch (location) {
          case 1 :
          case undefined : return 'Dead';
          case 3 : return 'Finish';
      }
    }
    if (maze[currentY][currentX] !== 3) return 'Lost'
  }