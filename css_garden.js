window.addEventListener('mousemove', (event) => {
  // console.log(`${event.pageX},${event.pageY}`)
  console.log(parseInt($('.extra2').css('top')));
  if (parseInt(event.pageY) < 1300 && parseInt(event.pageX) < 1800) {
    $('.extra2').css({
      top: `${event.pageY}px`,
      left: `${event.pageX}px`
    })
  }
})

$('.extra3').append(`<span>Welcome to zen-garden</span><span>Enjoy the RhaPsoDy</span> `)
$('.extra3').on('click', function () {
  $('#page-wrapper').fadeIn(3000)
  $('.extra3').fadeOut(1000)
  $('.extra1').css('display', 'block')

  setTimeout(() => {
    $('.extra2').fadeIn()
    $('.extra4').fadeIn()
  }, 2000);
})

let toggle = true
$('.extra4').text('show')
$('.extra4').on('click', function () {
  if (toggle) {
    $('.extra4').text('hide')
    $('.extra1').fadeOut(2000)
    $('.extra2').fadeOut(2000)
    $('*').css('color', 'wheat')
    toggle = !toggle
  }
  else {
    $('.extra4').text('show')
    $('*').css('color', '')
    $('.extra1').fadeIn(2000)
    $('.extra2').fadeIn(2000)
    toggle = !toggle
  }
})