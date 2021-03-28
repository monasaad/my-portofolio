import Header from './Header';
import Main from './Main';
import Works from './Works';
import Footer from './Footer';

import { Link, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/" exact component={Main}/>
        <Route path="/works" exact component={Works}/>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
