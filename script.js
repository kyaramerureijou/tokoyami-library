document.addEventListener("DOMContentLoaded", function () {

  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (openMenu && closeMenu && sideMenu && overlay) {

    openMenu.addEventListener("click", function () {
      sideMenu.classList.add("active");
      overlay.classList.add("active");
    });

    function closeNav() {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
    }

    closeMenu.addEventListener("click", closeNav);
    overlay.addEventListener("click", closeNav);
  }

});