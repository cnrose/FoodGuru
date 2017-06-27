$(document).ready(function() {

<<<<<<< HEAD
	var eatMe = $("#searchTerm").text();

	var queryURL = "https:www.googleapis.com/youtube/v3/search?&part=snippet&q=quinoa&key=AIzaSyCqtkizKR5dTv4AP90rXLCGNG9-LLIrG_Y";

	$.ajax ({
	    url: queryURL,
	    method: "GET"
	}).done(function(response){

		"kind": "youtube#thumbnailSetResponse",
 	 	"etag": etag,
  		"items": [
    		thumbnail resource
  		]

	    for (var i = 0; i < response.items.length; i++) {
	      var item = response.items[i];
	      var videoTitle = item.snippet.title;
	      var videoId = item.id.videoId;
	      var imageURL = item.snippet.thumbnails;
	      var videoThumb = '<img id="thumb" src=" '+ imageURL +' " alt="No Image Available.">';

	      console.log(item.snippet.title + " " + item.id.videoId);

	      var videoUrl = "https://www.youtube.com/embed/" + videoId;

	      $("#video" + i).attr("src", videoThumb);

	    };

		  // $('.carousel').carousel();
	  
	});  
	
	var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=500&titles=" + eatMe + "&format=json";


    function wikiWiki() {

		wikiURL += '?' + $.param({
		   'action' : 'query',
		   'search' : $("#searchTerm"),
		   'prop'  : 'info',
		   'format' : 'json',
		   'limit' : 10
		});

	};

	$("#searchTerm").empty();

 	$.ajax( {
	    url: wikiURL,
	    dataType: 'jsonp',
	    success: function(response) {
	       console.log(response);

	        for (var prop in response.query.pages) {
		       	console.log(prop);

		       	var result = response.query.pages[prop];
		       	console.log(result);

		       	$("#searchResults").html(result.extract);
        	};

    	};

 	});


    var config = {
        apiKey: "AIzaSyAIezGr773BQU-TDtuupeccp2gL_OFkuZ4",
        authDomain: "food-guru-33241.firebaseapp.com",
        databaseURL: "https://food-guru-33241.firebaseio.com",
        projectId: "food-guru-33241",
        storageBucket: "food-guru-33241.appspot.com",
        messagingSenderId: "810775232856"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var ingredientName = "";

    $("#add-ingredient-btn").on("click", function(event) {
        event.preventDefault();
        ingredientName = $("#ingredient-name-input").val().trim();
        database.ref().push({
            name: ingredientName,
        });

        database.ref().on("child_added", function(childSnapshot, prevChildKey) {
            console.log(childSnapshot.val());
            var ingredientName = childSnapshot.val().name;
            console.log(ingredientName);
        
            $("#ingredient-name-input").html(childSnapshot.val().ingredientName);

        });
    });

});

=======

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
>>>>>>> a5b5b8b6fe15bd1734caba07d86500d779570231
