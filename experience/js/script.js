$(function () {
  /**Define nav variables */
  $nav = $("nav");
  $replace = $(".replace");
  $height = $nav.height();
  $sticky = $nav.offset().top + $height/1.3;

  /**Sticky nav scrolling */
  $(window).on("scroll load", function () {
    $window = $(window).scrollTop();
    $menu = $('.menu').height();
    $bg = $('.nav-bg');
    $blur = $('.bgblur');
    if ($window >= $sticky) {
      $nav.addClass("pinned");
      $bg.addClass("pinned");
      $blur.css('height', $menu)
      $replace.css("height", $height + 60);
    } else {
      $nav.removeClass();
      $bg.removeClass("pinned");
      $replace.css("height", 0);
      $blur.css('height', 0)
    }
  });

  /**Horizontal scroll progress*/
  $(window).scroll(function () {
    $docHeight = $(document).height();
    $winHeight = $(window).height();
    $scroll = $(".scroll");
    $scrollPercent = $(window).scrollTop() / ($docHeight - $winHeight);
    $scroll.css("transform", "scaleX(" + $scrollPercent + ")");
  });
});

/**Mouseover events */
$(".examples").mouseover(function (e) {
  $button = $(this);
  $url = "https://dribbble.com/shots/";
  $example = $(".example-toggle");
  $app = "";
  $html = "";
  $new = $(this).attr("data-example");

  $(".examples").removeClass("decorated");
  $button.addClass("decorated");

  switch ($new) {
    case "keyvue":
      $html = `<video src="./videos/key_chat.mp4" playsinline muted autoplay loop></video>\
      <a href="https://dribbble.com/shots/14953087-KeyVue-chat" target="_blank" class="credits dribbble"><i class="abs arrow-right fas fa-chevron-right"></i><i class="fas fa-basketball-ball brand dribbble"></i><h6>KeyVue Chat</h6></span></a>`;
      append();
      return;
    case "corporate-messenger":
      $app = "Corporate Messenger";
      $url += "10724462-Corporate-messenger";
      break;
    case "startmatcher":
      $app = "Startmatcher Communication App";
      $url += "7086922-Startmatcher-Communication-App";
      break;
    case "stocklabs":
      $app = "Stocklabs Collaboration";
      $url += "12575677-Introducing-Stocklabs-Collaboration";
  }
  $html = `<img src="./images/eg-${$new}.png" alt="">\
  <a href="${$url}" target="_blank" class="credits dribbble"><i class="abs arrow-right fas fa-chevron-right"></i><i class="fas fa-basketball-ball brand dribbble"></i><h6>${$app}</h6></span></a>`;

  append();

  function append() {
    if (!$button.hasClass("selected")) {
      $example.fadeOut("fast", function () {
        $example.html($html);
        $example.fadeIn("fast", function () {
          $(".examples").removeClass("selected");
          $button.addClass("selected");
        });
      });
    }
  }
});
