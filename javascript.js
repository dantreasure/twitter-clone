function tweetClick(val) {
    $(val).css('background-color', 'red'); 
};

function countChar(val) {
    var len = val.value.length;
    $('#char-count').text(140 - len);
    if (len < 10){
        $('#char-count').css('color', 'red');
    }
    else if (len > 140){
        $('#char-count').css('color', 'red');
    }
    else {
        $('#char-count').css('color', 'black');
        $('.dashboard-tweet-button').addClass('.tweet-ready');
    };
};
    

$(document).ready(function(){
    //Hide the dashboard's tweet box & controls on load
    $('.dashboard .tweet-controls').toggle();
    $('.main .stream .tweet .content .reply').toggle();
    //Double tweet-compose height on click
    $('textarea.tweet-compose').click(function(){
        $(this).animate({
            height: "5em",
        }, 0, function() {});

        $('.tweet-controls').show();      
    });
    //Normalize height of any tweet-compose on click in .main
    $('.main').click(function(){
         $('textarea.tweet-compose').animate({
            height: "2.5em",
          }, 0, function() {});
         $('.tweet-controls').hide();
         
    });


});

    