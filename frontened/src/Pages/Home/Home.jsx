import React, { useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';

function Home() {
  const [category, setCategory] = useState("ALL");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setCategory} />
      <FoodDisplay  category ={category}/>
      <AppDownload />
    </div>
  );
}

export default Home;
