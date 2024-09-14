function add_task(){
    const userInput = document.getElementById("userInput");
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