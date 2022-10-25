const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findEmployer = (employer) => employees
  .filter((employee) => employee.firstName === employer || employee.lastName === employer)[0];

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return findEmployer(employeeName);
};

module.exports = getEmployeeByName;
