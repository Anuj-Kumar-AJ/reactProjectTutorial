import React from "react";

import profilePic from '../../../assets/aj-pic.png'

export default function About() {
    return (
        <div className="About-buisnessCard">

            <img src={profilePic} className="profilePic-buisnessCard"/>
            
            <div className="Description-buisnessCard">
                <h1>Anuj Kumar</h1>
                <h4>OpenSource Contributor</h4>
                <br></br>
                <h7>anuj.website</h7>
            </div>
        </div>
    )
}