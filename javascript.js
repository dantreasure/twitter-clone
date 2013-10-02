var tweetReady = false;

// Character counting function for dashboard tweet controls  //
function countChar(val) {
    //  Define variables used  //
    var charCount = $('#char-count');
    var dashboardTweetButton = $('.dashboard-tweet-button');
    var len = val.value.length;
    
    charCount.text(140 - len);
    
    if (len < 1){
        tweetReady = false;
    }
    else if (len > 140) {
        tweetReady = false;
    }
    else if (len == 0){
        tweetReady = false;
    }
    else{
        tweetReady = true;
    }

    if (!tweetReady){
        charCount.css('color', 'red');
        dashboardTweetButton.removeClass('tweet-ready');
    }

    else if (tweetReady){
        charCount.css('color', 'black');
        dashboardTweetButton.addClass('tweet-ready');
        dashboardTweetButton.hover(function(){
            dashboardTweetButton.removeClass('tweet-ready');
            dashboardTweetButton.addClass('tweet-ready-hover'); 
        });
        dashboardTweetButton.mouseout(function(){
            dashboardTweetButton.addClass('tweet-ready');
        });
    };
};
    

$(document).ready(function(){
    var dashboardTweetButton = $('.dashboard-tweet-button');
    
    //  If the tweet is ready, send tweet to stream  //
    dashboardTweetButton.click(function(){
        var dashboardPic = $('#dashboard-pic');
        if (tweetReady){ 
            $('div.stream').prepend("<div class='tweet'><div class='content'><script></script><strong class='fullname'>My BFF</strong><span class='username'>@mybff</span><p class='tweet-text'>Today is an amazing day.</p><div class='tweet-actions'><ul><li><span class='icon action-reply'></span> Reply</li><li><span class='icon action-retweet'></span> Retweet</li><li><span class='icon action-favorite'></span> Favorite</li><li><span class='icon action-more'></span> More</li></ul></div><div class='stats'><div class='retweets'><p class='num-retweets'>30</p><p>RETWEETS</p></div><div class='favorites'><p class='num-favorites'>6</p><p>FAVORITES</p></div><div class='users-interact'><div><img src='https://si0.twimg.com/profile_images/378800000440426100/9e19b57a0794bc7d78b7e8c0909d0a76_normal.jpeg' /><img src='https://si0.twimg.com/profile_images/718418316/b_normal.jpg' /></div></div><div class='time>1:04 PM - 19 Sep 13</div></div><div class='reply'><img class='avatar' src='https://si0.twimg.com/profile_images/1482831577/vendetta_headshot.jpg' /><textarea class='tweet-compose' placeholder='Reply to @mybff'/></textarea></div></div></div>");    
        };
    });
   
    //  Hide the dashboard's tweet box & controls on load  //
    $('.dashboard .tweet-controls').toggle();
    $('.main .stream .tweet .content .reply').toggle();
    
    //  Double tweet-compose height on click  //
    $('textarea.tweet-compose').click(function(){
        $(this).animate({
            height: "5em",
        }, 0, function() {});

        $('.tweet-controls').show();      
    });

    //  Normalize height of any tweet-compose on click in .main  //
    $('.main').click(function(){
         $('textarea.tweet-compose').animate({
            height: "2.5em",
          }, 0, function() {});
         $('.tweet-controls').hide();
         
    });
});

    