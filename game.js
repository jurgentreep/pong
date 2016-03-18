var speed = 3
var directionX = true
var directionY = true
var canvasWidth = 800
var canvasHeight = 600
var counter = 0
var canvas = document.getElementById('pong')
var ctx = canvas.getContext('2d')
var hits = 0

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
    },
    hitWall: function() {
        if (this.ypos < 0) return 'top'
        if (this.xpos > canvasWidth - ball.width) return 'right'
        if (this.ypos > canvasHeight - ball.height) return 'bottom'
        if (this.xpos < 0) return 'left'
        return false
    }
}

var paddle = {
    xpos: canvasWidth - 20,
    ypos: 0,
    height: 100,
    width: 20
}

canvas.addEventListener('mousemove', function(event) {
    var rect = canvas.getBoundingClientRect()
    var x = event.clientX - rect.left
    var y = event.clientY - rect.top
    paddle.ypos = y - (paddle.height / 2)
})

console.log(paddle.bottom)

function init() {
    window.requestAnimationFrame(draw)
}

function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasWidth)

    switch (ball.hitWall()) {
        case 'top':
            directionY = true
            break
        case 'right':
            directionX = false
            break
        case 'bottom':
            directionY = false
            break
        case 'left':
            directionX = true
            break
    }

    if (ball.ypos > paddle.ypos && ball.ypos < (paddle.ypos + paddle.height) && ball.xpos > canvasWidth - ball.width) hits++

    moveBall(directionX, directionY)

    ctx.fillRect(ball.xpos, ball.ypos, ball.width, ball.height)

    ctx.fillRect(paddle.xpos, paddle.ypos, paddle.width, paddle.height)

    ctx.font = '30px consolas'
    ctx.fillText('Hits: ' + hits, 10, 30)

    window.requestAnimationFrame(draw)
}

function moveBall(directionX, directionY) {
    directionX ? ball.moveRight() : ball.moveLeft()
    directionY ? ball.moveDown() : ball.moveUp()
}

init()
