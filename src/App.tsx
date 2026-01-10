import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/shared/Loder";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/pages/Home";
import ServiceListing from "./components/pages/ServiceListing";
import Checkout from "./components/pages/Checkout";

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services/:category/:subcategory"
            element={<ServiceListing />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
