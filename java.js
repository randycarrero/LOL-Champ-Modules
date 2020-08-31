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

//* tool tip code //
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
      };

      $(function() {
        $('select').selectric();
      });

 $(function() {
        $('select').selectric();
      $.get('Champs.html', function(data) {
        $('#ajax').append(data).selectric();
      });
    });

//? file creation code //
let saveFile = () => {
    	
  // Get the data from each element on the form.
const name = document.getElementById('modulename');
const modulename = document.getElementById('modulename');
  const Champ = document.getElementById('ajax');
  const AbilityQ = document.getElementById('Q');
  const AbilityW = document.getElementById('W');
  const AbilityE = document.getElementById('E');
  const AbilityR = document.getElementById('R');

  
  // This variable stores all the data.
  let data = 
      '\r FileName: ' + name.value + ' \r\n ' + 
      'module name: ' +modulename.value + 'Module' + ' \r\n ' +
      'Champion: ' +Champ.value + ' \r\n ' + 
      'Ability-Q: ' + AbilityQ.value + ' \r\n ' + 
      'Ability-W: ' + AbilityW.value + ' \r\n ' +
      'Ability-E: ' + AbilityE.value + ' \r\n ' +
      'Ability-R: ' + AbilityR.value;
  
      var blob = new Blob([data], { type: 'text/plain' });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.setAttribute("download", $('#modulename').val() + 'module.txt');
      a.click(); 
}

function EnableDisable(modulename) {
  //Reference the Button.
  var btnSubmit = document.getElementById("downloadfile");

  //Verify the TextBox value.
  if (modulename.value.trim() != "") {
      //Enable the TextBox when TextBox has value.
      downloadfile.disabled = false;
  } else {
      //Disable the TextBox when TextBox is empty.
      downloadfile.disabled = true;
  }
};