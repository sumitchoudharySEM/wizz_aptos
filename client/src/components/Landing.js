'use client';
import React from 'react'
import Topnav from './landing_components/Topnav'
import Topleft from './landing_components/Topleft';
import Topbar from './profile_components/Topbar';
import Toprigth from './landing_components/Toprigth';
import Mid from './landing_components/Mid';
import Bottom from './landing_components/Bottom';

const Landing = () => {
  return (
    <>
    <div className='bg-[#17151A] h-[100%] '>
        <Topnav/>
        <div className='flex flex-col md:flex-row'>
            <Topleft/>
            <Toprigth/>
        </div>
        <div className='pb-10 -mt-3'>
          <Mid/>
        </div>
        <Bottom/>

        
        
    </div>
    </>
  )
}

export default Landing