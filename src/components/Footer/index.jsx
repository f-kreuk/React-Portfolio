import React from "react";
import GitHub from '/assets/GitHub.png';
import LinkedIn from '/assets/LinkedIn.png';
import '../../index.css';
import './footer.css';



export default function Footer() {
    return (
        <footer id="footer">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2 ml-5">
                    <a href="https://github.com/f-kreuk">
                        <img src={GitHub} className="icon my-2 p-1 justify-center" alt="GitHub"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/florian-k-98031b50/">
                        <img src={LinkedIn} className="icon my-2 p-1 justify-center" alt="LinkedIn"></img>
                    </a>
                </div>
                <div className="col-md-5"></div>
            </div>
        </footer>
    )
}