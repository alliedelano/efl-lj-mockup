import React from 'react';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import './ResourcesPage.css'
import pbl_evidence from '../../images/pbl_evidence.png'


export default function ResourcesPage(){
    return(
        <>
            <Header />
            <div className="resources-header">
                <div className="resources-header-left">
                    <h1>Resources & Toolkits</h1>
                    <input
                        type="text"
                        placeholder="Search resources"
                    />
                    <button>Search</button>
                </div>
                <div className="resources-header-right">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, minus molestias temporibus, adipisci architecto iure quos animi ipsa nostrum cumque pariatur blanditiis, nam recusandae. Odit, aliquam? Laborum dolore natus quidem!
                </div>
            </div>
            <div className="resource-content-container">
                <div className="resource-filters">
                    <h5>Filter by type</h5>
                    <div className="resource-filter-tag">tag</div>
                    <div className="resource-filter-tag">tag</div>
                    <h5>Filter by ingredient</h5>
                    <div className="resource-filter-tag">PBL</div>
                    <div className="resource-filter-tag">CCL</div>
                    <div className="resource-filter-tag">RWL</div>
                </div>
                <div>
                    
                    <div className="favourites">
                        <div className="favourite">
                            <div className="fav-icon-not"></div>
                            <h4>Resource/toolkit name</h4>
                            <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <img className="resource-thumbnail" alt='pbl evidence' src={pbl_evidence}/>
                                <a href="/resources/pbl-evidence-resource"><h4>Edge Evidence Base: PBL</h4></a>
                                <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon-not"></div>
                            <h4>Resource/toolkit name</h4>
                            <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <h4>Resource/toolkit name</h4>
                            <p>A short introduction about the resource or toolkit</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <FooterComp />
        </>
    )
}