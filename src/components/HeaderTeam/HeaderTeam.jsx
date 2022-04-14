import React from 'react';
import edge_logo from '../../images/edge_logo.png'

export default function HeaderTeam(){
    return(
        <div className="header-bars">
            <div className="top-bar">
                <div className="logo">
                    <img alt='edge logo' src={edge_logo}/>
                </div>
                <div className="greeting">
                    <div className="avatar-greeting"></div>
                    <p>Hi EFL Team!</p>

                </div>
            </div>
            <div className="gray-bar">
            </div>
            <div className="navigation">
                <a href="/eflteamlivecourses"><h4>Live Courses Board</h4></a>
                <a href="/eflteamsgt"><h4>Self Guided Toolkits Board</h4></a>
                <a href="/eflteamtickets"><h4>Tickets</h4></a>
            </div>
        </div>
    )
}

