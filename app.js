function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //refactored as ES2015 version

 const myFilterOutOdds = (...nums) => nums.filter(num => num % 2 ===0);



const findMin = (...nums) => nums.reduce((min, nextVal) => min < nextVal ? min:nextVal)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...rest) => {
    const doubled = rest.map(num => num *2)
    return [...arr, ...doubled]
}

const removeRandom = items => {
    let newArr = [...items];
    let deleteIndex= Math.floor(Math.random()*items.length);
    newArr.splice(deleteIndex, 1);
    return newArr
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => ([...array1, ...array2])

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, key:val})

/** Return a new object with a key removed. */

const removeKey = (obj, key)=> {
    const newObj = {...obj}
    delete newObj[key];
    return newObj
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    newObj = {...obj}
    newObj[key]=val;
    return newObj
}

