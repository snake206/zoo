var Lion = requeri('lion')

function animalManagement (animal) {
  console.log("This is the", animal.name)
}

var mufasa = new Lion ( 'male', 'leader' )

animalManagement (mufasa)