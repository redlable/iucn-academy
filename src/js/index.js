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

  $('.comment-item__actions--comment').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.comment-item__container').find('.collapsed-comments').slideDown();
  });

  $('.comment-item__collapse-comments').on('click', function() {
    $(this).closest('.collapsed-comments').slideUp();
  });

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

  $('.feed-link').on('click', function() {
    $body.addClass('open-feed');
    window.scrollTo({ top: 0 });
  });

  $('.show-filter').on('click', function(e) {
    e.preventDefault();
    $body.addClass('open-filter');
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
    }
  });
}(jQuery));
