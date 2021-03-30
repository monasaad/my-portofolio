import Work from './Work';
import About from './About';
import Contact from './Contact';
import { Link, BrowserRouter as Router, Route, useHistory} from "react-router-dom";

function Main(){
    const history = useHistory();

    return(
        <div style={{backgroundColor: "white"}}>
            <div class="container">
                <section id="brief" style={{marginTop: "200px"}}>
                    <h1>Hi, I'm Mona 👋  
                        <span class="block"> UI/UX Designer & </span>
                        <span class="block"> Front End Developer</span>
                        <span class="block"> Based in Saudi Arabia</span>
                    </h1>
                </section>

                <div id="work" style={{marginTop: "200px"}}>
                    <h2>My work</h2>
                    
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        
                        <Link onClick={()=> history.push("/DarbV1")}>
                            <Work  src="./images/drbv1.1.svg" name="Darb V1"/>
                        </Link>
                        
                        <Link onClick={()=> history.push("/DarbV2")}>
                            <Work  src="./images/drbv2.1.svg" name="Darb V2"/>
                        </Link>

                        <Link onClick={()=> history.push("/Gym")}>
                            <Work  src="./images/gym1.svg" name="Gym Business"/>
                        </Link>
                    </div>
                    <div style={{display: "flex"}}>
                        
                        <Link onClick={()=> history.push("/Cal")}>
                            <Work  src="./images/cal1.svg" name="Academic Weekly Planner"/>
                        </Link>

                        <Link onClick={()=> history.push("/Info")}>
                            <Work  src="./images/info1.svg" name="Infographic design"/>
                        </Link>
                        
                        <Work c="Coming Soon"/>
                        {/* <Link onClick={()=> history.push("/works")}>
                            
                        </Link>  */}

                    </div>

                </div>
            </div>
            <About/>
            <Contact/>
        </div>
    );
}

export default Main;