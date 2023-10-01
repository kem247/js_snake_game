
const dropFirst = xs => xs.slice(1)
const spec = o => x => Object.keys(0)
    .map(k => objOf(k)(o[k](x))) // cpnstructs a new object of that key and constructs a function 
    .reduce((acc, o) => Object.assign(acc, o))