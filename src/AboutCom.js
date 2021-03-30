
function AboutCom(probs){
    return(
            // <div  style={{display: "flex"}}>
            //     <div style={{display: "flex", flexDirection:"column", marginRight:"20px"}}>
            //         <p style={{color: "#303132"}}>{probs.date}</p>
            //     </div>  

            //     <div style={{display: "flex", flexDirection:"column"}}>
            //         <p >{probs.para} <span style={{fontWeight: "bolder"}}>{probs.company}</span></p>
            //     </div>
            // </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td style={{minWidth: "100px"}}><p style={{color:"#303132"}}>{probs.date}</p></td>
                            <td><p> {probs.para}</p></td>
                            <td><p>{probs.company}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>

    );
}

export default AboutCom;