import React from 'react'
import "./Section.css";
function Section() {
    const airbnb = "./src/assets/airbnb.png";
    const binance = "./src/assets/binance.png";
    const coinbase = "./src/assets/coinbase.png";
    const Dropbox = "./src/assets/dropbox.png";
    const logo = "./src/assets/logo.svg";
    
  return (
    <div className='section'>
        <div className="sponsor">
            <img src= {airbnb}/>
            <img src= {binance}/>
            <img src= {coinbase}/>
            <img src= {Dropbox}/>
        </div>
        <div className="flex-8">
            <div id='try'>
                <h2>Let’s try our service now!</h2>
                <p>Everything you need to accept card payments and <br />
                 grow your business anywhere on the planet.</p>
            </div>
            <div className="btn">
                <button>Get Started</button>
            </div>
        </div>
        {/* end of flex-8 */}
        <div className="flex-9">
            <div className="about">
                <img src= {logo} />
                <p>A new way to make the payments <br />
                 easy, reliable and secure.</p>
            </div>
            <div className="links">
                <h2>Useful Links</h2>
                <ul>
                    <a href=""><li>Content</li></a>
                    <a href=""><li>How it Works</li></a>
                    <a href=""><li>Create</li></a>
                    <a href=""><li>Explore</li></a>
                    <a href=""><li>Terms & Services</li></a>
                </ul>
            </div>
            <div className="community">
            <h2>Community</h2>
                <ul>
                    <a href=""><li>Help Center</li></a>
                    <a href=""><li>partners</li></a>
                    <a href=""><li>Suggestions</li></a>
                    <a href=""><li>Blog</li></a>
                    <a href=""><li>Newsletter</li></a>
                </ul>
            </div>
            <div className="partners">
                <h2>Partners</h2>
                <ul>
                    <a href=""><li>Our Partner</li></a>
                    <a href=""><li>Become a Partner</li></a>
                </ul>
            </div>
        </div>
        <div className="footer">
            <h2>2024 HooBank. All Rights Reserved.</h2>
        </div>
    </div>
  )
}

export default Section