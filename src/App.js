import '../src/App.css';
import '../src/Styles/style.css'

import Header from './Components/Header';
import TopNotice from './Components/TopNotice';
import Main from './Components/Main';
function App() {
  return (
    <div className="App">
      <div style={{position: "relative", zIndex: "1"}}>
        <TopNotice></TopNotice>
        <Header></Header>
      </div>
      <div style={{ minHeight: "1080px", position: "absolute", top: "0px", width: "100%"}}>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
