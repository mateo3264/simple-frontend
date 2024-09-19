//ToDo: Mejorar pq la tarea que muestra viene del input del usuario y no de la api
function add_task(){
    const userInput = document.getElementById("userInput");
    const priority = document.getElementById("priorities").value;
     
    fetch("https://mateoedutec.pythonanywhere.com/send_task/",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            task:userInput.value,
            completed:false,
            priority:priority[0].toUpperCase()
        })
    })
    const ul = document.getElementById("unli");
    const li = document.createElement("li");
    const cb = document.createElement("input");
    
    cb.type = "checkbox";
    const number_of_li_in_ul = ul.getElementsByTagName("li").length;
    cb.id = "completed"+number_of_li_in_ul;
    cb.className = "form-check-input me-1";
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(cb);
    li.appendChild(document.createTextNode(priority));
    ul.appendChild(li);
    userInput.value = "";
    userInput.focus();
    
}