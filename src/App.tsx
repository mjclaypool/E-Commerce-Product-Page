import Header from './components/Header';
import ProductImages from './components/ProductImages';
import ProductDetails from './components/ProductDetails';
import './index.css'

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col xl:flex-row items-center xl:px-40 xl:pt-20 xl:pb-[136px]">
        <ProductImages />
        <ProductDetails />
      </div>
    </>
  )
}

export default App