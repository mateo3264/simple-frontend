
function get_questions(){
    fetch("https://mateoedutec.pythonanywhere.com/get_questions/", {
    })
    .then(
        data=>data.json()
        .then(
            response=>{
                console.log(response);
                const div = document.createElement("div");
                div.className = "carousel-inner";
                const questions = document.getElementById("carouselExampleControls");
                response.questions.forEach((item, index)=>{

                    
                    
                    const divChild = document.createElement("div");
                    divChild.id = "li-container-" + index;
                    const divChild2 = document.createElement("div");
                    divChild2.className = "carousel-caption d-none d-md-block";
                    if (index === 0){
                    
                        divChild.className = "carousel-item active";
                        // divChild.className = "carousel-caption d-none d-md-block active"
                    }
                    else{
                        divChild.className = "carousel-item";
                        // divChild.className = "carousel-caption d-none d-md-block"
                    }
                        
                    // const li = document.createElement("li");
                    const p = document.createElement("p");
                    p.innerHTML = item.question;
                    p.className = "d-block w-100";
                    p.style.color = "black";
                    const user_input = document.createElement("input");
                    const button = document.createElement("button");
                    const br = document.createElement("br");
                    button.id = "li-button-" + index;
                    button.innerHTML = "Send";
                    button.addEventListener("click", (event)=>{
                        event.stopPropagation();
                        send(event);
                    })
                    user_input.type = "text";
                    user_input.id = "user-input" + index;
                    // li.appendChild(p);
                    divChild2.appendChild(p);
                    // div.appendChild(li);
                    divChild2.appendChild(user_input);
                    divChild2.appendChild(br);
                    divChild2.appendChild(button);
                    divChild.appendChild(divChild2);
                    div.appendChild(divChild);
                    questions.appendChild(div);

                }

                )
            
            }
        )
    )
}