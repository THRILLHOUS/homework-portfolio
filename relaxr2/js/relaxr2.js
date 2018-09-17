$('.readmore, .readless, .learnmore').click(function(event) {
  event.preventDefault();
})

$(document).ready(function() {
  $('.readmore').click(function() {
    $('#show-this-on-click').slideDown(function() {
      $('.readmore').hide(function() {
        $('.readless').show();
      });
    });
  })
})

$('.readless').click(function() {
  $('#show-this-on-click').slideUp(function() {
    $('.readless').hide(function() {
      $('.readmore').show();
    })
  })
})

$('.learnmore').click(function() {
  $('#learnmoretext').slideDown(function() {
    $('.learnmore').hide();
  });
})