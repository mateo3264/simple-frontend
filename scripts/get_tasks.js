function getTasks(){
    fetch("https://mateoedutec.pythonanywhere.com/get_tasks/")
    .then(
            response=>
                response.json()
            .then(
                data=>{
                    data.forEach((task)=>{
                        const ul = document.getElementById("unli");
                        const li = document.createElement("li");
                        
                        const completed = document.createElement("input");
                        
                        //set if completed
                        completed.type = "checkbox";
                        completed.value = task.completed;
                        console.log(task.completed);
                        //set task
                        li.appendChild(document.createTextNode(task.task));
                        //set priority
                        
                        li.appendChild(document.createTextNode(task.priority));
                        li.appendChild(completed);
                        ul.appendChild(li);
                        
                    })
                    

                }
            )
        )
    
}