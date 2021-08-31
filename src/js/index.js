import 'popper.js'
import 'bootstrap'
import 'bootstrap-select'

(function($) {
  'use strict';

  $.resizeAction = function(conditionCallback, callback) {
    var ready = true;

    $(window).on('resize', function() {
      if (conditionCallback.call(this)) {
        if (ready) {
          callback.call(this, ready);
          ready = !ready;
        }
      }
      else {
        if (!ready) {
          callback.call(this, ready);
          ready = !ready;
        }
      }
    });
  };

  const $body = $('body');

  $('.view-style a').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('line')) {
      $(this).closest('.view').addClass('style-line');
    } else {
      $(this).closest('.view').removeClass('style-line');
    }
  });

  $('.mobile-menu-btn').on('click', function() {
    $body.toggleClass('menu-open');
    $('.mobile-header-wrapper').slideToggle();
  });

  $('.show-filter').on('click', function(e) {
    e.preventDefault();
    $body.addClass('open-filter');
    window.scrollTo({ top: 0 });
    $('#catalog-filter').fadeIn();
  });

  $('.close-btn').on('click', function() {
    if ($body.hasClass('open-filter')) {
      $('#catalog-filter').fadeOut();
    }

    $body.removeClass('open-feed open-filter');
  });

  $.resizeAction(function() {
    return window.innerWidth > 991
  }, function(isTrue) {
    if (isTrue) {
      $('#catalog-filter').removeAttr('style');
      $body.removeClass('open-filter')
    }
  });

  $('.teaser__slider').each(function() {
    $(this).slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fi fi-rr-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fi fi-rr-angle-right"></i></button>',
    });
  });

}(jQuery));
