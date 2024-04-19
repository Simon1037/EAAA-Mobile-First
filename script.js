const body = document.getElementById("body");
const showSidebar = document.getElementById("showSidebar");
const hideSidebar = document.getElementById("hideSidebar");
const sidebar = document.querySelector(".sidebar");

/* This moves the sidebar into view */

showSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
  body.style.overflow = "hidden";
});

/* this will move the sidebar out of view */

hideSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
  body.style.overflow = "auto";
});

/* 
This will hide the header when scrolling down or show when scrolling up
create let variable to determine scroll position
*/

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  /* Show header when at the top of the page */
  if (scrollTop <= 0) {
    header.style.top = "0";
    header.style.position = "relative";
  } else if (scrollTop > lastScrollTop) {
    /* Scrolling down, sets top to -65 to hide the header */
    header.style.top = "-65px";
    header.style.position = "fixed";
  } else {
    /* Scrolling up, setting position top to 0 */
    header.style.top = "0";
    header.style.position = "fixed";
  }
  lastScrollTop = scrollTop;
});
