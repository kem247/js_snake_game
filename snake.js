const base = require('./base')

// Initial State
const initialState = () => ({
    cols: 20,
    rows: 14,
    moves: [EAST],
    snake: [],
    apple: { x: 16, y: 2},
})

// Constants
const NORTH = { x: 0, y: -1}
const EAST = { x: 1, y: 0 }
const WEST = { x: -1, y: 0 }
const SOUTH = { x:0, y: 1 }

// Randomness
const rndPos = table => ({
    x: rnd(0)(table.cols - 1),
    y: rnd(0)(table.rows - 1)
})