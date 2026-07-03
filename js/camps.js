// Rosslands - Camp Management

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

                <button onclick="openCamp(${index})">
                    📍 Open Camp
                </button>

                <button onclick="renameCamp(${index})">
                    ✏️ Rename
                </button>

                <button onclick="deleteCamp(${index})">
                    🗑 Delete
                </button>

            </div>
        `;

        list.appendChild(li);

    });

}

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