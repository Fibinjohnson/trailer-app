
import './App.css';

import Navbars from './COMPONENTS/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./COMPONENTS/Banner";
import Rowpost from './COMPONENTS/Rowpost';
import { originals ,action} from './url';

function App() {
  return (
    <div className="App">
      
        <Navbars/>
        <Banner/>
        <Rowpost title='Action movies' URL={action} />
        <Rowpost title="Netflix originals" isSmall URL={originals}  />
      
    </div>
  );
}

export default App;
