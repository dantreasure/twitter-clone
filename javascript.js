//  Global Variables  //

var tweetReady = false;
var dashboardTweetButton = $('.dashboard-tweet-button');

// Character counting function for dashboard tweet controls  //
function countChar(val) {
    //  Define variables used  //
    var charCount = $('#char-count');
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
        // tv.tweetContent = $('textarea.tweet-compose').val();
        if (tweetReady){
            var tv = new TweetView(
                {
                    model: new Tweet({
                    avatar: 'https://si0.twimg.com/profile_images/1482831577/vendetta_headshot.jpg',
                    fullName: $('#myName').html(),
                    userName: '@dantreasure',
                    tweetContent: $('textarea.tweet-compose').val(),
                    numRetweets: '0',
                    numFavorites: '0',
                    favoritees: '',
                    time: '12:00am',
                })
              }
            );
            tv.render();};
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

// Backbone  //
var Tweet = Backbone.Model.extend({
  defaults: {
    avatar: '',
    fullName: '',
    userName: '',
    tweetContent: '',
    numRetweets: '',
    numFavorites: '',
    favoritees: '',
    time: '',
  }
});

var TweetView = Backbone.View.extend({
  el: '.tweets',
  template: _.template($('#single-tweet-template').html()),
  render: function() {
    this.$el.prepend(this.template(this.model.toJSON()));
  }
});