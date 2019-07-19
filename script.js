const btn = document.querySelector('.cta');
const btn2 = document.querySelector('.cta2');

btn.addEventListener('click', () => {
  var morphing = anime({
    targets: '.polymorph',
    points: [
      { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
      { value: '215, 110 0, 110 0, 0 0, 0 67, 76' }
    ],
    easing: 'easeOutQuad',
    duration: 1200,
    loop: false
  });

  anime({
    targets: '.header',
    opacity: 1,
    duration: 500,
    translateY: 150
  });

  const promise = morphing.finished.then(() => {
    btn2.addEventListener('click', () => {
      const morphing = anime({
        targets: '.polymorph',
        points: [
          { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
          { value: '215, 110 0, 110 0, 0 47.7, 0 215, 0' } // last value is the starting value from html
        ],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
      });
      anime({
        targets: '.header',
        opacity: 0,
        duration: 500,
        translateY: -800 // back to default position
      });
    });
  });
});
