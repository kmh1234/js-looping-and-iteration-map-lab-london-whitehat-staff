// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let driversName = drivers.map(driver => driver.toLowerCase())
  return driversName;
}

//takes drivers array, map array to array.lowercase

function nameToAttributes(drivers) {
  let driversName = drivers.map(driver => {
    return { firstName: driver.split(' ')[0], lastName: driver.split(' ')[1] }
      }
    )
    return driversName;
}

function attributesToPhrase(drivers) {
  let driversMessage = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return driversMessage;
}
