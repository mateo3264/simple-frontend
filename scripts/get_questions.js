function get_questions(){
    fetch("https://mateoedutec.pythonanywhere.com/get_questions/", {
    })
    .then(
        data=>data.json()
        .then(
            response=>{
                console.log(response);
                response.questions.forEach((item)=>{

                    const questions = document.getElementById("questions");
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(item.question));
                    questions.appendChild(li);

                }

                )
            }
        )
    )
}