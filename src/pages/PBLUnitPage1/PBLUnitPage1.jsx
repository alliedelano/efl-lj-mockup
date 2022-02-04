import React from 'react';
import UnitList from '../../components/UnitList/UnitList';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import './PBLUnitPage1.css'
import pbl_evidence from '../../images/pbl_evidence.png'

export default function PBLUnitPage1(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Steps in Project Based Learning</h1>
                <h2>1. What is Project-based Learning?</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitList />
                </div>
                <div className="course-content">
                    <h4>Authentic, high quality products. Rigorous assessment, tied to the curriculum and standards. Addressing a real-world problem or complex question. Students owned. Pedagogically grounded.</h4>
                    <div className="unit-video-intro">INTRO VIDEO</div>
                    <br />
                    <div>
                        As a starting point it is useful to define PBL. It  is a teaching method in which “students gain knowledge and skills by working for an extended period to investigate and respond to an authentic, engaging, and complex question, problem, or challenge.” In practice this means  ”students work on a project over time – from a week up to a term – that engages them in solving a real-world problem or answering a complex question (ref Source: Buck Institute for Education http://www.bie.org/about/what_pbl).
                    </div>
                    <br />
                    <div>
                        Students demonstrate their knowledge and skills by developing a public product or presentation for a real audience. As a result, students develop deep content knowledge as well as critical thinking, creativity, and communication skills in the context of doing an authentic, meaningful project. PBL unleashes a contagious, creative energy among students and teachers.
                    </div>
                    <br />
                    <div>
                        In its purest sense in Project Based Learning the projects are co-created between teachers and students as demonstrated by High Tech High https://www.hightechhigh.org/ in California. In Expeditionary Learning https://eleducation.org/ the projects or expeditions are created by teachers to ensure they are mapped directly to the National Curriculum and GCSE specifications as is the case at XP School.
                    </div>
                    <br />
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Powerpoint: Intro to PBL and EL</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>What is PBL Overview</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <img className="resource-thumbnail" alt='pbl evidence' src={pbl_evidence}/>
                                <a href="/pbl-evidence-resource"><h4>Edge Evidence Base: PBL</h4></a>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>PBL Toolkit</h4>
                                <p>Includes Action Plans & Templates</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Project Design Overview & Calendar</h4>
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