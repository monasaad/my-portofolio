import { Link, BrowserRouter as Router, Route, useHistory} from "react-router-dom";


function Work(probs){
    const history = useHistory();

    return(
        
    <Router>
    <span style={{textAlign: "center"}}>
                {/* this must change */}
                    <Link onClick={()=> history.push("/works")}> 
                        <img style={{padding: "10px"}} src={probs.src} width="320px"/>
                        <h3>{probs.name}</h3>
                    </Link>
                </span>
        {/* <section style={{backgroundColor: "lightgrey"}}>
            <h2>My work</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{textAlign: "center"}}>
                    <Link onClick={()=> history.push("/works")}> 
                        <img src="./images/Axenda.svg" width="350px"/>
                        <h3>{probs.name}</h3>
                    </Link>
                </span>
            </div>
        </section> */}
    </Router>
    );
}

export default Work;