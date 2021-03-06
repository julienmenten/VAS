import React from 'react';  
import './landing.scss';
import {Link} from 'react-scroll';
import backdrop from '../../assets/video/HEADPAGE.mp4';
import whiteLogo from '../../assets/logo/VAS-ICON_WHITE.svg';
import landingPoster from '../../assets/stills/Landing_still.jpg'
import AutoPlayVideo from '../../components/autoplayVideo';

function Landing() {
    setTimeout(document.body.style.setProperty('--scroll',   (window.pageYOffset / window.innerHeight)));
    
    window.addEventListener('scroll', () => {
        setTimeout(document.body.style.setProperty('--scroll',   (window.pageYOffset / window.innerHeight)));
      }, false);

      
    return (
      <section id="home_landing" className="home_section">  
        <div className="backgroundVideo">
            <AutoPlayVideo 
                id='backgroundVideo'
                mp4={backdrop}
                poster={landingPoster}/>
        </div>
        <div className="landingContent">
            <div className="landing_centerLogo"
            data-aos="zoom-in"
            data-aos-once="zoom-in" >
             <img src={whiteLogo} alt="VAS logo in White" 
                className="animate__backOutUp"
                />
            </div>
            <div className="nextSectionBtn">
                <Link to="home_about" smooth="true"> 
                    <p>meet the creative</p>
                    <div className="nextSectionBtnWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.485" height="18.207" viewBox="0 0 29.485 18.207">
                            <path id="Icon_material-expand-more" data-name="Icon material-expand-more" d="M35.021,12.885,23.742,24.138,12.464,12.885,9,16.349,23.742,31.092,38.485,16.349Z" transform="translate(-9 -12.885)" fill="#fff"/>
                        </svg>
                    </div>
                </Link>
                   
            </div>
        </div>
      </section>
    );
  }
  
  export default Landing;
  