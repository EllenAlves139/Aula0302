import React from 'react'
import '/src/CSS/PageSobre.css';
function PageSobre() {
  return (
    <div>
        <section id='sobre' className='section-card-container'>
      <h1 className='section-title-center'>Pagina Sobre</h1>
      <p className='about-paragraph'>Esta é a pagina sobre do nosso projeto.</p>
      <ul className='about-list'>
        <li>Paulo Santos-CEO</li>
        <li>Maria Oliveira-CTO</li>
        <li>João Silva-CFO</li>
        <li>Ana Costa-Diretora de Marketing</li>
      </ul>
      </section>
    </div>
  )
}

export default PageSobre
