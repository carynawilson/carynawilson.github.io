// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user

$(document).ready(function () {
    var clickMe = $('#click-me');

    clickMe.click(inputStr);

    function inputStr() {
        var currentAge = $('#age').val();
        var maxAge = $('#max-age').val();
        var drink = $('#item').val();
        var amount = $('#num-per-day').val();
        var total = (maxAge - currentAge) * (amount * 365);
        var message = 'You will drink ' + total + ' more ' + drink + ' in your lifetime.';
        $('h3').html(message);

    }


});