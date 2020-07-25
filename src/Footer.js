import React from 'react';
import './Footer.css';

function Footer () {
    return (
            <div>
              <footer className="Footer">
                Videos created with WeVideo <br/>
                App and Videos by Rachel Malucci <br/>
                www.RachelsPics.com <br/>
                github.com/r11235 <br/> <br/>
                <span style={{'font-size': '80%', 'font-style': 'italic'}}>
                  This react app is hosted on GitHub <br/>
                  (github.com/r11235/react-website) <br/>
                  and deployed in the AWS cloud. <br/> <br/>
                </span>
              </footer>
            </div>
    )
};

export default Footer;
