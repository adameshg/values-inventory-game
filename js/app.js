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
          e.target.style.background = "#a2d5fa";
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
  