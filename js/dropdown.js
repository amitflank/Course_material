function initializeDropdowns(dropdownId) {
    var dropdownContainer = document.getElementById(dropdownId);
    var dropdownButtons = dropdownContainer.getElementsByClassName("dropdown-btn");
  
    for (var i = 0; i < dropdownButtons.length; i++) {
      dropdownButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
  
  // Usage:
  // Call this function with the ID of the dropdown container when initializing.
  // For example:
  // initializeDropdowns("navbar-container");
  // initializeDropdowns("prog-container");
  