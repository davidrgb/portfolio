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
                            description="A website for outlining and organization (development build)"
                            link="https://cards.amphi.online"
                            github="https://github.com/davidrgb/Cards_Node"
                            icons=
                            {
                                [
                                    <HtmlIcon fontSize="inherit" />,
                                    <CssIcon fontSize="inherit" />,
                                    <JavascriptIcon fontSize="inherit" />,
                                    <img className="image-icon" src={require('../images/react.png')} />,
                                    <img className="image-icon" src={require('../images/node.png')} />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} />,
                                    <img className="image-icon" src={require('../images/mysql.png')} />,
                                    <img className="image-icon" src={require('../images/nginx.png')} />,
                                ]
                            }
                        />,
                        <Project
                            preview={require('../images/huffman.png')}
                            title="Huffman Compressor"
                            description="A website that compresses text using Huffman compression, built with vanilla JavaScript and CSS."
                            link="https://huffman.amphi.online"
                            github="https://github.com/davidrgb/HuffmanCompressor_Node"
                            icons={
                                [
                                    <HtmlIcon fontSize="inherit" />,
                                    <CssIcon fontSize="inherit" />,
                                    <JavascriptIcon fontSize="inherit" />,
                                    <img className="image-icon" src={require('../images/node.png')} />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} />,
                                    <img className="image-icon" src={require('../images/mysql.png')} />,
                                    <img className="image-icon" src={require('../images/nginx.png')} />,
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
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {projects.map((project, index) => (
                    <div className="project-wrapper" key={index}>{project}</div>
                ))}
            </div>

            <div className="slideshow-buttons">
                {projects.map((p, i) => (
                    <div key={i} className={`slideshow-button${index === i ? ' active' : ''}`} onClick={() => { setIndex(i) }}></div>
                ))}
            </div>
        </div>
    );
}