import React from 'react'
import CarProduto from './CarProduto'

function PageProduto() {
  return (
    <div id='produtos' className='page-container'>
      <h2 className='section-title-center'>Catalogo de Produtos</h2>
      <div className='card-list-container'>
        <CarProduto />
        <CarProduto />
        <CarProduto />
        <CarProduto />
      </div>
    </div>
  )
}

export default PageProduto
