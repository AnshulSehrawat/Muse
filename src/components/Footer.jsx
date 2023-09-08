import React from 'react'
import './Styles/footer.css';
import yticon from '../Assets/images/yticon.png';
import twicon from '../Assets/images/twicon.png';
import igicon from '../Assets/images/igicon.png';
import fbicon from '../Assets/images/fbicon.png';

function Footer(): React.JSX.Element {
  return (
    <>
    <div className = "footer">
        <div className = "footer-links">
            <div className = "find links-section">
                <div className ="link-title location-container">
                    <h2>Find a Store</h2>
                    <div className ="location-search-container">
                        <input type="text" placeholder="Location"></input>
                        <a href="">
                            <button className ="location-search-button">Search</button>
                        </a>
                    </div>
                    <a href="" className = "links-in-footer">See a location</a>
                </div>
            </div>
            <div className = "support links-section">
                <div className ="link-title">
                    <h2>Support</h2>
                    <ul>
                    <li><a href="" className ="links-in-footer">Online Help</a></li>
                    <li><a href="" className ="links-in-footer">Track Repair status</a></li>
                    <li><a href="" className ="links-in-footer">Locate Serivce center</a></li>    
                    </ul>
                </div>
            </div>
            <div className = "In-the-news links-section">
                <div className ="link-title">
                    <h2>In the news</h2>
                    <ul>
                        <li><a href="" className ="links-in-footer">Press center</a></li>
                     </ul>
                </div>
            </div>
            <div className = "Contact-us links-section">
                <div className ="link-title">
                    <h2>Contact us</h2>
                    <ul>
                        <li><a href="" className ="links-in-footer">Newsletter Subscriptions</a></li>
                        <li><a href="./Contacts" className ="links-in-footer">Contact Us</a></li>
                     </ul>
                </div>
            </div>
        </div>
        <div className = "footer-mid-section">
            <div className = "country-tag-container">
                <a href="">
                    <button className = "country-tag-button">India</button>
                </a>
            </div>
            <div className = "media-handles">
                <div className ="media-links">
                    <div className ="media-link-container"><a href="" className ="other-links">Company Info</a></div>
                    <div className ="media-link-container"><a href="" className ="other-links">E-Waste Management</a></div>
                    <div className ="media-link-container"><a href="" className ="other-links">Corporate Social Responsibilities</a></div>
                    <div className ="media-link-container"><a href="" className ="other-links">careers</a></div>
                    <div className ="media-link-container"><a href="" className ="other-links">Professional Products & Solutions</a></div>
                    <div className ="media-link-container"><a href="" className ="other-links">Site map</a></div>
                </div>
                <div className = "media-icons">
                    <div className ="media-icon-container">
                    <a href=""><img src={twicon} alt="" className ="media-icon"></img></a>
                    </div>
                    <div className ="media-icon-container"><a href=""><img src={yticon} alt="" className ="media-icon"></img></a></div>
                    <div className ="media-icon-container"><a href=""><img src={fbicon} alt="" className ="media-icon"></img></a></div>
                    <div className ="media-icon-container"><a href=""><img src={igicon} alt="" className ="media-icon"></img></a></div>
                </div>
            </div>
        </div>
        <div className = "copyrights">
            <div className ="copyrights-container">
                <div className = "copyrights-box">
                    <div className ="upper-box">
                        <div className ="terms">
                            <a href="" className = "copyright-text">TERMS AND CONDITIONS OF WEBSITE USE</a>
                        </div>
                        <div className ="privacy-policy">
                            <a href="" className = "copyright-text">PRIVACY POLICY</a>
                        </div>
                    </div>
                    <div className ="lower-box">
                        <a href="">
                            Copyright 2023 Muse India. All rights reserved
                        </a>
                    </div>
                </div>
                <div className = "portal-button-container">
                    <a href="">
                        <button className ="portal-button">
                            Muse Group portal
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
