import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Deposit from "./components/DepositWithTransactions";
import Withdraw from "./components/WithdrawWithTransactions";
import UserAccount from "./components/UserAccount";
import AllData from "./components/AllData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="depositWith" element={<Deposit />} />
            <Route path="withdrawWith" element={<Withdraw />} />
            <Route path="myAccount" element={<UserAccount />} />
            <Route path="allData" element={<AllData />} />
          </Route>
        </Routes>
      </HashRouter>
      <div>
        <ToastContainer></ToastContainer>
      </div>
      <Footer />
    </>
  );
}

export default App;
