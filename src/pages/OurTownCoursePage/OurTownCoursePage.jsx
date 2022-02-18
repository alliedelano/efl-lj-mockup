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
                            <li>Unit 1: Launch Events and Opening Sessions
                                <ul>
                                    <li><span className="bold">Social action case studies.</span> Explore stories of young changemakers in action to inspire your students with project ideas and role models.</li>
                                    <li><span className="bold">Project launch event.</span> Students understand what the project involves and feel empowered to make a difference in their community.</li>
                                    <li><span className="bold">Team building and identifying interests, values, strengths, and skills.</span> Students reflect on what issues matter to them, what impact they want to have, what they have to offer the community, and how they want to work together.</li>
                                </ul>
                            </li>
                            <br />
                            <li>KEEP GOING
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <br />
                            <li>KEEP GOING
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <br />
                            <li>KEEP GOING
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <br />
                            <li>KEEP GOING
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
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