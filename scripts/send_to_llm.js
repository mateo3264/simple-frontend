function send(event){
    const button = event.target;
    const buttonParent = button.parentElement;
    console.log(button);
    console.log(buttonParent);
    console.log(buttonParent.id);
    console.log(buttonParent.childNodes);

    // const question = document.getElementById(buttonParent.id);
    const p = buttonParent.childNodes[0];
    const question = p.innerHTML;
    // const user = document.getElementById("user-input").value;
    const user = buttonParent.childNodes[1].value;
    console.log("question");
    console.log(question);
    console.log("user");
    console.log(user);
    fetch("https://mateoedutec.pythonanywhere.com/talk_to_llm/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            question:question,
            input:user
        })
    })
    .then(
        response=>response.json()
        .then(
            data=>{
                if (data["llm-response"] == "Correcto"){
                    p.style.color = "green";
                }
                else {
                    p.style.color = "red";
                }
                console.log(data);
            }
        )
    )
}