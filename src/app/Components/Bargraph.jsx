'use client'
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Sept 10',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sept 11',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Sept 12',
    uv: 2000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: 'Sept 13',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Sept 14',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sept 15',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sept 16',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Example = () => {
  return (
    <>
      <div className='w-[989px] h-[339px] bg-white ml-3 mt-3 rounded-[12px] px-[20px] py-[15px] flex flex-col gap-[36px]'>
        <div className='flex justify-between'>
          <div className='flex gap-[21px]'>
            <div>
              <p className='text-black text-[16px]'>Summary</p>
            </div>
            <div>
              <select className='bg-superBlue text-[14px] text-darkBlue pr-[11px] pl-[12px] py-[5px] rounded-[8px] cursor-pointer'>
                <option value="">Sales</option>
                <option value="">Purchase</option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <select className='bg-transparent text-[12px] text-darkBlack cursor-pointer p-[7px]'>
                <option value="">Last 7 Days</option>
                <option value="">Last Week</option>
                <option value="">Last Month</option>
              </select>
            </div>
          </div>
        </div>

        <div className='w-[939px] h-[273px]'>
          <ResponsiveContainer className='w-[939px] h-[273px] '>
            <BarChart
              className='w-[939px] h-[273px] rounded-full'
              data={data}
              barSize={13}
              style={{ height: 273 }}
              width={939}
            >
              <XAxis dataKey="name" scale="point" />
              <YAxis/>
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#5570F1" background={{ fill: '#EEF0FA' }} className='rounded-full' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Example;
