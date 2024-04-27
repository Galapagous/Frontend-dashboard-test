import './App.css'
import './mobile-app.css'
import './tablet-app.css'
import { BiSolidCircleQuarter } from 'react-icons/bi'
import { IoIosNotifications, IoMdHome } from 'react-icons/io'
import { GiPieChart, GiShoppingBag } from 'react-icons/gi'
import { BiSolidMessageSquareDots } from 'react-icons/bi'
import { FaGreaterThan, FaSearch, FaStar, FaTaxi, FaWallet } from 'react-icons/fa'
import Profile from './assets/profile.jpg'
import Card from './components/Card/Card'
import {productSales, productSales2, productSales3, productSales4} from './assets/data.js'
import BarChartGraph from './components/BarChart/BarChart.jsx'
import Button from './components/Button-component/Button.jsx'
import {AreaChart, Area, XAxis, Tooltip} from 'recharts'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import IconComponent from './components/Icon-component/IconComponent.jsx'
import { PiClock, PiPlayCircleFill } from 'react-icons/pi'
import {CircularProgressbar} from 'react-circular-progressbar'
import './circular.css'
import { SlOptions } from 'react-icons/sl'
import { RiNetflixFill, RiServiceFill, RiVisaLine } from 'react-icons/ri'
import { CgAddR } from 'react-icons/cg'
import TransactionData from './components/Transaction-info/Transaction-data.jsx'
import { IoRadioSharp } from 'react-icons/io5'
import { useState } from 'react'
import convert from 'convert'



