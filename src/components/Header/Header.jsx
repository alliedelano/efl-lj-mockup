import React from 'react';
import './Header.css';

export default function Header(){
    return(
        <div className="header-bars">
            <div className="top-bar">
                <div className="logo">
                    Edge logo <span className="span-logo">(verify)</span>
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