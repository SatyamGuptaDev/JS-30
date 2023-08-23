//wes bos mouse move shadow project JS code
// 1. Get the mouse movement
// 2. Get the width and height of the hero div
// 3. Get the width and height of the text div
// 4. Get the x and y coordinates of the mouse
// 5. Calculate the x and y coordinates of the text div
// 6. Calculate the x and y coordinates of the shadow
// 7. Apply the shadow to the text div

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
    //console.log(e);
    //const width = hero.offsetWidth;
    //const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    //console.log(x, y);
    //console.log(this, e.target);
    //console.log(e.target.offsetLeft, e.target.offsetTop);
    //console.log(this.offsetLeft, this.offsetTop);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    //console.log(x, y);
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / width) * walk - walk / 2);
    //console.log(xWalk, yWalk);
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    }

hero.addEventListener('mousemove', shadow);


