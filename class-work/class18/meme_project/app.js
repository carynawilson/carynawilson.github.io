$('.meme-form').submit(function(event) {
    event.preventDefault();
$('.video-wrapper').empty();

var userInput = $('.meme-input').val();
//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userInput + "+shiba+inu&api_key=809nVl8pKqQtHFTOKsE3UWgJMj9qLV7y&limit=6");
xhr.done(function (data){
   var memes = data.data;
   memes.forEach(function(meme){
var memeUrl = meme.images.looping.mp4;

$('.video-wrapper').append('<video src="' + memeUrl + '"autoplay></video>')
   })
});
});