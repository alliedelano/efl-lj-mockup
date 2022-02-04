import React from 'react';
import UnitList from '../../components/UnitList/UnitList';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import '../PBLUnitPage1/PBLUnitPage1.css'

export default function PBLUnitPage4(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Steps in Project Based Learning</h1>
                <h2>4. Community, Employers, Authenticity</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitList />
                </div>
                <div className="course-content">
                    <h4>Authentic audience. Working with experts. Project design links to community and employers. Real world learning.</h4>
                    <div className="unit-video-intro">INTRO VIDEO</div>
                    <br />
                    <div>
                        A key element of PBL is that students’ learning is within a real-world context and as a result is authentic. This principle underpins the project, from start to finish from the opening guiding question through to the end-product.  This may for example mean having experts giving input into the project as and when appropriate, sharing their expertise and experience in relation to the elements covered by the guiding question.
                    </div>
                    <br />
                    <div>
                        Through the project students may be asked to ‘answer’ or address a real-world problem, and ultimately produce an end-product for an authentic audience outside of their classroom setting. In EL this is central to the students learning and experience as the hierarchy of audience extremely motivating in ensuring students produce the best work they can (ref https://eleducation.org/resources/hierarchy-of-audience )
                    </div>
                    <br />
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Powerpoint: Introduction to Community, Authenticity & Employers in PBL and EL</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Community & Employer Engagement PBL2</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>School & Employer Action Plan Template</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>School Checklist Working with Employers Template</h4>
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