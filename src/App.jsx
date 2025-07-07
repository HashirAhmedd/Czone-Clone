import "./App.css"
import Footer from "./components/UI/Footer"
import Navbar from "./components/UI/Navbar"
import ProductList from "./components/UI/ProductList"
import QuickView from "./components/UI/QuickView"

export default function App() {
  return (
    <>
    <Navbar />
    <QuickView />
    <ProductList />
    <Footer />
    </>
  )
}
