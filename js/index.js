
let delayedredirect = (url, delay) => {
  console.log(url, typeof delay);
  window.setTimeout(function () {
    window.location = url;
  }, delay);
};
