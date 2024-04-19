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

/* 
This will hide the header when scrolling down or show when scrolling up
create let variable to determine scroll position
*/

let lastScrollTop = 0;
const navigation = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navigation.style.top = "-65px"; // Adjust this value based on your header's height
  } else {
    // Scrolling up
    navigation.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Prevent default behavior for anchor tags with href="#"
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
