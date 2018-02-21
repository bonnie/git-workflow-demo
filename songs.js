const wheelsOnTheBus = () => {
  const thingsOnTheBus = { 
    wheels: 'round and round',
    wipers: 'swish swish swish',
    people: 'up and down',
  }

  for (let thing in thingsOnTheBus) {
    for (let i=0; i < 3; i++) {
      console.log(`the ${thing} on the bus go ${thingsOnTheBus[thing]}`)
    }
    console.log('all through the town\n')
  }
}

const bottlesOfBeer = () => {
  for (let bottlesOfBeer = 99; bottlesOfBeer > 0; bottlesOfBeer--) {
	  takeOneDown();
	  passItAround();
  }
}
