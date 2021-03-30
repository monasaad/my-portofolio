import { ExternalLink } from 'react-external-link';

function WorkProb(probs){
    return(
    <div>
        <div>
            <div class="work_container">
                <section id="brief" style={{marginTop: "200px", marginBottom: "50px"}}>
                    <h1>{probs.title}</h1>
                    <p style={{color: "gray", display:"inline"}}>{probs.para}</p>
                    <ExternalLink href={probs.link}
                        style={{ display:"inline", fontWeight:"900", textDecoration:"underline", 
                        textTransform: "lowercase" , fontSize:"1rem"}}>
                        {probs.linktitle}
                    </ExternalLink>
                </section>
            </div>
        </div>

        <div style={{backgroundColor:"#f7fafc"}}>
            <div class="work_container">
                
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active">
                            <img src={probs.img1} class="d-block w-100" alt="..."/>
                        </div>

                        <div class="carousel-item">
                            <img src={probs.img2} class="d-block w-100" alt="..."/>
                        </div>

                        <div class="carousel-item">
                            <img src={probs.img3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                   
                    
                </div>

            </div>
        </div>
    </div>
    );
}

export default WorkProb;