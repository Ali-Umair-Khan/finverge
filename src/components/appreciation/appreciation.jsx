
import React from 'react'
import AppreciationCards from "./appCards";
import './appreciation.scss';

const Appreciation = () => {
  return (
    <div>
        <div className='hero__appreciation'>
            <h1>You dont have to take our word at face value; witness the accomplishments of businesses akin to your own.</h1>
            <div className='hero__appreciation_cards'>
                <AppreciationCards 
                text="''Our business has seen a significant increase in productivity since we started using the Growth app.''"
                name='Lionel Murray'
                company='Roger Friends'
                />
                <AppreciationCards 
                text="''As a small business owner, it's important to have a tool that can help me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place..''"
                name='Ted Smith'
                company='Piscars'
                />
                <AppreciationCards 
                text="''The dashboards and reporting feature has provided valuable insights into our performance and helped us make data-driven decisions. It's a game changer for us.''"
                name='Steve Todd'
                company='Rostar'
                />
            </div>
        </div>
    </div>
  )
}

export default Appreciation