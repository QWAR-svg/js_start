"use script";

class Rect {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
 }

 const square = new Rect(4, 5);
 const l = new Rect();
//  console.log(square.calcArea());

console.log(l.square);

class Wouu  extends Rect{

    constructor(height, width, text, Bcolor) {
        super(height, width); // On the first place
        this.text = text;
        this.color = Bcolor;
    }

    showMe() {
        console.log(`Text: ${this.text} , color: ${this.color}`);
    }
}

const elem = new Wouu(253, 11, "Hello", "green");
elem.showMe();

console.log(elem.calcArea());

