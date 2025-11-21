
// import React, { useState, useEffect } from "react";
// import Banner from "../components/Banner";
// import ProductListing from "./ProductListing"; // ✅ import your listing page

// const Home = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsMobile(window.innerWidth <= 768);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   return (
//     <>
//       {isMobile ? <ProductListing /> : <Banner />}
//     </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import ProductListing from "./ProductListing";
import Footer from "../components/Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          {/* 📱 Mobile View: show all products */}
          <ProductListing showAll={true} />
        </>
      ) : (
        <>
          {/* 🖥️ Desktop View: show banner */}
          <Banner />
        </>
      )}
    </>
  );
};

export default Home;
