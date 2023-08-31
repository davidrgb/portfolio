import GitHubIcon from '@mui/icons-material/GitHub';

import './Project.css';

export default function Project({ preview, title, description, link, github, icons }) {
    return (
        <div className="project">
            <a href={link} target="_blank"><img className="project-content project-content-fade preview" alt="Project Preview" src={preview}></img></a>
            <div className="project-content project-content-fade info">
                <a style={{ order: '-1' }} href={link} target="_blank"><div className="project-content project-content-fade title">{title}</div></a>
                <div className="project-content project-content-fade description">{description}</div>
            </div>
            <div className="project-content project-content-fade tech">
                {icons.length > 0 ?
                    icons.map((icon) => {
                        return icon;
                    }) :
                    <></>
                }
                {
                    github !== '' ?
                        <a href={github} target="_blank"><button title="GitHub"><GitHubIcon fontSize="inherit" /></button></a> :
                        <span style={{ alignItems: 'center', display: 'inline-flex', justifyContent: 'center' }} title="GitHub (Private Repo)">
                            <GitHubIcon fontSize="inherit" />
                        </span>
                }
            </div>
        </div>
    )
}