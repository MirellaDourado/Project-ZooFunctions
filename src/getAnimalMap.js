const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const verificationName = (obj) => Object.prototype.hasOwnProperty.call(obj, 'includeNames');

// Não sabia se poderia usar ifs dentro do filter então achei a resposta aqui https://stackoverflow.com/questions/51256342/can-you-use-an-if-else-inside-a-filter-is-there-any-other-way
const animals = (sorted, animal, sex) => {
  const array = species.find((specie) => specie.name === animal).residents.filter((anim) => {
    if (sex) return anim.sex === sex;
    return anim;
  }).map((animago) => animago.name);
  if (sorted) {
    return array.sort();
  }
  return array;
};

// https://vidafullstack.com.br/javascript/new-set-com-javascript/
const onlySpecies = () => {
  const localization = [...new Set(species.map((specie) => specie.location))];
  const a = localization.reduce((accumulator, key) => {
    const newObj = {};
    newObj[key] = species
      .filter((specie) => specie.location === key)
      .map((specie) => specie.name);
    return Object.assign(accumulator, newObj);
  }, {});
  return a;
};

const withName = (sorted, classification, sex) => {
  const regions = Object.keys(classification);
  return regions.reduce((finalObject, region) => {
    const obj = {};
    const speciesLocalization = classification[region]
      .map((specie) => {
        const newObj = {};
        newObj[specie] = animals(sorted, specie, sex);
        return newObj;
      });
    obj[region] = speciesLocalization;
    return Object.assign(finalObject, obj);
  }, {});
};

function getAnimalMap(options) {
  if (options === undefined || verificationName(options) === false) {
    return onlySpecies();
  }
  return withName(options.sorted, onlySpecies(), options.sex);
}

module.exports = getAnimalMap;
