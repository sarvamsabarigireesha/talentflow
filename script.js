// Simple tab switching for demo
const navLinks = document.querySelectorAll('.nav-links a');
const portalSections = document.querySelectorAll('.portal');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // prevent default anchor behavior
    e.preventDefault();

    // remove active class from all links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    portalSections.forEach(sec => sec.classList.remove('active'));

    // add active to clicked link
    this.classList.add('active');

    // show corresponding portal section
    const targetId = this.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});