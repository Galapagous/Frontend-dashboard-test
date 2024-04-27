import {AreaChart, Area} from 'recharts'
import './card.css'

function Card({title, value, active, data}) {

  return (
    <div className={`card-container ${active && 'active'}`}>
        <div className="chart-area">
            <AreaChart width={60} height={50} data={data}>
                <Area type='monotone' stroke={active ? 'white' : '#3326AE'} fill={active ? '#FF6056' : '#3326AE'} dataKey='maize'/>
            </AreaChart>
        </div>
      <div className="details">
        <h3>{title}</h3>
        <h1>{value}</h1>
      </div>
    </div>
  )
}

export default Card
