// Event pada saat link di klik
$('.page').on('click', function(e){

  // Ambil isi href
  var href = $(this).attr('href');

  // tangkap elemen ybs
  var elemenHref = $(href);

  // pindahkan scroll
  $('html, body').animate({
    scrollTop: elemenHref.offset().top - 50
  }, 1250, 'swing');

  e.preventDefault();

});


// Parallax

// About
$(window).on('load', function(){
  $('.pKiri').addClass('pmuncul');
  $('.pKanan').addClass('pmuncul');
});

$(window).scroll(function(){
  var wscroll = $(this).scrollTop();

  // jumbotron

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wscroll/4 +'%)'
  });

  $('.jumbotron h2').css({
    'transform' : 'translate(0px, '+ wscroll/2 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
  });

  // Portfolio
  //Untuk top - ketinggian yang di inginkan / jika ketinggian yang di tentukan telah tercapai maka akan tampil gambarnya
  if(wscroll > $('.portfolio').offset().top - 250){
    $('.portfolio .thumbnail').each(function(i){
      setTimeout(function(){
          $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i+1));
    });

  }


});
