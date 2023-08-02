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

   const okButtons = document.getElementsByClassName("main__table-ok-button");
   for (let okButton of okButtons) {
      okButton.addEventListener("click", function () {
         if (okButton.parentNode.parentNode.classList.contains("ok-style")) {
            okButton.parentNode.parentNode.classList.remove("ok-style");
         } else {
            okButton.parentNode.parentNode.classList.add("ok-style");
         }
      });
   }
});
