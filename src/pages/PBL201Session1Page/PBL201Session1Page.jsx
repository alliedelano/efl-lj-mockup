import React from 'react';
import UnitList201 from '../../components/UnitList201/UnitList201';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import pbl_evidence from '../../images/pbl_evidence.png'

export default function PBL201Session1Page(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Creating a Project Using PBL and EL Pedagogies (Live Course)</h1>
                <h2>Session 1</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitList201 />
                </div>
                <div className="course-content">
                    <div>Ahead of session 2, please download the following files and use the PBL Toolkit pages 1-19 to revisit what we have covered today and start to pull together your project idea.</div>
                    <br />
                    <div>Please complete action points 1-5 as listed below. The PBL Toolkit Template can be used to collate your ideas in one place for session 2 (this is an editable PDF file). <span className="bold">At the start of session 2 we will be using a critique protocol to start to review and hone the project idea.</span></div>
                    <br />
                    <div>
                        <ul>
                            <li><span className="bold">Action point 1</span> - For the next session please come with a firm idea for a project. Refer to the PBL toolkit pg. 8-10.</li>
                            <li><span className="bold">Action point 2</span> - For the next session please come with a firm idea for a guiding question for your project idea. Refer to the PBL toolkit pg. 11-15</li>
                            <li><span className="bold">Action point 3</span> – For the next session please come with a firm idea for an entry event for your project idea. Refer to the PBL toolkit pg. 16</li>
                            <li><span className="bold">Action point 4</span> – For the next session please come with a firmed idea for an end product for your project idea. Refer to the PBL toolkit pg. 17</li>
                            <li><span className="bold">Action point 5</span> - For the next session please come to the session with a clear idea of what students will do and how the project is linked to the curriculum think about how they might be assessed?</li>
                            <li>Additional activity watch the following XP video: Learning Through Expeditions</li>
                            <br />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-t9EaMRncdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </ul>
                    </div>
                    <br />
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Creating PBL & EL Post-Session 1 Activity</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>PBL Overview - Incubator Projects</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Entry or Immersion Events in PBL</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Overview - Assessment in PBL</h4>
                                <p>Includes Action Plans & Templates</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>PBL Toolkit Templates (Session 1)</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>PBL Toolkit</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Using Open and Guiding Questions</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Session 1 Powerpoint</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>End Products and PBL</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </>
    )
}