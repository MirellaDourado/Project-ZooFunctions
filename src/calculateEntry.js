const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((child) => child.age >= 18 && child.age < 50).length,
    senior: entrants.filter((child) => child.age >= 50).length,
  };
}

function calculateEntry(entrants = 0) {
  if (entrants.length === undefined) {
    return 0;
  }
  const entradas = Object.values(countEntrants(entrants));
  const adultPrice = data.prices.adult;
  const kidPrice = data.prices.child;
  const seniorPrice = data.prices.senior;
  const prices = [
    entradas[1] * adultPrice, entradas[0] * kidPrice, entradas[2] * seniorPrice,
  ];
  return prices.reduce((a, b) => a + b);
}

module.exports = { calculateEntry, countEntrants };
