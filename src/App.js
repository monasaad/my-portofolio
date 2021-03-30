import Header from './Header';
import Main from './Main';
import Works from './Darb1';
import Footer from './Footer';
import Darb1 from './Darb1';
import Darb2 from './Darb2';
import Gym from './Gym';
import Cal from './Cal';
import Info from './Info';



import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
    
    <Router>
    <Header/>
        <Route path="/" exact component={Main}/>
        <Route path="/DarbV1" exact component={Darb1}/>
        <Route path="/DarbV2" exact component={Darb2}/>
        <Route path="/Gym" exact component={Gym}/>
        <Route path="/Cal" exact component={Cal}/>
        <Route path="/Info" exact component={Info}/>


        {/* <Route path="/works" exact component={Works}/>
        <Route path="/works" exact component={Works}/>
        <Route path="/works" exact component={Works}/> */}
        <Footer/>
    </Router>
    
    
    </div>
  );
}

export default App;
