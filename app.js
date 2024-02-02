const menuItems = document.querySelectorAll(".menu__link--has-sub");

const toggleMenuItem = (menuItem) => {
  menuItems.forEach((otherItem) => {
    if (otherItem !== menuItem) {
      otherItem.classList.remove("menu__link--active");
    }
  });
  menuItem.classList.toggle("menu__link--active");
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleMenuItem(item);
  });

  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenuItem(item);
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".menu__link--has-sub") &&
    !e.target.closest(".menu__sub-menu")
  ) {
    menuItems.forEach((item) => {
      item.classList.remove("menu__link--active");
    });
  }
});
