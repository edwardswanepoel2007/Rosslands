// Rosslands Farm Manager v0.2

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
    renderCamps();
}

function updateDashboard() {

    document.getElementById("campCount").textContent = farm.camps.length;

    let totalAnimals = 0;

    farm.animals.forEach(a => {
        totalAnimals += a.quantity;
    });

    document.getElementById("animalCount").textContent = totalAnimals;
    document.getElementById("speciesCount").textContent = farm.animals.length;
}

function renderCamps() {

    const list = document.getElementById("campList");

    list.innerHTML = "";

    farm.camps.forEach((camp, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${camp.name}</strong><br>
            ${camp.notes || "No notes"}<br><br>

            <button onclick="renameCamp(${index})">✏️ Rename</button>

            <button onclick="deleteCamp(${index})">🗑 Delete</button>
        `;

        list.appendChild(li);

    });

}

document.getElementById("addCampBtn").addEventListener("click", () => {

    const name = prompt("Camp name");

    if (!name) return;

    const notes = prompt("Notes (optional)") || "";

    farm.camps.push({
        name,
        notes
    });

    saveFarm();

});

function renameCamp(index){

    const newName = prompt("New camp name", farm.camps[index].name);

    if(!newName) return;

    farm.camps[index].name = newName;

    saveFarm();

}

function deleteCamp(index){

    if(confirm("Delete this camp?")){

        farm.camps.splice(index,1);

        saveFarm();

    }

}

function showPage(page){

    document.querySelectorAll(".page").forEach(section=>{
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");

}

saveFarm();