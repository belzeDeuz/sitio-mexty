document.addEventListener("DOMContentLoaded", function () {
    const graves = document.querySelectorAll(".grave");
    const infoBox = document.getElementById("info-box");
    const title = document.getElementById("grave-title");
    const description = document.getElementById("grave-description");

    const graveData = {
        "grave-a": { title: "Zona A", description: "Ubicación privilegiada cerca de la entrada principal." },
        "grave-b": { title: "Zona B", description: "Área con sombra y acceso a bancas." },
        "grave-c": { title: "Zona C", description: "Zona tranquila con vista panorámica." },
        "grave-d": { title: "Zona D", description: "Sector con tumbas históricas y monumentos." }
    };

    graves.forEach(grave => {
        grave.addEventListener("click", function () {
            graves.forEach(g => g.classList.remove("selected"));
            this.classList.add("selected");
            const data = graveData[this.id];
            title.textContent = data.title;
            description.textContent = data.description;
            infoBox.style.display = "block";
        });
    });
});