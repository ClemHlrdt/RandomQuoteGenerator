// Random Quote Generator
var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

$(document).ready(function() {
  //$.getJSON(url, getQuote, 'jsonp');
  /* Hide twitter share button by default */

  $('#twitter-btn').hide();
});



$('#quoteBtn').click(function(event) {
  $.getJSON(url, getQuote, 'jsonp');
});


/*                                                          Function to call a quote                                                                                                        */
var getQuote = function(data) {

  quote = (data.quoteText);
  author = (data.quoteAuthor);
  quoteTwitter = quote + " - " + author;
  console.log(author + " said " + quote);

//  If there's no Author then...
  if (data.quoteAuthor === "") {
      $("#author").hide('slow');
      $("#author").show('slow', function() {
        $(this).text("Unknown");
      });
      $("#author").text("Unknown");
      var quoteAuthorVar = ("Unknown");
      console.log("The Author: " + quoteAuthorVar);
      //$('#twitter-btn').fadeIn('slow');
//    If the author is known
  } else {
    //$("#quote").fadeOut('slow').hide('slow'); //Hide

    $("#quote").removeClass("rotateIn");
    $("#author").removeClass("rotateIn");
    $('#twitter-btn').removeClass("rubberBand");
    $("#quote").show('slow').text("\"" + quote + "\"").addClass('animated rotateIn').css("font-family", 'Montserrat');
    $("#author").show('slow').text(author).addClass('animated rotateIn');
    $('#twitter-btn').show().addClass('animated rubberBand');
  }
};

/* Function to open new quote and post it on Twitter */
function tweetIt () {
  var tweetUrl = 'https://twitter.com/share?text=' + quoteTwitter;
  window.open(tweetUrl);
}
