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

// $('body').scroll(function () {
//     $('body').html
// })