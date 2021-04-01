import { BrowserRouter as Router, withRouter, useHistory } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import NavBtn from "./NavBtn"

function Header() {

    const history = useHistory();

    return (
        <div style={{borderBottom:"3px solid white", boxShadow: "0 7px 20px -20px grey", zIndex:"2", backgroundColor: "white",top:"0", position: "fixed", height: "80px", width:"100%"}}>
            <header style={{display:"flex", justifyContent:"space-between"}}>
            <span>
                <Router>
                    <Link onClick={()=> history.push("/")}>Mona Alotaibi</Link>
                </Router>
            </span>

                <span >
                    <Router>
                        {/* <Link onClick={()=> history.push("/works")}>My work</Link> */}
                        <Link class="left_margin hide" to="/#work">My work</Link>
                        <Link class="left_margin hide" to="/#about">About me</Link>
                        <Link class="left_margin hide" to="/#contact">Contact</Link>
                    </Router>
                    <NavBtn/>
                </span>

                
            </header>
        </div>
    );
  }
  
  export default Header;