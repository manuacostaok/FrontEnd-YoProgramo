
$('.float-label').find('input').keyup(function(e) {
    var $i = $(this),
        $label = $i.prev('label');
    if( $i.val() !== '' ) {
      $label.addClass('show');
    } else {
      $label.removeClass('show');
    }
  });
  
  // $('.option').click(function() {
  //   var $b = $(this),
  //       id = $b.attr('id');
  //   $('.option').removeClass('active');
  //   $b.addClass('active');
  //   $('form').hide();
  //   $('.'+id).show();
  // });