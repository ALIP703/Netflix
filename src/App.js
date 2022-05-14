import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {animation,original,adventure} from './url'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Orginals" url={original}/>
      <RowPost title="Animation" isSmall url={animation}/>
      <RowPost title="Adventure" isSmall url={adventure}/>

    </div>
  );
}

export default App;
