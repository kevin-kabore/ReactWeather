var names = ['Kevin', 'Jennifer', 'Cynthia']
//
// names.forEach(function(name){
//   console.log('forEach', name);
// })
//
//
// names.forEach((name) => {
// //   console.log('arrowFunction', name);
// // })
//
// names.forEach((name) => console.log(name))

// var returnMe = (name) => name + '!';
// console.log(returnMe('Kevin'));
//
// var person = {
//   name: 'Kevin',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet()


// Challenge Area
//Create a function called add that takes A & B and return A + b

function add(a,b){
  return a + b;
}

// addStatement to return using {}
var addStatement = (a,b) => {
    return a + b;
}

// addExpression to return using =>
var addExpression = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));

console.log(addStatement(2,2));
console.log(addExpression(-5,5));
