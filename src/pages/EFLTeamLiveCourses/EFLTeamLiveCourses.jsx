import React from 'react';
import HeaderTeam from '../../components/HeaderTeam/HeaderTeam';
import FooterComp from '../../components/Footer/Footer';

export default function EFLTeamLiveCourses(){
    return(
        <>
            <HeaderTeam />
            <h1>Live Course Progress Board</h1>
            <p>This board displays our progress towards making the content supporting our Live Courses live on the EFL website.</p>
            <p>You can click on any card to see more details. If you scroll down, you can see a grid view of the same information. </p>
            <p>To see all details, including individual units and resources, click here: <a href="https://airtable.com/shrwobJQlt2ebExEG" target="blank">EFL Learner Journey Airtable Base</a> </p>
            <iframe title="live course kanban" class="airtable-embed" src="https://airtable.com/embed/shrdnZLmR6MJ0MFtz?backgroundColor=blue&viewControls=on" style= {{ frameborder: '0', onmousewheel: '', width: '100%', height: 700, background: 'transparent', border: '1px solid #ccc' }}></iframe> 
            <br />
            <br />
            <iframe title="live course grid" class="airtable-embed" src="https://airtable.com/embed/shrYFSnZrEehoaQ2g?backgroundColor=blue&viewControls=on" style= {{ frameborder: '0', onmousewheel: '', width: "100%", height: 300, background: 'transparent', border: '1px solid #ccc' }}></iframe>
            <FooterComp />
        </>
    )
}