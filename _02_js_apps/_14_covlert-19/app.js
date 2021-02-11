
let dataId = document.getElementById('data');

let tot_conf = '';
let tot_recov = '';
let tot_deaths = '';


function dataFetch() {

    // api url =  https://covid19api.com/

    const url = 'https://api.covid19api.com/summary';
    
    let cov_data = '';

    fetch(url)
        .then(data => { return data.json() })
        .then(res => {
            console.log(res.Global);

            tot_conf = res.Global.TotalConfirmed;
            tot_recov =res.Global.TotalRecovered;
            tot_deaths = res.Global.TotalDeaths;
            new_conf = res.Global.NewConfirmed;
            new_deaths = res.Global.NewDeaths;
            new_recov = res.Global.NewRecovered;

            cov_data = `
            <td class="text-primary">${tot_conf}</td>
            <td class="text-danger">${tot_recov}</td>
            <td class="text-success">${tot_deaths}</td>
            <td class="text-primary">${new_conf}</td>
            <td class="text-danger">${new_deaths}</td>
            <td class="text-success">${new_recov}</td>
            `
            dataId.innerHTML = cov_data;

            // chart js - Bar Graph
            var ctx = document.getElementById('myChart1').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Total Cases', 'Total Deaths', 'Total Recovered', 'NewConfirmed','NewDeaths', 'NewRecovered'],
                    datasets: [{
                        label: 'World Covid Data - Bar Graph',

                        data: [tot_conf,tot_recov,tot_deaths,new_conf,new_deaths,new_recov],
                        
                        backgroundColor: [                        
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',                       
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',                       
                            'rgba(75, 192, 192, 0.2)',
                                                
                        ],
                        borderColor: [                       
                            'rgba(54, 162, 235, 1)', 
                            'rgba(255, 99, 132, 0.3)',                         
                            'rgba(75, 192, 192, 1)',
                            'rgba(54, 162, 235, 1)', 
                            'rgba(255, 99, 132, 0.3)',                         
                            'rgba(75, 192, 192, 1)',
                                                  
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: '#273c75',
                            fontSize: 15,
                            fontStyle: "bold",
                            boxWidth: 0,
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });


            // Doughnut Graph
            let doughnutData = [tot_conf,tot_recov,tot_deaths,new_conf,new_deaths,new_recov];
            let colors2 = ['#25CCF7', '#ff5e57', '#12CBC4', '#4bcffa', '#ED4C67', '#55E6C1'];
            let myChart2 = document.getElementById("myChart2").getContext('2d');
            
            var myDoughnutChart = new Chart(myChart2, {
                type: 'doughnut',
                data: {
                    labels: ['Total Cases', 'Total Deaths', 'Total Recovered', 'NewConfirmed','NewDeaths', 'NewRecovered'],
                    
                    datasets: [
                        {
                            data: doughnutData,
                            backgroundColor: colors2
                        }]
                },
            
                options: {
                    title:{
                        display: true,
                        text: 'World Covid Data - Doughnut Graph'
                    },
                    legend: {
                        labels: {
                            
                            fontSize: 15,
                            
                
                        }
                    },
                }
            });
            
        });

};

// refresh button 
let refresh = document.getElementById('refresh').addEventListener("click", myFunction);

function myFunction() {
    clearData();
    dataFetch();
}

// clear html data
function clearData()
{
    dataId.innerHTML = " ";
}

dataFetch();


