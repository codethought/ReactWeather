// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
// 
// getTempCallback('Philadelphia',function (err, temp){
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
// 
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');      
//     }, 1000);
//   });  
// }
// 
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('Promise success', temp);
// }, function (err){
//   console.log('Promise error',err);
// })

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=398208217eaf6b70da912a13b07613a4
//challenge area

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve (a + b);
      } else {
        reject ('A & B both need to be numbers');
      }
    });
}

function addIt(x, y) {
  addPromise(x, y).then(function(result){
    console.log('Result is ', result);
  }, function(err) {
    console.log("ERROR: ", err);
  });
}

addIt(2,3);
addIt('a','b');
