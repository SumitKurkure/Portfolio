import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className='box-1'>
        <div className="slot-1">
          <span className='slot-1-text'>Building Stunning Online Experiences
            That Make An Impact
          </span>
          <div class="wrapper">
            <div class="static-txt">With Our</div>
            <ul class="dynamic-txts">
              <li><span>STRATEGIES</span></li>
              <li><span>PLANNING</span></li>
              <li><span>ANALYTIC</span></li>
              <li><span>STAGES</span></li>
            </ul>
          </div>
          <button className='btn'>Contact Us</button>
        </div>
        <div className="slot-2">
          <img src="group.png" alt="" />
        </div>
      </div>
      <div className="box-2">
        <div className="slot-1">
          <div className="card-1">
            <span>Helped</span>
            <span>20+</span>
            <span>Client</span>
          </div>
          <div className="card-2">
            <span>Experiene</span>
            <span>4+</span>
            <span>Years</span>
          </div>
        </div>
        <div className="slot-2">
          <img src="profile.png" alt="" />
        </div>
        <div className="slot-3">
          <div className="card-1">

          </div>
          <div className="card-2">

          </div>
        </div>

      </div>
    </div>
  )
}
export default Home;