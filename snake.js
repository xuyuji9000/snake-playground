console.log('snake')

var example = document.getElementById('example');
var context = example.getContext('2d');

// let START_X=30
// let START_Y=30
let anchor = {
    x: 30,
    y: 30
}
context.fillStyle = 'red';
context.fillRect(anchor.x, anchor.y, 30, 30);


document.onkeydown = function (e) {
    // e = e || window.event;
    console.log(e)
    // use e.keyCode
    if(e.key == "ArrowUp") {
        context.fillStyle = 'white';
        context.fillRect(anchor.x, anchor.y, 30, 30);
        anchor.y -=5
        context.fillStyle = 'red';
        context.fillRect(anchor.x, anchor.y, 30, 30);
    }
};