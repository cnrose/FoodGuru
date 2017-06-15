function dirtyTrail(searchString) {
	var trailURL = "https://trailapi-trailapi.p.mashape.com/?";url += '?' + $.param({'api-key': "IjC5nh65gVmshOq8obE7EgpkGZzyp1qHyQujsnUDDczZBYs4w8"});
	var nothing = "nothing"
	$.ajax({
		url: trailURL,
		method: 'GET',
	}).done(function(response){
		console.log(response.docs.keywords);
	});
}