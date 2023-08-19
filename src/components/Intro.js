import { useEffect, useRef } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PhoneIcon from '@mui/icons-material/Phone';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Resume from '../documents/Resume-David-Russell.pdf';

import './Intro.css';

export default function Intro({ animationComplete, setAnimationComplete, setIndex }) {
    const classAddTimeout = useRef(null);
    const completeAnimationTimeout = useRef(null);

    useEffect(() => {
        classAddTimeout.current = setTimeout(() => document.getElementById('skip-button').classList.add('fade-out'), 13000);
        completeAnimationTimeout.current = setTimeout(() => setAnimationComplete(true), 13200);
    }, []);

    return (
        <div className="intro">
            <span className="top-span fade first-fade">
                <h1>Hello!</h1>
                {
                    !animationComplete &&
                    <button id="skip-button" title="Skip Animations" onClick={() => {
                        const fadeElements = document.querySelectorAll('.fade');
                        fadeElements.forEach((element) => {
                            element.style.animationDelay = "0s";
                        });

                        const slideshodwFadeElements = document.querySelectorAll('.slideshow-fade');
                        slideshodwFadeElements.forEach((element) => {
                            element.style.animationDelay = "0s";
                        });

                        const sliderWrapperFadeElements = document.querySelectorAll('.slider-wrapper-fade');
                        sliderWrapperFadeElements.forEach((element) => {
                            element.style.animationDelay = "0s";
                        });

                        const slideshowButtonsFadeElements = document.querySelectorAll('.slideshow-buttons-fade');
                        slideshowButtonsFadeElements.forEach((element) => {
                            element.style.animationDelay = "0s";
                        });

                        const projectContentFadeElements = document.querySelectorAll('.project-content-fade');
                        projectContentFadeElements.forEach((element) => {
                            element.style.animationDelay = "0s";
                        });

                        document.getElementById('skip-button').classList.add('fade-out')
                        setTimeout(() => setAnimationComplete(true), 200);
                        clearTimeout(classAddTimeout.current);
                        clearTimeout(completeAnimationTimeout.current);
                        setIndex(0);
                    }}>
                        <SkipNextIcon fontSize="inherit" />
                    </button>
                }
            </span>
            <div className="second-group">
                <h2 className="fade second-fade">My name is David Russell</h2>
                <h2 className="fade third-fade">I'm a software developer</h2>
            </div>
            <div className="third-group">
                <h3 className="fade fourth-fade">Front-end, back-end</h3>
                <h3 className="fade fifth-fade">Mobile, desktop, and web.</h3>
            </div>
            <div className="contact fade sixth-fade">
                <a href="tel: 580-301-0080" title="Call Me"><PhoneIcon fontSize="inherit" /></a>
                <a href="mailto: davidrussellrgb@gmail.com" title="Email Me"><EmailIcon fontSize="inherit" /></a>
                <a href={Resume} target="_blank" title="Open Resume"><FilePresentIcon fontSize="inherit" /></a>
            </div>
        </div>
    );
}