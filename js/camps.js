// Rosslands - Camp Management

let selectedCamp = null;

function renderCamps() {

    const list = document.getElementById("campList");

    if (!list) return;

    list.innerHTML = "";

    farm.camps.forEach((camp, index) => {

        const campAnimals = farm.animals.filter(a => a.camp === camp.name);

        const totalAnimals = campAnimals.reduce(
            (sum, animal) => sum + animal.quantity,
            0
        );

        const species = new Set(
            campAnimals.map(a => a.species)
        ).size;

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="camp-card">
                <h2>🌿 ${camp.name}</h2>
                <p>🐄 Animals: <strong>${totalAnimals}</strong></p>
                <p>🦌 Species: <strong>${species}</strong></p>
                <p>📝 ${camp.notes || "No notes"}</p>
            </div>
        `;

        const openBtn = document.createElement("button");
        openBtn.textContent = "📍 Open Camp";
        openBtn.onclick = () => openCamp(index);

        const renameBtn = document.createElement("button");
        renameBtn.textContent = "✏️ Rename";
        renameBtn.onclick = () => renameCamp(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑 Delete";
        deleteBtn.onclick = () => deleteCamp(index);

        li.appendChild(openBtn);
        li.appendChild(renameBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);

    });

}

function openCamp(index) {

    selectedCamp = farm.camps[index];

    document.getElementById("campTitle").textContent = selectedCamp.name;
    document.getElementById("campNotes").textContent =
        selectedCamp.notes || "No notes";

    const animals = farm.animals.filter(
        a => a.camp === selectedCamp.name
    );

    const total = animals.reduce(
        (sum, a) => sum + a.quantity,
        0
    );

    document.getElementById("campAnimalCount").textContent = total;
    document.getElementById("campSpeciesCount").textContent = animals.length;

    const list = document.getElementById("campAnimalList");
    list.innerHTML = "";

    animals.forEach(animal => {

        const li = document.createElement("li");

        li.textContent =
            animal.species + " (" + animal.quantity + ")";

        list.appendChild(li);

    });

    showPage("campDetails");

}

// Keep your existing addCamp(), renameCamp(), deleteCamp()
// and DOMContentLoaded code below this.

function addCamp() {

    const name = prompt("Camp name");

    if (!name) return;

    const notes = prompt("Notes") || "";

    farm.camps.push({
        name,
        notes
    });

    addActivity("🌿 Added camp: " + name);

    saveFarm();

}

function renameCamp(index) {

    const newName = prompt(
        "Rename camp",
        farm.camps[index].name
    );

    if (!newName) return;

    farm.camps[index].name = newName;

    addActivity("✏️ Renamed camp");

    saveFarm();

}

function deleteCamp(index) {

    if (!confirm("Delete camp?")) return;

    addActivity(
        "🗑 Deleted " +
        farm.camps[index].name
    );

    farm.camps.splice(index,1);

    saveFarm();

}

function openCamp(index){

    alert(
        "Camp Details coming in Release 0.8!"
    );

}

document.addEventListener("DOMContentLoaded",()=>{

    document
        .getElementById("addCampBtn")
        .addEventListener("click",addCamp);

});