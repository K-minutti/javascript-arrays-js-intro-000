
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var arrayNew = ["New York", "San Francisco"]
  ["Philadelphia", ...arrayNew]
  arrayNew =   ["Philadelphia", ...arrayNew]
  return arrayNew
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 var arrayDes = [1,2,3]
 arrayDes.unshift(1)
 return arrayDes
}

function addElementToEndOfArray(array, element) {
  var cities = ["New York", "San Francisco"]
  ["Philadelphia", ...citiesNew]
  citiesNew =   ["Philadelphia", ... citiesNew]
  return citiesNew
}

function destructivelyAddElementToEndOfArray(array, element) {
 var arrayD = [1,2,3]
 arrayD.unshift(1)
 return arrayD
}
