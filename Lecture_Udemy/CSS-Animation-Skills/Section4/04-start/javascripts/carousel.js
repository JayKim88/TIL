$(function () {
  // Set up the carousel's "state"
  var prevIndex = 0;
  var currentIndex = 1;
  var nextIndex = 2;
  var lastIndex = $("#quotes-carousel").find(".quote").length - 1;

  // Click actions to listen for
  $("#quotes-carousel").on("click", ".previous", showQuote);
  $("#quotes-carousel").on("click", ".next", showQuote);
  $("#quotes-carousel-pips").on("click", ".pip", showFromPip);

  // Generate pips
  generatePips();
  setLeftClass();

  // Cycle automatically
  var carouselRunning = true;

  // Set the carousel working
  var interval = setInterval(function () {
    if (carouselRunning) {
      showNextQuote();
    }
  }, 4000);

  function showNextQuote() {
    // Calculate the indices needed to show the next quote
    if (currentIndex === lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateState(currentIndex);
  }

  function showQuote(event) {
    // Get the index of the clicked quote and show it
    let target;
    if ($(event.target).hasClass("quote")) {
      target = $(event.target);
    } else {
      target = $(event.target).parent();
    }
    let index = $(".quote").index(target); //배열에서 특정 타켓의 인덱스를 구한다.
    // console.log($(".quote"));
    // console.log(target);
    updateState(index);
  }

  function updateState(index) {
    // Calculates the previous and next indices, and updates the carousel
    prevIndex = index === 0 ? lastIndex : index - 1;
    currentIndex = index;
    nextIndex = index === lastIndex ? 0 : index + 1;

    updateCarouselPosition();
    setLeftClass();
    updatePips();
  }

  function updateCarouselPosition() {
    // Update the carousel depending on the "state"
    $("#quotes-carousel").find(".previous").removeClass("previous");
    $("#quotes-carousel").find(".current").removeClass("current");
    $("#quotes-carousel").find(".next").removeClass("next");

    let allQuotes = $("#quotes-carousel").find(".quote");
    $(allQuotes[prevIndex]).addClass("previous");
    $(allQuotes[currentIndex]).addClass("current");
    $(allQuotes[nextIndex]).addClass("next");
  }

  function generatePips() {
    // Add pips to the ul element in index.html
    let listContainer = $("#quotes-carousel-pips").find("ul");
    for (let i = lastIndex; i >= 0; i--) {
      let newPip = $('<li class="pip"></li>');
      $(listContainer).append(newPip);
    }
    updatePips();
  }

  function updatePips() {
    // Update the classes on the pips depending on the current indices
    $("#quotes-carousel-pips").find(".previous").removeClass("previous");
    $("#quotes-carousel-pips").find(".current").removeClass("current");
    $("#quotes-carousel-pips").find(".next").removeClass("next");

    let allPips = $("#quotes-carousel-pips").find(".pip");
    $(allPips[prevIndex]).addClass("previous");
    $(allPips[currentIndex]).addClass("current");
    $(allPips[nextIndex]).addClass("next");
  }

  function showFromPip(event) {
    // Helper for when someone clicks a pip
    let index = $("#quotes-carousel-pips li").index(event.target);
    console.log(index);
    updateState(index);
  }

  function setLeftClass() {
    // For when we want the item to appear from the left side if it's "earlier" in the list
    let allQuotes = $("#quotes-carousel").find(".quote");
    $(".quote.left").removeClass("left");
    if (prevIndex > 0) {
      let index = prevIndex - 1;
      $(allQuotes[index]).addClass("left");
    } else {
      $(allQuotes[lastIndex]).addClass("left");
    }
  }
});
