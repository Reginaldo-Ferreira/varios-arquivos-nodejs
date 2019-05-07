// Use a For-In Loop
const equine = { horse: '🐴', zebra: '🦓', unicorn: '🦄'}
const arr = ['badger','beaver','baboon']
for (const key in equine) {
    // Filters out properties inherited from prototype, see https://palantir.github.io/tslint/rules/forin/
    if (equine.hasOwnProperty(key)) {
        console.log(`array 1=> ${equine[key]}`);
    }
}



// Unwrap the the Values

for (const val of Object.values(equine)) {
    console.log(val);
}

// Create a Map
const equine2 = new Map(Object.entries(equine));

for (const v of equine2.values()) {
    console.log(v)
}

for (const e in equine) {
    if (equine.hasOwnProperty(e)) {
        console.log("forin-> "+e)
        const element = equine[e];
        
    }
}

arr[Symbol.iterator] = function() {
    let i = 0;
    let arr = this;
    return {
      next: function() {
        if (i >= arr.length) {
          return { done: true };
        } else {
          const value = arr[i] + '🙈';
          i++;
          return { value, done: false };
        }
      }
    };
  };

  const faces = ['😀', '😍', '🤤', '🤯', '💩', '🤠', '🥳','💩'];

  // Transform values
  const withIndex = faces.map((v, i) => console.log(`face ${i} is ${v}`));

  // Reduce values to a single value
const pooCount = faces.reduce((acc, cur) => {
    return acc + (cur === '💩' ? 1 : 0)
}, 0);
console.log(pooCount)