import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_PATH } from '../../constants/tools';

export default function MyVerticallyCenteredModal(props) {
  const [value, setValue] = useState("")
  const handleClick = async e => {
    let a = e.target.value
    await axios.get(API_PATH + `/uz/news/calculator/?id=${a}`)
      .then((res) => {
        setValue(res.data.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Online calculator
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='calculator-title'>8-bob</h4>
        <p className='calculator-text'>
          Loyihaoldi va loyiha xujjatlari, atrof tabiiy muxitning xolatiga va fuqorolarning sog'lig'iga salbiy ta'sir ko'rsatuvchi ishlab turgan korxonolar va boshqa obyektlar, maxsus xuquqiy rejimli obyektlar davlat ekologik ekspertizasidan o'tkazilganligi uchun xaq to'lash miqdori ularning ularning quyidagi toifalarga mansub faoliyat turlari bo'yicha atrof tabiy muxitga ta'sir ko'rsatishi toifalariga muvofiq :  
        </p>
        <select className='calculator-select' onChange={e => handleClick(e)}>
          <option>Bazoviy xioblash bo'yicha tanlash</option>
          <option value="1">1 - toifasiga mansub faoliyati uchun 25 baravar</option>
          <option value="2">2 - toifasiga mansub faoliyati uchun 15 baravar</option>
          <option value="3">3 - toifasiga mansub faoliyati uchun 7,5 baravar</option>
          <option value="4">4 - toifasiga mansub faoliyati uchun 0,5 baravar</option>
        </select>
        {value && <p className='calculator-price'>{value} so'm</p>}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}
