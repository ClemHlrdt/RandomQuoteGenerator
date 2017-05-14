// Random Quote Generator

//URL for the random quote
var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
var quoteTwitter;
//When the document is ready, hide the twitter button
$(document).ready(function() {
  $('#twitter-btn').hide();
});


//When the user clicks on the button, the event handler makes an Ajax request
$('#quoteBtn').click(function(event) {
  $.getJSON(url, getQuote, 'jsonp');
});


// GetQuote function
var getQuote = function(data) {

  var quote = (data.quoteText); // stores the quote into a variable quote
  var author = (data.quoteAuthor); //stores the author into the author quote
  quoteTwitter = quote + " - " + author; //concatenate the quote & the author in order to send it to Twitter
  //console.log(author + " said " + quote); //Log the check if we get the quote
  console.log(quote + "\n" +author);
//  If there's no Author then...
  if (data.quoteAuthor === "") {
      $("#quote").removeClass("rotateIn"); // removes the class for quote
      $("#author").removeClass("rotateIn"); // removes the class for the author
      $('#twitter-btn').removeClass("rubberBand"); // removes the class for the twitter-btn

      $("#quote").show('slow').text("\"" + quote + "\"").addClass('animated rotateIn').css("font-family", 'Montserrat');
      /* Makes the quote appear slowly, adds the class rotateIn and font Montserrat*/
      $("#author").show('slow').text("Unknown").addClass('animated rotateIn');
      /* Adds "Unknown" to the author and adds class rotateIn*/
      $('#twitter-btn').show().addClass('animated rubberBand');
      /* makes the twitter button appear and adds a class rubberBand to it */
      var quoteAuthorVar = ("Unknown");
      console.log("The Author: " + quoteAuthorVar); //debug
      //$('#twitter-btn').fadeIn('slow');
      quoteTwitter = quote + " - " + quoteAuthorVar;
      /* Function to open new quote and post it on Twitter */
      $('#twitter-btn').click(function(){
          var tweetUrl = 'https://twitter.com/share?text=' + quoteTwitter;
          window.open(tweetUrl);
      });
//    If the author is known
  } else {
    $("#quote").removeClass("rotateIn");  // removes the class for quote
    $("#author").removeClass("rotateIn"); // removes the class for the author
    $('#twitter-btn').removeClass("rubberBand");// removes the class for the twitter-btn

    $("#quote").show('slow').text("\"" + quote + "\"").addClass('animated rotateIn').css("font-family", 'Montserrat');
    /* Makes the quote appear slowly, adds the class rotateIn and font Montserrat*/
    $("#author").show('slow').text(author).addClass('animated rotateIn');
    /* Makes the author appear slowly, adds the class rotateIn*/
    $('#twitter-btn').show().addClass('animated rubberBand');
    /* Adds "Unknown" to the author and adds class rotateIn*/

    /* Function to open new quote and post it on Twitter */
    $('#twitter-btn').click(function(){
        var tweetUrl = 'https://twitter.com/share?text=' + quoteTwitter;
        window.open(tweetUrl);
    });
  }
};
