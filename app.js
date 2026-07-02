// Rosslands Farm Manager

function updateDashboard() {
    document.getElementById("campCount").textContent = farm.camps.length;

    let totalAnimals = 0;

    farm.animals.forEach(animal => {
        totalAnimals += animal.quantity || 0;
    });

    document.getElementById("animalCount").textContent = totalAnimals;
    document.getElementById("speciesCount").textContent = farm.animals.length;
}

function showPage(page) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

    updateDashboard();

    if (typeof renderCamps === "function") {
        renderCamps();
    }

    if (typeof renderAnimals === "function") {
        renderAnimals();
    }

});