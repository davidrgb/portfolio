import GitHubIcon from '@mui/icons-material/GitHub';

import './Project.css';

export default function Project({ preview, title, description, link, github, icons }) {
    return (
        <div className="project">
            <a href={link}><img className="project-content preview" src={preview} alt="Project Preview"></img></a>
            <div className="project-content info">
                <a style={{order: '-1'}} href={link}><div className="project-content title">{title}</div></a>
                <div className="project-content description">{description}</div>
            </div>
            <div className="project-content tech">
                {icons.length > 0 ?
                    icons.map((icon) => {
                        return icon;
                    }) :
                    <></>
                }
                {github !== '' ? <a href={github}><button title="GitHub"><GitHubIcon fontSize="inherit" /></button></a> : <span title="GitHub (Private Repo)"><GitHubIcon fontSize="inherit" /></span>}
            </div>
        </div>
    )
}