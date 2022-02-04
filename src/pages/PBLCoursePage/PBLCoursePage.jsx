import React from 'react';
import Header from '../../components/Header/Header';
import UnitList from '../../components/UnitList/UnitList';
import FooterComp from '../../components/Footer/Footer'
import './PBLCoursePage.css'
import pbl8steps from '../../images/pbl8steps.png'


export default function PBLCoursePage(){
    return(
        <>
            <Header />
            <div className="course-header">
                <h1>Steps in Project Based Learning</h1>
            </div>
            <div className="course-overview">
                <div className="course-left">
                    <div className="course-intro">
                        <div className="course-video">Video</div>
                        <br />
                        <div>
                            The Edge Foundation have developed a series of resources to help you understand not only what Project Based Learning (PBL) is, but also to provide a pragmatic approach to using the principles of PBL and Expeditionary Learning (EL) in your classroom. 
                        </div>
                        <br />
                        <div>
                            To this end we have developed a series of overviews of the different elements of PBL and EL, with associated deeper dive documents and PowerPoints. The aim of these is to get you started on your journey so that you can begin to understand and get to grips with the guiding principles with the aim being that you can start to incorporate these principles in your classroom at your own pace. All of the resources can be accessed by clicking into each of the ‘steps’ in the diagram below.  
                        </div>
                        <br />
                        <img className="course-image" alt='pbl eight steps' src={pbl8steps}/>
                    </div>
                    
                    <div className="course-additional-text"></div>
                </div>
                <div className="course-right">
                    <UnitList />
                    
                </div>
            </div>
            <FooterComp />
            
            
        </>
    )
}