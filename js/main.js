const langButton = document.querySelector(".header-lang__icon");
const langActiveElement = document.querySelector(".header-lang__active");
const langElements = document.querySelector(".header-lang__items");

[langButton, langActiveElement].forEach(item => item.addEventListener("click", () => {
    langElements.classList.toggle("active");
    langButton.classList.toggle("active");
}));



const burgerIcon = document.querySelector(".header__wrapper-burger");
const burgerMenu = document.querySelector(".header__wrapper-mobile");

burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    burgerIcon.classList.toggle("active");
});



const langButtonSmall = document.querySelector(".header-mobile__lang-icon");
const langActiveElementSmall = document.querySelector(".header-mobile__lang-active");
const langElementsSmall = document.querySelector(".header-mobile__lang-items");

[langButtonSmall, langActiveElementSmall].forEach(item => item.addEventListener("click", () => {
    langElementsSmall.classList.toggle("active");
    langButtonSmall.classList.toggle("active");
}));



const servicesIcons = document.querySelectorAll(".js-icon");
const servicesContents = document.querySelectorAll(".services__item-content");

servicesIcons.forEach(icon => icon.addEventListener("click", () => {
    const activeContent = document.querySelector(`#${icon.id}-content`);

    if (!activeContent.classList.contains("active")) {
        servicesContents.forEach(item => item.classList.remove("active"));
        servicesIcons.forEach(item => item.classList.remove("active"));
        activeContent.classList.add("active");
        icon.classList.add("active");
    }
}))



document.addEventListener("click", (event) => {
    const arg = event.target;
    
    if (window.location.pathname.includes("home")) {
        if (["services", "special", "new"].includes(arg.id)) {
            $("html, body").animate({
                scrollTop: $(`#${arg.id}-section`).offset().top - 50
            }, 700);
            
            burgerMenu.classList.remove("active");
            burgerIcon.classList.remove("active");
        }
    } else {
        localStorage.setItem("id", arg.id);
    }
    
})


startSettings();

function startSettings() {
    if (localStorage.getItem("id")) {
        window.setTimeout(() => {
            $("html, body").animate({
                scrollTop: $(`#${localStorage.getItem("id")}-section`).offset().top
            }, 700);
            localStorage.removeItem("id");
        }, 500);
    }
}
