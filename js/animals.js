// Animal Management

function loadCampDropdown() {

    const select = document.getElementById("animalCamp");

    if (!select) return;

    select.innerHTML = "";

    farm.camps.forEach(camp => {

        const option = document.createElement("option");

        option.value = camp.name;
        option.textContent = camp.name;

        select.appendChild(option);

    });

}

function renderAnimals() {

    const list = document.getElementById("animalList");

    if (!list) return;

    list.innerHTML = "";

    farm.animals.forEach((animal, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <h3>${animal.species}</h3>
            <p><strong>Quantity:</strong> ${animal.quantity}</p>
            <p><strong>Camp:</strong> ${animal.camp}</p>
        `;

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "🗑 Delete";

        deleteBtn.onclick = () => deleteAnimal(index);

        li.appendChild(deleteBtn);

        list.appendChild(li);

    });

}

function addAnimal() {

    const species = document.getElementById("animalSpecies").value.trim();

    const quantity = Number(document.getElementById("animalQuantity").value);

    const camp = document.getElementById("animalCamp").value;

    if (!species) {
        alert("Enter a species.");
        return;
    }

    if (quantity <= 0) {
        alert("Enter a valid quantity.");
        return;
    }

    farm.animals.push({
        species,
        quantity,
        camp
    });
    addActivity(
    "🦌 Added " +
    quantity +
    " " +
    species +
    " to " +
    camp
);

    document.getElementById("animalSpecies").value = "";
    document.getElementById("animalQuantity").value = "";

    saveFarm();

}

function deleteAnimal(index) {

    if (!confirm("Delete animal?")) return;

  addActivity(
    "🗑 Deleted " +
    farm.animals[index].species
);
      farm.animals.splice(index, 1);

    saveFarm();

}

document.addEventListener("DOMContentLoaded", () => {

    loadCampDropdown();

    const btn = document.getElementById("addAnimalBtn");

    if (btn) {

        btn.addEventListener("click", addAnimal);

    }

});