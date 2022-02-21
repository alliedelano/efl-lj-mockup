import React from 'react';
import Header from '../../components/Header/Header';
import UnitListOurTown from '../../components/UnitListOurTown/UnitListOurTown';
import FooterComp from '../../components/Footer/Footer';

export default function OurTownUnit1Page(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Community Connected Learning for Social Impact</h1>
                <h2>1. Launch Events & Opening Sessions</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitListOurTown />
                </div>
                <div className="course-content">                    
                    <div className="unit-video-intro">INTRO VIDEO</div>                    
                    <br />
                    <div>
                        <span className="question">Some intro text about this. Maybe some definitions or other helpful context. </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit labore distinctio tempora dolore, ipsum doloribus assumenda sit, nostrum dolores voluptatem consequuntur, quo saepe odio deleniti dicta minima nobis accusantium eius.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias minus, harum, aliquid in consequuntur tempore, labore quo delectus assumenda dolores odio sed error necessitatibus consequatur ipsam quisquam vitae commodi odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto reprehenderit numquam porro dolorum, ab suscipit sint corrupti sunt laboriosam ipsum eligendi minus saepe culpa impedit eveniet, voluptatum excepturi sed?
                    </div>
                    <br />
                    <div>
                        <span className="question">More intro text that introduces the resources. </span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, commodi blanditiis odio, quas eaque id dicta labore quae porro illum cumque laudantium nemo ab. Tempora aliquam cumque eligendi quas sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi exercitationem iusto quia adipisci obcaecati nam quod voluptas voluptatibus, natus nemo mollitia nulla tempore sint quibusdam repudiandae amet enim eveniet.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolor placeat impedit incidunt pariatur cupiditate dolorum sapiente delectus temporibus accusamus veniam eius ut, repudiandae iste nobis maiores laudantium voluptatum sed.
                    </div>
                    <br />
                    <br />
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Session Plan: Project Launch</h4>
                                <p>A sample 45-minute session to launch a project with students.</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Case Studies & Changemaker Stories</h4>
                                <p>Inspiring projects from young changemakers around the world.</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Session Plan: Interests, Values, & Team Building</h4>
                                <p>A sample 50-minute session through which students reflect on their interests and values, understand the strengths and skills they can all bring to the project, and collaboratively develop a charter to guide how they'll work together across the project.</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Community Advocate Prompts</h4>
                                <p>Prompts for young people who notice local or global problems and decide to become part of the solution. Prompts include people, places, planet, and new product/service/project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </>
    )
}