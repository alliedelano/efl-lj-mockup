import React from 'react'
import pbl_evidence from '../../images/pbl_evidence.png'
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer'
import './PBLEvidencePage.css'

export default function PBLEvidenceResource(){
    return(
        <>
            <Header />
            <div>
                <h1>Our Evidence Base</h1>
                <h4>Short intro about the resource</h4>
                <p>Authored by: NAME</p>
            </div>
            <div className="resource-content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam illo commodi. Tempore odit ratione sequi laboriosam illum culpa dolores nihil hic, consectetur animi officia facere iusto repellendus vero doloremque.</p>
                <img className="course-image" alt='pbl evidence' src={pbl_evidence}/>
                <p>Download name PDF 6mb</p>
            </div>
            
            <FooterComp />
        </>
    )
}