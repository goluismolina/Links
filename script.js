const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    allTabs.forEach((tab) => {
      const id = tab.id;
      if (id.includes(linkId)) {
        tab.classList.add("tab-content--active");
      } else {
        tab.classList.remove("tab-content--active");
      }
    });
  });
});

    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Frontend","Frontend","Fullstack Developer"," Y Blogger"],
      typeSpeed: 90,
      backSpeed: 60,
      cursorChar: ' |',
      smartBackspace: true,
      loop: true
  });
  document.getElementById("send-email").addEventListener("click", function() {
    window.location.href = "mailto:luismolina.info@gmail.com?subject=Consulta&body=Hola, estoy interesado en tus servicios.";
  });