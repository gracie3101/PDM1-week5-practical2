let = shapes[i];

function setup () {
    createCanvas(600,600)
}

function draw () {
background (200,150,250)
    for (let i = 0 ; i < shapes.length; i++) {
        if (i % 2 === 0) {
            fill(0);
        } else {
            fill(255)
            rect(shapes[i].x,shapes[i].y,shapes[i].w, shapes[i].h)
        }
    }

}

function addRect () {
    
}