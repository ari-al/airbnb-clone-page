import '../src/App.css';
import '../src/Styles/style.css'

import Header from './Components/Header';
import TopNotice from './Components/TopNotice';
import Main from './Components/Main';
import React, {useState} from 'react';


function App() {
  const [fixed, setFixed] = useState("false");

  function FixedHeader(){
    if(window.scrollY>0){
      setFixed("true");
      console.log(fixed);
    }else{
      setFixed("false");
    }
    return 0;
  }
  
  window.onscroll = function(e) {
    e.preventDefault();
    FixedHeader();
    return 0;
  };

  return (
    <div className="App">
      <div style={{position: "relative", zIndex: "1"}}>
        <TopNotice></TopNotice>
        <Header fixed={ fixed }></Header>
      </div>
      <div style={{ minHeight: "1080px", position: "absolute", top: "0px", width: "100%"}}>
        <Main></Main>
      </div>
    </div>
  );
  
}

export default App;
