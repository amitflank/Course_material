document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.querySelector("#web-dev-container");
  
    fetch("../navbar/web_dev.html")
      .then(response => response.text())
      .then(html => {
        navbarContainer.innerHTML = html;
        initializeDropdowns("web-dev-container");
      })
      .catch(err => console.warn("Something went wrong with loading the navbar:", err));
  });
