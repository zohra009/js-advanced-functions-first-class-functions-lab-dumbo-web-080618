// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return [drivers[0], drivers[1]] //return only one thing
}
const returnLastTwoDrivers = function(drivers){
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] //reads one thing since we have more than one num we place it in an ar
//
function createFareMultiplier(fareMultiplier){
  return ((some_fare) => {
    return some_fare * fareMultiplier
  })
}
// let a = createFareMultiplier(fareMultiplier)
//
//
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, return_first_or_last) { //second argument is a callback function to other fucntions def'd above depending on which one we choose
  return return_first_or_last(drivers) //drivers is the argument being passed in the other functions so drivers being used here will go thorugh the other functions and perform whatever fucntion user wants
}

// let a = fare_doubler
// console.log(a())
