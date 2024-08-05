import React from "react";
import FirstCard from '../components/FirstCard';
import SecondCard from '../components/SecondCard';
import ThirdCard from '../components/ThirdCard';
import Footer from "../components/Footer";

function Home({isAuth}) {
  return (
    <div>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <Footer/>
    </div>
  );
}

export default Home;
