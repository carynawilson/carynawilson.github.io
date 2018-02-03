//Name is centered and when scroll down, name scrolls up
//after a few scrolls background image changes 3x
//Third down the page, my name && vision statement changes to Chinese characters; another third it changes to Spanish
//click on name and website changes all of the big text to Spanish + change background image to me in DR
//One page layout. When click nav-a items it sends you to different sections of the page
//
$('.first-name').hover(function () {
    $('.h1-name').addClass('hover');
    $('.first-name').html('Karina ');

}, function() {
    $('.h1-name').removeClass('hover');
    $('.first-name').html('Caryn ');
    
})

$('.last-name').hover(function () {
    $('.h1-name').addClass('hover');
    $('.first-name').html('卫 ');
    $('.last-name').html('巧巧');
    $('.kanye').html('')
   
    console.log('it worked')
}, function() {
    console.log('it rocks')
    $('.h1-name').removeClass('hover');
    $('.first-name').html('Caryn ');
    $('.last-name').html('Wilson');
    $('.kanye').html('A.')
})

$('#contact-footer').focus(function (){

})
// $('h1').animate({
//     'width': '500px',
//     'height': '80px'
//   }, 2000);

$('body').scroll(function () {
    $('body').html
})