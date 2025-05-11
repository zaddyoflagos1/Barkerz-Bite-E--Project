(function ($) {
  ("use strict");

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0.9) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Fixed Navbar
  $(".fixed-top").css("top", $(".top-bar").height());
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".fixed-top").addClass("bg-dark").css("top", 0);
    } else {
      $(".fixed-top").removeClass("bg-dark").css("top", $(".top-bar").height());
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter

  let valueDisplays = document.querySelectorAll(".counter");
  let interval = 1500;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-toggle"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
})(jQuery);
