// Rosslands Farm Manager v0.2

let farm = JSON.parse(localStorage.getItem("rosslandsFarm"));

if (!farm) {
    farm = {
        camps: [],
        animals: []
    };
}

function saveFarm(){

    localStorage.setItem("rosslandsFarm",JSON.stringify(farm));

    updateDashboard();

    renderCamps();

    renderAnimals();

}

function updateDashboard() {
    document.getElementById("campCount").textContent = farm.camps.length;

    let totalAnimals = 0;

    farm.animals.forEach(animal => {
        totalAnimals += animal.quantity || 0;
    });

    document.getElementById("animalCount").textContent = totalAnimals;
    document.getElementById("speciesCount").textContent = farm.animals.length;
}

function renderCamps() {
    const list = document.getElementById("campList");

    if (!list) return;

    list.innerHTML = "";

    farm.camps.forEach((camp, index) => {

        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = camp.name;

        const notes = document.createElement("p");
        notes.textContent = camp.notes || "No notes";

        const renameBtn = document.createElement("button");
        renameBtn.textContent = "✏️ Rename";
        renameBtn.onclick = () => renameCamp(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑 Delete";
        deleteBtn.onclick = () => deleteCamp(index);

        li.appendChild(title);
        li.appendChild(notes);
        li.appendChild(renameBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

function renameCamp(index) {
    const newName = prompt("New camp name", farm.camps[index].name);

    if (!newName) return;

    farm.camps[index].name = newName;

    saveFarm();
}

function deleteCamp(index) {
    if (confirm("Delete this camp?")) {
        farm.camps.splice(index, 1);
        saveFarm();
    }
}

function showPage(page) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

    const addCampBtn = document.getElementById("addCampBtn");

    if (addCampBtn) {
        addCampBtn.addEventListener("click", () => {

            const name = prompt("Camp name");

            if (!name) return;

            const notes = prompt("Notes (optional)") || "";

            farm.camps.push({
                name: name,
                notes: notes
            });
function renderAnimals(){

    const list = document.getElementById("animalList");

    list.innerHTML = "";

    farm.animals.forEach((animal,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
        <strong>${animal.species}</strong><br>
        Quantity: ${animal.quantity}<br>
        Camp: ${animal.camp}

        <br><br>

        <button onclick="deleteAnimal(${index})">🗑 Delete</button>
        `;

        list.appendChild(li);

    });

}

document.getElementById("addAnimalBtn").addEventListener("click",()=>{

    if(farm.camps.length===0){
        alert("Create a camp first!");
        return;
    }

    const species = prompt("Animal species");

    if(!species) return;

    const quantity = Number(prompt("Quantity"));

    const camp = prompt("Camp name");

    farm.animals.push({
        species,
        quantity,
        camp
    });

    saveFarm();

});

function deleteAnimal(index){

    if(confirm("Delete animal?")){

        farm.animals.splice(index,1);

        saveFarm();

    }

}
