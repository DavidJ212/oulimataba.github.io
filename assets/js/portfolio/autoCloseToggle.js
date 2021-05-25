function autoCloseToggle() {
  // Play initial animations on page load.
  window.addEventListener("DOMContentLoaded", function () {
    window.setTimeout(function () {
      const toggle = document.getElementsByClassName("toggle");
      toggle[toggle.length - 1].click();
    }, 3500);
  });
}

autoCloseToggle();
