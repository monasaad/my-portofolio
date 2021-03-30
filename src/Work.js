import { Link, BrowserRouter as Router, Route, useHistory} from "react-router-dom";


function Work(probs){
    const history = useHistory();
    return(
        <span>
            <div class="hov" style={{margin: "5px 10px 5px 0", width:"290px", height:"260px", backgroundColor: "#f7fafc", borderRadius:"5px"}}>
            <img style={{padding: "0" , borderRadius:"5px"}} src={probs.src} width="290px"/>
            <h3 style={{margin:"0", textAlign:"center"}}>{probs.name}</h3>
            <h3 style={{margin:"100px 0 0 0", textAlign:"center"}}>{probs.c}</h3>

            </div>
        </span>
    );
}

export default Work;