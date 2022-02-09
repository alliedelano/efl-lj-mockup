import React from 'react';
import Header from '../../components/Header/Header';
import FooterComp from '../../components/Footer/Footer';
import './CoursesPage.css'

export default function CoursesPage(){
    return(
        <>
            <Header />
            <div className="courses-header">
                <div className="courses-header-left">
                    <h1>Courses</h1>
                    <input
                        type="text"
                        placeholder="Search resources"
                    />
                    <button>Search</button>
                </div>
                <div className="courses-header-right">
                    <div className="course-filters">
                        <div className="filter-type">
                            <h5>Filter by status</h5>
                            <div className="course-filter-tag">favourite</div>
                            <div className="course-filter-tag">started</div>
                            <div className="course-filter-tag">completed</div>
                        </div>
                        <div className="filter-type">
                            <h5>Filter by type</h5>
                            <div className="course-filter-tag">independent</div>
                            <div className="course-filter-tag">live</div>
                        </div>
                        <div className="filter-type">
                            <h5>Filter by ingredient</h5>
                            <div className="course-filter-tag">PBL</div>
                            <div className="course-filter-tag">CCL</div>
                            <div className="course-filter-tag">RWL</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-courses">
                        
                        <div className="square-course">
                            <a href="/courses/pblcourse"><h4>Steps in Project Based Learning</h4></a>
                            <p>A series of overviews of the different elements of Project Based Learning and Expeditionary Learning.</p>
                        </div>
                        <div className="square-course">
                            <a href="/courses/xpprotocolscourse"><h4>XP: Expeditionary Learning Protocols</h4></a>
                            <p>10 strategies to support expeditionary learning.</p>
                        </div>
                        <div className="square-course">
                            <a href="/courses/partnershipscourse"><h4>Powerful Partnerships</h4></a>
                            <p>The Ford NGL process for building deep, sustainable relationships to support your school/college outreach/employer engagement/careers programme.</p>
                        </div>
                        <div className="square-course">
                            <a href="/courses/anothercourse"><h4>Another Course Name</h4></a>
                            <p>A short introduction about the course.</p>
                        </div>
                        <div className="square-course">
                            <a href="/courses/anothercourse"><h4>Another Course Name</h4></a>
                            <p>A short introduction about the course.</p>
                        </div>
                        <div className="square-course">
                            <a href="/courses/anothercourse"><h4>Another Course Name</h4></a>
                            <p>A short introduction about the course.</p>
                        </div>
                    </div>
            <FooterComp />
        </>
    )
}