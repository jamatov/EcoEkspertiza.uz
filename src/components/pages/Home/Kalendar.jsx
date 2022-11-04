import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react'
import Pagoda from '../../../assets/images/icons/pagoda.svg'
import Opros from '../../../assets/images/icons/opros.svg'
import Form from 'react-bootstrap/Form';

export default function Kalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <section className='Kalendar' data-aos="fade-right">
      <div className="containerr">
        <div className='kalendar-info'>
          <Calendar onChange={onChange} value={value}/>
          
          {/* <img src={Pagoda} alt="" /> */}

          <div className='opros'>
            <div className="opros-head">
              <p>Опрос</p>
            </div>
            <div className="opros-main">
              <p>Вам нравиться новый дизайн сайта</p>
              <Form>
                {['radio'].map((type) => (
                  <div key={`blog-${type}`} className="mb-3">
                    <Form.Check
                      className='d-block'
                      inline
                      label="Отлично"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className='d-block'
                      inline
                      label="Хорошо"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />

                    <Form.Check
                      className='d-block'
                      inline
                      label="Удовлетворительно"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>

              <div className="opros-buttons">
                <button className='opros-button'>
                  Голосовать
                </button>
                <button className='opros-button'>
                  Результаты
                </button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
