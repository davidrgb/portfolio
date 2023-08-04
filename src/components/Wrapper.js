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
                                    <img className="image-icon" src={require('../images/react.png')} alt="React Icon" title="React" />,
                                    <img className="image-icon" src={require('../images/node.png')} alt="Node.js Icon" title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} alt="Ubuntu Icon" title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/mysql.png')} alt="MySQL Icon" title="MySQL" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} alt="Nginx Icon" title="Nginx" />,
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
                                    <img className="image-icon" src={require('../images/flutter.png')} alt="Flutter Icon" title="Flutter" />,
                                    <img className="image-icon" src={require('../images/firebase.png')} alt="Firebase Icon" title="Firebase" />,
                                    <img className="image-icon" src={require('../images/node.png')} alt="Node.js Icon" title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} alt="Ubuntu Icon" title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} alt="Nginx Icon" title="Nginx" />,
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
                                    <img className="image-icon" src={require('../images/node.png')} alt="Node.js Icon" title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} alt="Ubuntu Icon" title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/mysql.png')} alt="MySQL Icon" title="MySQL" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} alt="Nginx Icon" title="Nginx" />,
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
                                    <img className="image-icon" src={require('../images/flutter.png')} alt="Flutter Icon" title="Flutter" />,
                                    <img className="image-icon" src={require('../images/firebase.png')} alt="Firebase Icon" title="Firebase" />,
                                    <img className="image-icon" src={require('../images/node.png')} alt="Node.js Icon" title="Node.js" />,
                                    <img className="image-icon" src={require('../images/ubuntu.png')} alt="Ubuntu Icon" title="Ubuntu" />,
                                    <img className="image-icon" src={require('../images/nginx.png')} alt="Nginx Icon" title="Nginx" />,
                                ]
                            }
                        />,
                        <Project
                            preview={require('../images/trivia_app_web.png')}
                            title="Trivia App Admin Portal"
                            description="An admin portal for managing a trivia app"
                            link="https://drussell22-trivia-app.web.app/"
                            github="https://github.com/davidrgb/TriviaAppWeb"
                            icons={
                                [
                                    <span title="HTML"><HtmlIcon fontSize="inherit" /></span>,
                                    <span title="CSS"><CssIcon fontSize="inherit" /></span>,
                                    <span title="JavaScript"><JavascriptIcon fontSize="inherit" /></span>,
                                    <img className="image-icon" src={require('../images/firebase.png')} alt="Firebase Icon" title="Firebase" />,
                                    <img className="image-icon" src={require('../images/node.png')} alt="Node.js Icon" title="Node.js" />,
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
                                    <img className="image-icon" src={require('../images/flutter.png')} alt="Flutter Icon" title="Flutter" />,
                                    <img className="image-icon" src={require('../images/firebase.png')} alt="Firebase Icon" title="Firebase" />,
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
                                    <img className="image-icon" src={require('../images/java.png')} alt="Java Icon" title="Java" />,
                                ]
                            }
                        />,
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