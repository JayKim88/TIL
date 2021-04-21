$(function () {
  let prevIndex = 0;
  let currentIndex = 1;
  let nextIndex = 2;
  let lastIndex = $("#quotes-carousel").find(".quote").length - 1;

  $("#quotes-carousel").on("click", ".previous", showQuote);
  $("#quotes-carousel").on("click", ".next", showQuote);
  $("#quotes-carousel-pips").on("click", ".pip", showFromPip);

  generatePips();

  let carouselRunning = true;
  let interval = setInterval(function () {
    if (carouselRunning) {
      showNextQuote();
    }
  }, 4000);

  function showNextQuote() {}
  function showQuote() {}
  function updateState(index) {}
  function updateCarouselPosition() {}
  function generatePips() {}
  function updatePips() {}
  function showFromPip() {}
  function setLeftClass() {}
});
