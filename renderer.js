var axios = require("axios");




function postData() {
    const data = document.querySelector("#task").value;
    document.querySelector("#error").innerHTML = data;

    
   axios
     .post(
       "https://electron-todo-api.herokuapp.com/api/task",
       data
     )
     .then(res => {
      
     })
     .catch(err => {
       
     });
    
    
    
    
}

document.querySelector('#btnsave').addEventListener('click', () => {
    postData()
})
