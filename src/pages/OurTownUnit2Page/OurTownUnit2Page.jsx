import React from 'react';
import Header from '../../components/Header/Header';
import UnitListOurTown from '../../components/UnitListOurTown/UnitListOurTown';
import FooterComp from '../../components/Footer/Footer';

export default function OurTownUnit2Page(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Community Connected Learning for Social Impact</h1>
                <h2>2. Community Mapping & Developing Initial Ideas</h2>
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
                                <h4>Session Plan: Reflecting On Our Community</h4>
                                <p>A sample 55-minute session through which students seek to develop a deeper understanding of their community.</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Session Plan: Developing Initial Ideas</h4>
                                <p>A sample 50-minute session which prompts students to develop initial ideas for their project and groups develop vision statement(s) of what they'd like to achieve.</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Session Plan: Creating Driving Questions</h4>
                                <p>A sample 35-minute session that supports students to develop 2-3 possible driving questions to answer through the project.</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Session Plan: What is a Stakeholder?</h4>
                                <p>A sample 45-minute session through which students understand why community engagement is important for the project and what a stakeholder is.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </>
    )
}