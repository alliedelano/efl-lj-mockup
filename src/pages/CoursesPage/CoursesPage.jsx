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
                    <h1>Live Courses</h1>
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
                    </div>
                </div>
            </div>
            <div className="all-courses">        
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
            </div>          
            <FooterComp />
        </>
    )
}