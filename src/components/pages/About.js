import React from "react";

function About(){
    function SkillsComponent({ skill, experienceLevel }){
        return(
            <li>
                {skill}
                <br />
                Experience Level : {experienceLevel}
            </li>
        )
    }
    
    return(
        <div id="about">
            <h1>About me, Haki</h1>
            <p className="intro">
                A Multi-Talented Individual
            </p>
            <div className="scroll-container">
                <div id="life" className="scroll-section" >
                    <p className="panel">
                        Hailing from Atlanta, Georgia, I am a software engineer and self-taught illustrator and game developer.
                        I started drawing at a young age, and, after discovering the Super Nintendo, tinkered in various game engines
                        and software all through grade school.
                    </p>
                </div>
                <div id="education" className="scroll-section" >
                    <p className="panel">
                        I completed high school in Marietta, GA in 2008. Shortly thereafter, I enrolled at the Savannah
                        College of Art and Design and studied game development. Throughout college I supported myself by taking freelance
                        illustration jobs, and when traditional schooling proved to be too expensive, I left, and privately continue my
                        studies autodidactically, teaching myself various technologies such as C#, JavaScript, Unity 3D and Unreal Engine.
                    </p>
                    <p className="panel">
                        I recently graduated Flatiron School's Software Engineering program where I tightened up my JavaScript 
                        knowledge and learned various other tech, including Ruby on Rails, PostgreSQL, and React.
                    </p>
                </div>
                <div id="experience" className="scroll-section" >
                    <p className="panel">
                        With nearly thirteen years as a freelance illustrator, I have a proven track record of open 
                        collaboration to yield truly outstanding results. Being a working artist forced me to hone my 
                        creative thinking, problem solving and organizational skills to a razor's edge. Complete with  
                        a decade in the food, beverage and hospitality industry and I am well experienced with 
                        satisfying the needs of many working entities.
                    </p>
                    <p className="panel">
                        My formal studies, both at SCAD and Flatiron, have given me extensive experience learning and 
                        utilizing various technologies to create a bevy of different experiences and tools.
                    </p>
                    <ul id="skills-list">
                        <h3>Skills and Abilities</h3>
                        <SkillsComponent skill={"Drawing"} experienceLevel={"Solid"} />
                        <SkillsComponent skill={"React"} experienceLevel={"Journeyman"} />
                        <SkillsComponent skill={"Javascript"} experienceLevel={"Experienced"} />
                        <SkillsComponent skill={"SQL"} experienceLevel={"Novice"} />
                        <SkillsComponent skill={"Rails"} experienceLevel={"Journeyman"} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;