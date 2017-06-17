function dirtyBrew(searchString) {
	var brewURL = "http://api.brewerydb.com/v2/search?q=" + beerType + "&type=beer&key=7c2d81a2f0ae659b839207d3897e9ac1";
	
	$.ajax({
		url: brewURL,
		method: 'GET',
	}).done(function(data){
		console.log();
	});
}