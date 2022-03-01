import React from 'react';
import Header from '../../components/Header/Header'
import FooterComp from '../../components/Footer/Footer';

export default function HomePage(){
    return(
        <>
            <Header />
            <h1>Wondering if we might like to have a landing page for this part of the website?</h1>
            <h3>Might include very basic overview & navigation info for the content</h3>
            <h3>Might include button to log in or sign up - it's free!</h3>
            <button>Log In to Access</button>
            <h3>"My Dashboard" & "Self-Guided Toolkits" & "Resources" might not appear in header until they log in</h3>
            <FooterComp />    
        </>
    )
}