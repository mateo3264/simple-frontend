
function createChart(dataList){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            datasets: [{
                label: 'Days without smoking',
                data: dataList,
                backgroundColor:[
                    'rgba(200, 200, 0, 0.6)',
                    'rgba(200, 200, 0, 0.6)',
                    'rgba(200, 200, 0, 0.6)',
                    'rgba(200, 200, 0, 0.6)',
                    'rgba(200, 200, 0, 0.6)',
                ],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks:{
                        stepSize:1
                    }


                }
            }
        }
    });    
}



fetch('https://mateoedutec.pythonanywhere.com/')
.then(response => response.json())
.then(data => {
    console.log(data);
    let running_total = 0;
    const list = data.map((item)=>
        {
            const new_item = item.data ? 1 : 0;
            running_total += new_item;
            return running_total;
        });
    console.log('list');
    console.log(list);
    const h1Text = document.getElementById('title');
    h1Text.innerHTML = data[data.length - 1].name;
    const pText = document.getElementById('text');
    pText.innerHTML = data.name;
    createChart(list);
})
.catch(error => console.error(error))


function send_data(){
    const userName = document.getElementById("input_name");
    let userData = document.getElementById("selection");
    userData = userData.value == "true" ? 1 : 0;
    console.log(userName.value);
    // console.log(typeof(!!userData.value));
    // console.log(!!userData.value);
    fetch('https://mateoedutec.pythonanywhere.com/post/', 
        {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:userName.value,
                data:!!userData
            })
        })
    .then(response => {
        response.json()
        .then(data=>console.log(data))
    })
}