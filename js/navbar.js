

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
      .then(response => response.text())
      .then(html => {
        const navbarContainer = document.querySelector("#navbar-container");
        navbarContainer.innerHTML = html;
      })
      .catch(err => {
        console.warn("Something went wrong with loading the navbar:", err);
      });
  });
  