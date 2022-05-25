// Hide all sections except lists when page loads.
function showSection(e, sectionId) {
  e.preventDefault();
  const target = document.getElementById(sectionId);
  console.log(target);
  target.classList.toggle("hide");
  const activeSection = document.getElementsByClassName("show");

  for (let i = 0; i < activeSection.length; i = i + 1) {
    activeSection[i].classList.toggle("show");
  }
}
// Create a function that displays a particular section; takes section name

//
