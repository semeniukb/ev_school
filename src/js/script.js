window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu'),
    menuItem = document.querySelectorAll('.mobile__item, .mobile__dropdown_link, .mobile__close'),
    // menuLink = document.querySelectorAll('.mobile__dropdown_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile__menu_active');
        });
    });
    // 
});

let dropdown = document.getElementsByClassName("mobile__dropdown_btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    // this.classList.toggle("mobile__link_arrow_active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}