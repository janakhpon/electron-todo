// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const axios = require("axios");









window.addEventListener('DOMContentLoaded', () => {

  axios
    .get("https://electron-todo-api.herokuapp.com/api/task")
    .then(function (response) {
      console.log(response);
      const tasks = response.data;
     
      tasks.map(task => {


        var x = document.getElementById("sampleTable").insertRow(-1);
        var y = x.insertCell(0);
        var z = x.insertCell(1);
        y.innerHTML = task._id;
        z.innerHTML = task.text;

      })
      
    })
    .catch(function (err) { 
      document.getElementById("err").innerText = err;
    });
  
})




