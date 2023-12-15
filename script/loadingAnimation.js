// loadingAnimation.js
export function showLoadingAnimation() {
    const lottieContainer = document.getElementById('lottie-loading');
    lottieContainer.style.display = 'block';
}

export function hideLoadingAnimation() {
    const lottieContainer = document.getElementById('lottie-loading');
    lottieContainer.style.display = 'none';
}

// debounce.js
function debounce(callback, delay) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback.apply(this, args), delay);
  };
}

