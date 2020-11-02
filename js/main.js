// For navbar scroll animations
$('a[href^="#"]').on('click', function (e) {
   e.preventDefault();
   let position = $($(this).attr('href')).offset().top;
   $('html, body').animate({
         scrollTop: position,
      }, 500, 'swing',
   );
 })