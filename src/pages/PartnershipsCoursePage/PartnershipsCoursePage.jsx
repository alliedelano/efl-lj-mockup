import React from 'react';
import Header from '../../components/Header/Header';
import UnitListPartnerships from '../../components/UnitListPartnerships/UnitListPartnerships';
import FooterComp from '../../components/Footer/Footer'
import '../PBLCoursePage/PBLCoursePage.css'


export default function PartnershipsCoursePage(){
    return(
        <>
            <Header />
            <div className="course-header">
                <h1>Powerful Partnerships</h1>
            </div>
            <div className="course-overview">
                <div className="course-left">
                    <div className="course-intro">
                        <p> The purpose of this resource is to help you build deep, sustainable relationships to support your school/college outreach/employer engagement/careers programme and follows the Ford NGL process. </p>
                        <div className="course-video">Video</div>
                        <br />
                        <div>This course includes the following:</div>
                        <ul> 
                            <li>Part 1: Assessing Readiness
                                <ul>
                                    <li>Unit 1: Overview</li>
                                    <li>Unit 2: Schools</li>
                                    <li>Unit 3: Employers</li>
                                </ul>
                            </li>
                            <br />
                            <li>Part 2: Outreach Strategy for Powerful Partnerships
                                <ul>
                                    <li>Unit 4: Planning</li>
                                    <li>Unit 5: Execute</li>
                                    <li>Unit 6: Evaluation & Celebration</li>
                                </ul>
                            </li>
                            <br />
                            <li> 5 Key Tips to Building Powerful Partnerships
                                <ul>
                                    <li>An additional simple guide to help as you and your team build meaningful partnerships.</li>
                                </ul>
                            </li>
                        </ul>
                     
                    </div>
                    
                    <div className="course-additional-text">
                    To gain full benefit of the 'Powerful Partnerships' resource it is intended you work through each unit a step at a time using the included resources. Complete Unit 1 first, working through part 1, 2, and 3 before moving on to Unit 2 working through part 1, 2, and 3.
                    </div>
                    <br />
                    <br />
                </div>
                <div className="course-right">
                    <UnitListPartnerships />
                    
                </div>
            </div>
            <FooterComp />
            
            
        </>
    )
}