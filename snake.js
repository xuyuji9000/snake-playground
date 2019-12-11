console.log('snake')

var example = document.getElementById('example');
var context = example.getContext('2d');
context.fillStyle = 'red';
context.fillRect(30, 30, 50, 50);


setTimeout(function() {
    // alert('test')
    context.fillStyle = 'green';
    context.fillRect(30, 30, 50, 50);

}, 1000)

