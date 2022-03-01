import React from 'react';
import Header from '../../components/Header/Header'
import FooterComp from '../../components/Footer/Footer';
import './DashboardPage.css'
import pbl_evidence from '../../images/pbl_evidence.png'
import meeting_org_tool from '../../images/meeting_org_tool.png'



export default function DashboardPage(){
    return(
        <>
            <Header />
            <div className="page-container">
                <div className="user">
                    <div className="avatar"></div>
                    <div className="bio">
                        <h4>Robin LastName</h4>
                        <div>Teacher, Secondary English</div>
                        <div>Nottingham, England</div>
                    </div>
                </div>
                <div className="courses-header">
                    <div className="courses-header-left">
                        <input
                            type="text"
                            placeholder="Search my favourites"
                        />
                        <button>Search</button>
                    </div>
                    <div className="courses-header-right">
                        <div className="course-filters">
                            <div className="filter-type">
                                <h5>Filter by ingredient</h5>
                                <div className="course-filter-tag">PBL</div>
                                <div className="course-filter-tag">CCL</div>
                                <div className="course-filter-tag">RWL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="courses-up-next">
                    <div className="my-courses">
                        <h2>My courses</h2>
                        <div className="course">
                            <div className="course-box-left">
                                <div className="completion-icon"></div>
                            </div>
                            <div className="course-box-right">
                                <a href="/courses/pbl201course"><h4>Project Based Learning 201</h4></a>
                                <p>A short introduction about the course</p>
                                <p className="complete-text">You've completed this course</p>
                                <a href="/courses/pbl201course"><button className="complete">View Materials</button></a>
                                <div className="tags">
                                    <div className="course-filter-tag">tag</div>
                                </div>
                            </div>
                            </div>
                            <div className="course">
                                <div className="course-box-left">
                                    <div className="completion-icon-not"></div>
                                </div>
                                <div className="course-box-right">
                                    <h4>Real World Learning 201</h4>
                                    <p>A short introduction about the course</p>
                                    <button>Book now</button>
                                    <div className="tags">
                                        <div className="course-filter-tag">tag</div>
                                    </div>
                                </div>
                            </div>
                        <div className="course">
                            <div className="course-box-left">
                                <div className="completion-icon-not"></div>
                            </div>
                            <div className="course-box-right">
                                <h4>CCL 201</h4>
                                <p>A short introduction about the course</p>
                                <button>Book now</button>
                                <div className="tags">
                                    <div className="course-filter-tag">tag</div>
                                </div>
                            </div>
                        </div>
                        <a href="/courses"><p>View all courses</p></a>
                    </div>
                    <div className="up-next">
                        <h2>My favourite toolkits</h2>
                        <div className="my-courses">
                            <div className="course">
                                <div className="course-box-left">
                                    <a href="/courses/pblcourse"><h4>Steps in Project Based Learning</h4></a>
                                    <p>A series of overviews of the different elements of Project Based Learning and Expeditionary Learning.</p>
                                    <div className="tags">
                                        <div className="course-filter-tag">tag</div>
                                        <div className="course-filter-tag">tag</div>
                                        <div className="course-filter-tag">tag</div>
                                    </div>
                                </div>
                                <div className="course-box-right"> 
                                    <div className="fav-icon"></div>
                                </div>
                            </div>
                            <div className="course">
                                <div className="course-box-left">
                                    <a href="/courses/xpprotocolscourse"><h4>XP: Expeditionary Learning Protocols</h4></a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique, praesentium dicta laborum.</p>
                                    <div className="tags">
                                        <div className="course-filter-tag">tag</div>
                                        <div className="course-filter-tag">tag</div>
                                        <div className="course-filter-tag">tag</div>
                                    </div>
                                </div>
                                <div className="course-box-right"> 
                                    <div className="fav-icon"></div>
                                </div>
                            </div>
                            <div className="course">
                                <div className="course-box-left">
                                    <a href="/courses/partnershipscourse"><h4>Powerful Partnerships</h4></a>
                                    <p>The Ford NGL process for building deep, sustainable relationships to support your school/college outreach/employer engagement/careers programme.</p>
                                    <div className="tags">
                                        <div className="course-filter-tag">tag</div>
                                        <div className="course-filter-tag">tag</div>
                                        <div className="course-filter-tag">tag</div>
                                    </div>
                                </div>
                                <div className="course-box-right"> 
                                    <div className="fav-icon"></div>
                                </div>
                            </div>
                            <a href="/toolkits"><p>View all toolkits</p></a>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <h2>My favourite resources</h2>
                    <div className="favourites">
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <img className="resource-thumbnail" alt='pbl evidence' src={pbl_evidence}/>
                            <a href="/resources/pbl-evidence-resource"><h4>Edge Evidence Base: PBL</h4></a>
                            <span className="question">Title is clickable and will take you to an individual resource page.</span>
                            <p>A short introduction about the resource or toolkit</p>
                            <div className="resource-filter-tag">PBL</div>
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
                            <h4>Project Example: Identifying the Hazards and Risks Based in a Health Care Setting Scenario</h4>
                            <p>Students are involved in a role play with regard to the Care Quality Commission (CQC)</p>
                            <div className="resource-filter-tag">KS5</div>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <div className="resource-thumbnail-placeholder"></div>
                            <h4>Partnerships - Observation Rubric: Schools</h4>
                            <p>Short description of resource.</p>
                            <div className="resource-filter-tag">RWL</div>
                        </div>
                    </div>
                    <a href="/resources"><p>View all resources</p></a>
                </div>
            </div>
            <FooterComp />
        </>
    )
}