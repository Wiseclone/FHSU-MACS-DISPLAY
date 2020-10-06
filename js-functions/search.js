// Configuration variables
searchables = [["Graduates", gradSet], ["Staff", staffSet]]
// Initialization functions
searchContainer = document.getElementById("searchContainer");
searchContainer.onload = function(){
    searchables.forEach(element => {
        item = document.createElement("DIV");
        item.className = "searchCat";
        item.innerText = element[0];
        item.onclick = function() {
            sourceSet = element[1];
        };
    });

    searchForm = document.createElement("FORM");
    searchBar = document.createElement("INPUT");

};