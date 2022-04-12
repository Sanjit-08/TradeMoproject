import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import "./styles/sass/main.scss";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";
import Products from "./components/Products";
import {useSelector,useDispatch} from "react-redux";
import {getProduct} from "./redux/productSlice";

function App() {
  const productdata = useSelector((state)=>state.product.data);
  console.log("Toolkit",productdata);
  const dispatch=useDispatch();
  
  return (
    <>
    <div>
      <Navbar />
      <Sidebar />

      <Products />
      <Footer />
    </div>
    </>
  );
}

export default App;
