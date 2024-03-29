import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../app/globals.css'
import { Layout } from './Layout/Layout'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { ProductPage } from './Pages/ProductPage'
import { ProductProvider } from './contexts/PoductContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Product" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
)
