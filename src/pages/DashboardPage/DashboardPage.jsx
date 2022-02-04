import React from 'react';
import Header from '../../components/Header/Header'
import FooterComp from '../../components/Footer/Footer';
import './DashboardPage.css'
import pbl_evidence from '../../images/pbl_evidence.png'


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
                <div className="courses-up-next">
                    <div className="my-courses">
                        <h2>My courses</h2>
                        <div className="course">
                            <a href="/pblcourse"><h4>Steps in Project Based Learning</h4></a>
                            <p>A short introduction about the course.</p>
                        </div>
                        <div className="course">
                            <a href="/anothercourse"><h4>Another Course Name</h4></a>
                            <p>A short introduction about the course.</p>
                        </div>
                        <div className="course">
                            <a href="/anothercourse"><h4>Another Course Name</h4></a>
                            <p>A short introduction about the course.</p>
                        </div>
                        <a href="/courses"><p>View more courses</p></a>
                    </div>
                    <div className="up-next">
                        <h3>Up next in my journey</h3>
                        <p>Based on what you've completed so far, we recommend checking out:</p>
                        <div className="resources">
                            <div className="featured-resource">
                                <h4>Featured Resource/toolkit name</h4>
                                <p>A short introduction about the resource or toolkit</p>
                                </div>
                            <div className="other-resources">
                                <div className="other-resource">
                                    <h4>Resource/toolkit name</h4>
                                    <p>A short introduction about the resource or toolkit</p>
                                </div>
                                <hr />
                                <div className="other-resource">
                                    <h4>Resource/toolkit name</h4>
                                    <p>A short introduction about the resource or toolkit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <h2>My favourites</h2>
                    <div className="favourites">
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <img className="resource-thumbnail" alt='pbl evidence' src={pbl_evidence}/>
                                <a href="/pbl-evidence-resource"><h4>Edge Evidence Base: PBL</h4></a>
                                <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <h4>Resource/toolkit name</h4>
                            <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <h4>Resource/toolkit name</h4>
                            <p>A short introduction about the resource or toolkit</p>
                        </div>
                        <div className="favourite">
                            <div className="fav-icon"></div>
                            <h4>Resource/toolkit name</h4>
                            <p>A short introduction about the resource or toolkit</p>
                        </div>
                    </div>
                    <a href="/resources"><p>View more resources</p></a>
                </div>
            </div>
            <FooterComp />
        </>
    )
}