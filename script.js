// Change the definition text when the "Learn More" button is clicked
document.getElementById("changeDefinitionButton").addEventListener("click", function() {
    document.getElementById("definition").textContent = "Violence against women and children includes various forms of abuse, from physical violence to psychological harm. These acts deny individuals their basic rights and dignity.";
    document.getElementById("definition").style.color = "purple";  // Modify CSS style to highlight the change
  });
  
  // Add a new awareness message when the "Add an Awareness Message" button is clicked
  document.getElementById("addElementButton").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "Speak out against violence! Every woman and child deserves to live without fear.";
    newElement.style.fontStyle = "italic"; // Modify CSS style to make the new element stand out
    document.getElementById("elementsContainer").appendChild(newElement);
  });
  
  // Remove the last added awareness message when the "Remove Last Message" button is clicked
  document.getElementById("removeElementButton").addEventListener("click", function() {
    const container = document.getElementById("elementsContainer");
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  });
  
  // Change the support text when the "Change Support Text" button is clicked
  document.getElementById("changeSupportTextButton").addEventListener("click", function() {
    document.querySelector("footer p").textContent = "If you are in danger, contact your local GBV helpline or organization for immediate help.";
    document.querySelector("footer p").style.fontStyle = "italic"; // Modify CSS style
  });
  