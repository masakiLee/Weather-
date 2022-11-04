"use strict";

// sideMenu
var menuIcon = document.querySelector(".menuIcon");
var sideMenuIcon = document.querySelector(".sideMenuIcon");
var sideMask = document.querySelector(".sideMask"); // login

var signIn = document.querySelector(".signIn");
var infoModal = document.querySelector("#infoModal"); //--------------------------------------------//
//sideMenu

menuIcon.addEventListener("click", function () {
  sideMask.style.display = "block";
});
sideMenuIcon.addEventListener("click", function () {
  sideMask.style.display = "none";
}); //loginModal

signIn.addEventListener("click", function () {
  infoModal.showModal();
});
//# sourceMappingURL=all.js.map
