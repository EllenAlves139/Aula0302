import React from 'react'
import '/src/CSS/CarProduto.css';


function CarProduto() {
  return (
    <div className='card-product'>
      <img src="https://m.media-amazon.com/images/I/71ppXBGTl9L._AC_SL1000_.jpg" alt=""  className='card-image'/>
      <h3 className='card-title'>Produtos Selecionados</h3>
      <span className='card-price'>R$1.000,00</span>
      <button className='card-button'>compar</button>
    </div>
  )
}

export default CarProduto
