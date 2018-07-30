$('#menu').on('click', () => {
    if ($('nav').hasClass('flexed')) {
      $('nav').removeClass('flexed');
    } else {
      $('nav').addClass('flexed');
    }
  });