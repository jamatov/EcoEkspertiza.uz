import React from 'react'
import Diu from '../Home/Diu'
import TempusActivity from './Tempusactivity'

const Activity = () => {
  return (
    <section className='Activity'>
      <div className="containerr">
        <TempusActivity/>
        <Diu/>
      </div>
    </section>
  )
}

export default Activity