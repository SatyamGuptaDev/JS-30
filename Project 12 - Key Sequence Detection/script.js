const pressed = [];
const target = 'code';

window.addEventListener('keydown', function(e){
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-target.length - 1, pressed.length-target.length);
    if(pressed.join('').includes(target)){
        console.log("DING DING!");
        cornify_add();
    }
    console.log(pressed);


});