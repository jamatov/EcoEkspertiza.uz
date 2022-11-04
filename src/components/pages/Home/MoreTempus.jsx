import React from 'react'
import MoreTemousImg from '../../../assets/images/icons/commiteinfoimg1.png'
import MoreTempusSlider from './MoreTempusSlider'

export default function MoreTempus() {
  return (
    <section className='Moretempus'>
      <div className="containerr">
        <div className='moretempus-info'>
          <img className='moretempus-img' src={MoreTemousImg} alt="" />
          <div className='moretempus-info__info'>
            <h2>Sed pellentesque pellentesque.</h2>
            <p>Maecenas est auctor sed sit adipiscing duis nam enim, dui. Vulputate velit neque elit at. Porttitor in at duis id. Sem orci, orci nunc, semper eget leo, condimentum. Sapien, velit dolor, consequat, mauris bibendum sit. Donec ultricies egestas quam viverra ipsum faucibus pulvinar. Habitasse at risus egestas aliquet orci porta aliquet massa. Diam phasellus nulla pharetra lacus quam ornare. Risus, lacus scelerisque sapien placerat.</p>
            <p>Id eu fames bibendum quis in. Orci eget ultricies quis viverra varius tellus. Faucibus donec facilisis non purus dolor nunc massa quisque ultricies.</p>
            <p>Nunc, in gravida egestas venenatis. Massa volutpat adipiscing quis enim augue. Morbi augue viverra orci volutpat aliquet euismod sit accumsan at. Dictum netus sit a nisi.</p>
            <p>Duis tellus nec sagittis, ut lorem. Cursus tortor pellentesque varius arcu mattis volutpat amet. Pharetra enim, convallis in amet iaculis est. Laoreet elit, sed viverra id dolor erat justo, nibh facilisis. Enim, cursus convallis semper lobortis. Molestie justo, ac nisl scelerisque mauris. Suscipit mollis in et id id massa id. Vehicula hendrerit mauris semper nisl orci, consectetur sit. Montes, ornare penatibus cursus consequat venenatis nisl ac.</p>
            <p>Tortor faucibus lorem at sit purus pharetra ornare. Lacus, amet mauris scelerisque condimentum tincidunt nisl, fermentum in faucibus. Tellus eu tempus in amet, eu morbi lectus et. Urna cras laoreet facilisis dui urna imperdiet. Morbi feugiat tincidunt dignissim turpis. Lectus ultricies semper eget eleifend et, volutpat. Sit dictumst orci ut mattis etiam.</p>
          </div>
        </div>


        <div className="moretempus-info2">
          <h3>Mattis pellentesque est viverra est ipsum tempor, viverra. Varius volutpat quis neque porta neque.</h3>
          <p>Natoque imperdiet in egestas in diam fringilla arcu. Faucibus fusce pretium ultricies ornare volutpat vestibulum lectus id venenatis. Vehicula posuere sagittis semper porttitor tincidunt enim vitae quis magna. Neque congue rutrum sit turpis accumsan non pellentesque diam.</p>
          <p>Natoque imperdiet in egestas in diam fringilla arcu. Faucibus fusce pretium ultricies ornare volutpat vestibulum lectus id venenatis. Vehicula posuere sagittis semper porttitor tincidunt enim vitae quis magna. Neque congue rutrum sit turpis accumsan non pellentesque diam.</p>
          <p>Natoque imperdiet in egestas in diam fringilla arcu. Faucibus fusce pretium ultricies ornare volutpat vestibulum lectus id venenatis. Vehicula posuere sagittis semper porttitor tincidunt enim vitae quis magna. Neque congue rutrum sit turpis accumsan non pellentesque diam.</p>
          <p>Natoque imperdiet in egestas in diam fringilla arcu. Faucibus fusce pretium ultricies ornare volutpat vestibulum lectus id venenatis. Vehicula posuere sagittis semper porttitor tincidunt enim vitae quis magna. Neque congue rutrum sit turpis accumsan non pellentesque diam.</p>
          <p>Natoque imperdiet in egestas in diam fringilla arcu. Faucibus fusce pretium ultricies ornare volutpat vestibulum lectus id venenatis. Vehicula posuere sagittis semper porttitor tincidunt enim vitae quis magna. Neque congue rutrum sit turpis accumsan non pellentesque diam.</p>
          <img src={MoreTemousImg} alt="" />
        </div>

        <MoreTempusSlider/>
      </div>
    </section>
  )
}
