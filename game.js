var speed = 5
var directionX = true
var directionY = true
var canvasWidth = 800
var canvasHeight = 600

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
        if (this.xpos > canvasWidth) return 'right'
        if (this.ypos > canvasHeight) return 'bottom'
        if (this.xpos < 0) return 'left'
        return false
    }
}

function init() {
    window.requestAnimationFrame(draw)
}

function draw() {
    var ctx = document.getElementById('pong').getContext('2d')

    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, canvasWidth, canvasWidth)

    ctx.fillStyle = 'black'

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

    moveBall(directionX, directionY)

    ctx.fillRect(ball.xpos, ball.ypos, ball.height, ball.width)

    window.requestAnimationFrame(draw)
}

function moveBall(directionX, directionY) {
    console.log(ball.xpos + ', ' + ball.ypos)
    directionX ? ball.moveRight() : ball.moveLeft()
    directionY ? ball.moveDown() : ball.moveUp()
}

init()
