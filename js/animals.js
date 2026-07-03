// Animal Management

function renderAnimals() {

    const list = document.getElementById("animalList");

    if (!list) return;

    list.innerHTML = "";

    farm.animals.forEach((animal, index) => {

        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = animal.species;

        const qty = document.createElement("p");
        qty.textContent = "Quantity: " + animal.quantity;

        const camp = document.createElement("p");
        camp.textContent = "Camp: " + animal.camp;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑 Delete";
        deleteBtn.onclick = () => deleteAnimal(index);

        li.appendChild(title);
        li.appendChild(qty);
        li.appendChild(camp);
        li.appendChild(deleteBtn);

        list.appendChild(li);

    });

}

function addAnimal() {

    if (farm.camps.length === 0) {
        alert("Create a camp first!");
        return;
    }

    const species = prompt("Animal species");

    if (!species) return;

    const quantity = Number(prompt("Quantity"));

    const camp = prompt("Camp name");

    farm.animals.push({
        species,
        quantity,
        camp
    });

    saveFarm();

}

function deleteAnimal(index) {

    if (!confirm("Delete animal?")) return;

    farm.animals.splice(index, 1);

    saveFarm();

}

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("addAnimalBtn");

    if (btn) {

        btn.addEventListener("click", addAnimal);

    }

});