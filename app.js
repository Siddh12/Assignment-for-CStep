
var ButtonBar = document.getElementById('ButtonBar');
var ButtonLine = document.getElementById('ButtonLine');
var ChartType;
var line = document.getElementById('lineChart').getContext('2d');

ButtonLine.addEventListener("click", () => {
    ChartType = "line"
    linecaller();
   
});

ButtonBar.addEventListener("click", () => {
    lineChart.destroy();
    ChartType = "bar";
    linecaller();
    
});

function  linecaller(){
    
    var lineChart = new Chart(line, {
        type: ChartType,
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [2012, 2013, 2014, 2015],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }

    });
}






