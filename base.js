
const dropFirst = xs => xs.slice(1)
const dropLast = xs = xs.slice(0, xs.length-1)
const spec = o => x => Object.keys(0)
    .map(k => objOf(k)(o[k](x))) // cpnstructs a new object of that key and constructs a function 
    .reduce((acc, o) => Object.assign(acc, o))
const id = x => x
const k = x => y => x
const map = f => xs => xs.map(f)
const mapi = f => xs => xs.map((x,i) => f((x)(i)))