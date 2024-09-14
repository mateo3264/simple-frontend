//ToDo: Mejorar pq la tarea que muestra viene del input del usuario y no de la api
function add_task(){
    const userInput = document.getElementById("userInput");
    fetch("https://mateoedutec.pythonanywhere.com/send_task/",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            task:userInput.value
        })
    })
    const ul = document.getElementById("unli");
    const li = document.createElement("li");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(cb);
    ul.appendChild(li);
    userInput.value = "";
    userInput.focus();
    
}