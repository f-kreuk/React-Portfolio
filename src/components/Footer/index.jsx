import React from "react";
import GitHub from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.png';
import './footer.css';

export default function Footer() {
    return (
        <footer id="footer">
            <div>
                <a href="https://github.com/f-kreuk">
                    <img src={GitHub} alt="GitHub"></img>
                </a>
                <a href="https://www.linkedin.com/in/florian-k-98031b50/">
                    <img src={LinkedIn} alt="LinkedIn"></img>
                </a>
            </div>
        </footer>
    )
}