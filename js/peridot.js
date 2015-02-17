(function () {

  /**
   * Buckets
   */
  var buckets = document.querySelectorAll('.bucket'),
      height = 0;

  for (var i = 0; i < buckets.length; i++) {
    var bucketHeight = buckets[i].offsetHeight;
    if (bucketHeight > height) {
      height = bucketHeight;
    }
  }

  for (var i = 0; i < buckets.length; i++) {
    buckets[i].style.height = height + 'px';
  }

  /**
   * Responsive navigation
   */
  $('<div />', {
    class: 'dropdown'
  }).appendTo('nav');

  var dropdown = $('div.dropdown');

  $('<button />', {
      'class': 'btn btn-default dropdown-toggle',
      'type': 'button',
      'id': 'nav-button',
      'data-toggle': 'dropdown'
  }).html('Go to... <span class="caret"></span>').appendTo(dropdown);

  $('<ul />', {
    class: 'dropdown-menu',
    role: 'menu'
  }).appendTo(dropdown);

  var path = window.location.pathname; 

  $('nav a').each(function() {
    var el = $(this),
        menu = el.closest('.dropdown-menu'),
        href = el.attr('href'),
        text = (menu.length) ? '- ' + el.text() : el.text();

    if (path == href) {
      var active = (menu.length) ? menu.prev('a') : el;
      active.addClass('active');
    }

    $('<li><a role="menu-item" href="' + href + '">' + text + '</a></li>')
      .appendTo(dropdown.find('.dropdown-menu'));
  });

})();