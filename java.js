$(document).ready(() =>
{
// * start Model Code * //
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}   
//* end of Modal Code *//
    //* Select search code *//

$('.js-data-example-ajax').select2({
  ajax: {
    url: 'Champion.json',
    dataType: 'json',
    minimumResultsForSearch: -1,
    // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
  }
});
});

