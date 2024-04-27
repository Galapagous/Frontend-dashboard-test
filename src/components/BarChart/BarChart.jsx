import React from 'react'
import { barData } from '../../assets/data'
import {BarChart, Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis} from 'recharts'
import './barchart.css'

function BarChartGraph() {

  return (
    <div className='barchart-container'>
      <BarChart 
        width={700}
        height={200}
        data={barData}
      >
        <XAxis dataKey='name'/>
        <Tooltip/>
        <Bar  dataKey='maize' stackId='a' barSize={5} fill='#7970C9'/>
        <Bar dataKey='grits' stackId='a' radius={5} barSize={10} fill='#3326AE'/>
      </BarChart>
    </div>
  )
}

export default BarChartGraph
