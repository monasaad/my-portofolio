import AboutCom from "./AboutCom"

function About(){
    return(
        // "#EFF0F0"
        <div id= "about" style={{backgroundColor: "#f7fafc", right:"0" }}>
        <div class="container">
            <h2>About me</h2>
            <p style={{margin: "10px 0 30px 0"}}>
            A UI Designer and Front End Developer, who enjoys designing and developing responsive websites.
</p>
            
            <h3>education & experience </h3>
            <AboutCom
                date="Aug. 2017"
                para="Summer Training at "
                company="Gulf Union Cooperative Insurance Co."
            />
            <AboutCom
                date="Nov. 2017"
                para="Front End Developer Nanodegree at "
                company="Misk Foundation"
            />
            <AboutCom
                date="Aug. 2018"
                para="Summer Training at"
                company="ISCOSA"
            />
            <AboutCom
                date="Jul. 2019"
                para="COOP Training at"
                company="Imam Abdulrahman Bin Faisal University"
            />
            
            <AboutCom
                date="May 2020"
                para="Computer Science Bachelor Degree from"
                company="Imam Abdulrahman Bin Faisal University"

            />
            <AboutCom
                date="Dec. 2020"
                para="System Analysis Trainee at"
                company="Imam Abdulrahman Bin Faisal University"

            />
            <AboutCom
                date="Feb. 2021"
                para="UI/UX Design Training Program at"
                company="National Information Technology Academy"

            />
            <AboutCom
                date="Present"
                para="UI/UX Designer and Front End Developer at"
                company="Axenda"

            />

            <h3>paper publication </h3>
                <ul>
                    <li><p>CAPEs Advisory: A Conversational Agent Based on NLP Techniques for Professional Examinations Advisory</p></li>
                    <li><p>Predicting Student Academic Performance using Support Vector Machine and Random Forest</p></li>
                </ul>
            </div>
        </div>
    );
}

export default About;