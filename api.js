
	var wikiURL = "https://en.wikipedia.org/w/api.php";
	wikiURL += '?' + $.param({
    'action' : 'opensearch',
    'search' : 'your_search_term',
    'prop'  : 'revisions',
    'rvprop' : 'content',
    'format' : 'json',
    'limit' : 10
});

 $.ajax( {
    url: wikiURL,
    dataType: 'jsonp',
    success: function(data) {
       console.log(data);
    }
} );