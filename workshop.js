function forEach(callback, theArray) {
  for(var i=0; i<theArray.length;i++){
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  var newArray = [];     //the result of applying mapping function to theArray
  theArray.forEach(function(item){   //for each element of the array apply the function that takes an item(each element of the array)
    var newItem = mappingFunction(item);    //apply the mapping function to each element of the array and assign it to var newItem
    newArray.push(newItem);                //push newItem into the result array  newArray
  });
  return newArray;                        //return the result
} 

/* HOW TO TEST
function double(num){
  return num * 2;
}
map(double, [1,2,3,4,5]);*/

function filter(predicate, theArray) {
  var newArray = [];
  theArray.forEach(function(item){
    if(predicate(item) == true){
      newArray.push(item);
    }
  });
  return newArray;
}

function every(predicate, theArray) {
  var result = true;
  if(theArray.length === 0){
    return true;
  }
  else{
    for(var i=0; i<theArray.length;i++){
      if(!predicate(theArray[i])){
        result = false;
        return result;
      }
    }
      return result;
  }
}

function some(predicate, theArray) {
  
}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
