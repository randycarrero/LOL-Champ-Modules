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
//  Start of exporting code *//
$("#export-file").click(() =>
{

    $("#export").click();

    var blob = new Blob([$("#pre-code").val()], { type: 'text/plain' });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.setAttribute("download", $('#project-name').val() + '.CS');
    a.click();
})    
//  End of exporting code *//    
});

