function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element));
  }

  return result;
}

const numbers = [1, 2, 3];
const doubledNumbers = map(numbers, function (number) {
  return number * 2;
});
console.log(doubledNumbers); // prints [2, 4, 6]

const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobots);
/**
 Prints:

 [ { name: 'Optimus Prime', strength: 10, isTransformed: true },
 { name: 'Ironhide', strength: 6, isTransformed: true },
 { name: 'Bumblebee', strength: 5, isTransformed: true },
 { name: 'Ratchet', strength: 3, isTransformed: true } ]
 */

const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobotsWithMap);
/**
 Prints:

 [ { name: 'Optimus Prime', strength: 10, isTransformed: true },
 { name: 'Ironhide', strength: 6, isTransformed: true },
 { name: 'Bumblebee', strength: 5, isTransformed: true },
 { name: 'Ratchet', strength: 3, isTransformed: true } ]
 */
