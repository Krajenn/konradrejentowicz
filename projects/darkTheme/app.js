const switchButton = document.querySelector("header button");

switchButton.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
});
