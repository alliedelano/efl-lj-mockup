import React from 'react';
import UnitList from '../../components/UnitList/UnitList';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import '../PBLUnitPage1/PBLUnitPage1.css'

export default function PBLUnitPage2(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Steps in Project Based Learning</h1>
                <h2>2. Project Design and Assessment</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitList />
                </div>
                <div className="course-content">
                    <h4>Underpinned by curriculum standards, assessment points and transferable skills. Can be a part or whole of a module, single subject or cross-curricular. Authentic end-product and audience.</h4>
                    <div className="unit-video-intro">INTRO VIDEO</div>
                    <br />
                    <div>
                        EL and PBL have similar themes and core components i.e., an entry event, guiding or driving question, focus on authenticity and the creation of an end product. In EL projects are called expeditions and are devised to ensure students create high quality ‘beautiful work’. 
                    </div>
                    <br />
                    <div>
                        In its purest sense in PBL, projects are co-created with students as is the case at High Tech High (ref https://www.hightechhigh.org/student-work/student-projects/ )                    </div>
                    <br />
                    <div>
                        In both PBL and EL approaches focus on projects which are designed to be complex (rigorous), are authentic and underpinned by craftsmanship (ref https://eleducation.org/resources/el-attributes-of-high-quality-work )
                    </div>
                    <br />
                    <div>
                        In designing the project, assessment is planned and is intentionally driven from the beginning, this is to ensure rigour, and importantly to align with wider school assessment and tracking systems. 
                    </div>
                    <br />
                    <div>
                        In PBL and EL assessment should consider multiple sources of evidence (both formal and informal) and provide opportunities for students to demonstrate what they know, understand and are able to do. Assessment is closely tied to the curriculum standards and syllabus but there is also an emphasis on soft skills, also known as employability or 21st-century skills, such as teamwork, collaboration, problem-solving, project planning and communication skills.  (Ref Skills Builder  https://www.skillsbuilder.org/towards-a-universal-framework-for-essential-skills )
                    </div>
                    <br />
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                        <div className="resource-item">
                                <div className="fav-icon"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Powerpoint: Intro to Project Design & Assessment</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>EFL Assessment PBL Quick Guide 1</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Overview Assessment in PBL</h4>
                                <p>Includes Action Plans & Templates</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>Proforma Project Planner based on PBL</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>PBL Project Design & Overview 2</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <div className="resource-thumbnail-placeholder"></div>
                                <h4>PBL Overview Incubator Projects XP</h4>
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