$(document).ready(function () {
  function clignotement() {
    $("div").fadeOut().fadeIn();
  }
  setInterval(clignotement, 1000);
});
