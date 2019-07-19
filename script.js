/**************************
 
  VANILLA JS

***************************/

// let divs = document.querySelectorAll('div');

// let num = 0;

// const delay = time => new Promise(resolve => setTimeout(resolve, time));

// // ES5 Promise => then
// divs.forEach(div => {
//   delay(0).then(() => {
//     setTimeout(() => {
//       div.style.backgroundColor = 'lightblue';
//     }, (num += 100));
//   });
//   delay(500).then(() => {
//     setTimeout(() => {
//       div.style.backgroundColor = '#A0D5FF';
//       div.style.width = '90%';
//     }, (num += 100));
//   });
// });

// // ES6 async await
// divs.forEach(async div => {
//   await delay(0);
//   setTimeout(() => {
//     div.style.backgroundColor = 'lightblue';
//   }, (num += 100));

//   await delay(500);
//   setTimeout(() => {
//     div.style.backgroundColor = '#A0D5FF';
//     div.style.width = '90%';
//   }, (num += 100));
// });

/**************************
 
  ANIME JS

***************************/

// create timeline
let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});

tl.add({
  targets: 'div',
  width: '100%',
  backgroundColor: 'rgb(197, 197, 255)',
  delay: anime.stagger(100) // function works only with latest version 3.0.1
});

tl.add({
  targets: 'div',
  width: '90%',
  backgroundColor: 'rgb(235, 235, 255)'
});

tl.add(
  {
    targets: 'h1',
    top: '10%',
    opacity: 1,
    duration: 4000
  },
  '-=1600'
);

let rotateOnMouseOver = anime({
  targets: 'section',
  scaleY: '2',
  scaleX: '2',
  translateX: '40%',
  rotate: '45deg',
  duration: 5000,
  autoplay: false
});

document.querySelector('h1').addEventListener('mouseover', () => {
  rotateOnMouseOver.play();
});
