import React from 'react';
import HeaderTeam from '../../components/HeaderTeam/HeaderTeam';
import FooterComp from '../../components/Footer/Footer';

export default function Tickets(){
    return(
        <>
            <HeaderTeam />
            <h1>Tickets</h1>
            <p>Need something? Use this form to submit information about an issue you see or necessary change.</p>
            <p>All outstanding tickets are displayed below.</p>
            <iframe title="ticket form" class="airtable-embed" src="https://airtable.com/embed/shrrOv3Ld8T4VMCVg?backgroundColor=blue" style= {{ frameborder: '0', onmousewheel: '', width: '100%', height: 700, background: 'transparent', border: '1px solid #ccc' }}></iframe> 
            <br />
            <br />
            <iframe title="ticket grid" class="airtable-embed" src="https://airtable.com/embed/shrMikVlTfIagwL3k?backgroundColor=blue&viewControls=on" style= {{ frameborder: '0', onmousewheel: '', width: "100%", height: 300, background: 'transparent', border: '1px solid #ccc' }}></iframe>
            <FooterComp />
        </>
    )
}