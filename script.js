const volumeInput = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');
const speedInput = document.getElementById('speed');
const speedValue = document.getElementById('speedValue');
const resultDistance = document.getElementById('resultDistance');
const resultHours = document.getElementById('resultHours');
const resultMinutes = document.getElementById('resultMinutes');
const ctx = document.getElementById('burnChart').getContext('2d');

const weight = 78; 
const kcalPer100ml = 42; 

let burnChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    datasets: [{
      label: 'Дистанція (км)',
      data: [],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Швидкість (км/год)' } },
      y: { title: { display: true, text: 'Дистанція (км)' }, beginAtZero: true }
    }
  }
});

function updateChart() {
  const volume = Number(volumeInput.value);
  const currentSpeed = Number(speedInput.value);
  
  volumeValue.textContent = volume;
  speedValue.textContent = currentSpeed;
  
  const totalKcal = (volume / 100) * kcalPer100ml;
  
  const newData = burnChart.data.labels.map(speed => {
    const kcalPerKm = weight * (0.95 + 0.015 * speed);
    return Number((totalKcal / kcalPerKm).toFixed(2));
  });

  burnChart.data.datasets[0].data = newData;
  burnChart.update();

  const currentKcalPerKm = weight * (0.95 + 0.015 * currentSpeed);
  const exactDistance = totalKcal / currentKcalPerKm;
  
  const timeInHours = exactDistance / currentSpeed;
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60); 

  resultDistance.textContent = exactDistance.toFixed(2);
  resultHours.textContent = hours;
  resultMinutes.textContent = minutes;
}

volumeInput.addEventListener('input', updateChart);
speedInput.addEventListener('input', updateChart);

updateChart();