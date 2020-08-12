$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const userNameInput = $("input#userName").val();
    const dateOfBirthInput = $("input#dateOfBirth").val();
    const addressInput= $("input#address").val();
    const numberOfGuestsInput = $("input#numberOfGuests").val();
    const arrivalDateInput = $("input#arrivalDate").val();
    const departureDateInput = $("input#departureDate").val();

    $(".userName").text(userNameInput);
    $("dateOfBirth").text(dateOfBirthInput);
    $(".address").text(addressInput);
    $(".numberOfGuests").text(numberOfGuestsInput);
    $(".arrivalDate").text(arrivalDateInput);
    $(".departureDate").text(departureDateInput);

    $("#submit").show();

    event.preventDefault();
  });
});