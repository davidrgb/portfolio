import EmailIcon from '@mui/icons-material/Email';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PhoneIcon from '@mui/icons-material/Phone';

import Resume from '../documents/Resume-David-Russell.pdf';

import './Intro.css';

export default function Intro({ hideIntro }) {
    return (
        <div className="intro">
            <h1 className="fade first-fade">Hello!</h1>
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