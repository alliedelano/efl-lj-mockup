import React from 'react';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';

export default function ToolkitsPage(){
    return(
        <>
            <Header />
            <div className="courses-header">
                <div className="courses-header-left">
                    <h1>Self-Guided Toolkits</h1>
                    <input
                        type="text"
                        placeholder="Search resources"
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
                        <div className="filter-type">
                            <h5>Filter by other things</h5>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-courses">
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
                <div className="course">
                    <div className="course-box-left">
                        <a href="/courses/ourtowncourse"><h4>Community Connected Learning For Social Impact</h4></a>
                        <p>A short introduction about the toolkit that tells someone what to expect when they open this toolkit.</p>
                        <div className="tags">
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                        </div>
                    </div>
                    <div className="course-box-right"> 
                        <div className="fav-icon-not"></div>
                    </div>
                </div>
                <div className="course">
                    <div className="course-box-left">
                        <a href="/courses/anothercourse"><h4>Another Toolkit Name</h4></a>
                        <p>A short introduction about the toolkit that tells someone what to expect when they open this toolkit.</p>
                        <div className="tags">
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                            <div className="course-filter-tag">tag</div>
                        </div>
                    </div>
                    <div className="course-box-right"> 
                        <div className="fav-icon-not"></div>
                    </div>
                </div>
            </div>
            <div className="all-courses">
                        
                        
                        
                        
                    </div>
            <FooterComp />
        </>
    )
}