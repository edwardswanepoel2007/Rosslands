// Farm Storage

let farm = JSON.parse(localStorage.getItem("rosslandsFarm"));

if (!farm) {
    farm = {
        camps: [],
        animals: [],
        activity: []
    };
}

if (!farm.activity) {
    farm.activity = [];
}

function addActivity(text) {

    farm.activity.unshift({
        text: text,
        time: new Date().toLocaleString()
    });

    if (farm.activity.length > 20) {
        farm.activity.pop();
    }

}

function renderActivity() {

    const list = document.getElementById("activityList");

    if (!list) return;

    list.innerHTML = "";

    if (farm.activity.length === 0) {

        list.innerHTML = "<li>No activity yet.</li>";

        return;

    }

    farm.activity.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${item.text}</strong><br>
            <small>${item.time}</small>
        `;

        list.appendChild(li);

    });

}

function saveFarm() {

    localStorage.setItem(
        "rosslandsFarm",
        JSON.stringify(farm)
    );

    updateDashboard();

    if (typeof renderCamps === "function")
        renderCamps();

    if (typeof renderAnimals === "function")
        renderAnimals();

    if (typeof loadCampDropdown === "function")
        loadCampDropdown();

    renderActivity();

}