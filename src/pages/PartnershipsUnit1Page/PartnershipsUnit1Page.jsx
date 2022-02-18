import React from 'react';
import UnitListPartnerships from '../../components/UnitListPartnerships/UnitListPartnerships';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import fngl_pp from '../../images/fngl_pp.png'

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
                    <p>The below diagram, from Ford Next Generation Learning, 
                    shows the process you will need to follow to ensure you 
                    build and retain powerful partnerships starting with 
                    recruit and assess.</p>
                    <img alt='powerful partnerships' src={fngl_pp}/>
                    <h3>Who usually handles these types of assessments?</h3>
                    <p>Assessing your readiness can be undertaken by
                    any individual who will be responsible for employer
                    engagement and outreach or any curriculum lead
                    who intends to embed strong partnerships within their
                    departments practice.</p>
                    <p>In most cases it would be recommended that one
                    individual assess the readiness across the school/
                    college and with employers, this will generate more
                    meaningful guidance, support consistency and give a
                    complete picture.</p>
                    <p>Readiness assessment is not meant to be a critical
                    evaluation of any sort. It is, instead, an opportunity for
                    those exploring employer engagement and powerful
                    partnerships to understand what structures, resources,
                    and support exist and what structures, resources,
                    and support need to be in place in order to promote
                    successful partnerships. By using the tools and reading
                    the guidance documents you can start your readiness
                    assessment (or exploration) in your school/college in the
                    right way by reassuring colleagues that the information
                    gathered will only be used to help them and the
                    partnerships they enter into. The greatest benefit to be
                    gained will be the positive impact on students’ school/
                    college experience and the opportunities that arise for
                    them from the partnerships.</p>
                    <h3>Who normally gets assessed?</h3>
                    <p>You will want to assess all stakeholders who are directly
                    or indirectly involved in your partnerships.</p>
                    <h3>Do I assess employers, partners and the school/college more than one time?</h3>
                    <p>Yes! You will find both the need and the value in
                    assessing certain stakeholders again in some form. For
                    example, you may need to reassess and revisit when
                    there is a change in personnel, an employer partnership
                    leadership change, or there are structural changes in
                    one of the organisations.</p>
                    <h3>What do I do with the information gathered?</h3>
                    <p>Documenting what you discover is important for all
                    parties within the relationship. Your documentation is a
                    communication tool that will help lay the groundwork
                    with and for your outreach and partnerships. It is
                    intended to help everyone build a shared understanding
                    of expectations, areas for growth, and assets available
                    for growing the partnership and engaging the students
                    (and teachers) in different ways. You can use the
                    ‘Observation Rubric Tools’ in the supporting documents
                    to help you do this.</p>
                    <h3 className="key-tip">KEY TIP: Remember! assessing readiness never really ends. It
                    is an ongoing element of your employer engagement
                    outreach and powerful partnerships to ensure success!</h3>
                    <div className="resources-section-container">
                        <h2>Related Resources</h2>
                        <div className="related-resources">
                            <div className="resource-item">
                                <div className="fav-icon"></div>
                                <h4>Powerful Partnerships - Unit 1: Assessing Readiness - Part 1: Overview</h4>
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