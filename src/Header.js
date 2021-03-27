import { Link, BrowserRouter as Router } from "react-router-dom";

function Header() {
    return (
        <Router>
        <header style={{top:"0", position: "fixed", backgroundColor: "white", borderBottom: "3px solid lightgray", width:"73%", padding: "20px"}}>
                            <Link to='/'>Mona Alotaibi</Link>

            {/* <a href="">Mona Alotaibi</a> */}
                <span style={{float: "right"}}>
                <Link to='/'>About me</Link>
                    {/* <p href="" >About me</p>
                    <p href="" class="left_margin">My work</p>
                    <a href="" class="left_margin">Contact</a> */}
                </span>
        </header>
        </Router>
    );
  }
  
  export default Header;