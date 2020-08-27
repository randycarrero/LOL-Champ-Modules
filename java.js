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
});

$(document).ready(function() {
  $('.tooltip').tooltipster();
  theme: ['tooltipster-default', 'tooltipster-default-customized']
});
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'none')
     e.style.display = 'block';
  else
     e.style.display = 'none';
}

window.onload = ()=>{
  document.getElementById("myRange").addEventListener("input", report);
  document.getElementById("W-range").addEventListener("input", report);
  document.getElementById("E-range").addEventListener("input", report);
  document.getElementById("R-range").addEventListener("input", report);  
  function report(event){
    this.nextElementSibling.querySelector("span").textContent = this.value;  
   }
      }

      $(function() {
        $('select').selectric();
      });

 $(function() {
        $('select2').selectric();
      $.get('Champs.html', function(data) {
        $('#ajax').append(data).selectric();
      });
    });