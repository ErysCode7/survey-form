const main = document.querySelector("[data-main]")
const hero = document.querySelector("[data-hero]")

hero.addEventListener("click", () => {
    hero.classList.add("click")
    main.classList.add("show")
})