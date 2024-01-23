document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.querySelector("#navbar-container");

  fetch("../navbar.html")
    .then(response => response.text())
    .then(html => {
      navbarContainer.innerHTML = html;
      //addPageSpecificItems();
      initializeDropdowns();
    })
    .catch(err => console.warn("Something went wrong with loading the navbar:", err));
});

function addPageSpecificItems() {
  const pageSpecificLinks = document.querySelector("#page-specific-links").innerHTML;
  const navbarPageSpecificContainer = document.querySelector("#navbar-page-specific-links");
  navbarPageSpecificContainer.innerHTML = pageSpecificLinks;
}
