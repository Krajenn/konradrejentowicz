const switchButton = document.querySelector("header button");
let theme = localStorage.getItem("theme") || "light";


switchButton.addEventListener("click", () => {
    if (theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        theme = "light";
    } else {
        document.querySelector("body").classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}
