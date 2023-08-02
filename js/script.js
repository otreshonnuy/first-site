"use strict";

document.addEventListener("DOMContentLoaded", function () {
   const toogler = document.getElementsByClassName("navbar__toogler")[0];
   const change = document.getElementsByClassName("navbar__show")[0];

   if (!toogler || !change) {
      console.error("One of dynamic elements not found");
      return;
   }

   toogler.addEventListener("click", function () {
      if (change.classList.contains("hidden")) {
         change.classList.remove("hidden");
      } else {
         change.classList.add("hidden");
      }
   });
});
