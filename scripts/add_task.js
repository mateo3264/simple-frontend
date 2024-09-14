function add_task(){
    const userInput = document.getElementById("userInput");
    const ul = document.getElementById("unli");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
    userInput.focus();
    
}