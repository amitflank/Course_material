document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.querySelector("#lit-container");
  
    fetch("/navbar/dig-lit.html")
      .then(response => response.text())
      .then(html => {
        navbarContainer.innerHTML = html;
        initializeDropdowns("lit-container");
      })
      .catch(err => console.warn("Something went wrong with loading the navbar:", err));
  });
