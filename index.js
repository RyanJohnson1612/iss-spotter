const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log('It didn\'t work', err);
//     return;
//   }

//   console.log(ip);
// });

// fetchCoordsByIP('24.52.219.102', (err, coords) => {
//   console.log('error ', err);
//   console.log('coords ', coords);
// })

// fetchISSFlyOverTimes({lat: -80, lon: -23}, (err, times) => {
//   if (err) {
//     console.log('error', err);
//     return;
//   }
  
//   console.log(times);
// });