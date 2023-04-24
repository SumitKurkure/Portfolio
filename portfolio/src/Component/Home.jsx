import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className='box-1 intro-info'>
        <div className="slot-1">
          <span className='slot-1-text'>Turing Vision Into Reality With Code and Design
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
          <div className="description">
            <span>Backed with vast experience and fully up to date skills set, at Enuke Software offer the best in class E-Prescription solution</span>
          </div>
          <button className='btn'>Contact Us</button>
        </div>
        <div className="slot-2">
          <img src="ss.png" alt="" />
        </div>
      </div>
      <div className="box-2 services-card">
        <div className='card-grp'>
          <div className="card">
            <a >
              <div><img className='card-img' src="group.png" alt="" /></div>
              <div className='title' >Developement</div>
              <div className='description'>
                Nextjs Tutorial: Build a Mobile Responsive Portfolio with Tailwind CSS and Framer-motion
              </div>
            </a>
          </div>
          <div className="card">
            <a >
              <div><img className='card-img' src="group.png" alt="" /></div>
              <div className='title' >Design</div>
              <div className='description'>
                Nextjs Tutorial: Build a Mobile Responsive Portfolio with Tailwind CSS and Framer-motion
              </div>
            </a>
          </div>
          <div className="card">
            <a >
              <div><img className='card-img' src="group.png" alt="" /></div>
              <div className='title' >Growth</div>
              <div className='description'>
                Nextjs Tutorial: Build a Mobile Responsive Portfolio with Tailwind CSS and Framer-motion
              </div>
            </a>
          </div>
          <div className="card">
            <a >
              <div><img className='card-img' src="group.png" alt="" /></div>
              <div className='title' >Marketing</div>
              <div className='description'>
                Nextjs Tutorial: Build a Mobile Responsive Portfolio with Tailwind CSS and Framer-motion
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="box-3 experience">
        <div className='slot-1'>
          <div className="title">Experience</div>
          <div className="main-heading">4+ Years</div>
        </div>
        <div className='slot-2'>
          <div className="title">Projects</div>
          <div className="main-heading">20+</div>
        </div>
        <div className='slot-3'>
          <div className="title">Rating</div>
          <div className="main-heading">4.9+</div>
        </div>
        {/* <div>
          <div className="title"></div>
          <div className="main-heading"></div>
        </div> */}
      </div>
    </div>
  )
}
export default Home;