const base = require('./base')
Object.getOwnPropertyNames(base).map(p => global[p] = base[p])

// Constants
const NORTH = { x: 0, y: -1}
const EAST = { x: 1, y: 0 }
const WEST = { x: -1, y: 0 }
const SOUTH = { x:0, y: 1 }

// Initial State
const initialState = () => ({
    cols: 20,
    rows: 14,
    moves: [EAST],
    snake: [],
    apple: { x: 16, y: 2},
})

const enqueue = (state, move) => validMove(move)(state)
? merge(state)({ moves: state.moves.concat([move])}) : 
state


// Randomness
const rndPos = table => ({
    x: rnd(0)(table.cols - 1),
    y: rnd(0)(table.rows - 1)
})