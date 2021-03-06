import React from 'react';
import './Header.css';
import edge_logo from '../../images/edge_logo.png'

export default function Header(){
    return(
        <div className="header-bars">
            <div className="top-bar">
                <div className="logo">
                    <img alt='edge logo' src={edge_logo}/>
                </div>
                <div className="greeting">
                    <div className="avatar-greeting"></div>
                    <p>Hi Robin</p>

                </div>
            </div>
            <div className="gray-bar">
                <p><span className="question">The navigation below still works so we can reference my previous work adapting the content, but no need to review!</span></p>
            </div>
            <div className="navigation">
                <a href="/home"><h4>LJ Home?</h4></a>
                <a href="/"><h4>My Dashboard</h4></a>
                <a href="/courses"><h4>Live Courses</h4></a>
                <a href="/toolkits"><h4>Self-Guided Toolkits</h4></a>
                <a href="/resources"><h4>Resources</h4></a>
            </div>


        </div>
    )
}