function App() {

  const [activeData, setActiveData] = useState('stats')
  const [activeMenu, setActiveMenu] = useState('home')

  const handleMenu = (currentMenu)=>{
    setActiveMenu(currentMenu)
  }

  const handleSwitch = (currentPage)=>{
    setActiveData(currentPage)
  }

  const CustomTooltip = ({active, payload, label})=>{
    if(active && payload && payload.length){
      let currTime = (convert(payload[0].value, 'minutes').to('hours'))
      currTime = currTime.toFixed(2)
      let hour = currTime.split('.')[0]
      let minutes = currTime.split('.')[1]
      return(
        <div className="">
          <Button label={label} text={`${hour}h, ${minutes}min`} color='#FF392B'/>
        </div>
      )
    }
  }

  return (
    <div className="dashboard-container">
      <div className="menu-bar">
        <div className="logo">
          <BiSolidCircleQuarter/>
          <BiSolidCircleQuarter/>
        </div>
      {/*---------------Site Menu Region-------------------*/}
        <div className="menu-icons">
          <div className={`${activeMenu === 'home' ? 'icons active-icon' : 'icons'}`}>
            <IoMdHome onClick={()=>{handleMenu('home')}}/>
          </div>
          <div className={`${activeMenu === 'start' ? 'icons active-icon' : 'icons'}`}>
            <GiPieChart onClick={()=>{handleMenu('start')}}/>
          </div>
          <div className={`${activeMenu === 'message' ? 'icons active-icon' : 'icons'}`}>
            <BiSolidMessageSquareDots onClick={()=>{handleMenu('message')}}/>
          </div>
          <div className={`${activeMenu === 'wallet' ? 'icons active-icon' : 'icons'}`}>
            <FaWallet onClick={()=>{handleMenu('wallet')}}/>
          </div>
        </div>
      </div>
      {/*---------------------------Main Container-----------------------------*/}
      <div className="main-container">
        <div className="nav-bar">
          <div className="left-nav-bar">
            <div className="logo">
              <BiSolidCircleQuarter/>
              <BiSolidCircleQuarter/>
            </div>
            <div className="search-area">
              <input type="text" name="serachInput" id="searchInput" placeholder='Search...' />
              <FaSearch/>
            </div>
            <span>Feedback</span>
            <span>Contacts</span>
            <span>Help</span>
          </div>
          <div className="right-nav-bar">
            <div className="notification">
              <IoIosNotifications/>
              <div className="indicator"></div>
            </div>
            <div className="profile">
              <img src={Profile}/>
            </div>
          </div>
        </div>
        <div className="switcher">
          <div className="switcher-icons">
            <RiServiceFill onClick={()=>{handleSwitch('stats')}} className={`${activeData === 'stats' ? 'active-switch' : ''}`}/>
            <IoRadioSharp onClick={()=>{handleSwitch('profile')}} className={`${activeData === 'profile' ? 'active-switch' : ''}`}/>
          </div>
          <h2>Top Sales</h2>
        </div>
        {/*------------Hero container--------------*/}
        <div className="hero-container">
        {/*-------Display conditionally------*/}
        <div className={`${activeData === 'stats' ? 'hero-left mobile':'hero-left'}`}>
          <div className="hero-left-top-area">
              <Card title='VISITORS' value="10,320" data={productSales}/>
              <Card title='CUSTOMERS' value="4,628" data={productSales2}/>
              <Card title='ORDERS' value="2,980" active={true} data={productSales3}/>
            </div>
              <div className="hero-left-main-area">
              <BarChartGraph/>
            </div>
            {/*------Bottom section------ */}
            <div className="hero-left-bottom">
              <div className="hero-bottom-left">
                <div className="top-area">
                  <h3>Spent time</h3>
                </div>
                <div className="area-chart">
                  <AreaChart width={300} height={130} data={productSales4}>
                  <XAxis dataKey="name"/>
                  <Tooltip content={<CustomTooltip/>}/>
                  <Area type='monotone' stroke='#FF392B' fill='white' dataKey='maize' stackId="1"/>
                  <Area type='monotone' stroke='#3326AE' fill='#F4F5FF' dataKey='grits' stackId="2"/>
                  </AreaChart>
                </div>
              </div>
              <div className="hero-bottom-right">
                <ProfileCard/>
                <p>How to properly manage your personal budget?</p>
                <div className="icons-area">
                  <IconComponent icon={<PiPlayCircleFill color='blue'/>} text='video'/>
                  <IconComponent icon={<PiClock color='cyan'/>} text='15 min'/>
                  <IconComponent icon={<FaStar color='#FF392B'/>} text='12 likes'/>
                </div>
                <div className="timeline">
                  <span>5 days ago</span>
                  <div className='connect'>
                    <span>connect</span>
                    <FaGreaterThan/>
                  </div>
                </div>
                </div>
            </div>
  </div>
          
  {/* ---------------Right hand side panel--------------------*/}
       <div className={`${activeData === 'profile' ? 'hero-right mobile-active':'hero-right'}`}>
            <div className="circular-progress">
              <CircularProgressbar value={38} text={'38%'}/>
              <Button className='circle-progress-value' text='$10,600' color='#3326AE'/>
            </div>
            <div className="card-option">
              <IconComponent icon={<SlOptions/>} text='My Card'/>
              </div>
              <div className="card-design">
              <div className="card-details">
              <div className="top-card-details">
              <div className="logo"></div>
                  <RiVisaLine/>
                </div>
                <div className="middle-card-details">
                <span>....</span>
                <span>....</span>
                  <span>....</span>
                  <span>9546</span>
                  </div>
                  <div className="bottom-card-details">
                  <span>Alex Smith</span>
                  <span>07/24</span>
                  </div>
                  </div>
                  </div>
                <div className="transaction-area">
                <IconComponent icon={<CgAddR color='#FF392B'/>} text='Transaction'/>
                <div className="transaction-details">
                <TransactionData icon={<FaTaxi/>} item='Taxi' date='01:21 PM' price='-$9,20'/>
                <TransactionData icon={<GiShoppingBag/>} item='Shpping' date='11:15 PM' price='-$142.00'/>
                  <TransactionData icon={<RiNetflixFill/>} item='Netflix' date='Jan 10, 2020' price='-$24,99'/>
                </div>
              </div>
  </div>
        </div>
      </div>
    </div>
  )
}

export default App
