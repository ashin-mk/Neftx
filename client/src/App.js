import Neftx from './component/Neftx';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Neftx/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
