
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
