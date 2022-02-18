import React from 'react';
import Header from '../../components/Header/Header';
import UnitListOurTown from '../../components/UnitListOurTown/UnitListOurTown';
import FooterComp from '../../components/Footer/Footer'
import '../PBLCoursePage/PBLCoursePage.css'


export default function OurTownCoursePage(){
    return(
        <>
            <Header />
            <div className="course-header">
                <h1>Community Connected Learning For Social Impact</h1>
            </div>
            <div className="course-overview">
                <div className="course-left">
                    <div className="course-intro">
                        <p>Originally designed as supporting materials for the Creative Education Trust's Our Town challenge, Edge created a bank of facilitation guides and resources for those leading a community-connected learning project focused on social impact. </p>
                        <div className="course-video">Video</div>
                        <br />
                        <div>This is organised into categories with which schools are likely to structure a community social impact project.</div>
                        <ul> 
                            <li><h3>Unit 1: Launch Events and Opening Sessions</h3>
                                <ul>
                                    <li><span className="bold">Social action case studies.</span> Explore stories of young changemakers in action to inspire your students with project ideas and role models.</li>
                                    <li><span className="bold">Project launch event.</span> Students understand what the project involves and feel empowered to make a difference in their community.</li>
                                    <li><span className="bold">Team building and identifying interests, values, strengths, and skills.</span> Students reflect on what issues matter to them, what impact they want to have, what they have to offer the community, and how they want to work together.</li>
                                </ul>
                            </li>
                            <br />
                            <li><h3>Unit 2: Community Mapping and Developing Initial Ideas</h3>
                                <ul>
                                    <li><span className="bold">Reflecting on community.</span> Students understand what makes up their community, what their community might need, and what their community cares about.</li>
                                    <li><span className="bold">Developing ideas.</span> Students investigate potential issues to focus on, generating initial suggestions and shortlisting ideas.</li>
                                    <li><span className="bold">Creating driving questions.</span> Students develop initial ideas for a driving question that they will answer through the course of the project.</li>
                                </ul>
                            </li>
                            <br />
                            <li><h3>Unit 3: Research and Engaging the Community</h3>
                                <ul>
                                    <li><span className="bold">What is a stakeholder?</span> Students understand what a stakeholder is and identify the stakeholders and potential partners for the issues they are considering.</li>
                                    <li><span className="bold">Engaging our community.</span> Students develop a plan on how to consult their community and relevant stakeholders. Students carry out interviews, questionnaires, or focus groups.</li>
                                    <li><span className="bold">Reviewing community consultation and research.</span> Students review the data from their community consultations and plan any further research they may need.</li>
                                    <li><span className="bold">Engaging experts, local organisations, or employers.</span> Project leads and students identify relevant experts or organisations, and plan how to approach them.</li>
                                </ul>
                            </li>
                            <br />
                            <li><h3>Unit 4: The Project</h3>
                                <ul>
                                    <li><span className="bold">Project design.</span> Students identify the issue that is likely to yield the most social impact and refine the driving question that will frame their project. Students investigate the root causes of the issue they have identified and design effective solutions that address causes rather than symptoms.</li>
                                    <li><span className="bold">Project critique discussion guide.</span> Project leads and students present on their project progress to members of the school and wider community, receiving feedback on how to develop their ideas further.</li>
                                </ul>
                            </li>
                            <br />
                            <li><h3>Unit 5: Student Submission and Reflection</h3>
                                <ul>
                                    <li><span className="bold">Student submission.</span> Students reflect on the project and choose how to present their learning and recommendations.</li>
                                </ul>
                            </li>
                            
                        </ul>
                     
                    </div>
                    
                    <div className="course-additional-text">
                    
                    </div>
                    <br />
                    <br />
                </div>
                <div className="course-right">
                    <UnitListOurTown />
                    
                </div>
            </div>
            <FooterComp />
            
            
        </>
    )
}