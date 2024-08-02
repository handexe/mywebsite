import React from "react";
import FirstCard from '../components/FirstCard';
import SecondCard from '../components/SecondCard';
import ThirdCard from '../components/ThirdCard';

function Home({isAuth}) {
  return (
    <div>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
}

export default Home;
