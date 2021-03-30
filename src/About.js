import AboutCom from "./AboutCom"

function About(){
    return(
        // "#EFF0F0"
        <div id= "about" style={{backgroundColor: "#f7fafc" }}>
        <div class="container">
            <h2>About me</h2>
            <p style={{margin: "10px 0 30px 0"}}>A UI Designer and Front End Developer,  I enjoy designing and developing responsive website. I like to create minimal and
I completed my bachloer degree on Computer Sience in May 2020, during and after my study I have taken training and completed courses
I have taken planty of training and course which are related to my field, 
I have done data entry, desktop application, web development and UI designing
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
                date="2018"
                para="Summer Training at"
                company="ISCOSA"
            />
            <AboutCom
                date="2019"
                para="COOP Training at"
                company="Imam Abdulrahman Bin Faisal University"
            />
            
            <AboutCom
                date="2020"
                para="Computer Science Bachelor Degree from"
                company="Imam Abdulrahman Bin Faisal University"

            />
            <AboutCom
                date="2020"
                para="System Analysis Trainee at"
                company="Imam Abdulrahman Bin Faisal University"

            />
            <AboutCom
                date="2021"
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