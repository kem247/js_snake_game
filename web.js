
const ctx = canvas.getContext('2d')

// Mutable state 
let state = initialState()

// Position helpers
const x = c => Math.round(c * canvas.width / state.cols)
const y = r => Math.round(r * canvas.width / state.rows)

// Game loop draw
const draw = () => {
// clear
    ctx.fillStyle = '#232323'
    ctx.fillRect(0, 0, canvas.width, canvas.height )

// draw snake 
    ctx.fillStyle = 'rgb(0,200,50)'  // x pos, y pos, width of 1 tile, height of 1 tile
    state.snake.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

// draw apples
    ctx.fillStyle = 'rgb(255,50,0)'
    ctx.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))

// snake crashes
    if(state.snake.length === 0) {
        ctx.fillStyle = 'rgb(255,0,0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}


// Game loop update
const step = timeStamp1 => timeStamp2 => {
    if( timeStamp2 - timeStamp1 > 100 ) {
        state = next(state)
        draw();
        window.requestAnimationFrame(step(timeStamp2))
    } else {
        window.requestAnimationFrame(step(timeStamp1)) //have to redraw
    }
}

// Key events 
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'w': case 'h': case 'ArrowUp': state = enqueue(state, NORTH); break
        case 'd': case 'l': case 'ArrowRight': state = enqueue(state, EAST); break
        case 'a': case 'j': case 'ArrowLeft': state = enqueue(state, WEST); break
        case 's': case 'k': case 'ArrowDown': state = enqueue(state, SOUTH); break
    }
})
// Main
draw();
window.requestAnimationFrame(step(0))