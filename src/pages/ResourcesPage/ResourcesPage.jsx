import React from 'react';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import './ResourcesPage.css'
import pbl_evidence from '../../images/pbl_evidence.png'
import meeting_org_tool from '../../images/meeting_org_tool.png'

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
                    <h5>Filter by Key Stage (Project Examples)</h5>
                    <div className="resource-filter-tag">KS3</div>
                    <div className="resource-filter-tag">KS4</div>
                    <div className="resource-filter-tag">KS5</div>
                </div>
                <div>
                    
                    <div className="favourites">
                        <div className="favourite">
                            <div className="fav-icon-not"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Project Example: Investigating the Operating Structures of a Large UK Visitor Attractions</h4>
                            <p>How does a major UK tourist attraction operate and market itself?</p>
                            <div className="resource-filter-tag">KS4</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <img className="resource-thumbnail" alt='pbl evidence' src={pbl_evidence}/>
                                <a href="/resources/pbl-evidence-resource"><h4>Edge Evidence Base: PBL</h4></a>
                                <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon-not"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Project Example: Identifying the Hazards and Risks Based in a Health Care Setting Scenario</h4>
                            <p>Students are involved in a role play with regard to the Care Quality Commission (CQC)</p>
                            <div className="resource-filter-tag">KS5</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Project Example: What is the Most Efficient Design for a Modern Train?</h4>
                            <p>Through the project students have the opportunity to design aspects of a train, linked to the curriculum.</p>
                            <div className="resource-filter-tag">KS4</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon-not"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Project Example: Health and Social Care Unit 2</h4>
                            <p>BTEC Level 3 National Health and Social Care Unit 2</p>
                            <div className="resource-filter-tag">KS5</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Project Example: Can the Government Help Me to Make Saving Worthwhile for Those on Low Incomes?</h4>
                            <p>Students consider the guiding question: Can the government help me to make saving worthwhile for those on low incomes?</p>
                            <div className="resource-filter-tag">KS3</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <img className="resource-thumbnail" alt='meeting organisational tool' src={meeting_org_tool}/>
                            <h4>Meeting Organiser Tool</h4>
                            <p>Capture insights, challenges, questions raised, and implications from meetings with schools and employers.</p>
                            <div className="resource-filter-tag">RWL</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Partnerships - Pause & Reflect Tool: Students</h4>
                            <p>Short description of resource.</p>
                            <div className="resource-filter-tag">RWL</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Partnerships - Pause & Reflect Tool: Employers</h4>
                            <p>Short description of resource.</p>
                            <div className="resource-filter-tag">RWL</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Partnerships - Observation Rubric: Schools</h4>
                            <p>Short description of resource.</p>
                            <div className="resource-filter-tag">RWL</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Partnerships - Observation Rubric: Employers</h4>
                            <p>Short description of resource.</p>
                            <div className="resource-filter-tag">RWL</div>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>

            <FooterComp />
        </>
    )
}