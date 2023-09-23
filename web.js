

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
// Main
draw();
window.requestAnimationFrame(step(0))