const showSidebar = document.getElementById("showSidebar");
const hideSidebar = document.getElementById("hideSidebar");
const sidebar = document.querySelector(".sidebar");

/* This moves the sidebar into view */

showSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
});

/* this will move the sidebar out of view */

hideSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
});
