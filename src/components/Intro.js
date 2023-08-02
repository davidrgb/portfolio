import './Intro.css';

export default function Intro({ hideIntro }) {
    return (
        <div className="intro">
            <h1 className="fade first-fade">Hello!</h1>
            <div className="second-group">
                <h2 className="fade second-fade">My name is David Russell</h2>
                <h2 className="fade third-fade">I'm a software developer</h2>
            </div>
            <h3 className="fade fourth-fade">Front-end, back-end</h3>
            <h3 className="fade fifth-fade">Mobile, desktop, and web.</h3>
        </div>
    );
}