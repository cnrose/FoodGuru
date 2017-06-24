$(document).ready(function(){

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