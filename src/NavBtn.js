import { BrowserRouter as Router, withRouter, useHistory } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
function NavBtn() {
    function openNav() {
        document.getElementById("list").style.width = "40vw";
        document.getElementById("listh").style.display = "none";
    }
    
    function closeNav() {
        document.getElementById("list").style.width = "0";
        document.getElementById("listh").style.display = "inline";
    }

    return (
        <div class="nav_btn">
            <span id="listh" class="ham">
              <img onClick={openNav} src="./images/list.svg" width='20px'/> 
            </span>

            <span class="list">
                <div id='list' style={{transition:'0.5s', position: 'fixed', width:'0',height:'100%', top: '0', right: '0', backgroundColor: '#303132'}}>
                    
                    <div style={{marginTop:'200px'}} >
                        
                        <img onClick={closeNav} src='./images/close.svg' width='15px' style={{position: 'absolute', top:'30px', left:'15px'}}/>
                    
                        <Router>
                        <span style={{display:"flex", flexDirection:"column", paddingLeft:"35%"}}>
                            <Link style={{padding:"5% 0", color:"white"}} class="left_margin" to="/#work">My work</Link>
                            <Link style={{padding:"5% 0", color:"white"}} class="left_margin" to="/#about">About me</Link>
                            <Link style={{padding:"5% 0", color:"white"}} class="left_margin" to="/#contact">Contact</Link>
                            </span>
                        </Router>
                    </div>
                </div>
            </span>
        </div>
    );
  }

  export default NavBtn;