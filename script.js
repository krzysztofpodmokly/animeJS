const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const overlay = document.querySelector('.morph');

const morphing = anime({
  targets: '.morph',
  d: [
    {
      value:
        'M0,0H0S177.589-3.419,435.908,0C728.248,0,675.25-1.71,998.363,0s364.143-1.71,608.614,0,312.892,0,312.892,0H0Z'
    },
    {
      value:
        'M0,0V1079.819s94.027-1.71,429.107,0c227.375,3.418,211.971,0,564.164,0s340.379-1.709,569.293,0,357.3,0,357.3,0V0Z'
    }
  ],
  easing: 'easeInOutQuint',
  duration: 1300,
  loop: false,
  autoplay: false
});

btn.addEventListener('click', () => {
  morphing.restart();
  overlay.classList.add('pointer');
  section2.classList.add('animated', 'display', 'flipInY', 'delay-1s');
});

btn2.addEventListener('click', () => {
  morphing.reverse();
  morphing.play();

  overlay.classList.remove('pointer');
  section2.classList.remove('animated', 'display', 'flipInY', 'delay-1s');
});
