import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ProductContextProvider } from "./context/productContext";
import { ContactUs } from "./pages/contact Us/contact-us";
import { Success } from "./pages/success page/success";
import { Failure } from "./pages/success page/failure";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/failure" element={<Failure />}></Route>
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
