import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}
const DonutChart = () => {

    //forma errada
    let chartData: ChartData = {labels:[], series:[]};
    //forma errada

        axios.get(`${BASE_URL}/sales/amount-by-seller`)
             .then (response => {
                console.log(response.data);
                 });
    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }
    
    const options = {
        legend: {
            show: true
        }
    }
        
    return (
        <Chart
        options = {{...options, labels: chartData.labels}}
        series = {chartData.series}
        type = "donut"
        height = "240"

        />
    );
  }
  
  export default DonutChart;

function then(arg0: (response: any) => any) {
    throw new Error('Function not implemented.');
}
