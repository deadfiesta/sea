$(function () {
  $(window).scroll(function () {
    var $docHeight = $(document).height();
    var $winHeight = $(window).height();
    var $scroll = $(".scroll");
    let $scrollPercent = $(window).scrollTop() / ($docHeight - $winHeight);
    $scroll.css("transform", "scaleX(" + $scrollPercent + ")");
  });
});

$('.examples').mouseover(function (e) {
  $button = $(this);
  $url = 'https://dribbble.com/shots/';
  $example = $('.example-toggle');
  $app = '';
  $html = '';
  $new = $(this).attr('data-example')

  $('.examples').removeClass('decorated')
  $button.addClass('decorated')

  switch ($new) {
    case 'keyvue':
      $html = `<video src="./videos/key_chat.mp4" playsinline muted autoplay loop></video>\
      <a href="https://dribbble.com/shots/14953087-KeyVue-chat" target="_blank" class="credits dribbble"><i class="abs arrow-right fas fa-chevron-right"></i><i class="fas fa-basketball-ball brand dribbble"></i><h6>KeyVue Chat</h6></span></a>`;
      append();
      return;
    case 'corporate-messenger':
      $app = 'Corporate Messenger'
      $url += '10724462-Corporate-messenger';
      break;
    case 'startmatcher':
      $app = 'Startmatcher Communication App'
      $url += '7086922-Startmatcher-Communication-App';
      break;
    case 'stocklabs':
      $app = 'Stocklabs Collaboration'
      $url += '12575677-Introducing-Stocklabs-Collaboration';
  }
  $html = `<img src="./images/eg-${$new}.png" alt="">\
  <a href="${$url}" target="_blank" class="credits dribbble"><i class="abs arrow-right fas fa-chevron-right"></i><i class="fas fa-basketball-ball brand dribbble"></i><h6>${$app}</h6></span></a>`;

  append();

  function append() {
    if (!$button.hasClass('selected')) {
      $example.fadeOut("fast", function () {
        $example.html($html)
        $example.fadeIn("fast", function () {
          $('.examples').removeClass('selected');
          $button.addClass('selected');
        });
      })
    }
  }
})