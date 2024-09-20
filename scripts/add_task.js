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
            priority:priority[0].toUpperCase(),
            user:JSON.parse(localStorage.getItem('user_id'))['user_id']
        })
    })
    const divListGroup = document.getElementsByClassName("list-group")[0];
    
    const aTag = document.createElement("a");
    aTag.className = "list-group-item list-group-item-action";
    aTag.href = "#";
    aTag.ariaCurrent = true;
    const divTag = document.createElement("div");
    divTag.className = "d-flex w-100 align-items-center";

    const cb = document.createElement("input");
    
    cb.type = "checkbox";
    const number_of_a_in_div = divListGroup.getElementsByTagName("a").length;
    cb.id = "completed"+number_of_a_in_div;
    cb.className = "form-check-input me-1";
    
    aTag.appendChild(document.createTextNode(userInput.value));
    aTag.appendChild(cb);
    aTag.appendChild(document.createTextNode(priority));
    divListGroup.appendChild(aTag);
    userInput.value = "";
    userInput.focus();
    
}