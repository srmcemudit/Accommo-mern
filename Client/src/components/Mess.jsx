import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components of Chart.js that you need
ChartJS.register(ArcElement, Tooltip, Legend);

function Mess() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'blue' // Change the label text color here
            }
          },
      tooltip: {
            bodyColor: 'blue' // Change the tooltip text color here
          }
        }
      };
      
  return(
    <div className='w-auto h-80 flex justify-center items-center mb-auto '>
    <Pie data={data} options={options} />
  </div>
  );
}

export default Mess;
