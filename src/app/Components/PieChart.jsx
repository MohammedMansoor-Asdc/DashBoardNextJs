'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from '../Components/chartConfig.js'

export const data = {
  labels: ['Acquisition', 'Retention', 'Purchase'],
  // legendType:"circle",
  datasets: [
    {
      data: [20, 12, 3],
      backgroundColor: [
        'rgb(85,112,241)',
        'rgb(255,204,145)',
        'rgb(151,165,235)',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top', 
      align: 'start', 
      labels: {
        usePointStyle: true, 
        boxWidth: 10, 
        padding: 10, 
      },
    },
  },
};


function PieChart() {
  return (
    <>
      <div className='w-[321px] h-[337px] px-[20px] py-[21px] flex flex-col gap-[10px] bg-white ml-3 rounded-[12px] mt-4'>
        <div className='flex justify-between'>
          <div className='cursor-pointer text-[16px] text-black'>
            <p>Marketting</p>
          </div>

          <div>
            <select className='bg-transparent text-superGray text-[12px] cursor-pointer'>
              <option value="">This Week</option>
              <option value="">This Month</option>
              <option value="">This Year</option>
            </select>
          </div>
        </div>
        <div className='w-[205px] h-[205px]'>
          <Doughnut options={options} data={data} />
        </div>
      </div>
    </>
  )
}

export default PieChart;
