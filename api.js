$(document).ready(function() {
  //initializing firebase
  var config = {
        apiKey: "AIzaSyAIezGr773BQU-TDtuupeccp2gL_OFkuZ4",
        authDomain: "food-guru-33241.firebaseapp.com",
        databaseURL: "https://food-guru-33241.firebaseio.com",
        projectId: "food-guru-33241",
        storageBucket: "food-guru-33241.appspot.com",
        messagingSenderId: "810775232856"
    };

   firebase.initializeApp(config);

    //universal variables
    var database = firebase.database();
    var ingredientName = "";
  

    var eatMe;

 // Test the input and retrieve results
  $("#add-ingredient-btn").on("click", function(){
    event.preventDefault();
    eatMe = $("#ingredient-name-input").val().trim();
    $("#searchTitle").html("<h1>" + eatMe + "</h1>");
   if(searchValidation(eatMe)){
      showResults();
      backgroundChange();
      youTubeCall();
      wikiCall();
      recordSearchTerm(eatMe);
    } else {
      $("#ingredient-name-input").val("Please use letters!");   
    }

  });

 //change background picture function
 function backgroundChange() {
    $("header").css({"background-repeat": 'repeat' });
    $("header").css({"background-size": 'auto' });
    $("header").css("background-image", 'url("http://i.imgur.com/8bGVvQl.png")');
    $("body").css({"background-repeat": 'repeat' });
    $("body").css({"background-size": 'auto' });
    $("body").css("background-image", 'url("http://i.imgur.com/8bGVvQl.png")');
  }
  //display hide and show divs
  function showResults() {
    $("#howTo").hide();
    $("#searchResults").show();
    $("#videoResults").show();
    $("#searchTitle").show();
  }

 //YouTube API Call & iFrame creation
  function youTubeCall() {
      
   $("#videoResults").empty();

   var queryURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&q=" + eatMe + "+recipe&key=AIzaSyCqtkizKR5dTv4AP90rXLCGNG9-LLIrG_Y";
 
    $.ajax ({
      url: queryURL,
      method: "GET"
    }).done(function(response){
      for (var i = 0; i < response.items.length; i++) {
      
        var item = response.items[i];
        var videoId = item.id.videoId;
        var videoUrl = "https://www.youtube.com/embed/" + videoId;
        var videoNum = "video" + i;
        $("#video" + i).attr("src", videoUrl);
        
       //iFrame creation and appending to results div
        var videoPlayer = $("<iframe class='video w100' width='640' height='360' src='#' frameborder='0' allowfullscreen style='margin:20px'>");
        
       videoPlayer.attr("id", videoNum);

       videoPlayer.attr("src", videoUrl);
        
       $("#videoResults").append(videoPlayer);
     };
    
   });  
 };

 //mediaWiki call & results display
  function wikiCall() {
    var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=500&titles=" + eatMe + "&format=json";
    function wikiWiki() {
      wikiURL += '?' + $.param({
        'action' : 'query',
        'search' : $("#ingredient-name-input"),
        'prop'  : 'info',
        'format' : 'json',
        'limit' : 10
      });
    };

   $.ajax({
      url: wikiURL,
      dataType: 'jsonp',
      success: function(response) {
        for (var prop in response.query.pages) {
          var result = response.query.pages[prop];
          $("#searchResults").html(result.extract);
        };
      }
    });
  }
  
 //logging search term into Firebase
  function recordSearchTerm(ingredientName) {
   database.ref().push({
      name: ingredientName
    });

   database.ref().on("child_added", function(childSnapshot, prevChildKey) {
      var ingredientName = childSnapshot.val().name;
      $("#ingredient-name-input").html(childSnapshot.val().ingredientName);
    });
  };

 // Validate that we have only 1 alpha character word and it is less than 30 characters long.
  function searchValidation(searchText) {
      var letters = /^[A-Za-z]+$/;
      if(searchText.match(letters) && searchText.length < 30){
        return true;
      } else {
        return false;
      }
  };
});



