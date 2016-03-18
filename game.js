var canvas = document.getElementById('pong')
var ctx = canvas.getContext('2d')
var xpos = 0
var speed = 5
var direction = true

var ball = {
    xpos: 0,
    ypos: 0,
    height: 20,
    width: 20,
    moveUp: function() {
        this.ypos -= speed
    },
    moveRight: function() {
        this.xpos += speed
    },
    moveDown: function() {
        this.ypos += speed
    },
    moveLeft: function()  {
        this.xpos -= speed
    }
}

setInterval(function() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,800,600)
    ctx.fillStyle = 'black'
    if (ball.xpos == 800 - ball.width || ball.ypos == 600 - ball.height) direction = false
    if (ball.xpos == 0 || ball.ypos == 0) direction = true
    if (direction) {
        ball.moveRight()
        ball.moveDown()
    } else {
        ball.moveLeft()
        ball.moveUp()
    }
    ctx.fillRect(ball.xpos, ball.ypos, ball.height, ball.width)
    xpos += 5
}, (1000/60))
