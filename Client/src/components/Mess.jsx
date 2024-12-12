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
    <div className='flex flex-col justify-center items-center '>
    <div className='items-center p-2 '>
      <p className='text-white font-semibold text-3xl ' >Mess Off</p>
    </div>
    <div className='flex justify-between p-4 items-center text-center text-white gap-7'>
      <span>total days:</span><span>mess off days:</span>
    </div>
    <div className=' p-2 ' >
    <Pie data={data} options={options}/>
    </div>
    <div className='bg-slate-800 text-center text-white p-2 '>
    <span>Mess Off Request</span>
    <div className='flex justify-center items-center p-2 '>
      <input type="date" className="text-black p-2 " id="" />
      <input type="date" className="text-black p-2 "/>
    </div>
    <button className='bg-blue-600 p-2 w-1/4' >Submit</button>
    </div>
  </div>
  );
}