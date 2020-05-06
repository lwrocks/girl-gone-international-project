document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

// Hamburger Menu
function myFunction() {
  let x = document.getElementById("myNavUl");
  if (x.className === "nav-ul") {
    x.className += " responsive"; 
  } else {
    x.className = "nav-ul";
  }
}
