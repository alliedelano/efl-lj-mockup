import React from 'react';
import Header from '../../components/Header/Header';
import UnitList201 from '../../components/UnitList201/UnitList201';
import FooterComp from '../../components/Footer/Footer'


export default function PBL201CoursePage(){
    return(
        <>
            <Header />
            <div className="course-header">
                <h1>Creating a Project Using PBL and EL Pedagogies (Live Course)</h1>
            </div>
            <div className="course-overview">
                <div className="course-left">
                    <div className="course-intro">
                        <div className="course-video">Video</div>
                        <br />
                        <h4>Course Overview:</h4>
                        <div>
                            Edison bulb four dollar toast lomo, lo-fi humblebrag marfa neutra poutine af copper mug keytar selvage everyday carry. Intelligentsia brooklyn green juice, pickled twee chillwave hammock selfies drinking vinegar viral. Lyft iceland actually selvage austin sartorial cardigan disrupt affogato normcore authentic helvetica butcher. Microdosing skateboard typewriter craft beer lyft asymmetrical post-ironic irony cray. Twee franzen pok pok kickstarter cray roof party church-key. Readymade heirloom pour-over, freegan intelligentsia edison bulb selvage salvia photo booth. IPhone church-key ethical bushwick irony, readymade enamel pin locavore adaptogen godard mumblecore tumeric keytar vexillologist umami.                        </div>
                        <br />
                    </div>
                    <h4>Sessions:</h4>
                    <ul> 
                            <li>Session 1: Title
                                <ul>
                                    <li>Topic</li>
                                    <li>Topic</li>
                                    <li>Topic</li>
                                </ul>
                            </li>
                            <br />
                            <li>Session 2: Title
                                <ul>
                                    <li>Topic</li>
                                    <li>Topic</li>
                                    <li>Topic</li>
                                </ul>
                            </li>
                            <br />
                            <li>Session 3: Title
                                <ul>
                                    <li>Topic</li>
                                    <li>Topic</li>
                                    <li>Topic</li>
                                </ul>
                            </li>
                            <br />
                            
                        </ul>
                    
                    <div className="course-additional-text">
                        <h4>Not enrolled? Session materials are only available to those enrolled in this live course.</h4>
                        <button>Enroll in Course</button>
                        
                    </div>
                    <br />
                </div>
                <div className="course-right">
                    <UnitList201 />
                    
                </div>
            </div>
            <FooterComp />
            
            
        </>
    )
}