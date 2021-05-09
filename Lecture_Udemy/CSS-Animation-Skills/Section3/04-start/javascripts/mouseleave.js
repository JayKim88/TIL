$(function () {
  $(window).mouseleave((e) => {
    let modalSeen = sessionStorage.getItem("modalSeen");
    if (e.toElement == null && !modalSeen) {
      document.documentElement.classList.add("mouse-out");
    }
  });

  console.log("hello");
  console.log(sessionStorage.getItem("modalSeen"));

  $("#close-modal").click((e) => {
    e.preventDefault();
    document.documentElement.classList.remove("mouse-out");
    sessionStorage.setItem("modalSeen", true);
  });
});
