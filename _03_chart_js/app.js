// doughnut chart
let labels1 = ['YES', 'NO', 'NEITHER', 'NO ANSWER'];

// 49% said yes and 51% said yes but in green
let data1 = [33, 41, 26, 1];

let colors1 = ['#49a9ea', '#o6caab', '#02dcce', '#9a3bca'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',

    data: {
        labels: labels1,
        datasets: [
            {
                data: data1,
                backgroundColor: colors1
            }]
    },

    options: {
        title:{
            display: true,
            text: 'Share of people who often read manga or watch anime in Japan as of October 2019'
        }
    }
});

// manga Chart
let labels2 = ['One Piece', 'Golgo 13', 'Naruto', 'Attack on Titan', 'Detective Conan', 'Bleach'];

// 
let data2 = [96, 197, 72, 31, 98, 74];

let colors2 = ['#49a9ea', '#36caab', '#34495e', '#b370cf', '#ad904f', '#87a83c'];

let mangaChart1 = document.getElementById("mangaChart").getContext('2d');

let chart2 = new Chart(mangaChart1, {
    type: 'bar',

    data: {
        labels: labels2,
        datasets: [
            {
                data: data2,
                backgroundColor: colors2
            }]
    },

    options: {
        title:{
            display: true,
            text: 'Numbers of volume of each manga till now'
        },
        legend: {
            display: false,
        }
    }
});


// manga Chart
let labels3 = ['Attack', 'Defence', 'Passing', 'Tackle', 'Speed'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',

    data: {
        labels: labels3,
        datasets: [
            {
                label: 'Messi',
                fill: true,
                backgroundColor: "rgba(178, 182, 198, 0.2)",
                borderColor: "rgba(178, 182, 198, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179, 182, 198, 1)",
                data: [50, 12, 55, 7, 29]
            },
            {
                label: 'Ronaldo',
                fill: true,
                backgroundColor: "rgba(255, 44, 231, 0.2)",
                borderColor: "rgba(36, 233, 12, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179, 182, 198, 1)",
                data: [51, 11, 35, 20, 44]
            },
        
        ]
    },

    options: {
        title:{
            display: true,
            text: 'Skills'
        }
    }
});


// pie chart
let labels4 = ['2020', '2015', '2010', '2005'];

// population
let data4 = [164689383, 156256276, 147575430, 139035505];

let colors4 = ['#49a9ea', '#o6caab', '#02dcce', '#9a3bca'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',

    data: {
        labels: labels4,
        datasets: [
            {
                data: data4,
                backgroundColor: colors4
            }]
    },

    options: {
        title:{
            display: true,
            text: 'Bangladesh population by worldmeters'
        }
    }
});