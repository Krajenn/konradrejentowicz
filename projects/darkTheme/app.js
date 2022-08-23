const switchButton = document.querySelector("header button");
let theme = localStorage.getItem("theme") || "light";

switchButton.addEventListener("click", () => {
    if (theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
        theme = "light";
    } else {
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}
