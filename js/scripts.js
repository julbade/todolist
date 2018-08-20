//backend business logic
//construtor fx

function Places(location, landmark, timeYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeYear = timeYear;
  this.notes = notes;
}
Places.prototype.visitedCities = function() {
  return this.location;
} 

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    //Places:
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedtimeYear = $("input#new-timeYear").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlaces = new Places(inputtedLocation, inputtedLandmark, inputtedtimeYear, inputtedNotes);

    $("ul#cities").append("<li><span class='city'>" + newPlaces.visitedCities() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-timeYear").val("");
    $("input#new-notes").val("");

    $(".city").last().click(function() {
    $("#show-cities-visited").show();
    $("#show-cities-visited h2").text(newPlaces.location);
    $(".new-location").text(newPlaces.location);
    $(".new-landmark").text(newPlaces.landmark);
    $(".new-timeYear").text(newPlaces.timeYear);
    $(".new-notes").text(newPlaces.notes);

    });
  });
});
