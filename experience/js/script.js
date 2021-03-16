$(function () {
  
  /**Define nav variables */
  $nav = $("nav");
  $replace = $(".replace");
  $height = $nav.height();
  $sticky = $nav.offset().top + $height/1.5;

  /**Sticky nav scrolling */
  $(window).on("scroll load", function () {
    $window = $(window).scrollTop();
    $menu = $(".menu").height();
    $bg = $(".nav-bg");
    $blur = $(".bgblur");
    if ($window >= $sticky) {
      $nav.addClass("pinned");
      $bg.addClass("pinned");
      $blur.css("height", $menu);
      $replace.css("height", $height + 60);
    } else {
      $nav.removeClass();
      $bg.removeClass("pinned");
      $replace.css("height", 0);
      $blur.css("height", 0);
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

/**Open Links Litty */

//Note to self

/**Create unique case for external link
 * For images and videos id = filename
 * Differentiate between formats i.e. jpg and png
 */

function openme(data) {
  $this = data;
  $url = "";
  $file = "";
  $type = "";
  $obj = $(data).attr("data-link");
  switch ($obj) {
    case "rework":
      $url =
        "https://www.figma.com/file/jv3r2zX2Mk4JsHOz34mdYU/SeaTalk-Experience?node-id=0%3A1";
      window.open($url);
      return;
      break;
    default:
      $type = $($this).attr("data-type");
      $file = $($this).attr("id");
      switch ($type) {
        case "image/jpg":
          $url = `../images/${$file}.jpg`;
          break;
        case "image/png":
          $url = `../images/${$file}.png`;
          break;
        case "video/mp4":
          $url = `../videos/${$file}.mp4`;
          break;
      }
      break;
  }
  var lightbox = lity($url);
}

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
      $html = `<video class="clickable" onclick="openme(this)" id="keychat" data-type="video/mp4" id="${$new}" src="./videos/keychat.mp4" playsinline muted autoplay loop></video>\
      <a href="https://dribbble.com/shots/14953087-KeyVue-chat" target="_blank" class="credits dribbble"><i class="abs arrow-right fas fa-chevron-right"></i><i class="fas fa-basketball-ball brand dribbble"></i><h6>KeyVue Chat</h6></span></a>`;
      append();
      return;
    case "eg-corporate-messenger":
      $app = "Corporate Messenger";
      $url += "10724462-Corporate-messenger";
      break;
    case "eg-startmatcher":
      $app = "Startmatcher Communication App";
      $url += "7086922-Startmatcher-Communication-App";
      break;
    case "eg-stocklabs":
      $app = "Stocklabs Collaboration";
      $url += "12575677-Introducing-Stocklabs-Collaboration";
  }
  $html = `<img class="clickable" id="${$new}" onclick="openme(this)" data-type="image/png" src="./images/${$new}.png" alt="">\
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

/**Examples change */
function swap(what) {
  //Note to self

  /** id of media = data-example of hovering element
   *  .button-toggle container data-section="<groupname>"
   *  .contain-media container id = "<groupname>"
   */

  //Get parent
  $papa = $(what).parent().attr("data-section");

  //Only remove deorated class within parent and add to hovered item
  $("[data-section=" + $papa + "]" + " button").removeClass("decorated");
  $(what).addClass("decorated");
  $what = $(what).attr("data-example");
  console.log("." + $papa + " .contain-media .preview");

  //Show and hide media
  $("#" + $papa + ".contain-media .preview")
    .css("opacity", 0)
    .css("pointer-events", "none");
  $("#" + $what)
    .css("opacity", 1)
    .css("pointer-events", "all");
}
