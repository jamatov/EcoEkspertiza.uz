import React from 'react'
import Pdf from '../../../assets/images/icons/pdf-img.svg'
import Doc from '../../../assets/images/icons/doc-img.svg'

export default function Decrees() {
  return (
    <section className='Decrees' data-aos="fade-right">
      <div className='containerr'>
        <div className='decrees-info'>

          <div className='decrees-data'>
            <h3>08</h3>
            <h4>December</h4>
            <p>1992</p>
          </div>

          <div className="decrees-title">
            <p>Конституция Республики Узбекистан</p>
            <div>
              <img src={Pdf} alt="" />
              <img src={Doc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
