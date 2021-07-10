import '../src/App.css';
import '../src/Styles/style.css'

import Header from './Components/Header';
import Aside from './Components/Aside';
import Main from './Components/Main';
function App() {
  return (
    <div className="App">
      <div>
        <Aside></Aside>
        <Header></Header>
      </div>
      <Main></Main>
    </div>
  );
}

export default App;
