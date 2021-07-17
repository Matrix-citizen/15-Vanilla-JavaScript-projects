const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => sidebarToggle());
closeBtn.addEventListener("click", () => sidebar.classList.remove("show-sidebar"));

const sidebarToggle = () => sidebar.classList.toggle("show-sidebar");


//////////// Second variant ///////////////
// function sidebarToggle() {
//    sidebar.classList.contains("show-sidebar")
//     ? sidebar.classList.remove("show-sidebar")
//     : sidebar.classList.add("show-sidebar");
// }


