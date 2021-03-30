import { ExternalLink } from 'react-external-link';

function Contact(){
    return(
        <div id="contact" style={{backgroundColor: "#353636"}}>
        <div class="container">
            <h2 style={{color: "white"}}>Contact with me</h2>
            <p style={{color: "darkgrey"}}>You can write your message in the bleow 
            form (currently not avaibale) or reach me on
            <ExternalLink href="https://linkedin.com/in/mona-alotaibi"
            style={{ color:"white", fontWeight:"900", textDecoration:"underline", 
            marginLeft:"5px", textTransform: "capitalize" , fontSize:"1rem", fontStyle: "italic"
}}>
            LinkedIn
            </ExternalLink></p>
            <form>
                <input disabled type="text" placeholder="Your name"/>
                <input disabled type="email" placeholder="Your email"/>
                <textarea disabled class="block"  placeholder="Your message"></textarea>
                <button disabled class="block" name="Send" value="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default Contact;