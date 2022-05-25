const listElement = document.getElementById('list-menu');
const addElement = document.getElementById('add-menu');
const contactElement = document.getElementById('contact-menu');

function showSection(e, sectionId) {
  e.preventDefault();
  const target = document.getElementById(sectionId);
  const targetClasses = target.classList;

  // check if element has show classs
  if (!targetClasses.contains('show'))
  {
    targetClasses.add('show');
  }

  // hide all other section

  // targetClasses.toggle('show');
  // targetClasses.toggle("hide");
  const activeSection = document.getElementsByClassName("show");


  for (let i = 0; i < activeSection.length; i = i + 1) {
    const v = activeSection[i].classList;
    if (!v.contains('hide')) {
      const classes = activeSection[i].classList;
      classes.remove("show");
      classes.add("hide");
    }

  }
}



listElement.addEventListener('click', (e) => {
  showSection(e,'lists');
});
addElement.addEventListener('click', (e) => { 
  showSection(e, 'add-book');
});
contactElement.addEventListener('click', (e) => { 
  showSection(e, 'contact-section')
});