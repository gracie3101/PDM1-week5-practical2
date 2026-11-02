function setup () {
    createCanvas (400,400);
    noStroke();
}

function draw () {
background (255);
fill (255,0,0);
square(player.x, player.y , player.size);
fill (0,255,0);
rect(obstacle.x, obstacle.y , obstacle.width, obstacle.height);
if (keyIsPressed) {
    processPlayerMovement();
}
}

function player () {
    for (let i = 0; i < 50; i++) {
} 
let player ={
    x : 50,
    y : 50,
    size : 50,
}
player.push
}

function obstacle () {
    for (let i = 0; i < 50; i++) {
} 
let obstacle ={
    x : 150,
    y : 100,
    width : 100,
    height : 200,
}
obstacle.push
}

function processPlayerMovement () {
    if (keyIsDown(LEFT_ARROW)) {
        player.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        player.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.y += 5;
    }
}

function checkCollision () {
    if (player.x < obstacle.x + obstacle.width &&
        player.x + player.size > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.size > obstacle.y) {
        // Collision detected
        console.log("Collision!");
    }
}
