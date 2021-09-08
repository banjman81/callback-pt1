const identity = function (value) {
  return value;
};
const first = function (array, n) {
  let result = []
  if(n == undefined){
    return array[0]
  }
  else if( n > array.length){
    return array
  }
  else{
    for(let i = 0; i< n; i++){
      result.push(array[i])
    }
  }
  return result
};

const last = function (array, n) {
  let result = []
  if( n == undefined){
    return array[array.length-1]
  }
  else if(n > array.length){
    return array
  }
  else{
    let counter = 0
    for(let i = array.length-1; counter < n; i--){
      result.unshift(array[i])
      counter++
    }
  }
  return result
};

const each = function (collection, callback) {
  if (Array.isArray(collection) === true){
    for( let i = 0; i < collection.length; i++){
      callback(collection[i], i , collection);
    }
  }
  else{
    for( let animal in collection){
      callback(collection[animal], animal, collection)
    }
    // for( let animal in collection){
    //   callback(animal, animal, collection)
    // }
  }
};

const indexOf = function (array, target) {
  for(let i = 0; i < array.length; i++){
    if (array[i] == target){
      return i
    }
  }
  return -1;
};
const map = function (collection, iterator) {
  const result = collection.map( item => iterator(item))
  return result
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
