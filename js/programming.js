document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.querySelector("#prog-container");
  
    fetch("/navbar/python.html")
      .then(response => response.text())
      .then(html => {
        navbarContainer.innerHTML = html;
        initializeDropdowns("prog-container");
      })
      .catch(err => console.warn("Something went wrong with loading the navbar:", err));
  });
