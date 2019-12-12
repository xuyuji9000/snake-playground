const BACKGROUND_COLOR = 'white';
const RECTANGLE_COLOR = "rgba(255, 0, 0, 0.5)";
const MOVING_PIXEL=1;

var example = document.getElementById('example');
var context = example.getContext('2d');

/*
// initialize rectangle
let starting_point = {
    x: 30,
    y: 30
};
context.fillStyle = RECTANGLE_COLOR;
context.fillRect(starting_point.x, starting_point.y, 30, 30);





// move rectangle around 
document.onkeydown = function (e) {

    if(e.key == "ArrowUp") {
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
        starting_point.y -=MOVING_PIXEL;
        context.fillStyle = RECTANGLE_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
    }

    if(e.key == "ArrowDown") {
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
        starting_point.y +=MOVING_PIXEL;
        context.fillStyle = RECTANGLE_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
    }

    if(e.key == "ArrowRight") {
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
        starting_point.x +=MOVING_PIXEL
        context.fillStyle = RECTANGLE_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
    }

    if(e.key == "ArrowLeft") {
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
        starting_point.x -=MOVING_PIXEL;
        context.fillStyle = RECTANGLE_COLOR;
        context.fillRect(starting_point.x, starting_point.y, 30, 30);
    }
};
*/

// declare Linked List Node

class LinkedListNode {
    static width = 30;
    static height = 30;
    constructor(starting_point_x, starting_point_y) {
        this.starting_point_x = starting_point_x;
        this.starting_point_y = starting_point_y;
        this.next = null;
    }
}

let starting_point = {
    x: 100,
    y: 100
};

const head = new LinkedListNode(starting_point.x, starting_point.y);

head.next = new LinkedListNode(starting_point.x + LinkedListNode.width, starting_point.x + LinkedListNode.height) ;



let current = head;
while(current != null) {
    
    console.log(current.starting_point_x)

    current = current.next
}
