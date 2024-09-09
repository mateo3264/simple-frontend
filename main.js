
function setFocus(){

    document.getElementById('selection').focus();
}

function createChart(dataList){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataList.map(([data, created])=>created),
            datasets: [{
                label: 'Days without smoking',
                data: dataList.map(([data])=>data),
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


function initMainPage(){
    console.log('INIT')
    const userName = document.getElementById("input_name");
    let userData = document.getElementById("selection");
    const username = JSON.parse(localStorage.getItem('user'));
    const password = JSON.parse(localStorage.getItem('password'));
    
    console.log('username');
    console.log(username['username']);
    //console.log('userData.value ' + userData.value)
    //userData = userData.value == "true" ? 1 : 0;
    //console.log(userName.value);
    // const params = new URLSearchParams({
    //     username:username['username']
    // })
    fetch('https://mateoedutec.pythonanywhere.com/',
        {
            method:'POST',
            headers:{
    
                "Content-Type":"application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem('token'))['token']}`
            },
            body:JSON.stringify({
                    username:username['username'],
                    password:password['password']
            })
        
            
        }
        
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let running_total = 0;
        const list = data.map((item)=>
            {
                const new_item = item.data ? 1 : 0;
                running_total += new_item;
                return [running_total, item.created];
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
    
}

initMainPage()

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
            headers:{
                "Content-Type":"application/json",
                
            },
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