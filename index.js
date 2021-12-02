const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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