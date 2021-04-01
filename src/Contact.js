import { ExternalLink } from 'react-external-link';

function Contact(){
    return(
        <div style={{width:"100%"}} id="contact" style={{backgroundColor: "#353636"}}>
            <div class="container">
                <h2 style={{color: "white"}}>Contact with me</h2>
                <p style={{color: "darkgrey"}}>
                    You can write your message in the below form (currently not available) or reach me on
                    <ExternalLink href="https://linkedin.com/in/mona-alotaibi"
                    style={{ color:"white", fontWeight:"900", textDecoration:"underline", 
                    marginLeft:"5px", textTransform: "capitalize" , fontSize:"1rem", fontStyle: "italic"}}>
                        LinkedIn
                    </ExternalLink>
                </p>
                
                <form>
                    <span class="inputs">
                        <input disabled type="text" placeholder="Your name"/>
                        <input disabled type="email" placeholder="Your email"/>
                    </span>
                    <textarea disabled class="block"  placeholder="Your message"></textarea>
                    <button disabled class="block">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;