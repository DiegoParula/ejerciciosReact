import { useContext, useState } from "react"
import Products from "./components/Products"
import {products as initialProducts} from './mocks/products.json'
import Header from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./mocks/config"
import { FiltersContext } from "./context/filters"
import { useFilters } from "./hooks/useFilters"
import Cart from "./components/Cart"
import { CartProvider } from "./context/cart"



function App() {

  const {filterProducts} = useFilters() 

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <h1>La tienda</h1>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
