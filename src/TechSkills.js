import React, {Component} from 'react';
import './TechSkills.css'
class TechSkills extends Component {
    render() {
        return(
                <div className="techskills">
                    <h3>TECH SKILLS</h3>
                    <h2>What I Can Do</h2>
                    <div className='row'>
                        <div>
                            <span>
                                <ion-icon name="logo-html5"></ion-icon>
                            </span>
                            <h4>HTML</h4>
                            <p></p>
                        </div>
                        <div>
                            <span>
                                <ion-icon name="logo-css3"></ion-icon>
                            </span>
                            <h4>CSS3</h4>
                            <p></p>
                        </div>
                        <div>
                            <span>
                                <ion-icon name="logo-javascript"></ion-icon>
                            </span>
                            <h4>JavaScript</h4>
                            <p></p>
                        </div>
                        <div>
                            <span>
                                <ion-icon name="logo-react"></ion-icon>
                            </span>
                            <h4>React</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default TechSkills;