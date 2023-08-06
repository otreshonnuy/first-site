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

   const okButtons = document.getElementsByClassName("planner__table-ok-button");

   for (let okButton of okButtons) {
      okButton.addEventListener("click", function () {
         if (okButton.parentNode.parentNode.classList.contains("ok-style")) {
            okButton.parentNode.parentNode.classList.remove("ok-style");
         } else {
            okButton.parentNode.parentNode.classList.add("ok-style");
         }
      });
   }

   const showToDoLists = document.getElementsByClassName("navbar__element");
   const showMains = document.getElementsByClassName("navbar__element-active");
   const toDoList = document.getElementsByClassName("planner")[0];
   const main = document.getElementsByClassName("main")[0];

   for (let showToDoList of showToDoLists) {
      showToDoList.addEventListener("click", function () {
         main.classList.add("hidden");
         toDoList.classList.remove("hidden");
      });
   }
   for (let showMain of showMains) {
      showMain.addEventListener("click", function () {
         toDoList.classList.add("hidden");
         main.classList.remove("hidden");
      });
   }

   const taskAddButton = document.getElementById("taskAdd");
   const buttonRow = document.getElementById("buttonRow");
   const tableBody = document.getElementsByTagName("tbody")[0];

   taskAddButton.addEventListener("click", function () {
      const newTaskTableRow = document.createElement("tr");

      const newTaskTablePos = document.createElement("td");
      newTaskTablePos.textContent = "1.";
      newTaskTablePos.classList.add("planner__table-pos");
      newTaskTableRow.appendChild(newTaskTablePos);

      const newTaskTableTimerBlock = document.createElement("td");
      newTaskTableTimerBlock.classList.add("planner__table-timer-block");
      const newTaskTableTimer = document.createElement("input");
      newTaskTableTimer.type = "time";
      newTaskTableTimer.classList.add("planner__table-timer");
      newTaskTableTimerBlock.appendChild(newTaskTableTimer);
      newTaskTableRow.appendChild(newTaskTableTimerBlock);

      const newTaskTableContent = document.createElement("td");
      const newTaskTextContent = document.createElement("textarea");
      newTaskTextContent.classList.add("planner__table-content");
      newTaskTextContent.maxLength = "140";
      newTaskTextContent.placeholder = "Максимальна кількість символів 140";
      newTaskTableContent.appendChild(newTaskTextContent);
      newTaskTableRow.appendChild(newTaskTableContent);

      const newTaskTableButton = document.createElement("td");
      const newTaskButton = document.createElement("button");
      const newTaskImg = document.createElement("img");
      newTaskButton.classList.add("planner__table-ok-button");
      newTaskImg.src = "icons/ok.png";
      newTaskImg.alt = '"done" marker';
      newTaskButton.appendChild(newTaskImg);
      newTaskTableButton.appendChild(newTaskButton);
      newTaskTableRow.appendChild(newTaskTableButton);

      tableBody.insertBefore(newTaskTableRow, buttonRow);
   });
});
