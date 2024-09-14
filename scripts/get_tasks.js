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
                        const input = document.createElement("input");
                        input.type = "checkbox";
                        li.appendChild(document.createTextNode(task.task));
                        li.appendChild(input);
                        ul.appendChild(li);
                        
                    })
                    

                }
            )
        )
    
}