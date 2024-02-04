function initializeMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (!menu) return;

  const overlay = menu.querySelector(".menu__overlay");
  const menuItems = menu.querySelectorAll(".menu__link--has-sub");

  const toggleOverlay = () => overlay.classList.toggle("menu__overlay--active");

  const closeAllSubMenus = () => {
    menuItems.forEach((subItem) =>
      subItem.classList.remove("menu__link--active")
    );
  };

  const toggleMenuItem = (item) => {
    const isActive = item.classList.contains("menu__link--active");
    closeAllSubMenus();
    if (!isActive) item.classList.add("menu__link--active");
    toggleOverlay();
  };

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenuItem(item);
    });
  });

  overlay.addEventListener("click", () => {
    closeAllSubMenus();
    toggleOverlay();
  });
}

initializeMenu("menu");
