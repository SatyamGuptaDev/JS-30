const js = document.querySelector('h2 span');
const space = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const color = document.querySelector('#base');
const img = document.querySelector('img');


space.addEventListener('input', function() {
    img.style.padding = `${this.value}px`;
});

blur.addEventListener('input', function(){
    img.style.filter = `blur(${this.value}px)`;
});

color.addEventListener('input', function() {
    img.style.backgroundColor = `${this.value}`;
    js.style.color = `${this.value}`;
});

