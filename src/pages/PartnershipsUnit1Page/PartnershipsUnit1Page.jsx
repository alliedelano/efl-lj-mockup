import React from 'react';
import UnitListPartnerships from '../../components/UnitListPartnerships/UnitListPartnerships';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import pbl_evidence from '../../images/pbl_evidence.png'

export default function PartnershipsUnit1Page(){
    return(
        <>
            <Header />
            <div className="unit-header">
                <h1>Powerful Partnerships</h1>
                <h2>1. Assessing Readiness</h2>
            </div>
            <div className="page-content">
                <div className="unit-list">
                    <UnitListPartnerships />
                </div>
                <div className="course-content">
                    <p>Powerful Partnerships are essential when offering
                    intentional, meaningful employer engagement and by
                    building strong sustainable relationships it can support
                    UK schools/colleges to achieve Gatsby Benchmarks
                    2. Learning from career and labour market information,
                    4. Linking curriculum learning to careers, 5. Encounters
                    with employers and employees and 6. Experiences of
                    the workplaces. Ofsted’s ‘Getting Ready for Work’ report
                    also highlights the importance of strong relationships to
                    ensure intentional employer engagement happens in
                    schools and colleges.</p>
                    <div className="unit-video-intro">INTRO VIDEO</div>
                    <p>The aim of this resource is to get you started to assess
                    the readiness of your school/college and employers
                    for employer engagement and developing powerful
                    partnerships. Once you have completed this resource
                    be sure to move on to the other guidance documents:
                    Assessing Readiness – Employers and Assessing
                    Readiness – School/College which provide practical
                    tools and advice. Completing all three resources will
                    provide an overview and complete picture of current
                    activity and partnerships which will provide the
                    springboard and starting point for future engagement.</p>
                    <p>Once you have assessed the readiness of both school/
                    college and employer you can move on to the next set
                    of resource workbooks ‘Outreach Strategy for Powerful
                    Partnership’ Part 1 and Part 2 to be sure you have
                    the tools and knowledge to build strong sustainable
                    relationships. Also don’t forget to check out the ‘5 Key
                    Tips to Building Partnerships’ which is a quick guide for
                    you and your team when building meaningful employer
                    partnerships.</p>
                    
                    <br />
                    
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Powerful Partnerships - Unit 1: Assessing Readiness - Part 1: Overview</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon-not"></div>
                                <h4>Powerful Partnerships - Unit 1: Assessing Readiness - Part 2: Schools</h4>
                                <p>A short introduction about the resource or toolkit</p>
                            </div>
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Powerful Partnerships - Unit 1: Assessing Readiness - Part 3: Employers</h4>
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