module.exports = function check(input, config) {
  const flattened = config.flatMap(elem => elem.join(''));

  for (let j = 0; j < flattened.length; j++) {
      if (input.includes(flattened[j])) {
        input = input.replace(flattened[j], '');
        j = -1;
      }
  }

  return input === '';
}
