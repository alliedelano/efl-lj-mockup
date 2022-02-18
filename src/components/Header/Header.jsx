import React from 'react';
import './Header.css';
import edge_logo from '../../images/edge_logo.png'

export default function Header(){
    return(
        <div className="header-bars">
            <div className="top-bar">
                <div className="logo">
                    <img alt='powerful partnerships' src={edge_logo}/>
                </div>
                <div className="greeting">
                    <div className="avatar-greeting"></div>
                    <p>Hi Robin</p>

                </div>
            </div>
            <div className="gray-bar">

            </div>
            <div className="navigation">
                <a href="/"><h4>My dashboard</h4></a>
                <a href="/courses"><h4>Courses</h4></a>
                <a href="/resources"><h4>Resources & Toolkits</h4></a>
            </div>


        </div>
    )
}