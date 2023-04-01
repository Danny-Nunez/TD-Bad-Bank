import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer">
        <p className="footerTitle">Need to talk to us directly?<span className="footerContact"> Contact us</span> </p>

    <span className="footerSocial">Follow TD Bank</span>
    <div>
        <p className="socialButton">
            <SocialIcon url="https://twitter.com/DannyFullstack" bgColor="#fff" fgColor="#015215" className="socialIcon" style={{ height: 42, width: 42 }}/>
            <SocialIcon url="https://m.facebook.com/groups/mitxprodatascience/" bgColor="#fff" fgColor="#015215" className="socialIcon" style={{ height: 42, width: 42 }}/>
            <SocialIcon url="https://www.youtube.com/@mitxpro1892" bgColor="#fff" fgColor="#015215" className="socialIcon" style={{ height: 42, width: 42 }}/>
            <SocialIcon url="https://www.linkedin.com/in/danny-nunez-a7886b209" bgColor="#fff" fgColor="#015215" className="socialIcon" style={{ height: 42, width: 42 }}/>
            <SocialIcon url="https://github.com/Danny-Nunez" bgColor="#fff" fgColor="#015215" className="socialIcon" style={{ height: 42, width: 42 }}/>
            </p>
        </div>
    </div>
  )
}

export default Footer