// Imports/Requirements and Variable Assignments
const remote = require("electron").remote;
const { app } = require("electron").remote;

const ById = function(id) {
  return document.getElementById(id);
};

//GET PATH
const path = require("path");

//ASSIGN RESPECTIVE IDS
let save = ById("save"),
    error = ById("error"),
    task = ById("task");

//Move to Previous song
function goPost() {
    error.innerText = "click";
}



//Assign respective values
save.addEventListener("click", goPost);

