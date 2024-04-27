import React, {PureComponent} from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

function Card({title, value}) {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2000,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1938,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        }
    ]
    style={
        /* .card-design::before{
  position: absolute;
  bottom: -45px;
  left: -65px;
  border-radius: 40px 40px 0px 0px;
  content: '';
  width: 100%;
  height: 200%;
  background-color: var(--blue);
  /* transform: rotate(40deg); */
  z-index: 2;
  clip-path: polygon(46% 53%, 73% 61%, 88% 99%, 9% 99%, 8% 25%);
} */
    }

  return (
    <div className="card-container">
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
        }}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey='name'/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stroke='#3326AE' fill='#7970C9'/>
        </AreaChart>
      </ResponsiveContainer>
      <div className="details">
        <h3>{title}</h3>
        <h1>{value}</h1>
      </div>
      <div className="pie">
        <PieChart width={300} height={300}>
              <Pie data={piedata} dataKey='maize' fill='#3326AE'/>
            </PieChart>
      </div>
    </div>
  )
}

export default Card
