	var eatMe = $("#searchTerm").text();
	
	var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=500&titles=" + eatMe +"&format=json";


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
    }
} );

