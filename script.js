function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    for (const move of moves) {
      const next = [current[0] + move[0], current[1] + move[1]];
      if (isValid(next[0], next[1]) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([next, [...path, next]]);
      }
    }
  }
  return null;
}
knightMoves([3, 3], [4, 3]);
