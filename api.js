$(document).ready(function() {


  var queryURL = "https:www.googleapis.com/youtube/v3/search?&part=snippet&q=quinoa&key=AIzaSyCqtkizKR5dTv4AP90rXLCGNG9-LLIrG_Y";

  $.ajax ({
    url: queryURL,
    method: "GET"
  }).done(function(response){

    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      var videoTitle = item.snippet.title;
      var videoId = item.id.videoId;
      var imageURL = item.snippet.thumbnails.default.url;
      var videoThumb = '<pre><img id="thumb" src=" '+imageURL+' " alt="No Image Available." style="width:204px;height:128px"></pre>';

      console.log(item.snippet.title + " " + item.id.videoId);

      var videoUrl = "https://www.youtube.com/embed/" + videoId;

      $("#video" + i).attr("src", videoUrl);

    };
  
  })  

})