const printTimes = function(arr) {
  arr.forEach(pass => {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);

    console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
  });
};

module.exports = { printTimes };