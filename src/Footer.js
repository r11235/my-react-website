import React from 'react';
import './Footer.css';

function Footer () {
    return (
            <div>

              <footer className="Footer">

                Videos created with WeVideo <br/>

                App and Videos by Rachel Malucci <br/>

                <a className="Footer-link"
                   href="http://www.rachelspics.com"
                   target="_blank"
                   rel="noopener noreferrer"
                > www.RachelsPics.com </a>

                <a className="Footer-link"
                   href="https://github.com/r11235"
                   target="_blank"
                   rel="noopener noreferrer"
                > github.com/r11235 </a> <br/>

                <span>

                  This react app is hosted on GitHub <br/>

                  <a className="Footer-link" 
                     href="https://github.com/r11235/react-website"
                     target="_blank"
                     rel="noopener noreferrer"
                  > (github.com/r11235/react-website) </a> <br/>

                  and deployed in the AWS cloud. <br/> <br/>

                </span>

              </footer>

            </div>
    )
};

export default Footer;
