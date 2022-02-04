import React from 'react';
import UnitList from '../../components/UnitList/UnitList';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import '../PBLUnitPage1/PBLUnitPage1.css'

export default function PBLUnitPage3(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Steps in Project Based Learning</h1>
                <h2>3. The Driving Question</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitList />
                </div>
                <div className="course-content">
                    <h4>Links all aspects of the project. Allows and enables sustained inquiry. Develops critical thinking, collaboration and problem solving.</h4>
                    <div className="unit-video-intro">INTRO VIDEO</div>
                    <br />
                    <div>
                        Central to the project design is the over-arching Driving Question (also called guiding question). This question is intentionally designed to be open ended and not ‘googleable’. Its aim is to give the project context and meaning and underpin the sustained inquiry and motivate students.
                    </div>
                    <br />
                    <div>
                        PBL is driven by questions. In PBL students apply their knowledge and understanding, analyse ideas, evaluate their processes, and create solutions and content. These processes require higher-order thinking skills. Research evidence suggests that pupils’ levels of achievement can be increased by regular access to higher-order thinking which can be developed through effective use of open and closed questions. 
                    </div>
                    <br />
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Powerpoint: Intro to the Driving Question</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Using Open & Guiding Questions</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>PBL Overview Effective Questioning</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Proforma Planning Frame</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Proforma Rubric to Plan Guiding Questions</h4>
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