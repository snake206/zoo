var lion = require('./lion')

function animalManagement (animal) {
  console.log("This is the", animal.name)
}

var mufasa = new lion ('male', 'leader', 'Mufasa')

animalManagement (mufasa)