function gps(s, x) {
  if (x.length <= 1) {
    return 0
  };
  let result = [];
  for (let i = 0; i < x.length - 1; i++) {
    result.push(3600 * (x[i + 1] - x[i]) / s);
  }
  return Math.floor(Math.max(...result))
}

//With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

// (3600 * delta_distance) / s.
