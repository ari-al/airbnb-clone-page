import '../src/App.css';
import '../src/Styles/style.css'

import Header from './Components/Header';
import TopNotice from './Components/TopNotice';
import Main from './Components/Main';
import React, {useState, useEffect} from 'react';


function App(status) {
  const [fixed, setFixed] = useState("false");
console.log(fixed);
  function FixedHeader(){
    if(window.scrollY>0){
      setFixed("true");
    }else{
      setFixed("false");
    }
    return 0;
  }
  
  window.onscroll = function(e) {
    e.preventDefault();
    console.log(window.scrollY);
    FixedHeader();
    return 0;
  };

  return (
    <div className="App">
      <div style={{position: "relative", zIndex: "1"}}>
        <TopNotice></TopNotice>
        <Header fixed={ status.fixed }></Header>
      </div>
      <div style={{ minHeight: "1080px", position: "absolute", top: "0px", width: "100%"}}>
        <Main></Main>
      </div>
    </div>
  );
  
}

export default App;
