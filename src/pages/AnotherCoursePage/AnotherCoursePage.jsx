import React from 'react';
import Header from '../../components/Header/Header';
import UnitListDummy from '../../components/UnitListDummy/UnitListDummy';
import FooterComp from '../../components/Footer/Footer'
import '../PBLCoursePage/PBLCoursePage.css'


export default function AnotherCoursePage(){
    return(
        <>
            <Header />
            <div className="course-header">
                <h1>Course Title</h1>
            </div>
            <div className="course-overview">
                <div className="course-left">
                    <div className="course-intro">
                        <div className="course-video">Video</div>
                        <br />
                        <div>
                            Edison bulb four dollar toast lomo, lo-fi humblebrag marfa neutra poutine af copper mug keytar selvage everyday carry. Intelligentsia brooklyn green juice, pickled twee chillwave hammock selfies drinking vinegar viral. Lyft iceland actually selvage austin sartorial cardigan disrupt affogato normcore authentic helvetica butcher. Microdosing skateboard typewriter craft beer lyft asymmetrical post-ironic irony cray. Twee franzen pok pok kickstarter cray roof party church-key. Readymade heirloom pour-over, freegan intelligentsia edison bulb selvage salvia photo booth. IPhone church-key ethical bushwick irony, readymade enamel pin locavore adaptogen godard mumblecore tumeric keytar vexillologist umami.                        </div>
                        <br />
                        <br />
                        
                    </div>
                    
                    <div className="course-additional-text"></div>
                </div>
                <div className="course-right">
                    <UnitListDummy />
                    
                </div>
            </div>
            <FooterComp />
            
            
        </>
    )
}