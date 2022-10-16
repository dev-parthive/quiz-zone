import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import './Static.css'
const Statics = () => {
    const {data} = useLoaderData()
    console.log(data)
    return (
        <div className='statistic-box  '>
            <div>

            <h2 className='text-3xl mb-20 text-orange-500'>Statics of the marks</h2>
            </div>
            <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>
        </div>
    );
};

export default Statics;