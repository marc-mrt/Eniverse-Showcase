function easeInOutCubic(currentTime, startValue, changeInValue, duration) {
  let time = currentTime;
  time /= duration;
  time--;
  return changeInValue * (time * time * time + 1) + startValue;
}

function animatedScrollTo(scrollTo, duration, callback) {
  const scrollFrom = window.scrollY;
  const scrollDiff = scrollTo - scrollFrom;
  let currentTime = 0;
  const increment = 20;

  (function animateScroll() {
    currentTime += increment;
    const newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);

    window.scrollTo(0, newScrollPos);
    if (currentTime > duration) {
      return callback();
    }

    setTimeout(animateScroll, increment);
  }());
}

module.exports = animatedScrollTo;
