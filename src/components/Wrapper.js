import { useEffect, useRef, useState } from 'react';

import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';

import Intro from './Intro';
import Project from './Project';

import './Wrapper.css';

export default function Wrapper() {
    return (
        <div className="outer-wrapper">
            <div className="inner-wrapper">
                <Intro />
                <Slideshow projects={
                    [
                        <Project
                            preview={require('../images/cards.png')}
                            title="Cards"
                            description="A website for outlining and organization (demonstration build)"
                            link="https://cards.amphi.online"
                            github="https://github.com/davidrgb/Cards_Node"
                            icons=
                            {
                                [
                                    <span title="HTML"><HtmlIcon fontSize="inherit" /></span>,
                                    <span title="CSS"><CssIcon fontSize="inherit" /></span>,
                                    <span title="JavaScript"><JavascriptIcon fontSize="inherit" /></span>,
                                    <img className="image-icon" src={require('../images/react.png')} title="React" />,
                                    <img className="image-icon" src={require('../images/node.png')} title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/mysql.png')} title="MySQL" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} title="Nginx" />,
                                ]
                            }
                        />,
                        <Project
                            preview={require('../images/questions.png')}
                            title="20/20 Questions"
                            description="A real-time multiplayer spin on 20 Questions"
                            link="https://questions.amphi.online"
                            github="https://github.com/davidrgb/20-20-Questions"
                            icons=
                            {
                                [
                                    <img className="image-icon" src={require('../images/flutter.png')} title="Flutter" />,
                                    <img className="image-icon" src={require('../images/firebase.png')} title="Firebase" />,
                                    <img className="image-icon" src={require('../images/node.png')} title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} title="Nginx" />,
                                ]
                            }
                        />,
                        <Project
                            preview={require('../images/huffman.png')}
                            title="Huffman Compressor"
                            description="A website that compresses text using Huffman compression"
                            link="https://huffman.amphi.online"
                            github="https://github.com/davidrgb/HuffmanCompressor_Node"
                            icons={
                                [
                                    <span title="HTML"><HtmlIcon fontSize="inherit" /></span>,
                                    <span title="CSS"><CssIcon fontSize="inherit" /></span>,
                                    <span title="JavaScript"><JavascriptIcon fontSize="inherit" /></span>,
                                    <img className="image-icon" src={require('../images/node.png')} title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/mysql.png')} title="MySQL" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} title="Nginx" />,
                                ]
                            }
                        />
                    ]
                } />

            </div>
        </div>
    );
}

const delay = 10000;

function Slideshow({ projects }) {
    const [index, setIndex] = useState(projects.length - 1);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setIndex((currentIndex) => currentIndex === projects.length - 1 ? 0 : currentIndex + 1), delay);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slider-wrapper">
                <div className="slideshow-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {projects.map((project, index) => (
                        <div className="project-wrapper" key={index}>{project}</div>
                    ))}
                </div>
            </div>

            <div className="slideshow-buttons">
                {projects.map((p, i) => (
                    <div key={i} className={`slideshow-button${index === i ? ' active' : ''}`} onClick={() => { setIndex(i) }}></div>
                ))}
            </div>
        </div>
    );
}