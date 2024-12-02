function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValidPosition(position) {
    const [x, y] = position;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [[start, [start]]];

  while (queue.length > 0) {
    const [currentPosition, pathSoFar] = queue.shift();
    const [currentX, currentY] = currentPosition;

    if (currentX === end[0] && currentY === end[1]) {
      console.log(
        `You made it in ${pathSoFar.length - 1} moves! Here's your path:`
      );
      console.log(pathSoFar);

      return pathSoFar;
    }

    for (const [dx, dy] of moves) {
      const nextPosition = [currentX + dx, currentY + dy];
      if (
        isValidPosition(nextPosition) &&
        !pathSoFar.some(
          (pos) => pos[0] === nextPosition[0] && pos[1] === nextPosition[1]
        )
      ) {
        queue.push([nextPosition, [...pathSoFar, nextPosition]]);
      }
    }
  }
}

const result = knightMoves([0, 0], [7, 7]);
