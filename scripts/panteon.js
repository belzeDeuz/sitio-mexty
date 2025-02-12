const tombsData = {
    "zone-a": {
        rows: 2, columns: 3, // 2 filas x 3 columnas
        graves: [
            { name: "Juan Pérez", date: "12/04/1980", legend: "Siempre en nuestros corazones" },
            { name: "María López", date: "05/09/1995", legend: "Descansa en paz" },
            { name: "Pedro Hernández", date: "15/07/1983", legend: "Te recordaremos siempre" },
            { name: "Marta Ruiz", date: "21/02/1990", legend: "En el corazón de su familia" }
        ]
    },
    "zone-b": {
        rows: 3, columns: 2, // 3 filas x 2 columnas
        graves: [
            { name: "Carlos Martínez", date: "23/11/2001", legend: "Tu luz sigue brillando" },
            { name: "Ana Gómez", date: "14/02/2010", legend: "Siempre recordada" },
            { name: "Javier Torres", date: "03/05/1997", legend: "Con amor eterno" },
            { name: "Beatriz Sánchez", date: "18/08/1985", legend: "Dios te tiene en su gloria" },
            { name: "Ricardo López", date: "29/10/1993", legend: "Siempre en nuestro recuerdo" }
        ]
    },
    "zone-c": {
        rows: 1, columns: 4, // 1 fila x 4 columnas
        graves: [
            { name: "Roberto Sánchez", date: "07/06/1992", legend: "Vivirá por siempre en nuestros recuerdos" },
            { name: "Elena Torres", date: "30/12/1988", legend: "Con amor eterno" },
            { name: "Alberto Fernández", date: "22/09/1975", legend: "Nunca olvidado" }
        ]
    },
    "zone-d": {
        rows: 4, columns: 3, // 4 filas x 3 columnas
        graves: [
            { name: "Luis Ramírez", date: "19/03/2005", legend: "Siempre amado" },
            { name: "Carmen Reyes", date: "08/07/1999", legend: "Dios te tiene en su gloria" },
            { name: "Francisco Gómez", date: "17/12/1980", legend: "Descansa en paz" },
            { name: "Natalia Pérez", date: "09/11/1972", legend: "Con amor de su familia" },
            { name: "Isabel Vargas", date: "05/01/1995", legend: "Siempre presente en nuestras vidas" },
            { name: "Andrés Morales", date: "27/04/1988", legend: "Una estrella más en el cielo" },
            { name: "Esteban Ruiz", date: "14/06/1993", legend: "Tu memoria vive en nosotros" },
            { name: "Sara Álvarez", date: "11/10/2007", legend: "Siempre recordada con amor" }
        ]
    }
};

// Manejo de clic en cada zona
document.querySelectorAll(".zone").forEach(zone => {
    zone.addEventListener("click", function () {
        const selectedZone = this.id;
        const zoneData = tombsData[selectedZone];

        document.getElementById("zone-title").textContent = this.textContent;
        const tombsDiv = document.getElementById("tombs");
        tombsDiv.innerHTML = "";
        
        // Configurar el grid dinámicamente
        tombsDiv.style.gridTemplateColumns = `repeat(${zoneData.columns}, 1fr)`;
        tombsDiv.classList.add("tombs-grid");

        zoneData.graves.forEach((tomb, index) => {
            const tombElement = document.createElement("div");
            tombElement.classList.add("tomb");
            tombElement.innerHTML = `<img src='../images/icon-grave.png' alt='Tumba'>`;
            tombElement.setAttribute("data-index", index);
            tombElement.setAttribute("data-zone", selectedZone);
            tombsDiv.appendChild(tombElement);
        });

        document.getElementById("tombs-container").style.display = "block";
    });
});

// Manejo de clic en una tumba para mostrar el modal
document.addEventListener("click", function (event) {
    if (event.target.closest(".tomb")) {
        const tombElement = event.target.closest(".tomb");
        const zone = tombElement.getAttribute("data-zone");
        const index = tombElement.getAttribute("data-index");
        const tombInfo = tombsData[zone].graves[index];

        document.getElementById("deceasedName").textContent = tombInfo.name;
        document.getElementById("deathDate").textContent = tombInfo.date;
        document.getElementById("tombLegend").textContent = tombInfo.legend;

        new bootstrap.Modal(document.getElementById("tombModal")).show();
    }
});
