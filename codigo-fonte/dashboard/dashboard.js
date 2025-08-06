
var contextoPizza = document.getElementById('pieChart');
var graficoPizza = new Chart(contextoPizza, {
  type: 'pie',
  data: {
    labels: ['Estágio', 'CLT', 'Temporário'],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#F26A22', '#2C80C9', '#999']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' 
      }
    }
  }
});

var contextoBarra = document.getElementById('barChart');
var graficoBarra = new Chart(contextoBarra, {
  type: 'bar',
  data: {
    labels: ['PUC Minas', 'Vale', 'Embraer'],
    datasets: [{
      label: 'Nº de Vagas',
      data: [20, 35, 25],
      backgroundColor: '#2C80C9'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true 
      }
    },
    plugins: {
      legend: {
        display: false 
      }
    }
  }
});
