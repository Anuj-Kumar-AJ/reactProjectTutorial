
import React from "react";
import myPic from '../assets/aj-pic.png'


export default function Problem1() {
    return (
        <div>

            {/* header */}

            <nav className="P1nav">
                <div className="P1myPic">
                    <img src={myPic}/>
                <h1 className="P1logoContent">ReactFacts</h1>

                </div>
                
                <h4 className="P1description">React course-project1</h4>

            </nav>



            {/* maincontent */}

            <h1><b> Fun fact</b></h1>
            <h3>1</h3>


        </div>
    )
}

