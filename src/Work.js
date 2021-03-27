import { Link, BrowserRouter as Router} from "react-router-dom";


function Work(){
    return(
        <Router>
        <section>
        <h2>My work</h2>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <span style={{textAlign: "center"}}>
            {/* <link to="./"></link> */}
            <Link to='Works'>Go to Aboutpage</Link>
                <a href="./Works.js">
                    <div style={{width: "350px", height: "250px", backgroundColor: "gray"}}></div>
                    <h3>GYM business</h3>
                </a>
            </span>
        </div>
    </section>
    </Router>
    );
}

export default Work;