import { useEffect, useRef, useState } from 'react';

import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';

import Intro from './Intro';
import Project from './Project';

import './Wrapper.css';

export default function Wrapper() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const projects =
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
                preview={require('../images/memorize.png')}
                title="Memorize"
                description="A website to help you dedicate anything to memory"
                link="https://memorize.amphi.online"
                github="https://github.com/davidrgb/Memorize"
                icons=
                {
                    [
                        <span title="HTML"><HtmlIcon fontSize="inherit" /></span>,
                        <span title="CSS"><CssIcon fontSize="inherit" /></span>,
                        <span title="JavaScript"><JavascriptIcon fontSize="inherit" /></span>,
                        <img className="image-icon" src={require('../images/react.png')} title="React" />,
                        <img className="image-icon" src={require('../images/node.png')} title="Node.js" />,
                        <img className="image-icon" src={require('../images/ubuntu.png')} title="Ubuntu" />,
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
            />,
            <Project
                preview={require('../images/trivia_app_mobile.png')}
                title="Trivia App"
                description="A real-time multiplayer mobile trivia app"
                link="https://trivia.amphi.online"
                github="https://github.com/davidrgb/TriviaAppMobile"
                icons={
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
                preview={require('../images/trivia_app_web.png')}
                title="Trivia App Admin Portal"
                description="An admin portal for managing a trivia app"
                link="https://admin.amphi.online"
                github="https://github.com/davidrgb/TriviaAppWeb"
                icons={
                    [
                        <span title="HTML"><HtmlIcon fontSize="inherit" /></span>,
                        <span title="CSS"><CssIcon fontSize="inherit" /></span>,
                        <span title="JavaScript"><JavascriptIcon fontSize="inherit" /></span>,
                        <img className="image-icon" src={require('../images/firebase.png')} title="Firebase" />,
                        <img className="image-icon" src={require('../images/node.png')} title="Node.js" />,
                    ]
                }
            />,
            <Project
                preview={require('../images/floricapture.png')}
                title="Floricapture"
                description="A floriculture planning app, built as a member of a remote team for a capstone project"
                link="https://www.youtube.com/watch?v=Yhtnq9NQoW4&ab_channel=DavidRussell"
                github=""
                icons={
                    [
                        <img className="image-icon" src={require('../images/flutter.png')} title="Flutter" />,
                        <img className="image-icon" src={require('../images/firebase.png')} title="Firebase" />,
                    ]
                }
            />,
            <Project
                preview={require('../images/tictactoe.png')}
                title="Online Tic-Tac-Toe"
                description="A peer-to-peer Tic-Tac-Toe desktop app, built as a member of a remote team for a course project"
                link="https://www.youtube.com/watch?v=W3J1Wh1YZ9M&ab_channel=DavidRussell"
                github=""
                icons={
                    [
                        <img className="image-icon" src={require('../images/java.png')} title="Java" />,
                    ]
                }
            />,
        ];
    const [index, setIndex] = useState(projects.length - 1);

    return (
        <div className="outer-wrapper">
            <div className="inner-wrapper">
                <Intro animationComplete={animationComplete} setAnimationComplete={setAnimationComplete} setIndex={setIndex} />
                <Slideshow projects={projects} index={index} setIndex={setIndex} />
            </div>
        </div>
    );
}

const delay = 10000;

function Slideshow({ projects, index, setIndex }) {
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
        <div className="slideshow slideshow-fade">
            <div className="slider-wrapper slider-wrapper-fade">
                <div className="slideshow-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {projects.map((project, index) => (
                        <div className="project-wrapper" key={index}>{project}</div>
                    ))}
                </div>
            </div>

            <div className="slideshow-buttons slideshow-buttons-fade">
                {projects.map((p, i) => (
                    <div key={i} className={`slideshow-button${index === i ? ' active' : ''}`} onClick={() => setIndex(i)}></div>
                ))}
            </div>
        </div>
    );
}