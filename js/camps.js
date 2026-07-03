// Camp Management

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

function addCamp() {

    const name = prompt("Camp name");

    if (!name) return;

    const notes = prompt("Notes (optional)") || "";

    farm.camps.push({
        name,
        notes
    });
addActivity("🌿 Added camp: " + name);
    saveFarm();

}

function renameCamp(index) {

    const newName = prompt("New camp name", farm.camps[index].name);

    if (!newName) return;

    farm.camps[index].name = newName;

    saveFarm();

}

function deleteCamp(index) {

    if (!confirm("Delete this camp?")) return;
addActivity("🗑 Deleted camp: " + farm.camps[index].name);
    farm.camps.splice(index, 1);

    saveFarm();

}

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("addCampBtn");

    if (btn) {

        btn.addEventListener("click", addCamp);

    }

});