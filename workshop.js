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
  if(theArray.length === 0){
    return false;
  } else {
    for(var i=0; i<theArray.length; i++){
      if(predicate(theArray[i])){
        return true;
      }
    }
    return false;
  }
}
function indexOf(item, theArray) {
  var result = -1;
  for(var i=0;i<theArray.length; i++){
    if(theArray[i] === item){
      result = i;
      return result;
    } else {
      result = -1;
    }
  }
  return result;
}

function findIndex(predicate, theArray) {
  var result = -1;
  for(var i=0; i<theArray.length; i++){
    if(predicate(theArray[i])){
      result = i;
      return result;
    } else{
      result = -1;
    }
  }
  return result;
}

function first(n, theArray) {
  var newArray = [];
  if (typeof n === "object"){
    return n[0];
  } else if(n > theArray.length){
    return theArray;
  } else if (n < 0){
    return newArray;
  } else {
     for(var i=0; i<n;i++){
      newArray.push(theArray[i]);
    }
  }
  return newArray;
}
 

function last(n, theArray) {
  var newArray = [];
  if(typeof n === "object"){
    return n[n.length-1]
  } else if(n > theArray.length){
    return theArray;
  } else if(n < 0){
    return newArray;
  } else {
    for(var i = 0; i < n; i++){
      var newNum = theArray.length-1-i;
      newArray.push(theArray[newNum]);
    }
  }
  return newArray.reverse();
}

function pluck(property, arrayOfObjects) {
  var newArray = [];
  arrayOfObjects.forEach(function(obj){
    newArray.push(obj[property]);
  });
  return newArray;
}

function flatten(theArray) {

}


function negate1(predicate) {
  return function(x){
    return !predicate(x);
    };
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
