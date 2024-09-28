function get_questions(){
    fetch("https://mateoedutec.pythonanywhere.com/get_questions/", {
    })
    .then(
        data=>data.json()
        .then(
            response=>{
                console.log(response);
                response.questions.forEach((item, index)=>{

                    const questions = document.getElementById("questions");
                    const div = document.createElement("div");
                    div.id = "li-container-" + index;
                    // const li = document.createElement("li");
                    const p = document.createElement("p");
                    p.innerHTML = item.question;
                    const user_input = document.createElement("input");
                    const button = document.createElement("button");
                    const br = document.createElement("br");
                    button.id = "li-button-" + index;
                    button.innerHTML = "Send";
                    button.addEventListener("click", (event)=>{
                        send(event);
                    })
                    user_input.type = "text";
                    user_input.id = "user-input" + index;
                    // li.appendChild(p);
                    div.appendChild(p);
                    // div.appendChild(li);
                    div.appendChild(user_input);
                    div.appendChild(br);
                    div.appendChild(button);
                    questions.appendChild(div);

                }

                )
            }
        )
    )
}