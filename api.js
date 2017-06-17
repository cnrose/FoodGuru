<<<<<<< HEAD
function dirtyBrew(searchString) {
	var brewURL = "http://api.brewerydb.com/v2/search?q=" + beerType + "&type=beer&key=7c2d81a2f0ae659b839207d3897e9ac1";
	
	$.ajax({
		url: brewURL,
		method: 'GET',
	}).done(function(data){
		console.log();
=======
function dirtyTrail(searchString) {
	var trailURL = "https://trailapi-trailapi.p.mashape.com/?";url += '?' + $.param({'api-key': "IjC5nh65gVmshOq8obE7EgpkGZzyp1qHyQujsnUDDczZBYs4w8"});

	$.ajax({
		url: trailURL,
		method: 'GET',
	}).done(function(response){
		console.log(response.docs.keywords);
>>>>>>> b5505a00c90d006aba278901f865b4b0e15c05ae
	});
}