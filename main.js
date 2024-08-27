
function createChart(dataList){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            datasets: [{
                label: 'Sales',
                data: dataList,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });    
}



fetch('https://mateoedutec.pythonanywhere.com/')
.then(response => response.json())
.then(data => {
    console.log(data);
    const list = data.data;
    const pText = document.getElementById('text');
    pText.innerHTML = data.name + ' ' + data.age;
    createChart(list);
})
.catch(error => console.error(error))
