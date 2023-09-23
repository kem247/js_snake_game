
const ctx = canvas.getContext('2d')

// Mutable state 
let state = initialState()


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