import React, {Component} from 'react';
import './TechSkills.css'
class TechSkills extends Component {
    render() {
        return(
                <div className="techskills">
                    <h3>TECH SKILLS</h3>
                    <h2>What I Can Do</h2>
                    <div className='row'>
                        <>
                            <Icons myicon={iconObj[0].icon} mytitle={iconObj[0].title}/>
                            <Icons myicon={iconObj[1].icon} mytitle={iconObj[1].title}/>
                            <Icons myicon={iconObj[2].icon} mytitle={iconObj[2].title}/>
                            <Icons myicon={iconObj[3].icon} mytitle={iconObj[3].title}/>
                        </>
                    </div>
                </div>
        );
    }
}

const iconObj = [
    {
        icon: <ion-icon name="logo-html5"></ion-icon>,
        title: 'HTML5'
    },

    {
        icon:  <ion-icon name="logo-css3"></ion-icon>,
        title: 'CSS3'
    },

    {
        icon: <ion-icon name="logo-javascript"></ion-icon>,
        title: 'JavaScript'
    },

    {
        icon: <ion-icon name="logo-react"></ion-icon>,
        title: 'react'

    },
]

class Icons extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.myicon}
                </span>
                <h4>{this.props.mytitle}</h4>
            </div>
        );
    }
}

export default TechSkills;