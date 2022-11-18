function *fizzBuzzGenerator(max) {//nota poner el * para poder usar el yield
  // Tu código acá:
let counter=1;
  while (counter <=max) {
    //el modulo de 3 es 0 osea es divisible
    if (counter %3===0 && counter %5 ===0) yield 'Fizz Buzz'
    else if (counter %3===0)yield 'Fizz'
    else if (counter %5===0)yield 'Buzz'
    else yield counter
    counter++
  }
}
module.exports = fizzBuzzGenerator;
