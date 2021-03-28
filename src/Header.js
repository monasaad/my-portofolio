import { Link, BrowserRouter as Router,Route, useHistory } from "react-router-dom";

function Header() {

    const history = useHistory();

    return (
        <header style={{top:"0", position: "fixed", backgroundColor: "white", borderBottom: "2px solid black", width:"100%", padding: "40px 5px 15px 5px", maxWidth: "1000px"}}>
            <Link onClick={()=> history.push("/")}>Mona Alotaibi</Link>
                <span style={{float: "right"}}>
                    <Link onClick={()=> history.push("/works")}>My work</Link>
                    <Link class="left_margin" onClick={()=> history.push("/works")}> About me</Link>
                    <Link class="left_margin" onClick={()=> history.push("/works")}>Contact</Link>
                </span>
        </header>
    );
  }
  
  export default Header;