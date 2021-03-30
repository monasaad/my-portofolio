import { BrowserRouter as Router, withRouter, useHistory } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

    const history = useHistory();

    return (
        <div style={{borderBottom:"3px solid white", boxShadow: "0 7px 20px -20px grey", zIndex:"2", backgroundColor: "white",top:"0", position: "fixed", height: "80px", width:"100%"}}>
        <header>
            <Router>
                <Link onClick={()=> history.push("/")}>Mona Alotaibi</Link>
            </Router>
                <span style={{float: "right"}}>
                <Router>
                    {/* <Link onClick={()=> history.push("/works")}>My work</Link> */}
                    <Link class="left_margin" to="/#work">My work</Link>
                    <Link class="left_margin" to="/#about">About me</Link>
                    <Link class="left_margin" to="/#contact">Contact</Link>
                    </Router>
                </span>
                </header>
        </div>
    );
  }
  
  export default Header;