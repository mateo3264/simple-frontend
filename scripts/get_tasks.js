

function getTasks(){
    const user_id = JSON.parse(localStorage.getItem('user_id'))['user_id'];
    fetch(`https://mateoedutec.pythonanywhere.com/get_tasks/${user_id}/`)
    .then(
            response=>
                response.json()
            .then(
                data=>{
                    const divListGroup = document.getElementsByClassName("list-group")[0];
                    // ul = document.getElementById("unli");
                    data.forEach((task)=>{
                        
                        
                        const aTag = document.createElement("a");
                        aTag.className = "list-group-item list-group-item-action";
                        aTag.href = "#";
                        aTag.ariaCurrent = true;
                        const divTag = document.createElement("div");
                        divTag.className = "d-flex w-100 align-items-center";

                        // const li = document.createElement("li");
                        // li.className = "list-group-item d-flex align-items-center";
                        const completed = document.createElement("input");
                        const taskLabel = document.createElement("H5");//document.createTextNode(task.task.charAt(0).toUpperCase() + task.task.slice(1) + " ");
                        taskLabel.className = "mb-1";
                        const taskText = document.createTextNode(task.task.charAt(0).toUpperCase() + task.task.slice(1) + " ");
                        taskLabel.appendChild(taskText);
                        
                        taskLabel.className = "form-check-label";
                        //set if completed
                        completed.type = "checkbox";
                        completed.className = "form-check-input me-1";
                        completed.value = task.completed;
                        
                        //set task
                        divTag.appendChild(completed);
                        divTag.appendChild(taskLabel);
                        //set priority
                        aTag.style.maxWidth = "500px";
                        aTag.appendChild(divTag);
                        if (task.priority == "M"){

                            aTag.appendChild(document.createTextNode("Medium" + " "));
                        } else if (task.priority == "L"){
                            aTag.appendChild(document.createTextNode("Low" + " "));
                            
                        } else {
                            aTag.appendChild(document.createTextNode("High" + " "));

                        }
                        // divTag.appendChild(li);
                        
                        divListGroup.appendChild(aTag);
                        
                        
                        
                    })
                    

                }
            )
        )
    
}