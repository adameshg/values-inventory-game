// function dragstart_handler(e) {
//   // Add the target element's id to the data transfer object
//   e.dataTransfer.setData("text/html", e.target.outerHTML);
// }

// function dragover_handler(e) {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = "move";
//  }

// function drop_handler(e) {
//   e.preventDefault();
//   // Get the id of the target and add the moved element to the target's DOM
//   const data = e.dataTransfer.getData("text/plain");
//   e.target.appendChild(document.getElementById(data));

//    // Add the target element's id to the data transfer object
//   e.dataTransfer.setData("application/my-app", e.target.id);
//   e.dataTransfer.effectAllowed = "move";
//  }

// window.addEventListener('DOMContentLoaded', () => {
//   // Get the element by id
//   const element = document.getElementById("yes-drop");
//   // Add the ondragstart event listener
//   element.addEventListener("dragstart", dragstart_handler);
//   console.log(element.outerHTML);
// });

var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function(e) {}, false);

  document.addEventListener("dragstart", function(e) {
      // store a ref. on the dragged elem
      dragged = e.target;
      // make it half transparent
      e.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function(e) {
      // reset the transparency
      e.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function(e) {
      // prevent default to allow drop
      e.preventDefault();
  }, false);

  document.addEventListener("dragenter", function(e) {
      // highlight potential drop target when the draggable element enters it
      if (e.target.className == "dropzone") {
          // e.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function(e) {
      // reset background of potential drop target when the draggable element leaves it
      if (e.target.className == "dropzone") {
          e.target.style.background = "";
      }
  }, false);

  document.addEventListener("drop", function(e) {
      // prevent default action (open as link for some elements)
      e.preventDefault();
      // move dragged elem to the selected drop target
      if (e.target.className == "dropzone") {
          e.target.style.background = "";
          dragged.parentNode.removeChild(dragged);
          e.target.appendChild(dragged);
      }
  }, false);