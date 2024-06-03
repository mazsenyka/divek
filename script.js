let divs = document.querySelectorAll("div");

divs[0].textContent = "első";
divs[2].textContent = "harmadik";
divs[4].textContent = "utolsó";

for (let i = 0; i < divs.length; i++) {
    if (divs[i].textContent === "") {
        divs[i].textContent = `A ${i + 1}. elem a bodyban`;
    }
}