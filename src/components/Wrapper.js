import Intro from './Intro';

import './Wrapper.css';

export default function Wrapper() {
    return (
        <div className="outer-wrapper">
            <div className="inner-wrapper">
                <Intro />
            </div>
        </div>
    );
}