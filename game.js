var canvas = document.getElementById('pong')
var ctx = canvas.getContext('2d')
var xpos = 0

setInterval(function() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,800,600)
    ctx.fillStyle = 'black'
    ctx.fillRect(xpos, 0, 20, 20)
    xpos += 5
}, (1000/60))
