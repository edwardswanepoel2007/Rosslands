    // Dashboard

function updateDashboard(){

    updateCampCount();

    updateAnimalCount();

    updateSpeciesCount();

}
function updateCampCount(){

    document.getElementById("campCount").textContent = farm.camps.length;

}
function updateAnimalCount(){

    let total = 0;

    farm.animals.forEach(animal=>{

        total += animal.quantity;

    });

    document.getElementById("animalCount").textContent = total;

}
function updateSpeciesCount(){

    const species = new Set();

    farm.animals.forEach(animal=>{

        species.add(animal.species);

    });

    document.getElementById("speciesCount").textContent = species.size;

}