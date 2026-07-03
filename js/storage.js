// Farm Storage

let farm = JSON.parse(localStorage.getItem("rosslandsFarm"));

if (!farm) {
    farm = {
        camps: [],
        animals: []
    };
}

function saveFarm() {
    localStorage.setItem("rosslandsFarm", JSON.stringify(farm));

    updateDashboard();

    if (typeof renderCamps === "function") renderCamps();
    if (typeof renderAnimals === "function") renderAnimals();
    if (typeof loadCampDropdown === "function") loadCampDropdown();
}