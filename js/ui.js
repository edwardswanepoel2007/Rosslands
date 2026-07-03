// ========================================
// Rosslands UI Manager
// ========================================

function hideAllPages() {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.add("hidden");

    });

}

function showPage(pageId) {

    hideAllPages();

    const page = document.getElementById(pageId);

    if(page){

        page.classList.remove("hidden");

    }

}

function goHome(){

    showPage("home");

}

function goCamps(){

    showPage("camps");

}

function goAnimals(){

    showPage("animals");

}

function goMove(){

    showPage("move");

}

function goMap(){

    showPage("map");

}

function goSettings(){

    showPage("settings");

}