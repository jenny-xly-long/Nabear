let counter;
let greeting = "Happy Birthday Daddy Bear! I LOVE U <3";
let song;

let myp5 =  new p5(sketch => {

    function mouseClicked() {
        sketch.ellipse(sketch.width/2, 80, 60* Math.sin(counter), 60* Math.sin(counter));
    }
    sketch.setup = () =>{
        let canv = sketch.createCanvas(500,500);
        sketch.background(220);
        canv.position(450,200)
        counter = 0;
    }

    sketch.draw = () =>{
        sketch.fill(sketch.random(255), 110, 55, 20);
        sketch.text(greeting, sketch.mouseX, sketch.mouseY, sketch.mouseX, sketch.mouseY);


        /*-->draw the bear<--*/

        //arms

        sketch.rect(170, 300, 70, 20)
        sketch.rect(420, 300, 70, 20)

        sketch.circle(160, 310, 30)
        sketch.circle(500, 310, 30)

        sketch.fill(139, 69, 19)

        sketch.circle(160, 295, 10)
        sketch.circle(160, 325, 10)
        sketch.circle(145, 303, 10)
        sketch.circle(145, 317, 10)


        sketch.circle(500, 295, 10)
        sketch.circle(500, 325, 10)
        sketch.circle(515, 303, 10)
        sketch.circle(515, 317, 10)


        sketch.noFill()
        sketch.fill(255, 100, 0);

        //legs

        sketch.rect(300, 400, 20, 70)

        sketch.rect(340, 400, 20, 70)

        sketch.fill(139, 69, 19)

        sketch.ellipse(310,470,30,10)
        sketch.ellipse(350, 470, 30,10)

        sketch.noFill()
        sketch.fill(139, 69, 19)

        //abdomen

        sketch.circle(330, 320, 250)

        sketch.fill(139, 69, 19)
        sketch.circle(280, 280, 3)
        sketch.circle(380, 280, 3)
        sketch.circle(330, 380, 5)

        sketch.noFill()
        sketch.fill(139, 69, 19)

        //face background

        sketch.ellipse(325, 150, 150, 185);

        //ears
        sketch.fill(110, 0, 0)
        sketch.circle(265, 80, 30);
        sketch.circle(385, 80, 30);

        //eyes
        sketch.fill(255);
        sketch.ellipse(295, 120, 30, 40);
        sketch.fill(0);
        sketch.ellipse(295, 120, 10, 15);
        sketch.fill(255);
        sketch.ellipse(355, 120, 30, 40);
        sketch.fill(0);
        sketch.ellipse(355, 120, 10, 15);

        //nose
        sketch.fill(110, 0, 0);
        sketch.triangle(320, 160, 325, 145, 330, 160);

        //mouth
        sketch.fill(255, 255, 255);
        sketch.ellipse(325, 200, 40, 10);

        /*-->draw the candle<--*/
        //candle
        sketch.fill(255,235,205);
        sketch.rect(sketch.width/2, 85, 2, 25);
        sketch.fill (255,235,205);
        sketch.rect(240, 110, 20, 90);
        counter++;

        sketch.fill(sketch.random(255), 200,200,200);
        mouseClicked();
        // if (sketch.mousePressed === true) { //light the candle
        //     console.log('hi');
        //     sketch.ellipse(sketch.width/2, 80, 60* sin(counter), 60* sin(counter));
        // };
        /*-->draw the cake<--*/
        //base
        sketch.fill(137, 91, 63);
        sketch.rect(150, 200, 200, 100, 7, 7, 0, 0);
        sketch.rect(100, 300, 300, 100, 7, 7, 0, 0);
        sketch.rect(50, 400, 400, 100, 7, 7, 0, 0);
        //cover
        sketch.fill(66, 39, 30);
        sketch.rect(150, 200, 200, 30, 7, 7, 0, 0);
        sketch.rect(100, 300, 300, 30, 7, 7, 0, 0);
        sketch.rect(50, 400, 400, 30, 7, 7, 0, 0);
    };
}, "main-canvas");