var names = ['Dave','Kat','Isabelle'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('David'));

var person = {
  name: 'David',
  greet: function () {
      names.forEach ( (name) => {
        console.log(this.name + ' says hi to ' + name);
      });
  }
};

person.greet();

//addExpression
var addExpression = (a, b) => (a + b);

// addStatement
var addStatement = (a, b) => {
  return a + b;
};

console.log(addExpression(1,2));
console.log(addStatement(3, 4));
