import Header from './components/Header';
import ProductImages from './components/ProductImages';
import ProductDetails from './components/ProductDetails';
import { CartContextProvider } from './store/CartContext';
import './index.css'

function App() {

  return (
    <CartContextProvider>
      <Header />
      <main className="flex flex-col xl:flex-row items-center xl:px-40 xl:pt-20 xl:pb-[136px]">
        <ProductImages />
        <ProductDetails />
      </main>
    </CartContextProvider>
  )
}

export default App