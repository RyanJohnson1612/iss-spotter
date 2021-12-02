const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printTimes } = require('./print_times');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimes(passTimes);
  })
  .catch((err) => {
    console.log(`Error get times: ${err}`);
  });