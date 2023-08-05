const child = document.querySelectorAll('.child');
const parent = document.querySelector('.parent');

function loadimg() {
  //20 imges in an array
  var ar = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg"];
  var i = 0;
  //randomly select five different images from the array in an array
  var arr = [];
  while (arr.length < 5) {
    var r = Math.floor(Math.random() * 20);
    while(arr.includes(r)){
      r = Math.floor(Math.random() * 20);
    }
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  //display the images
  child.forEach((child) => {
    child.style.background = `url("${ar[arr[i]]}") center center/cover no-repeat`;
    i++;
  });

}
loadimg();



child.forEach((child) => {

  child.addEventListener('click', () => {
    if (!child.classList.contains('active')) {
      child.style.animation = 'grow 1s forwards';
      const hide = child.querySelectorAll('.hide');
      hide.forEach((hide) => {
        hide.style.animation = 'show 1s forwards';
      });
      child.classList.add('active');
    } else {
      child.style.animation = 'shrink 1s forwards';
      const hide = child.querySelectorAll('.hide');
      hide.forEach((hide) => {
        hide.style.animation = 'hide 1s forwards';
      });
      child.classList.remove('active');
    }
  });
});


