document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.querySelector("#navbar-container");

  fetch("../navbar/navbar.html")
    .then(response => response.text())
    .then(html => {
      navbarContainer.innerHTML = html;
      initializeDropdowns("navbar-container");
    })
    .catch(err => console.warn("Something went wrong with loading the navbar:", err));
});

