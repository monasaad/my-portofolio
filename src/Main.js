import Work from './Work';

function Main(){
    return(
        <div>
        <section id="brief" style={{marginTop: "250px", marginBottom: "150px"}}>
            <h1>Hi, I'm Mona 👋</h1>
            <h1>UI/UX Designer & </h1>
            <h1>Front End Developer</h1>
            <h1>Based in Saudi Arabia</h1>

        </section>
        <section>
            <h2>My work</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Work src="./images/Axenda.svg" name="Gym"/>
                <Work src="./images/Axenda.svg" name="Gym"/>
                <Work src="./images/Axenda.svg" name="Gym"/>
            </div>
        </section>
        </div>
    );
}

export default Main;