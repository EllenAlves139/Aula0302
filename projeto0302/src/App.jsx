import React from 'react'
import Header from './Componets/Header';
import PageInicio from './Componets/pageInicio'; 
import PageProduto from './Componets/PageProduto';
import PageSobre from './Componets/PageSobre';
import PageContato from './Componets/PageContato';
import Footer from './Componets/Footer';
import '/src/CSS/global.css';
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <PageInicio />
        <PageProduto />
        <PageSobre />
        <PageContato />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    
  )
}

export default App
